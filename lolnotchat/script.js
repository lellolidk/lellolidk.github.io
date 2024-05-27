var emote_links = {};
var customBadges = {};
var AdminBadge = 'https://lellolidk.de/img/lolnotAdmin.png';
var ModBadge = 'https://lellolidk.de/img/lolnotMod.png';
var ContibutorBadge = 'https://lellolidk.de/img/lolnotContributor.png';
var FounderBadge = 'https://lellolidk.de/img/lolnotFounder.png';
var SubBadge = '';
//Chatterino
var ChatterinoBadge = 'https://fourtf.com/chatterino/badges/supporter3x.png';
var ChatterinoTopDonaterBadge = 'https://fourtf.com/chatterino/badges/topd3x.png';
var ChatterinoContributerBadge = 'https://fourtf.com/chatterino/badges/helper3x.png';
var ChatterinoDevBadge = 'https://fourtf.com/chatterino/badges/dev3x.png';
var ChatterinoPepeBadge = 'https://fourtf.com/chatterino/badges/pepe3x.png';
//Homies
var HomiesSubBadge = 'https://itzalex.github.io/badgesusers/supporter2/badge3x.png';
var HomiesModBadge = 'https://itzalex.github.io/badgesusers/mod/badge3x.png';
var HomiesSeniorModBadge = 'https://itzalex.github.io/badgesusers/senior_mod/badge3x.png';
var HomiesSubBadgeFounder = 'https://itzalex.github.io/badgesusers/supporter_founder2/badge3x.png';
var HomiesFounder = 'https://itzalex.github.io/badgesusers/founder2/badge3x.png';
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
//FFZ
var FFZdeveloperBadge = 'https://cdn.frankerfacez.com/badge/1/4';
var FFZBotBadge = 'https://cdn.frankerfacez.com/badge/2/4';
var FFZSupporterBadge = 'https://cdn.frankerfacez.com/badge/3/4';
var FFZSubwooferBadge = 'https://cdn.frankerfacez.com/badge/4/4';
//Chatsen
var chatsen_developer = "https://raw.githubusercontent.com/chatsen/resources/master/assets/nagato.gif";
var chatsen_early_supporter = "https://raw.githubusercontent.com/chatsen/resources/master/assets/early_supporter.png";
var chatsen_early_bird = "https://raw.githubusercontent.com/chatsen/resources/master/assets/old_advice.png";
var chatsen_performance_artist = "https://raw.githubusercontent.com/chatsen/resources/master/assets/CrayonTime.gif";
var chatsen_patreon_tier1 = "https://raw.githubusercontent.com/chatsen/resources/master/assets/tier1.png";
var chatsen_patreon_tier1s = "https://raw.githubusercontent.com/chatsen/resources/master/assets/tier1s.png";
var chatsen_patreon_tier2 = "https://raw.githubusercontent.com/chatsen/resources/master/assets/tier2.png";
var chatsen_patreon_tier2s = "https://raw.githubusercontent.com/chatsen/resources/master/assets/tier2s.png";
var chatsen_patreon_tier3 = "https://raw.githubusercontent.com/chatsen/resources/master/assets/tier3.png";
var chatsen_patreon_tier3s = "https://raw.githubusercontent.com/chatsen/resources/master/assets/tier3s.png";
var chatsen_patreon_tier4 = "https://raw.githubusercontent.com/chatsen/resources/master/assets/tier4.png";
var chatsen_test_animated = "https://raw.githubusercontent.com/chatsen/resources/master/assets/tier3a.gif";
var chatsen_relaxo = "https://raw.githubusercontent.com/chatsen/resources/master/assets/relaxo.png";
//hurensohn
var userIdsWithDankBadge = [];
var userIdsWithDankChatenteBadge = [];
var userIdsWithDankChatborgirBadge = [];
var userIdsWithDankChatmaxBadge = [];
var userIdsWithDankChatqaBadge = [];
var userIdsWithDankChatkkrikeyBadge = [];
var userIdsWithDankChatDeveloperBadge = [];
var userIdsWithDankChatcontributorBadge = [];
//Bots
var ignoredUserIds = ['840051009', '754201843', '778353697', '1003451306','237719657', '100135110', '625016038', '46209051', '1564983', '105166207', '19264788', '216527497', '70885754', '52268235', '223196484', '95941264', '68136884', '865895441']; 

const SubBadgeDict = {};
let SubEmoteDict = {};
var HomiesBadges = {};
var DankBadges = {};
var bttvBadges = {};
const sevenTvBadges = {};

