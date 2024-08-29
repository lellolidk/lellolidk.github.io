var emote_links = {};
var customBadges = {};
var AdminBadge = 'https://raw.githubusercontent.com/notLe0nard/lolnotapi/main/img/admin.png';
var ModBadge = 'https://raw.githubusercontent.com/notLe0nard/lolnotapi/main/img/mod.png';
var ContibutorBadge = 'https://raw.githubusercontent.com/notLe0nard/lolnotapi/main/img/contibutor.png';
var FounderBadge = 'https://raw.githubusercontent.com/notLe0nard/lolnotapi/main/img/founder.png';
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
    console.error('Error:', error);
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
    console.error('Error:', error);
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
    console.error('Error:', error);
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
    console.error('Error:', error);
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
    console.error('Error:', error);
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
    console.error('Error:', error);
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
    console.error('Error:', error);
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

async function loadBadgeData() {
    try {
        const response = await fetch('badges.json');
        const data = await response.json();
        customBadges = data
    } catch (error) {
        console.error('Error:', error);
    }
}

function getBadgeNames(message) {
  const badgeInfoMatch = message.match(/badges=([^;]+);/);

  if (!badgeInfoMatch) {
      return '';
  }

  const badgeDefs = badgeInfoMatch[1].split(",");
  let imgString = "";

  for (const badgeDef of badgeDefs) {
      const [badgeName, badgeId] = badgeDef.split("/");

      if (badgeName === "moderator") {
          imgString += `<img class="badge" src="${customBadges[badgeName]}" style="background: #00ad03; border-radius:10%;">`;
      } else if(badgeName.includes("subscriber")){
        imgString += `<img class="badge" src="${SubBadgeDict[parseInt(message.split("badges=")[1].split("subscriber/")[1].match(/^\d+/)[0])]}">`;
      } else if (badgeName === "moments") {
        const MomentsBadgeUrl = customBadges[`moments/${badgeId}`] || customBadges['moments'];
        imgString += `<img class="badge" src="${MomentsBadgeUrl}">`;
      } else if (badgeName === "sub-gifter") {
        const subGifterBadgeUrl = customBadges[`sub-gifter/${badgeId}`] || customBadges['sub-gifter'];
        imgString += `<img class="badge" src="${subGifterBadgeUrl}">`;
      } else if (badgeName === "founder") {
        const founderBadgeUrl = customBadges[`founder/${badgeId}`] || customBadges['founder'];
        imgString += `<img class="badge" src="${founderBadgeUrl}">`;
      } else if (badgeName === "bits") {
        const BitsBadgeUrl = customBadges[`bits/${badgeId}`] || customBadges['bits'];
        imgString += `<img class="badge" src="${BitsBadgeUrl}">`;
      } else if (badgeName === "bits-leader") {
        const BitsLeaderBadgeUrl = customBadges[`bits-leader/${badgeId}`] || customBadges['bits-leader'];
        imgString += `<img class="badge" src="${BitsLeaderBadgeUrl}">`;
      } else if (badgeName === "bits-leader") {
        const subGifterLeaderBadgeUrl = customBadges[`sub-gift-leader/${badgeId}`] || customBadges['sub-gift-leader'];
        imgString += `<img class="badge" src="${subGifterLeaderBadgeUrl}">`;
      } else if (badgeName === "vip") {
          imgString += `<img class="badge" src="${customBadges[badgeName]}">`;
      } else if (badgeName in customBadges) {
          imgString += `<img class="badge" src="${customBadges[badgeName]}">`;
      }
  }

  return imgString;
}

function getMessage(message) {
  if (message.split(`PRIVMSG #`)[1].split(" :")[0] == "lellolidk"){
    return message.split(`PRIVMSG #lellolidk :`)[1];
  }
  else{
    return message.split(`PRIVMSG #${channel} :`)[1];
  }
}

function cleanup() {
  document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML.slice(-30000)
}

