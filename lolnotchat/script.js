var emote_links = {};
var customBadges = {};
var AdminBadge = 'https://lellolidk.de/img/lolnotAdmin.png';
var ModBadge = 'https://lellolidk.de/img/lolnotMod.png';
var FounderBadge = 'https://lellolidk.de/img/lolnotFounder.png';
//Chatterino
var ChatterinoBadge = 'https://fourtf.com/chatterino/badges/supporter3x.png';
var ChatterinoTopDonaterBadge = 'https://fourtf.com/chatterino/badges/topd3x.png';
var ChatterinoContributerBadge = 'https://fourtf.com/chatterino/badges/helper3x.png';
var ChatterinoDevBadge = 'https://fourtf.com/chatterino/badges/dev3x.png';
var ChatterinoPepeBadge = 'https://fourtf.com/chatterino/badges/pepe3x.png';
//7tv
var sevenTVBadge = 'https://cdn.7tv.app/badge/62f97c05e46eb00e438a696a/3x';
var FFZBadge = 'https://cdn.frankerfacez.com/badge/3/4';
//Homies
var HomiesSubBadge = 'https://itzalex.github.io/badgesusers/supporter2/badge3x.png';
var HomiesModBadge = 'https://itzalex.github.io/badgesusers/mod/badge3x.png';
var HomiesSeniorModBadge = 'https://itzalex.github.io/badgesusers/senior_mod/badge3x.png';
var HomiesSubBadgeOG = 'https://itzalex.github.io/badgesusers/supporter_founder2/badge3x.png';
var HomiesDevBadge = 'https://itzalex.github.io/badgesusers/dev/badge3x.png';
//Dankchat
var DankChatBadge = 'https://flxrs.com/dankchat/badges/dank.png';
var DankChatenteBadge = 'https://flxrs.com/dankchat/badges/ente.gif';
var DankChatBorgirBadge = 'https://flxrs.com/dankchat/badges/borgir.gif';
var DankChatmaxBadge = 'https://flxrs.com/dankchat/badges/max.gif';
var DankChatqaBadge = 'https://flxrs.com/dankchat/badges/qa.png';
var DankChatKKrikeyBadge = 'https://flxrs.com/dankchat/badges/kkrikey.png';
var DankChatDevBadge = 'https://flxrs.com/dankchat/badges/gold.png';
var DankChatContributorBadge = 'https://flxrs.com/dankchat/badges/contributor.png';
//lolnot
var userIdsWithAdminBadge = ['636823070', '896702538'];
var userIdsWithModBadge = ['648984729', '840365435'];
//Homies
var userIdsWithHomiesSubBadge = [];
var userIdsWithHomiesModBadge = [];
var userIdsWithHomiesSeniorModBadge = [];
var userIdsWithHomiesSubOGBadge = [];
var userIdsWithHomiesDevBadge = [];
//Dankchat
var userIdsWithDankBadge = [];
var userIdsWithDankChatenteBadge = [];
var userIdsWithDankChatborgirBadge = [];
var userIdsWithDankChatmaxBadge = [];
var userIdsWithDankChatqaBadge = [];
var userIdsWithDankChatkkrikeyBadge = [];
var userIdsWithDankChatDeveloperBadge = [];
var userIdsWithDankChatcontributorBadge = [];
//Chatterino
var userIdsWithChatterinoBadge = [];
var userIdsWithtopdonaterChatterinoBadge = [];
var userIdsWithChatterinoContibuterBadge = [];
var userIdsWithChatterinoDevBadge = [];
var userIdsWithChatterinopepeBadge = [];
//FFZ
var userIdsWithFFZBadge = [];
var ignoredUserIds = []; 

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
    userIdsWithtopdonaterChatterinoBadge = data.userIdsWithtopdonaterChatterinoBadge;
    userIdsWithChatterinoContibuterBadge = data.userIdsWithChatterinoContibuterBadge;
    userIdsWithChatterinoDevBadge = data.userIdsWithChatterinoDevBadge;
    userIdsWithChatterinopepeBadge = data.userIdsWithChatterinopepeBadge;
  } catch (error) {
    console.error('Fehler beim Laden der Chatterino-Badges:', error);
  }
}


