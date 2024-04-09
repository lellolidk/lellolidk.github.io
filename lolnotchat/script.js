var emote_links = {};
var customBadges = {};
var OwnerBadge = 'https://lellolidk.de/img/lolnotChat.png'; // ok
var userIdsWithOwnerBadge = ['636823070', '896702538']; // Userids mit Owner badge
var DankChatBadge = 'https://flxrs.com/dankchat/badges/dank.png'; // Chatterino Badge URL
var userIdsWithDankBadge = []; // Userids mit Chatterino badge
var FFZBadge = 'https://cdn.frankerfacez.com/badge/3/4'; // Chatterino Badge URL
var userIdsWithFFZBadge = []; // Userids mit Chatterino badge
var userIdsWithChatterinoBadge = []; // Userids mit Chatterino badge (initial leer)
var sevenTVBadge = 'https://cdn.7tv.app/badge/62f97c05e46eb00e438a696a/3x';
var ChatterinoBadge = 'https://fourtf.com/chatterino/badges/supporter3x.png';
var FreeBadge = ''; // FreeBadgeURL
var userIdsWithCommonBadge = ['520219697']; // Userids mit free badge
var ignoredUserIds = []; // UserIds die ignoriert werden

async function fetchBadges() {
  try {
    const customResponse = await fetch(`badges.json`);
    customBadges = await customResponse.json();
  } catch (error) {
    console.error(error);
  }
} 

async function loadChatterinoBadges() {
  try {
    const response = await fetch('chatterino_badges.json');
    const data = await response.json();
    userIdsWithChatterinoBadge = data.userIdsWithChatterinoBadge;
  } catch (error) {
    console.error('Fehler beim Laden der Chatterino-Badges:', error);
  }
}

async function loadDankBadges() {
  try {
    const response = await fetch('Dank_badges.json');
    const data = await response.json();
    userIdsWithDankBadge = data.userIdsWithDankBadge;
  } catch (error) {
    console.error('Fehler beim Laden der Chatterino-Badges:', error);
  }
}

async function loadFFZBadges() {
  try {
    const response = await fetch('FFZ_badges.json');
    const data = await response.json();
    userIdsWithFFZBadge = data.userIdsWithFFZBadge;
  } catch (error) {
    console.error('Fehler beim Laden der FFZ-Badges:', error);
  }
}

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function getUserName(message) {
  const parts = message.split('display-name=');
  if (parts.length > 1) {
    return parts[1].split(';')[0].trim();
  }
  return null;
}

function getUsernameColor(message) {
  const parts = message.split(';color=');
  if (parts.length > 1) {
    return parts[1].split(';')[0].trim();
  }
  return null;
}

function getBadgeNames(message) {
  const badgeInfoMatch = message.match(/badges=(.*?);/);

  if (!badgeInfoMatch) {
    return '';
  }

  const badgeDefs = badgeInfoMatch[1].split(",");

  const badges = badgeDefs.map(badgeDef => badgeDef.split("/")[0]);

  const badgeNames = badges.map((badge) => badge.split("/")[0]);
  let imgString = "";

  for (let i = 0; i < badgeNames.length; i++) {
    if (badgeNames[i] in customBadges) {
      imgString += `<img class="badge" src="${customBadges[badgeNames[i]]}">`;
    }
  }

  return imgString;
}

function getMessage(message) {
  return message.split(`PRIVMSG #${channel} :`)[1];
}

function cleanup() {
  document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML.slice(-30000)
}