async function fetchlolnotAPI() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/notLe0nard/lolnotapi/main/users.json');
    const data = await response.json();
    lolnotAdmins = data.admin;
    lolnotMods = data.mod;
    lolnotContributor = data.contributor;
    lolnotFounders = data.founder;
    lolnotSub = data.sub;
    botsIds = data.bot;
  } catch (error) {
    console.error('Error while loading lolnot Badges', error);
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
    console.error('Error while loading ffz badges', error);
  }
}

async function fetchDankBadges() {
  try {
    const response = await fetch('https://corsproxy.io/?https%3A%2F%2Fflxrs.com%2Fapi%2Fbadges');
    const data = await response.json();
    data.forEach(badge => {
      badge.users.forEach(userId => {
        DankBadges[userId] = badge.url;
      });
    });
  } catch (error) {
    console.error('Fehler beim Laden der Dank-Badges:', error);
  }
}


async function fetchBTTVBadges() {
  try {
    const response = await fetch('https://api.betterttv.net/3/cached/badges/twitch');
    const data = await response.json();
    
    data.forEach(badge => {
      const username = badge.displayName.toLowerCase();
      const badgeUrl = badge.badge.svg;
      bttvBadges[username] = badgeUrl;
    });

    //console.log('BTTV Badges:', bttvBadges);
    return bttvBadges;
  } catch (error) {
    console.error('Fehler beim Laden der BTTV-Badges:', error);
    return {};
  }
}

async function fetchChatterino() {
  try {
    const response = await fetch('https://corsproxy.io/?https%3A%2F%2Fapi.chatterino.com%2Fbadges');
    const data = await response.json();
    userIdsWithChatterinoBadge = [];
    userIdsWithtopdonaterChatterinoBadge = [];
    userIdsWithChatterinoContibuterBadge = [];
    userIdsWithChatterinoDevBadge = [];
    userIdsWithChatterinopepeBadge = [];

    for (const badge of data.badges) {
      if (badge.tooltip === "Chatterino Top Donator") {
        userIdsWithtopdonaterChatterinoBadge = badge.users;
      } else if (badge.tooltip === "Chatterino Contributor") {
        userIdsWithChatterinoContibuterBadge = badge.users;
      } else if (badge.tooltip === "Chatterino Supporter") {
        userIdsWithChatterinoBadge = badge.users;
      } else if (badge.tooltip === "Chatterino Developer") {
        userIdsWithChatterinoDevBadge = badge.users;
      } else if (badge.tooltip === "Chatterino Special Pepe Badge") {
        userIdsWithChatterinopepeBadge = badge.users;
      }
    }

    for (const badge of data.badges) {
      customBadges[badge.tooltip.toLowerCase()] = badge.image3;
    }
  } catch (error) {
    console.error('Error while loading Chatterino Badges:', error);
  }
}


async function fetchChattyBadges() {
  try {
    const response = await fetch('');
    const data = await response.json();
    userIdsWith = [];
    userIdsWithHomiesSeniorMod = [];

    for (const badge of data.badges) {
      if (badge.tooltip === "Homies Mod") {
        userIdsWithHomiesMod = badge.users;
      } else if (badge.tooltip === "Senior Homies Mod") {
        userIdsWithHomiesSeniorMod = badge.users;
      }
    }

    for (const badge of data.badges) {
      customBadges[badge.tooltip.toLowerCase()] = badge.image3;
    }
  } catch (error) {
    console.error('Error while loading Homies Mod Badges:', error);
  }
}


async function fetchChatsenBadges() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/chatsen/resources/master/assets/data.json');
    const data = await response.json();

    data.forEach(user => {
      const { name, image_url_4 } = badge;
      name.forEach(name => {
        chatsenBadge[name] = image_url_4;
      });
    });

    //console.log('Chatty Badges:', chattyBadges);
    return chattyBadges;
  } catch (error) {
    console.error('Fehler beim Laden der Chatty-Badges:', error);
    return {};
  }
}

