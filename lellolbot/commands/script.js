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
        name: "+ping",
        description: "Joa halt Ping Command.",
        category: "Jeder",
    },   
    {
        name: "+commands",
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
        description: "Füllt deine Nachricht.",
        category: "Jeder",
    },
    {
        name: "+chatoverlay [username]",
        description: "Macht dir ein OBS Overlay.",
        category: "Jeder",
    },
    {
        name: "+spam [anzahl] [nachricht]",
        description: "Spammt deine Nachricht.",
        category: "Moderator",
    },
    {
        name: "+ffzsa",
        description: "Schaut ob du ffz Sub bist.",
        category: "Jeder",
    },
        {
        name: "+7tvsa",
        description: "Schaut ob du ffz Sub bist.",
        category: "Jeder",
    },
    {
        name: "+viewers",
        description: "Schickt deine Avrg Viewer und Max Viewer rein.",
        category: "Jeder",
    },
    {
        name: "+followers [username]",
        description: "Follower anzahl.",
        category: "Jeder",
    },
    {
        name: "+accountage [username]",
        description: "Follower anzahl.",
        category: "Jeder",
    },
    {
        name: "+cat",
        description: "Random Katze.",
        category: "Jeder",
    },
    {
        name: "+dog",
        description: "Random Hund.",
        category: "Jeder",
    },
    {
        name: "+chatters",
        description: "Anzahl der Chatter in deinem Chat.",
        category: "Jeder",
    },
    {
        name: "+checkstreak",
        description: "Wie lange deine Streak schon geht.",
        category: "Jeder",
    },
    {
        name: "+clip",
        description: "Clippt die letzten 30 Sekunden",
        category: "Jeder",
    },
    {
        name: "+copypasta",
        description: "Random Nachricht.",
        category: "Jeder",
    },
    {
        name: "+followage | +followage [username]",
        description: "Wie lang du Folgst.",
        category: "Jeder",
    },
    {
        name: "+glitch [nachricht]",
        description: "Glitch deine Nachricht.",
        category: "Jeder",
    },
    {
        name: "+gomme",
        description: "Gomme R/Place map.",
        category: "Jeder",
    },
    {
        name: "+suggest [nachricht]",
        description: "Requeste was für den Bot.",
        category: "Jeder",
    },
    {
        name: "+isbanned",
        description: "Guckt ob der User banned ist von Twitch.",
        category: "Jeder",
    },
    {
        name: "+islive",
        description: "Guckt ob der User live ist.",
        category: "Jeder",
    },
    {
        name: "+subage | +subage [username]",
        description: "Wie lang du Sub bist.",
        category: "Jeder",
    },
    {
        name: "+streak",
        description: "TwitchTracker Streak link.",
        category: "Jeder",
    },
    {
        name: "+checkstreak",
        description: "Wie lang deine Daily Streak geht.",
        category: "Jeder",
    },
    {
        name: "+stats",
        description: "Stats für Döner.",
        category: "Jeder",
    },
    {
        name: "+döner",
        description: "Deine Daily Döner sammeln.",
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
        {
        name: "+adminjoin",
        description: "Add den bot bei ein Channel.",
        category: "Owner",
    },
    {
        name: "+adminpart",
        description: "Leavt ein Channel.",
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