async function fetch7tvBadge(userId) {
  try {
    const response = await fetch(`https://7tv.io/v3/users/twitch/${userId}`);
    const data = await response.json();
    const sevenTVUserId = data.user.id;
    
    const subscriptionResponse = await fetch(`https://egvault.7tv.io/v1/subscriptions/${sevenTVUserId}`);
    const subscriptionData = await subscriptionResponse.json();
    
    if (subscriptionData.active === true) {
      return sevenTVBadge; // Verwenden Sie die vordefinierte URL für das 7TV-Badge
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function fetch7tv(channel){
  try{
      const response = await fetch(`https://emotes.crippled.dev/v1/channel/${channel}/7tv`);
      const data = await response.json();
      for (let i = 0; i < data.length; i++){
        emote_links[data[i].code] = data[i].urls[1].url
      }
  }
  catch(error){
      console.error(error);
  }
}

function replaceEmotes(message, emoteLinks) {
  let newMessage = "";

  for (const word of message.replace(/^\s+|\s+$/g, '').replace(/<\/?[^>]+(>|$)/g, '').split(" ")) {
    if (emoteLinks.hasOwnProperty(word)) {
      newMessage += `<img class="emote" src="${emoteLinks[word]}">`;
    } else {
      newMessage += word + " ";
    }
  }

  return newMessage.trim();
}

const url = new URL(window.location.href);
const searchParams = url.searchParams;
index = 0

channel = searchParams.get('ch').toLowerCase();
if (size = searchParams.get('si').toLowerCase() == "0"){document.querySelector(':root').style.setProperty('--text-size', '20px');}
if (size = searchParams.get('si').toLowerCase() == "1"){document.querySelector(':root').style.setProperty('--text-size', '40px');}
if (size = searchParams.get('si').toLowerCase() == "2"){document.querySelector(':root').style.setProperty('--text-size', '60px');}
shadow = searchParams.get('sh').toLowerCase();
background = searchParams.get('bg').toLowerCase();
font = searchParams.get('fo').toLowerCase();
if (searchParams.get('an').toLowerCase() == "1"){document.getElementById("chat").style.scrollBehavior = "smooth"}
show_badges = searchParams.get('ba').toLowerCase();
show_special_badges = searchParams.get('sb').toLowerCase();
show_bots = searchParams.get('bo').toLowerCase();
show_commands = searchParams.get('co').toLowerCase();



//link = `https://lellolik.de/lolnotchat?ch=${values['channel']}&si=${values['size']}&sh=${values['shadow']}&bg=${values['background']}&fo=${values['font']}&an=${values['animated']}&ba=${values['badges']}&sb=${values['special_badges']}&bo=${values['bots']}&co=${values['commands']}`;

const socket = new WebSocket("wss://irc-ws.chat.twitch.tv:443");


socket.addEventListener('open', () =>{
  socket.send(`PASS oauth:leckeier`);
  socket.send(`NICK justinfan65345`);
  socket.send(`JOIN #${channel}`);
  socket.send(`CAP REQ :twitch.tv/commands twitch.tv/membership twitch.tv/tags`);
  document.getElementById("chat").innerHTML = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
  fetch7tv(channel);
  fetchChatterinoBadges(); // Füge das Laden der Chatterino-Badges hinzu
})

socket.addEventListener('message', event => {
  if (event.data.includes("PING")) {
    socket.send(`PING`);
  }
  if (event.data.includes("PRIVMSG")) {
    const message = getMessage(event.data);
    const username = getUserName(event.data);
    const badgesInfo = getBadgeNames(event.data);
    const usernameColor = getUsernameColor(event.data);

    const userIdMatch = event.data.match(/user-id=(\d+);/);
    let userId = null;
    if (userIdMatch) {
      userId = userIdMatch[1];
    }

    if (userId && ignoredUserIds.includes(userId)) {
      return;
    }

    let badgesImg = badgesInfo;

    if (userId && userIdsWithOwnerBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${OwnerBadge}">`;
    }

    if (userId && userIdsWithDankBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${DankChatBadge}">`;
    }

    if (userId && userIdsWithFFZBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${FFZBadge}" style="height: 40px; background-color: rgb(117, 80, 0); border-radius: 10%;">`;
    }

    if (userId && userIdsWithChatterinoBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${ChatterinoBadge}" style="height: 40px; border-radius: 10%;">`;
    }
    
    // Hier wird das 7TV-Badge hinzugefügt
    fetch7tvBadge(userId).then(sevenTVBadge => {
      if (sevenTVBadge) {
        badgesImg += `<img class="badge" src="${sevenTVBadge}">`;
      }
    });
          
    const usernameStyle = usernameColor ? `style="color: ${usernameColor};"` : '';
      
    document.getElementById("chat").innerHTML += (
      `<span ${usernameStyle}>${badgesImg} ${username}:</span> <span style="color: white;">${replaceEmotes(message, emote_links)}</span><br>`
    );

    document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
  }
});

setInterval(cleanup, 5000);
fetchBadges();
loadChatterinoBadges();
loadDankBadges();
loadFFZBadges();