async function fetchHomiesSubBadges() {
  try {
    const response = await fetch('https://corsproxy.io/?https%3A%2F%2Fraw.githubusercontent.com%2FitzAlex%2Fitzalex.github.io%2Fmaster%2Fbadges');
    const data = await response.json();
    userIdsWithHomiesDev = [];
    userIdsWithHomiesSupporterFounder = [];
    userIdsWithHomiesSupporter = [];
    userIdsWithHomiesFounder = [];

    for (const badge of data.badges) {
      if (badge.tooltip === "Homies Developer") {
        userIdsWithHomiesDev = badge.users;
      } else if (badge.tooltip === "Homies Supporter (Founder)") {
        userIdsWithHomiesSupporterFounder = badge.users;
      } else if (badge.tooltip === "Homies Supporter") {
        userIdsWithHomiesSupporter = badge.users;
      } else if (badge.tooltip === "Homies Founder") {
        userIdsWithHomiesFounder = badge.users;
      }
    }

    for (const badge of data.badges) {
      customBadges[badge.tooltip.toLowerCase()] = badge.image3;
    }
  } catch (error) {
    console.error('Error while loading Homies Sub Badges:', error);
  }
}

async function fetchHomiesModBadges() {
  try {
    const response = await fetch('https://corsproxy.io/?https%3A%2F%2Fraw.githubusercontent.com%2FitzAlex%2Fitzalex.github.io%2Fmaster%2Fbadges2');
    const data = await response.json();
    userIdsWithHomiesMod = [];
    userIdsWithHomiesSeniorMod = [];

    for (const badge of data.badges) {
      if (badge.tooltip === "Homies Mod") {
        userIdsWithHomiesMod = badge.users;
      } else if (badge.tooltip === "Senior Homies Mod") {
        userIdsWithHomiesSeniorMod = badge.users;
      }
    }

    for (const badge of data.badges) {
      customBadges[badge.tooltip.toLowerCase()] = badge.image3;
    }
  } catch (error) {
    console.error('Error while loading Homies Mod Badges:', error);
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

async function fetchBadges() {
  try {
    const customResponse = await fetch(`badges.json`);
    customBadges = await customResponse.json();
  } catch (error) {
    console.error(error);
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
    else if (badgeNames[i].includes("vip")){
      imgString += `<img class="badge" src="${customBadges['vip']}">`;
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

async function fetchEmotes(channel, userId){

  const channelResponse = await fetch(`https://api.twitch.tv/helix/users?login=${channel}`, {
    headers: {
      'Client-ID': 'gp762nuuoqcoxypju8c569th9wz7q5',
      'Authorization': 'Bearer vh7kq5y8raig9rko5byve6zcs6s1yg'
    }
  });
  const channelData = await channelResponse.json();
  const channelId = channelData.data[0].id;

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

  try {
    const response = await fetch(`https://corsproxy.io/?https%3A%2F%2F7tv.io%2Fv3%2Fusers%2Ftwitch%2F${channelId}`);
    const data = await response.json();
    
    if (data.emote_set && data.emote_set.emotes) {
      data.emote_set.emotes.forEach(emote => {
        if (emote.host && emote.host.url) {
          emote_links[emote.name] = emote.host.url;
        }
      });
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
  try {
    const response = await fetch(`https://api.frankerfacez.com/v1/room/${channel}`);
    const data = await response.json();

    if (data.room.mod_urls) {
      for (let i = 4; i >= 1; i--) {
        if (data.room.mod_urls[i]) {
          customBadges['moderator'] = data.room.mod_urls[i];
          break;
        }
      }
    }

    if (data.room.vip_badge) {
      for (let i = 4; i >= 1; i--) {
        if (data.room.vip_badge[i]) {
          customBadges['vip'] = data.room.vip_badge[i];
          break;
        }
      }
    }
  } catch(error) {
    console.error('Fehler beim Abrufen der FFZ-Mod- und VIP-Badges:', error);
  }
}

async function fetchSubBadges(channel){
  try{
    const channelResponse = await fetch(`https://api.twitch.tv/helix/users?login=${channel}`, {
      headers: {
        'Client-ID': 'gp762nuuoqcoxypju8c569th9wz7q5',
        'Authorization': 'Bearer vh7kq5y8raig9rko5byve6zcs6s1yg'
      }
    });
    const channelData = await channelResponse.json();
    const channelId = channelData.data[0].id;

    const response = await fetch(`https://api.twitch.tv/helix/chat/badges?broadcaster_id=${channelId}`, {
      headers: {
        'Client-ID': 'gp762nuuoqcoxypju8c569th9wz7q5',
        'Authorization': 'Bearer vh7kq5y8raig9rko5byve6zcs6s1yg'
      }
    });
    const data = await response.json();

    for (const badgeSet of data.data) {
      if (badgeSet.set_id === 'subscriber') {
        for (const version of badgeSet.versions) {
          const id = version.id;
          const imageUrl = version.image_url_4x;
          SubBadgeDict[id] = imageUrl;
        }
      }
    }
  }
  catch(error){
    console.error('Fehler beim Abrufen der Subscriber-Badges:', error);
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


async function getAll7tvPaints() {
  let results = await fetch('https://7tv.io/v3/gql', {
    method: 'POST',

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      query: `
query GetCosmestics($list: [ObjectID!]) {
    cosmetics(list: $list) {
        paints {
            id
            kind
            name
            function
            color
            angle
            shape
            image_url
            repeat
            stops {
                at
                color
                __typename
            }
            shadows {
                x_offset
                y_offset
                radius
                color
                __typename
            }
            __typename
        }
        badges {
            id
            kind
            name
            tooltip
            tag
            __typename
        }
        __typename
    }
}
`,
    })
  })
  let characters = await results.json();
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
if (font == "3"){document.querySelector('body').style.fontFamily = 'lato';}



if (searchParams.get('animated').toLowerCase() == "1"){document.getElementById("chat").style.scrollBehavior = "smooth"}
show_badges = searchParams.get('badges').toLowerCase();

show_bots = searchParams.get('bots').toLowerCase()

show_commands = searchParams.get('commands').toLowerCase();



//link = `https://lellolik.de/lolnotchat?ch=${values['channel']}&si=${values['size']}&sh=${values['shadow']}&bg=${values['background']}&fo=${values['font']}&an=${values['animated']}&ba=${values['badges']}&sb=${values['special_badges']}&bo=${values['bots']}&co=${values['commands']}`;

async function start(){
  loadingStatus = document.getElementById("loadingStatus");
  loadingStatus.innerHTML = "Sub Badges"
  await fetchSubBadges(channel);
  loadingStatus.innerHTML = "Loading Emotes"
  await fetchEmotes(channel);
  loadingStatus.innerHTML = "Twitch Badges"
  await fetchBadges();
  loadingStatus.innerHTML = "lolnot Badges"
  await fetchlolnotAPI();
  loadingStatus.innerHTML = "Chatterino Badges"
  await fetchChatterino();
  loadingStatus.innerHTML = "DankChat Badges"
  await fetchDankBadges();
  loadingStatus.innerHTML = "FFZ Badges"
  await fetchFFZAPI();
  loadingStatus.innerHTML = "BTTV Badges"
  await fetchBTTVBadges();
  //loadingStatus.innerHTML = "Chatty Badges"
  //await fetchChattyBadges()
  loadingStatus.innerHTML = "Homies Badges"
  await fetchHomiesBadges();
  await fetchHomiesSubBadges();
  await fetchHomiesModBadges();
  loadingStatus.innerHTML = "FFZ VIP / Mod Badges"
  await fetchFFZModVipBadges(channel);
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

async function fetch7tvBadge(userid) {
  const keys = Object.keys(sevenTvBadges);
  
  if ((keys.includes(userid)) == false){ 
    //get the 7tv id from twitch id
    response = await fetch(`https://corsproxy.io/?https%3A%2F%2F7tv.io%2Fv3%2Fusers%2Ftwitch%2F${userid}`)
    data = await response.json()
    if (data.status_code == 404){
      sevenTvBadges[userid] = "";
      return;
    }
    SevenTvID = data.user.id

    response = await fetch(`https://corsproxy.io/?https%3A%2F%2Fegvault.7tv.io%2Fv1%2Fsubscriptions%2F${SevenTvID}`)
    data = await response.json()

    if (data.status_code == 404){
      sevenTvBadges[userid] = "";
      return;
    }
    
    if (data.active == false){
      sevenTvBadges[userid] = "";
      //console.log(sevenTVBadges[userid])
      return;
    }

    //console.log(SevenTvID)
    //get subscription status from 7tv id
    response = await fetch(`https://7tv.io/v3/gql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        operationName: 'GetUserCosmetics',
        variables: {
          id: String(SevenTvID),
        },
        query: `
                        query GetUserCosmetics($id: ObjectID!) {
                            user(id: $id) {
                                id
                                cosmetics {
                                    id
                                    kind
                                    selected
                                    __typename
                                }
                                __typename
                            }
                        }
                    `,
      }),
    });
    UserCosmetics = await response.json();

    //find the cosmetic with selected: true and kind:"BADGE"
    for (cosmetic of UserCosmetics.data.user.cosmetics) {
      if (cosmetic.selected == true && cosmetic.kind == "BADGE") {
        SevenTvBadgeId = cosmetic.id;
        sevenTvBadges[userid] = `https://cdn.7tv.app/badge/${cosmetic.id}/3x`;
        return `https://cdn.7tv.app/badge/${cosmetic.id}/3x`;
      }
    }
  }
  else{
    return sevenTvBadges[userid];
  }
  
}

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

      if (message.startsWith("!") && show_commands == "0"){
        console.log("ok")
      }
      else{
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
          if (lolnotContributor.includes(userId)){
            location.reload()
          }
        }
    
        if (userId && ignoredUserIds.includes(userId) && show_bots === '0') {
          return;
        }
    
        let badgesImg = badgesInfo;
        
        if(show_badges == "1"){// ÃœberprÃ¼fen ob Bages gezeigt werden sollen und sie hinzufÃ¼gen
    
          //lolnot
          if (userId && lolnotAdmins.includes(userId)) {
            badgesImg += `<img class="badge" src="${AdminBadge}">`;
            //usernameStyle = usernameColor ? `style="color: ${usernameColor};"` : 'style="color: #757575;"';
            //usernameStyle = `style="background-image: url('https://kappa.lol/O9rOG.gif');background-clip: text;-webkit-background-clip: text;color: transparent;"`
          }
          //usernameStyle = usernameColor ? `style="color: ${usernameColor};"` : 'style="color: #757575;"';
          if (userId && lolnotMods.includes(userId)) {
            badgesImg += `<img class="badge" src="${ModBadge}">`;
          }
          if (userId && lolnotContributor.includes(userId)) {
            badgesImg += `<img class="badge" src="${ContibutorBadge}">`;
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
          
          //if (username2 && chattyBadges.includes(username2)) {
            //badgesImg += `<img class="badge" src="${FFZSubwooferBadge}" style="background-color: rgb(61, 100, 182); border-radius: 10%;">`;
          //}

          const sevenTVBadgeUrl = await fetch7tvBadge(userId);
          if (sevenTVBadgeUrl) {
            badgesImg += `<img class="badge" src="${sevenTVBadgeUrl}">`;
          }
    
          //dankchat
          if (userId && userId in DankBadges) {
            badgesImg += `<img class="badge" src="${DankBadges[userId]}">`;
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

          if (username && username in bttvBadges) {
            badgesImg += `<img class="badge" src="${bttvBadges[username]}">`;
          }

          //homies
          if (userId && userId in HomiesBadges) {
            badgesImg += `<img class="badge" src="${HomiesBadges[userId]}">`;
          }
          if (userId && userIdsWithHomiesSupporter.includes(userId)) {
            badgesImg += `<img class="badge" src="${HomiesSubBadge}">`;
          }
          if (userId && userIdsWithHomiesMod.includes(userId)) {
            badgesImg += `<img class="badge" src="${HomiesModBadge}">`;
          }
          if (userId && userIdsWithHomiesSeniorMod.includes(userId)) {
            badgesImg += `<img class="badge" src="${HomiesSeniorModBadge}">`;
          }
          if (userId && userIdsWithHomiesSupporterFounder.includes(userId)) {
            badgesImg += `<img class="badge" src="${HomiesSubBadgeFounder}">`;
          }
          if (userId && userIdsWithHomiesFounder.includes(userId)) {
            badgesImg += `<img class="badge" src="${HomiesFounder}">`;
          }
          if (userId && userIdsWithHomiesDev.includes(userId)) {
            badgesImg += `<img class="badge" src="${HomiesDevBadge}">`;
          }
        }
    
        if(message.includes("ACTION")){
          document.getElementById("chat").innerHTML += (
            `<p class="message"><span ${usernameStyle}>${badgesImg} ${username}</span> <span ${usernameStyle}>${replaceEmotes(message.slice(1).slice(0, -1).slice(0, -1).slice(0, -1).replace("ACTION",""), emote_links)}</span><br>`
          );
        }
        else{   
          document.getElementById("chat").innerHTML += (
            `<p class="message"><span style="color:${usernameColor};">${badgesImg} ${username}: </span><span style="color: white;">${replaceEmotes(message, emote_links)}</span></p>`
          );
        }
      }
    
  }
});

function scrollToBottom(){
  document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
}

setInterval(cleanup, 3000)
setInterval(fetchEmotes, 60000)
setInterval(scrollToBottom, 200)
