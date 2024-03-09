// script.js

const commands = [
    {
        name: "+join",
        description: "Joint dein Channel.",
        category: "Jeder",
    },
    {
        name: "+part",
        description: "Partet dein Channel.",
        category: "Jeder",
    },    
    {
        name: "+ping | +uptime",
        description: "Joa halt Ping Command.",
        category: "Jeder",
    },   
    {
        name: "+version",
        description: "Die aktuelle Version vom Bot.",
        category: "Jeder",
    }, 
    {
        name: "+help | +commands",
        description: "Diese Website.",
        category: "Jeder",
    },    
    {
        name: "+test",
        description: "Testet den Bot.",
        category: "Jeder",
    },    
    {
        name: "+clip",
        description: "Clippt die Letzten 30 Sekunden",
        category: "Jeder",
    },    
    {
        name: "+follows [username]",
        description: "Schaue nach wem jemand folgt.",
        category: "Jeder",
    },    
    {
        name: "+mods [username]",
        description: "Liste von allen mods im channel.",
        category: "Jeder",
    },    

    {
        name: "+vips [username]",
        description: "Liste von allen mods im channel.",
        category: "Jeder",
    },
    {
        name: "+founders [username]",
        description: "Liste von allen founders im channel.",
        category: "Jeder",
    },
    {
        name: "+fill [nachricht]",
        description: "Alle channel in dem der Bot aktiv ist.",
        category: "Jeder",
    },
    {
        name: "+chatoverlay [username]",
        description: "Macht dir ein OBS Overlay.",
        category: "Jeder",
    },
    {
        name: "+stalk [username]",
        description: "Stalkt ein User.",
        category: "Jeder",
    },
    {
        name: "+spam [anzahl] [nachricht]",
        description: "Spammt deine Nachricht.",
        category: "Moderator",
    },
    {
        name: "+channelid",
        description: "Deine Twitch ID.",
        category: "Jeder",
    },
    {
        name: "+hug",
        description: "Huggt ein random User im Channel.",
        category: "Jeder",
    },
    {
        name: "+love",
        description: "Liebt ein random User im Channel.",
        category: "Jeder",
    },
    {
        name: "+time",
        description: "Die Uhrzeit.",
        category: "Moderator",
    },
    {
        name: "+ffzsa",
        description: "Schaut ob du ffz Sub bist.",
        category: "Jeder",
    },
    {
        name: "+viewers",
        description: "Schickt deine Avrg Viewer und Max Viewer rein.",
        category: "Jeder",
    },
    {
        name: "+followers",
        description: "Deine Follower anzahl.",
        category: "Jeder",
    },
    {
        name: "+suggest",
        description: "Du suggestest was für den Bot.",
        category: "Jeder",
    },
    {
        name: "+glitch",
        description: "Glitch deine Nachricht.",
        category: "Jeder",
    },
    {
        name: "+döner",
        description: "Deine Daily Döner sammeln.",
        category: "Jeder",
    },
    {
        name: "+gamba",
        description: "Du gambast Döner Haram.",
        category: "Jeder",
    },
    {
        name: "+give",
        description: "Du gibst jemanden Döner.",
        category: "Jeder",
    },
    {
        name: "+gamba",
        description: "Du gambast Döner Haram.",
        category: "Jeder",
    },
    {
        name: "+give",
        description: "Du gibst jemanden Döner.",
        category: "Jeder",
    },
    {
        name: "+restart",
        description: "Restartet den Bot.",
        category: "Owner",
    },
    {
        name: "+stop",
        description: "Stoppt den Bot.",
        category: "Owner",
    },
];


const commandList = document.getElementById("commands");
const searchInput = document.getElementById("search-input");

function renderCommands(filteredCommands) {
    commandList.innerHTML = "";
    if (!filteredCommands || filteredCommands.length === 0) {
        commandList.innerHTML = "<p>No results found.</p>";
    } else {
        filteredCommands.forEach((command) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<h3>${command.name}</h3><p>${command.description}</p>`;
            if (command.category) {
                const categorySpan = document.createElement("span");
                categorySpan.classList.add("category");
                categorySpan.textContent = `${command.category}`;
                listItem.appendChild(categorySpan);
            }
            commandList.appendChild(listItem);
        });
    }
}

renderCommands(commands); // Initial render without filtering

searchInput.addEventListener("keyup", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredCommands = commands.filter((command) =>
        command.name.toLowerCase().includes(searchTerm) ||
        command.description.toLowerCase().includes(searchTerm)
    );
    renderCommands(filteredCommands);
});
