var emote_links = {};
var customBadges = {};
var OwnerBadge = 'https://cdn.7tv.app/emote/6449c3b5d5d04bca06242d39/4x.webp'; // ok
var userIdsWithOwnerBadge = ['636823070']; // Userids mit Owner badge
var ChatterinoBadge = 'https://fourtf.com/chatterino/badges/supporter3x.png'; // Chatterino Badge URL
var userIdsWithChatterinoBadge = ['636823070']; // Userids mit Chatterino badge
var DankChatBadge = 'https://flxrs.com/dankchat/badges/dank.png'; // Chatterino Badge URL
var userIdsWithDankBadge = ['636823070']; // Userids mit Chatterino badge
var FFZBadge = 'https://cdn.frankerfacez.com/badge/3/4'; // Chatterino Badge URL
var FFZBadgeBackgroundColor = '#8B4513'; // Braun
var userIdsWithFFZBadge = ['636823070']; // Userids mit Chatterino badge
var sevenTVBadge = 'https://cdn.7tv.app/badge/62f97c05e46eb00e438a696a/3x'
var FreeBadge = ''; // FreeBadgeURL
var userIdsWithCommonBadge = ['520219697']; // Userids mit free badge
var ignoredUserIds = ['']; // UserIds die ignoriert werden

async function fetchBadges() {
  try {
    const customResponse = await fetch(`badges.json`);
    customBadges = await customResponse.json();
  } catch (error) {
    console.error(error);
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

if (searchParams.has('c')) {
  channel = searchParams.get('c').toLowerCase();
} else {
}

const socket = new WebSocket("wss://irc-ws.chat.twitch.tv:443");

socket.addEventListener('open', () =>{
  socket.send(`PASS oauth:leckeier`);
  socket.send(`NICK justinfan65345`);
  socket.send(`JOIN #${channel}`);
  socket.send(`CAP REQ :twitch.tv/commands twitch.tv/membership twitch.tv/tags`);
  document.getElementById("chat").innerHTML = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
  fetch7tv(channel)
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

    if (userId && userIdsWithChatterinoBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${ChatterinoBadge}">`;
    }

    if (userId && userIdsWithDankBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${DankChatBadge}">`;
    }

    if (userId && userIdsWithFFZBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${FFZBadge}" style="height: 40px; background-color: rgb(117, 80, 0); border-radius: 10%;">`;
    }
    
    // Hier wird das 7TV-Badge hinzugefügt
    fetch7tvBadge(userId).then(sevenTVBadge => {
      if (sevenTVBadge) {
        badgesImg += `<img class="badge" src="${sevenTVBadge}">`;
      }
      
      const usernameStyle = usernameColor ? `style="color: ${usernameColor};"` : '';
      
      document.getElementById("chat").innerHTML += (
        `<span ${usernameStyle}>${badgesImg} ${username}:</span> <span style="color: white;">${replaceEmotes(message, emote_links)}</span><br>`
      );

      document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
    });
  }
});

setInterval(cleanup, 5000);
fetchBadges();
