window.onload = function () {
    fetchChannels();
};

function fetchChannels() {
    const channelSelect = document.getElementById("channelSelect");
    showLoading(true);

    fetch("https://logs.susgee.dev/channels")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            data.channels.forEach(channel => {
                const option = document.createElement("option");
                option.value = channel.name;
                option.textContent = channel.name;
                channelSelect.appendChild(option);
            });

            showLoading(false);
        })
        .catch(error => {
            console.error("Error fetching channels:", error);
            alert("Error ");
            showLoading(false);
        });
}

function fetchTopChatters() {
    const channelName = document.getElementById("channelSelect").value;
    const dateInput = document.getElementById("date").value;
    const timeRange = document.getElementById("timeRange").value;

    if (!channelName) {
        alert("choose a channel");
        return;
    }

    let dateList = [];

    if (dateInput) {
        const date = new Date(dateInput);
        dateList = [formatDate(date)];
    } else if (timeRange === "1d") {
        const now = new Date();
        dateList = [formatDate(now)];
    } else if (timeRange === "7d") {
        const now = new Date();
        for (let i = 0; i < 7; i++) {
            const pastDate = new Date();
            pastDate.setDate(now.getDate() - i);
            dateList.push(formatDate(pastDate));
        }
    } else if (timeRange === "30d") {
        const now = new Date();
        for (let i = 0; i < 30; i++) {
            const pastDate = new Date();
            pastDate.setDate(now.getDate() - i);
            dateList.push(formatDate(pastDate));
        }
    }

    const dailyChatterCounts = {};

    showLoading(true);

    dateList.forEach(dateStr => {
        const [year, month, day] = dateStr.split("-");
        const url = `https://logs.susgee.dev/channel/${channelName}/${year}/${month}/${day}`;
        console.log(`Fetching logs from: ${url}`);

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(logs => {
                processLogs(logs, dailyChatterCounts, dateStr);
            })
            .catch(error => {
                console.error(`Error fetching logs for ${year}-${month}-${day}:`, error);
                const tbody = document.getElementById("chatterTableBody");
                tbody.innerHTML = `
                    <tr>
                        <td colspan="3" style="text-align: center;">Keine Chat-Daten für ${dateStr} verfügbar.</td>
                    </tr>
                `;
            });
    });
}

function processLogs(logs, dailyChatterCounts, dateStr) {
    const chatterCounts = {};

    logs.split("\n").forEach(line => {
        const match = line.match(/^\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\] #\w+ (\w+):/);
        if (match) {
            const username = match[1];
            chatterCounts[username] = (chatterCounts[username] || 0) + 1;
        }
    });

    if (Object.keys(chatterCounts).length > 0) {
        dailyChatterCounts[dateStr] = chatterCounts;
    }

    displayTopChatters(dailyChatterCounts);
}

function displayTopChatters(dailyChatterCounts) {
    const tbody = document.getElementById("chatterTableBody");
    const aggregatedCounts = {};

    Object.values(dailyChatterCounts).forEach(dailyChatter => {
        Object.entries(dailyChatter).forEach(([username, count]) => {
            aggregatedCounts[username] = (aggregatedCounts[username] || 0) + count;
        });
    });

    if (Object.keys(aggregatedCounts).length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="3" style="text-align: center;">Keine Chat-Daten für den ausgewählten Zeitraum verfügbar.</td>
            </tr>
        `;
        showLoading(false);
        return;
    }

    const sortedChatters = Object.entries(aggregatedCounts)
        .sort(([, countA], [, countB]) => countB - countA);

    tbody.innerHTML = sortedChatters
        .map(([username, count], index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${username}</td>
                <td>${count}</td>
            </tr>
        `)
        .join("");

    showLoading(false);
}

function showLoading(show) {
    const loadingOverlay = document.getElementById("loadingOverlay");

    if (show) {
        loadingOverlay.style.display = "flex"; 
    } else {
        loadingOverlay.style.display = "none";
    }
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}