async function loadHomiesSubBadges() {
  try {
    const response = await fetch('HomiesSub_badges.json');
    const data = await response.json();
    userIdsWithHomiesSubBadge = data.userIdsWithHomiesSubBadge;
    userIdsWithHomiesModBadge = data.userIdsWithHomiesModBadge;
    userIdsWithHomiesSeniorModBadge = data.userIdsWithHomiesSeniorModBadge;
    userIdsWithHomiesSubOGBadge = data.userIdsWithHomiesSubOGBadge
    userIdsWithHomiesDevBadge = data.userIdsWithHomiesDevBadge
  } catch (error) {
    console.error('Fehler beim Laden der Homies-Badges:', error);
  }
}

async function loadDankBadges() {
  try {
    const response = await fetch('Dank_badges.json');
    const data = await response.json();
    userIdsWithDankBadge = data.userIdsWithDankBadge;
    userIdsWithDankChatenteBadge = data.userIdsWithDankChatenteBadge;
    userIdsWithDankChatborgirBadge = data.userIdsWithDankChatborgirBadge;
    userIdsWithDankChatmaxBadge = data.userIdsWithDankChatmaxBadge;
    userIdsWithDankChatqaBadge = data.userIdsWithDankChatqaBadge;
    userIdsWithDankChatkkrikeyBadge = data.userIdsWithDankChatkkrikeyBadge
    userIdsWithDankChatDeveloperBadge = data.userIdsWithDankChatDeveloperBadge
    userIdsWithDankChatcontributorBadge = data.userIdsWithDankChatcontributorBadge
  } catch (error) {
    console.error('Fehler beim Laden der Chatterino-Badges:', error);
  }
}

// FFZ Supporter Badge
var FFZSupporterBadge = 'https://cdn.frankerfacez.com/badge/3/1';

