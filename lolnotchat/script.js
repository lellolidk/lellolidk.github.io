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
var FFZdeveloperBadge = 'https://cdn.frankerfacez.com/badge/1/4';
var FFZBotBadge = 'https://cdn.frankerfacez.com/badge/2/4';
var FFZSupporterBadge = 'https://cdn.frankerfacez.com/badge/3/4';
var FFZSubwooferBadge = 'https://cdn.frankerfacez.com/badge/4/4';
//Bots
var ignoredUserIds = ['840051009', '754201843', '778353697', '1003451306','237719657', '100135110', '625016038', '46209051', '1564983', '105166207', '19264788', '216527497', '70885754', '52268235', '223196484', '95941264', '68136884', '865895441']; 

const SubBadgeDict = {};
var HomiesBadges = {};

async function fetchlolnotAPI() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/notLe0nard/lolnotapi/main/users.json');
    const data = await response.json();
    lolnotAdmins = data.admin;
    lolnotMods = data.mod;
    lolnotFounders = data.founder;
    botsIds = data.bot;
  } catch (error) {
    console.error('Failed to Fetch lolnot', error);
  }
}

async function fetchFFZAPI() {
  try {
    const response = await fetch('https://api.frankerfacez.com/v1/badges');
    const data = await response.json();
    ffzdeveloper = data.users[1]
    ffzBot = data.users[2]
    ffzSupporter = data.users[3]
    ffzSubwoofer = data.users[4]

  } catch (error) {
    console.error('Failed to Fetch FFZ', error);
  }
}

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