async function fetchEmotes(channel){
    channel = searchParams.get('channel').toLowerCase();
    //Emotes
    try {
      const response = await fetch(`https://emotes.crippled.dev/v1/channel/${channel}/7tv`);
      const data = await response.json();
      for (let i = 0; i < data.length; i++){
        emote_links[data[i].code] = data[i].urls[1].url
      }
    } catch(error) {
      console.error(error);
    }
    try {
      const response = await fetch(`https://emotes.crippled.dev/v1/channel/${channel}/bttv`);
      const data = await response.json();
      for (let i = 0; i < data.length; i++){
        emote_links[data[i].code] = data[i].urls[1].url
      }
    } catch(error) {
      console.error(error);
    }
    try {
      const response = await fetch(`https://emotes.crippled.dev/v1/channel/${channel}/ffz`);
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
    console.error('Error:', error);
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
    console.error('Error:', error);
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
if (font == "3"){document.querySelector('body').style.fontFamily = 'lato';}

if (searchParams.get('animated').toLowerCase() == "1"){document.getElementById("chat").style.scrollBehavior = "smooth"}
show_badges = searchParams.get('badges').toLowerCase();

show_bots = searchParams.get('bots').toLowerCase()

show_commands = searchParams.get('commands').toLowerCase();

async function start(){
  loadingStatus = document.getElementById("loadingStatus");
  loadingStatus.innerHTML = "Loading"
  await fetchBadges();
  fetchSubBadges(channel);
  fetchlolnotAPI();
  fetchChatterino();
  fetchDankBadges();
  fetchFFZAPI();
  loadBadgeData();
  //get7tvColor();
  fetchHomiesBadges();
  fetchHomiesSubBadges();
  fetchHomiesModBadges();
  fetchFFZModVipBadges(channel);
  fetchEmotes(channel);
  loadingStatus.remove()
  document.getElementById("loading").remove()
  document.getElementById("chat").style.boxShadow = "none"
}
start()

const socket = new WebSocket("wss://irc-ws.chat.twitch.tv:443");
socket.addEventListener('open', () =>{
  socket.send(`PASS oauth:leckeier`);
  socket.send(`NICK justinfan65345`);
  socket.send(`JOIN #lellolidk`);
  socket.send(`JOIN #${channel}`);
  socket.send(`CAP REQ :twitch.tv/commands twitch.tv/membership twitch.tv/tags`);
  document.getElementById("chat").innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"
})

async function fetch7tvBadge(userid) {
  try {
      let response = await fetch(`https://7tv.io/v3/users/twitch/${userid}`);
      let data = await response.json();
      
      if (data.status_code === 404) {
          sevenTvBadges[userid] = "";
          return "";
      }
      
      let SevenTvID = data.user.id;

      response = await fetch(`https://corsproxy.io/?https%3A%2F%2Fegvault.7tv.io%2Fv1%2Fsubscriptions%2F${SevenTvID}`);
      data = await response.json();
      
      if (data.status_code === 404 || data.active === false) {
          sevenTvBadges[userid] = "";
          return "";
      }

      response = await fetch(`https://7tv.io/v3/gql`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              operationName: 'GetUserCosmetics',
              variables: { id: String(SevenTvID) },
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
      
      let UserCosmetics = await response.json();

      for (const cosmetic of UserCosmetics.data.user.cosmetics) {
          if (cosmetic.selected === true && cosmetic.kind === "BADGE") {
              let badgeUrl = `https://cdn.7tv.app/badge/${cosmetic.id}/3x`;
              sevenTvBadges[userid] = badgeUrl;
              return badgeUrl;
          }
      }

      sevenTvBadges[userid] = "";
      return "";
      
  } catch (error) {
      console.error('Fehler beim Abrufen des Badges:', error);
      sevenTvBadges[userid] = "";
      return "";
  }
}

/* async function get7tvColor() {
  const id = '676966284'
  const query = `
  query UserByConnection {
      userByConnection(platform: TWITCH, id: "${id}") {
          style {
              paint {
                  id
              }
          }
      }
  }`;
  try {
      const response = await fetch('https://7tv.io/v3/gql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query })
      });

      const data = await response.json();
      console.log(data)
  } catch (err) {
      console.log(err)
      return null;
  }
} */

async function handleCommand(message){
  if (message.startsWith(`!lellolchat reload ${channel}`)){
    location.reload();
  }
  if (message.startsWith(`!lellolchat dink ${channel}`)){
    await document.getElementById("dink").play()
  }
}

socket.addEventListener('message', async event => {
  console.log(event.data);
  if (event.data.includes("PING")) {
    socket.send(`PONG`);
  }
  if (event.data.includes(`:tmi.twitch.tv CLEARCHAT #`) && event.data.startsWith("@room-id")) {
    document.getElementById("chat").innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"
  }
  if (event.data.includes("PRIVMSG")) {
      const message = getMessage(event.data);
      const messageChannel = event.data.split(`PRIVMSG #`)[1].split(" :")[0];
      const username = getUserName(event.data);
      const username2 = getUserName(event.data).toLowerCase();
      const badgesInfo = getBadgeNames(event.data);
      const usernameColor = getUsernameColor(event.data);

      let userId = null;
      const userIdMatch = event.data.match(/;user-id=(\d+);/);
      if (userIdMatch) {
        userId = userIdMatch[1];
      }

      if (messageChannel == "lellolidk"){
        if (lolnotAdmins.includes(userId)){
          handleCommand(message)
        }
      }
      else{
      if (message.startsWith("!") && show_commands == "0"){
        console.log("ok")
      }
      else{
        if (userId && ignoredUserIds.includes(userId) && show_bots === '0') {
          return;
        }
    
        let badgesImg = badgesInfo;
        
        if(show_badges == "1"){

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

          const sevenTVBadgeUrl = await fetch7tvBadge(userId);
          if (sevenTVBadgeUrl) {
            badgesImg += `<img class="badge" src="${sevenTVBadgeUrl}">`;
          }

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
            `<p class="message"><span style="color:${usernameColor};">${badgesImg} ${username}</span> <span style="color:${usernameColor};">${replaceEmotes(message.slice(1).slice(0, -1).slice(0, -1).slice(0, -1).replace("ACTION",""), emote_links)}</span><br>`
          );
        }
        else{   
          document.getElementById("chat").innerHTML += (
            `<p class="message"><span style="color:${usernameColor};">${badgesImg} ${username}: </span><span style="color: white;">${replaceEmotes(message, emote_links)}</span></p>`
          );
        }
      }
      }
    
  }
});

function scrollToBottom(){
  document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
}

setInterval(cleanup, 3000)
setInterval(fetchEmotes, 30)
setInterval(scrollToBottom, 200)