// Funktion zum Laden der FFZ-Badges
async function loadFFZBadges() {
  try {
    const response = await fetch('https://api.frankerfacez.com/v1/badges');
    const data = await response.json();
    const ffzBadges = data.badges;
    const ffzSupporterBadge = ffzBadges.find(badge => badge.name === 'supporter');
    if (ffzSupporterBadge) {
      for (const userId in data.users) {
        if (data.users.hasOwnProperty(userId)) {
          const badges = data.users[userId];
          if (badges.includes(ffzSupporterBadge.id)) {
            userIdsWithFFZBadge.push(userId);
          }
        }
      }
    }
  } catch (error) {
    console.error('Fehler beim Laden der FFZ-Badges:', error);
  }
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
    if (!response.ok) {
      throw new Error('Fehler beim Abrufen der 7TV-Daten');
    }
    const data = await response.json();
    const sevenTVUserId = data.user.id;
    
    const subscriptionResponse = await fetch(`https://egvault.7tv.io/v1/subscriptions/${sevenTVUserId}`);
    if (!subscriptionResponse.ok) {
      throw new Error('Fehler beim Abrufen der Abonnementdaten für 7TV');
    }
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


async function fetchEmotes(channel){
  //Emotes
  try {
    const response = await fetch(`https://emotes.crippled.dev/v1/channel/${channel}/all`);
    const data = await response.json();
    for (let i = 0; i < data.length; i++){
      emote_links[data[i].code] = data[i].urls[1].url
    }
  } catch(error) {
    console.error(error);
  }

  //Global
  try {
    const response = await fetch(`https://emotes.crippled.dev/v1/global/7tv`);
    const data = await response.json();
    for (let i = 0; i < data.length; i++){
      emote_links[data[i].code] = data[i].urls[1].url
    }
  } catch(error) {
    console.error(error);
  }
  try {
    const response = await fetch(`https://emotes.crippled.dev/v1/global/twitch`);
    const data = await response.json();
    for (let i = 0; i < data.length; i++){
      emote_links[data[i].code] = data[i].urls[1].url
    }
  } catch(error) {
    console.error(error);
  }
  try {
    const response = await fetch(`https://emotes.crippled.dev/v1/global/bttv`);
    const data = await response.json();
    for (let i = 0; i < data.length; i++){
      emote_links[data[i].code] = data[i].urls[1].url
    }
  } catch(error) {
    console.error(error);
  }
  try {
    const response = await fetch(`https://emotes.crippled.dev/v1/global/ffz`);
    const data = await response.json();
    for (let i = 0; i < data.length; i++){
      emote_links[data[i].code] = data[i].urls[1].url
    }
  } catch(error) {
    console.error(error);
  }
}

function reloadOverlay() {
  location.reload();
}

function handleChatCommand(command, userId) {
  if (command === '!reloadoverlay' && (userId === broadcasterId || userIdsWithModBadge.includes(userId))) {
    reloadOverlay();
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
  document.getElementById("chat").innerHTML = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
  fetchEmotes(channel);
})

socket.addEventListener('message', async event => {
  if (event.data.includes("PING")) {
    socket.send(`PING`);
  }
  if (event.data.includes("PRIVMSG")) {
    const message = getMessage(event.data);
    const username = getUserName(event.data);
    const badgesInfo = getBadgeNames(event.data);
    const usernameColor = getUsernameColor(event.data);


    if (message.startsWith('!')) {
      handleChatCommand(message.trim());
    }

    let userId = null;
    const userIdMatch = event.data.match(/user-id=(\d+);/);
    if (userIdMatch) {
      userId = userIdMatch[1];
    }

    // Überprüfen, ob der Benutzer ignoriert werden soll
    if (userId && ignoredUserIds.includes(userId) && show_bots === '1') {
      return;
    }

    let badgesImg = badgesInfo;

    //lolnot
    if (userId && userIdsWithAdminBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${AdminBadge}">`;
    }
    if (userId && userIdsWithModBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${ModBadge}">`;
    }

    //Chatterino
    if (userId && userIdsWithChatterinoBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${ChatterinoBadge}">`;
    }
    if (userId && userIdsWithtopdonaterChatterinoBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${ChatterinoTopDonaterBadge}">`;
    }
    if (userId && userIdsWithChatterinoContibuterBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${ChatterinoContributerBadge}">`;
    }
    if (userId && userIdsWithChatterinoDevBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${ChatterinoDevBadge}">`;
    }
    if (userId && userIdsWithChatterinopepeBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${ChatterinoPepeBadge}">`;
    }

    //FFZ
    if (userId && userIdsWithFFZBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${FFZBadge}" style="background-color: rgb(117, 80, 0); border-radius: 10%;">`;
    }

    //dankchat
    if (userId && userIdsWithDankBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${DankChatBadge}">`;
    }
    if (userId && userIdsWithDankChatenteBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${DankChatenteBadge}">`;
    }
    if (userId && DankChatBorgirBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${DankChatBorgirBadge}">`;
    }
    if (userId && userIdsWithDankChatmaxBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${DankChatmaxBadge}">`;
    }
    if (userId && userIdsWithDankChatqaBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${DankChatqaBadge}">`;
    }
    if (userId && userIdsWithDankChatkkrikeyBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${DankChatKKrikeyBadge}">`;
    }
    if (userId && userIdsWithDankChatDeveloperBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${DankChatDevBadge}">`;
    }
    if (userId && userIdsWithDankChatcontributorBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${DankChatContributorBadge}">`;
    }

    //homies
    if (userId && userIdsWithHomiesSubBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${HomiesSubBadge}">`;
    }
    if (userId && userIdsWithHomiesModBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${HomiesModBadge}">`;
    }
    if (userId && userIdsWithHomiesSeniorModBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${HomiesSeniorModBadge}">`;
    }
    if (userId && userIdsWithHomiesSubOGBadge.includes(userId)) {
      badgesImg += `<img class="badge" src="${HomiesSubBadgeOG}">`;
    }
    
    const sevenTVBadgeUrl = await fetch7tvBadge(userId);
    if (sevenTVBadgeUrl) {
      badgesImg += `<img class="badge" src="${sevenTVBadgeUrl}">`;
    }
          
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
loadHomiesSubBadges();
fetch7tvBadge();