async function fetchHomiesBadges() {
  try {
    const response = await fetch('https://chatterinohomies.com/api/badges/list');
    const data = await response.json();
    for (let i = 0; i < data.badges.length; i++){
      HomiesBadges[data.badges[i].userId] = data.badges[i].image3
    }
  } catch (error) {
    console.error('Fehler beim Laden der Homies-Badges:', error);
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
    if(badgeNames[i].includes("moderator")){
      imgString += `<img class="badge" src="${customBadges[badgeNames[i]]}" style="background: #00ad03; border-radius:10%;">`;
    }
    else if(badgeNames[i].includes("subscriber")){
      imgString += `<img class="badge" src="${SubBadgeDict[parseInt(message.split("badges=")[1].split("subscriber/")[1].match(/^\d+/)[0])]}">`;
    }
    else if (badgeNames[i] in customBadges) {
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
      return sevenTVBadge;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}


async function fetchEmotes(){
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

async function fetchFFZModVipBadges(channel){
  try{
    const response = await fetch(`https://api.frankerfacez.com/v1/room/${channel}`);
    const data = await response.json();
    try{
      customBadges['moderator'] = data.room.mod_urls[4];
    }catch(error){}
    try{
      customBadges['vip'] = data.room.vip_badge[4];
    }catch(error){}
  }
  catch(error){
  }
}

async function fetchSubBadges(channel){
  try{
    const response = await fetch(`https://api.ivr.fi/v2/twitch/badges/channel?login=${channel}`);
    const data = await response.json();
    customBadges['subscriber'] = data[0].versions[0].image_url_4x;

    for (const version of data[0].versions) {
      const id = version.id;
      const imageUrl = version.image_url_4x;
      SubBadgeDict[id] = imageUrl;
    }
  }
  catch(error){
  }
}

function reloadOverlay() {
  location.reload();
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

channel = searchParams.get('channel').toLowerCase();
if (size = searchParams.get('size').toLowerCase() == "0"){document.querySelector(':root').style.setProperty('--text-size', '20px');}
if (size = searchParams.get('size').toLowerCase() == "1"){document.querySelector(':root').style.setProperty('--text-size', '40px');}
if (size = searchParams.get('size').toLowerCase() == "2"){document.querySelector(':root').style.setProperty('--text-size', '60px');}

if (shadow = searchParams.get('shadow').toLowerCase() == "0"){document.querySelector(':root').style.setProperty('--text-shadow', 'none');}
if (shadow = searchParams.get('shadow').toLowerCase() == "1"){document.querySelector(':root').style.setProperty('--text-shadow', `1px 1px 5px black`);}
if (shadow = searchParams.get('shadow').toLowerCase() == "2"){document.querySelector(':root').style.setProperty('--text-shadow', `1px 1px 10px black`);}

if (background = searchParams.get('background').toLowerCase() == "0"){document.querySelector('#chat').style.setProperty('background', 'transparent');}
if (background = searchParams.get('background').toLowerCase() == "1"){document.querySelector('#chat').style.setProperty('background', `rgba(0, 0, 0, 0.25)`);}
if (background = searchParams.get('background').toLowerCase() == "2"){document.querySelector('#chat').style.setProperty('background', `rgba(0, 0, 0, 0.5)`);}
if (background = searchParams.get('background').toLowerCase() == "3"){document.querySelector('#chat').style.setProperty('background', `rgba(0, 0, 0, 0.75)`);}
if (background = searchParams.get('background').toLowerCase() == "4"){document.querySelector('#chat').style.setProperty('background', `black`);}

font = searchParams.get('font').toLowerCase();
if (font == "0"){document.querySelector('body').style.fontFamily = 'noto';}
if (font == "1"){document.querySelector('body').style.fontFamily = 'minecraft';}
if (font == "2"){document.querySelector('body').style.fontFamily = 'shantell';}


if (searchParams.get('animated').toLowerCase() == "1"){document.getElementById("chat").style.scrollBehavior = "smooth"}
show_badges = searchParams.get('badges').toLowerCase();

show_bots = searchParams.get('bots').toLowerCase()

show_commands = searchParams.get('commands').toLowerCase();



//link = `https://lellolik.de/lolnotchat?ch=${values['channel']}&si=${values['size']}&sh=${values['shadow']}&bg=${values['background']}&fo=${values['font']}&an=${values['animated']}&ba=${values['badges']}&sb=${values['special_badges']}&bo=${values['bots']}&co=${values['commands']}`;






async function start(){
  loadingStatus = document.getElementById("loadingStatus");
  loadingStatus.innerHTML = "Loading Emotes"
  await fetchEmotes(channel);
  loadingStatus.innerHTML = "Twitch Badges"
  await fetchBadges();
  loadingStatus.innerHTML = "lolnot Badges"
  await fetchlolnotAPI();
  loadingStatus.innerHTML = "Chatterino Badges"
  await loadChatterinoBadges();
  loadingStatus.innerHTML = "DankChat Badges"
  await loadDankBadges();
  loadingStatus.innerHTML = "FFZ Badges"
  await fetchFFZAPI();
  loadingStatus.innerHTML = "Homies Badges"
  await loadHomiesSubBadges();
  await fetchHomiesBadges();
  //loadingStatus.innerHTML = "7tv Badges"
  //await fetch7tvBadge();
  loadingStatus.innerHTML = "FFZ VIP / Mod Badges"
  await fetchFFZModVipBadges(channel);
  loadingStatus.innerHTML = "Sub Badges"
  await fetchSubBadges(channel);
  loadingStatus.remove()
  document.getElementById("loading").remove()
  document.getElementById("chat").style.boxShadow = "none"
}
start()

const socket = new WebSocket("wss://irc-ws.chat.twitch.tv:443");

socket.addEventListener('open', () =>{
  socket.send(`PASS oauth:leckeier`);
  socket.send(`NICK justinfan65345`);
  socket.send(`JOIN #${channel}`);
  socket.send(`CAP REQ :twitch.tv/commands twitch.tv/membership twitch.tv/tags`);
  document.getElementById("chat").innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"
})

socket.addEventListener('message', async event => {
  if (event.data.includes("PING")) {
    socket.send(`PING`);
  }
  if (event.data.includes("PRIVMSG")) {
    const message = getMessage(event.data);
    const username = getUserName(event.data);
    const username2 = getUserName(event.data).toLowerCase();
    const badgesInfo = getBadgeNames(event.data);
    const usernameColor = getUsernameColor(event.data);




    let userId = null;
    const userIdMatch = event.data.match(/;user-id=(\d+);/);
    if (userIdMatch) {
      userId = userIdMatch[1];
    }

    if (message.startsWith('!lolnot reload')) {
      //handleChatCommand(message.trim());
      if (lolnotAdmins.includes(userId)){
        location.reload()
      }
    }

    // Überprüfen, ob der Benutzer ignoriert werden soll
    if (userId && ignoredUserIds.includes(userId) && show_bots === '0') {
      return;
    }

    let badgesImg = badgesInfo;
    
    if(show_badges == "1"){// Überprüfen ob Bages gezeigt werden sollen und sie hinzufügen

      //lolnot
      if (userId && lolnotAdmins.includes(userId)) {
        badgesImg += `<img class="badge" src="${AdminBadge}">`;
        usernameStyle = usernameColor ? `style="color: ${usernameColor};"` : 'style="color: #757575;"';
        //usernameStyle = `style="background-image: url('https://kappa.lol/O9rOG.gif');background-clip: text;-webkit-background-clip: text;color: transparent;"`
      }
      else{
        usernameStyle = usernameColor ? `style="color: ${usernameColor};"` : 'style="color: #757575;"';
      }
      if (userId && lolnotMods.includes(userId)) {
        badgesImg += `<img class="badge" src="${ModBadge}">`;
      }
      if (userId && lolnotFounders.includes(userId)) {
        badgesImg += `<img class="badge" src="${FounderBadge}">`;
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
      if (username2 && ffzdeveloper.includes(username2)) {
        badgesImg += `<img class="badge" src="${FFZdeveloperBadge}" style="background-color: rgb(250, 175, 25); border-radius: 10%;">`;
      }
      if (username2 && ffzBot.includes(username2)) {
        badgesImg += `<img class="badge" src="${FFZBotBadge}" style="background-color: rgb(89, 89, 89); border-radius: 10%;">`;
      }
      if (username2 && ffzSupporter.includes(username2)) {
        badgesImg += `<img class="badge" src="${FFZSupporterBadge}" style="background-color: rgb(117, 80, 0); border-radius: 10%;">`;
      }
      if (username2 && ffzSubwoofer.includes(username2)) {
        badgesImg += `<img class="badge" src="${FFZSubwooferBadge}" style="background-color: rgb(61, 100, 182); border-radius: 10%;">`;
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

      if (userId && userId in HomiesBadges) {
        badgesImg += `<img class="badge" src="${HomiesBadges[userId]}">`;
      }
      
      //const sevenTVBadgeUrl = await fetch7tvBadge(userId);
      //if (sevenTVBadgeUrl) {
      // badgesImg += `<img class="badge" src="${sevenTVBadgeUrl}">`;
      //}
    }

    if(message.includes("ACTION")){
      document.getElementById("chat").innerHTML += (
        `<p class="message"><span ${usernameStyle}>${badgesImg} ${username}</span><span ${usernameStyle}>${replaceEmotes(message.slice(1).slice(0, -1).slice(0, -1).slice(0, -1).replace("ACTION",""), emote_links)}</span><br>`
      );
    }
    else{   
      document.getElementById("chat").innerHTML += (
        `<p class="message"><span ${usernameStyle}>${badgesImg} ${username}:</span><span style="color: white;">${replaceEmotes(message, emote_links)}</span></p>`
      );
    }

    
  }
});

function scrollToBottom(){
  document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
}

setInterval(cleanup, 3000)
setInterval(fetchEmotes, 60000)
setInterval(scrollToBottom, 100)
