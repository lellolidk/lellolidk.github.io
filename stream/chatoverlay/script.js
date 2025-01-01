var emote_links = {};
var customBadges = {};
var AdminBadge = '';
var ModBadge = '';
var ContibutorBadge = '';
var FounderBadge = '';
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
var ignoredUserIds = ['1128509152','840051009', '754201843', '778353697', '1003451306','237719657', '100135110', '625016038', '46209051', '1564983', '105166207', '19264788', '216527497', '70885754', '52268235', '223196484', '95941264', '68136884', '865895441']; 

const SubBadgeDict = {};
const BitsBadgeDict = {};
let SubEmoteDict = {};
const customhomieBadges = {};
const HomiesBadges = {};
var DankBadges = {};
const sevenTvBadges = {};
let personalEmoteSetId = null;

const userIdsWithHomiesBadges = {
  supporter: [],
  mod: [],
  seniorMod: [],
  supporterFounder: [],
  founder: [],
  developer: [],
  supporterUrl: '',
  modUrl: '',
  seniorModUrl: '',
  supporterFounderUrl: '',
  founderUrl: '',
  developerUrl: ''
};

const userIdsWithChatsenBadges = {
  developer: [],
  earlySupporter: [],
  earlyBird: [],
  artist: [],
  tier1: [],
  tier1s: [],
  tier2: [],
  tier2s: [],
  tier3: [],
  tier3s: [],
  tier4: [],
  relaxo: [],
  testBadge1: [],
  testBadge2: [],
  developerUrl: '',
  earlySupporterUrl: '',
  earlyBirdUrl: '',
  artistUrl: '',
  tier1Url: '',
  tier1sUrl: '',
  tier2Url: '',
  tier2sUrl: '',
  tier3Url: '',
  tier3sUrl: '',
  tier4Url: '',
  relaxoUrl: '',
};

async function fetchlolnotAPI() {
  try {
    lolnotAdmins = '636823070';
    lolnotMods = '';
    lolnotContributor = '';
    lolnotFounders = '';
    lolnotSub = '';
  } catch (error) {
    console.error('Error:', error);
  }
}

async function fetchFFZAPI() {
  try {
    const response = await fetch('https://api.frankerfacez.com/v1/badges/ids');
    const data = await response.json();

    const badges = data.badges || [];

    badges.forEach(badge => {
        switch (badge.id) {
            case 2:
                BadgeffzBot = badge.urls["4"];
                break;
            case 1:
                BadgeffzDeveloper = badge.urls["4"];
                break;
            case 3:
                BadgeffzSupporter = badge.urls["4"];
                break;
            case 4:
                BadgeffzSubwoofer = badge.urls["4"];
                break;
        }
    });
      ffzdeveloper = data.users[1] || [];
      ffzBot = data.users[2] || [];
      ffzSupporter = data.users[3] || [];
      ffzSubwoofer = data.users[4] || [];
  } catch (error) {
      console.error('Error:', error);
  }
}

async function fetchDankBadges() {
  try {
    const response = await fetch(`https://corsproxy.io/?url=https://flxrs.com/api/badges`);
    const data = await response.json();

    DankBadges = {}; 

    data.forEach(badge => {
      const badgeUrl = badge.url;
      badge.users.forEach(userId => {
        if (!DankBadges[userId]) {
          DankBadges[userId] = [];
        }
        DankBadges[userId].push(badgeUrl);
      });
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

const userIdsWithChatterinoBadges = {
  topDonator: [],
  contributor: [],
  supporter: [],
  developer: [],
  specialPepe: [],
};
async function fetchChatterino() {
  try {
    const response = await fetch(`https://corsproxy.io/?url=https://api.chatterino.com/badges`);
    const data = await response.json();

    userIdsWithChatterinoBadges.topDonatorUrl = '';
    userIdsWithChatterinoBadges.contributorUrl = '';
    userIdsWithChatterinoBadges.supporterUrl = '';
    userIdsWithChatterinoBadges.developerUrl = '';
    userIdsWithChatterinoBadges.specialPepeUrl = '';

    for (const badge of data.badges) {
      switch (badge.tooltip) {
        case "Chatterino Top Donator":
          userIdsWithChatterinoBadges.topDonator = badge.users;
          userIdsWithChatterinoBadges.topDonatorUrl = badge.image3;
          break;
        case "Chatterino Contributor":
          userIdsWithChatterinoBadges.contributor = badge.users;
          userIdsWithChatterinoBadges.contributorUrl = badge.image3;
          break;
        case "Chatterino Supporter":
          userIdsWithChatterinoBadges.supporter = badge.users;
          userIdsWithChatterinoBadges.supporterUrl = badge.image3;
          break;
        case "Chatterino Developer":
          userIdsWithChatterinoBadges.developer = badge.users;
          userIdsWithChatterinoBadges.developerUrl = badge.image3;
          break;
        case "Chatterino Special Pepe Badge":
          userIdsWithChatterinoBadges.specialPepe = badge.users;
          userIdsWithChatterinoBadges.specialPepeUrl = badge.image3;
          break;
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function fetchHomiesSubBadges() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/itzAlex/itzalex.github.io/master/badges');
    const data = await response.json();

    for (const badge of data.badges) {
      switch (badge.tooltip) {
        case "Homies Developer":
          userIdsWithHomiesBadges.developer = badge.users;
          userIdsWithHomiesBadges.developerUrl = badge.image3;
          break;
        case "Homies Supporter (Founder)":
          userIdsWithHomiesBadges.supporterFounder = badge.users;
          userIdsWithHomiesBadges.supporterFounderUrl = badge.image3;
          break;
        case "Homies Supporter":
          userIdsWithHomiesBadges.supporter = badge.users;
          userIdsWithHomiesBadges.supporterUrl = badge.image3;
          break;
        case "Homies Founder":
          userIdsWithHomiesBadges.founder = badge.users;
          userIdsWithHomiesBadges.founderUrl = badge.image3;
          break;
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function fetchHomiesModBadges() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/itzAlex/itzalex.github.io/master/badges2');
    const data = await response.json();

    for (const badge of data.badges) {
      switch (badge.tooltip) {
        case "Homies Mod":
          userIdsWithHomiesBadges.mod = badge.users;
          userIdsWithHomiesBadges.modUrl = badge.image3;
          break;
        case "Senior Homies Mod":
          userIdsWithHomiesBadges.seniorMod = badge.users;
          userIdsWithHomiesBadges.seniorModUrl = badge.image3;
          break;
      }
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

async function fetchChatsenBadges() {
  try {
    const response = await fetch(`https://raw.githubusercontent.com/chatsen/resources/master/assets/data.json`);
    const data = await response.json();

    for (const badge of data.badges) {
      switch (badge.name) {
        case "developer":
          userIdsWithChatsenBadges.developerUrl = badge.image;
          break;
        case "early_supporter":
          userIdsWithChatsenBadges.earlySupporterUrl = badge.image;
          break;
        case "early_bird":
          userIdsWithChatsenBadges.earlyBirdUrl = badge.image;
          break;
        case "performance_artist":
          userIdsWithChatsenBadges.artistUrl = badge.image;
          break;
        case "patreon_tier1":
          userIdsWithChatsenBadges.tier1Url = badge.image;
          break;
        case "patreon_tier1s":
          userIdsWithChatsenBadges.tier1sUrl = badge.image;
          break;
        case "patreon_tier2":
          userIdsWithChatsenBadges.tier2Url = badge.image;
          break;
        case "patreon_tier2s":
          userIdsWithChatsenBadges.tier2sUrl = badge.image;
          break;
        case "patreon_tier3":
          userIdsWithChatsenBadges.tier3Url = badge.image;
          break;
        case "patreon_tier3s":
          userIdsWithChatsenBadges.tier3sUrl = badge.image;
          break;
        case "patreon_tier4":
          userIdsWithChatsenBadges.tier4Url = badge.image;
          break;
        case "relaxo":
          userIdsWithChatsenBadges.relaxoUrl = badge.image;
          break;
        case "Chatsen Test Badge 1":
          userIdsWithChatsenBadges.testBadge1Url = badge.image;
          break;
        case "Chatsen Test Badge 2":
          userIdsWithChatsenBadges.testBadge2Url = badge.image;
          break;
      }
    }

    for (const user of data.users) {
      for (const badge of user.badges) {
        switch (badge.badgeName) {
          case "developer":
            userIdsWithChatsenBadges.developer.push(user.id);
            break;
          case "early_supporter":
            userIdsWithChatsenBadges.earlySupporter.push(user.id);
            break;
          case "early_bird":
            userIdsWithChatsenBadges.earlyBird.push(user.id);
            break;
          case "performance_artist":
            userIdsWithChatsenBadges.artist.push(user.id);
            break;
          case "patreon_tier1":
            userIdsWithChatsenBadges.tier1.push(user.id);
            break;
          case "patreon_tier1s":
            userIdsWithChatsenBadges.tier1s.push(user.id);
            break;
          case "patreon_tier2":
            userIdsWithChatsenBadges.tier2.push(user.id);
            break;
          case "patreon_tier2s":
            userIdsWithChatsenBadges.tier2s.push(user.id);
            break;
          case "patreon_tier3":
            userIdsWithChatsenBadges.tier3.push(user.id);
            break;
          case "patreon_tier3s":
            userIdsWithChatsenBadges.tier3s.push(user.id);
            break;
          case "patreon_tier4":
            userIdsWithChatsenBadges.tier4.push(user.id);
            break;
          case "relaxo":
            userIdsWithChatsenBadges.relaxo.push(user.id);
            break;
        }
      }
    }

    const patreonResponse = await fetch(`https://corsproxy.io/?url=https://api.chatsen.app/account/badges`);
    const patreonData = await patreonResponse.json();
    
    for (const tier of patreonData) {
      switch (tier.name) {
        case "Chatsen Patreon: Tier 1":
          userIdsWithChatsenBadges.tier1.push(...tier.users);
          break;
        case "Chatsen Patreon: Tier 2":
          userIdsWithChatsenBadges.tier2.push(...tier.users);
          break;
        case "Chatsen Patreon: Tier 3":
          userIdsWithChatsenBadges.tier3.push(...tier.users);
          break;
      }
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

async function getUserName(message) {
  try {
    const parts = message.split('display-name=');
    if (parts.length > 1) {
      const displayName = parts[1].split(';')[0].trim();
      if (displayName) return displayName;
    }
    
    const userIdMatch = message.match(/user-id=(\d+)/);
    if (userIdMatch) {
      const userId = userIdMatch[1];
      const response = await fetch(`https://api.ivr.fi/v2/twitch/user?id=${userId}`);
      const data = await response.json();
      if (data && data[0] && data[0].displayName) {
        return data[0].displayName;
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error getting username:', error);
    const parts = message.split('display-name=');
    if (parts.length > 1) {
      return parts[1].split(';')[0].trim();
    }
    return null;
  }
}

function getUsernameColor(message) {
  const parts = message.split(';color=');
  if (parts.length > 1) {
    return parts[1].split(';')[0].trim();
  }
  return null;
}

async function fetchBadges() {
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
    } else if (badgeName.includes("subscriber")) {
      const subBadge = SubBadgeDict[parseInt(message.split("badges=")[1].split("subscriber/")[1].match(/^\d+/)[0])];
      if (subBadge) {
        imgString += `<img class="badge" src="${subBadge}">`;
      } else {
        imgString += `<img class="badge" src="${customBadges['subscriber']}">`;
      }
    } else if (badgeName === "bits-leader") {
      const bitsLeaderBadgeUrl = customBadges[`bits-leader/${badgeId}`];
      if (bitsLeaderBadgeUrl) {
        imgString += `<img class="badge" src="${bitsLeaderBadgeUrl}">`;
      }
    } else if (badgeName === "moments") {
      const MomentsBadgeUrl = customBadges[`moments/${badgeId}`] || customBadges['moments'];
      imgString += `<img class="badge" src="${MomentsBadgeUrl}">`;
    } else if (badgeName === "sub-gifter") {
      const subGifterBadgeUrl = customBadges[`sub-gifter/${badgeId}`] || customBadges['sub-gifter'];
      imgString += `<img class="badge" src="${subGifterBadgeUrl}">`;
    } else if (badgeName === "founder") {
      const founderBadgeUrl = customBadges[`founder/${badgeId}`] || customBadges['founder'];
      imgString += `<img class="badge" src="${founderBadgeUrl}">`;
    } else if (badgeName.includes("bits")) {
      const bitsBadgeId = parseInt(message.split("badges=")[1].split("bits/")[1].match(/^\d+/)[0]);
      const bitsBadgeUrl = BitsBadgeDict[bitsBadgeId] || customBadges[`bits/${badgeId}`] || customBadges['predictions'];
      imgString += `<img class="badge" src="${bitsBadgeUrl}">`;
    } else if (badgeName === "predictions") {
      const predictionsBadgeUrl = customBadges[`predictions/${badgeId}`] || customBadges['predictions'];
      imgString += `<img class="badge" src="${predictionsBadgeUrl}">`;
    } else if (badgeName === "hype-train") {
      const hypetrainBadgeUrl = customBadges[`hype-train/${badgeId}`] || customBadges['hype-train'];
      imgString += `<img class="badge" src="${hypetrainBadgeUrl}">`;
    } else if (badgeName === "bits-leader") {
      const BitsLeaderBadgeUrl = customBadges[`bits-leader/${badgeId}`] || customBadges['bits-leader'];
      imgString += `<img class="badge" src="${BitsLeaderBadgeUrl}">`;
    } else if (badgeName === "sub-gift-leader") {
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
  if (message.split(`PRIVMSG #`)[1].split(" :")[0] == `${channel}`){
    return message.split(`PRIVMSG #${channel} :`)[1];
  }
}

function cleanup() {
    const chat = document.getElementById("chat");
    const messages = chat.getElementsByClassName("message");
    if (messages.length > 100) {
        while (messages.length > 100) {
            chat.removeChild(messages[0]);
        }
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

async function fetchBitsBadges(channel) {
  try {
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
      if (badgeSet.set_id === 'bits') {
        for (const version of badgeSet.versions) {
          const id = version.id;
          const imageUrl = version.image_url_4x;
          BitsBadgeDict[id] = imageUrl;
        }
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function reloadOverlay() {
  location.reload();
}

function replaceEmotes(message, emoteLinks) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(message, 'text/html');
  const textContent = doc.body.textContent || message;
  
  let words = textContent.split(' ');
  let newMessage = [];
  
  for (let word of words) {
    word = word.trim();
    if (word in emoteLinks) {
      newMessage.push(`<img class="emote" src="${emoteLinks[word]}">`);
    } else {
      newMessage.push(word);
    }
  }

  return newMessage.join(' ');
}

const url = new URL(window.location.href);
const searchParams = url.searchParams;
index = 0

channel = searchParams.get('channel').toLowerCase();
const size = parseInt(searchParams.get('size'));
if (!isNaN(size) && size >= 1 && size <= 100) {
    document.querySelector(':root').style.setProperty('--text-size', `${size}px`);
} else {
    document.querySelector(':root').style.setProperty('--text-size', '15px');
}

if (shadow = searchParams.get('shadow').toLowerCase() == "0"){document.querySelector(':root').style.setProperty('--text-shadow', 'none');}
if (shadow = searchParams.get('shadow').toLowerCase() == "1"){document.querySelector(':root').style.setProperty('--text-shadow', `1px 1px 2px rgba(0, 0, 0, 0.5)`);}
if (shadow = searchParams.get('shadow').toLowerCase() == "2"){document.querySelector(':root').style.setProperty('--text-shadow', `1px 1px 3px rgba(0, 0, 0, 0.7)`);}

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

async function channeltoid(channel) {
  channel = searchParams.get('channel').toLowerCase();
  try {
    const response = await fetch(`https://api.ivr.fi/v2/twitch/user?login=${channel}`);
    const data = await response.json();
    const userData = data[0];
    let channelID = userData.id;

    return channelID;

  } catch(error) {
    console.error(error);
    return null;
  }
}

async function fetchEmotes(channel){
  channel = searchParams.get('channel').toLowerCase();
  const channelID = await channeltoid(channel)
  try {
    const userByConnectionQuery = {
      query: `
      query UserByConnection {
          userByConnection(platform: "TWITCH", id: "${channelID}") {
              connections {
                  emote_set_id
              }
          }
      }`
  };

  const response = await fetch('https://7tv.io/v3/gql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userByConnectionQuery)
  });

  const data = await response.json();
  if (data.data && data.data.userByConnection && data.data.userByConnection.connections.length > 0) {
      emoteSetId = data.data.userByConnection.connections[0].emote_set_id;
  }
} catch (error) {
  console.error('Error getting emote set ID:', error);
  return;
}

if (!emoteSetId) {
  console.error('No emote set ID found for this channel.');
  return;
}

try {
  const emoteSetQuery = {
      query: `
      query EmoteSet {
          emoteSet(id: "${emoteSetId}") {
              emotes {
                  id
                  name
                  data {
                      host {
                          url
                      }
                  }
              }
          }
      }`
  };

  const response = await fetch('https://7tv.io/v3/gql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emoteSetQuery)
  });

  const emoteSetData = await response.json();
  const emotes = emoteSetData.data.emoteSet.emotes;

  for (let i = 0; i < emotes.length; i++) {
      const emoteUrl = emotes[i].data.host.url;
      const emoteName = emotes[i].name;
      emote_links[emoteName] = `https:${emoteUrl}/4x.webp`;
  } } catch (error) {
    console.error('Error:', error);
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
    const channelID = await channeltoid(channel)
    const response = await fetch(`https://api.frankerfacez.com/v1/room/id/${channelID}`);
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

async function fetch7tvBadge(userid) {
  try {
      let response = await fetch(`https://7tv.io/v3/users/twitch/${userid}`);
      let data = await response.json();
      
      if (data.status_code === 404) {
          sevenTvBadges[userid] = "";
          return "";
      }
      
      let SevenTvID = data.user.id;

      response = await fetch(`https://7tv.io/egvault/v1/subscriptions/${SevenTvID}`);
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
              let badgeUrl = `https://cdn.7tv.app/badge/${cosmetic.id}/4x`;
              sevenTvBadges[userid] = badgeUrl;
              return badgeUrl;
          }
      }

      sevenTvBadges[userid] = "";
      return "";
      
  } catch (error) {
      console.error('Err:', error);
      sevenTvBadges[userid] = "";
      return "";
  }
}

async function fetch7tvPaint(userid) {
    try {
        let responseid = await fetch(`https://7tv.io/v3/users/twitch/${userid}`);
        let dataid = await responseid.json();
        
        if (dataid.status_code === 404) {
            return null;
        }
        
        let SevenTvID = dataid.user.id;

        responsesub = await fetch(`https://7tv.io/egvault/v1/subscriptions/${SevenTvID}`);
        datasub = await responsesub .json();
        
        if (datasub.status_code === 404 || datasub.active === false) {
            return null;
        }

        const response = await fetch("https://7tv.io/v3/gql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                operationName: "User",
                variables: { id: SevenTvID },
                query: `
                    query User($id: ObjectID!) {
                        user(id: $id) {
                            style {
                                paint_id
                                paint {
                                    id
                                    name
                                    function
                                    color
                                    stops {
                                        at
                                        color
                                    }
                                    repeat
                                    angle
                                    shape
                                    image_url
                                    shadows {
                                        x_offset
                                        y_offset
                                        radius
                                        color
                                    }
                                }
                            }
                        }
                    }
                `
            })
        });
        
        const data = await response.json();
        
        if (data.data?.user?.style?.paint) {
            return data.data.user.style.paint;
        }
        return null;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

function applyPaintStyle(paint, baseColor) {    
    let style = '';
    
    if (paint.function === 'LINEAR_GRADIENT' && paint.stops && paint.stops.length) {
        const gradientStops = paint.stops.map(stop => {
            const colorString = '#' + (stop.color >>> 0).toString(16).padStart(8, '0');
            return `${colorString} ${stop.at * 100}%`;
        });
        const gradientDirection = `${paint.angle}deg`;
        const gradient = paint.repeat
            ? `repeating-linear-gradient(${gradientDirection}, ${gradientStops.join(', ')})`
            : `linear-gradient(${gradientDirection}, ${gradientStops.join(', ')})`;
            
        style += `
            background-image: ${gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        `;
    } 
    else if (paint.function === 'RADIAL_GRADIENT' && paint.stops && paint.stops.length) {
        const gradientStops = paint.stops.map(stop => {
            const colorString = '#' + (stop.color >>> 0).toString(16).padStart(8, '0');
            return `${colorString} ${stop.at * 100}%`;
        });
        const gradient = paint.repeat
            ? `repeating-radial-gradient(circle, ${gradientStops.join(', ')})`
            : `radial-gradient(circle, ${gradientStops.join(', ')})`;
            
        style += `
            background-image: ${gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        `;
    }
    else if (paint.function === 'URL' && paint.image_url) {
        style += `
            background-image: url('${paint.image_url}');
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            background-size: cover;
            ${paint.repeat ? 'background-repeat: repeat;' : 'background-repeat: no-repeat;'}
        `;
    }
    
    if (paint.shadows && paint.shadows.length) {
        const dropShadows = paint.shadows.map(shadow => {
            const colorString = '#' + (shadow.color >>> 0).toString(16).padStart(8, '0');
            return `drop-shadow(${colorString} ${shadow.x_offset}px ${shadow.y_offset}px ${shadow.radius}px)`;
        });
        style += `filter: ${dropShadows.join(' ')};`;
    }
    
    return `
        display: inline-block;
        ${style}
    `;
}

async function fetchPersonalEmote(userid) {
  try {
    const userByConnectionQuery = {
        query: `
        query UserByConnection {
            userByConnection(platform: "TWITCH", id: "${userid}") {
                emote_sets {
                    id
                    name
                    flags
                    owner_id
                }
            }
        }`
    };

    const response = await fetch('https://7tv.io/v3/gql', {
      method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userByConnectionQuery)
    });

    const data = await response.json();
    if (data.data && data.data.userByConnection && data.data.userByConnection.emote_sets.length > 0) {
        const emoteSets = data.data.userByConnection.emote_sets;

        for (let i = 0; i < emoteSets.length; i++) {
            if (emoteSets[i].flags === 4) {
                personalEmoteSetId = emoteSets[i].id;
                break;
            }
        }
    }
} catch (error) {
    console.error('Error:', error);
    return;
}

if (!personalEmoteSetId) {
    return;
}

try {
    const emoteSetQuery = {
        query: `
        query EmoteSet {
            emoteSet(id: "${personalEmoteSetId}") {
                emotes {
                    id
                    name
                    data {
                        host {
                            url
                        }
                    }
                }
            }
        }`
    };

    const response = await fetch('https://7tv.io/v3/gql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emoteSetQuery)
    });

    const emoteSetData = await response.json();
    const emotes = emoteSetData.data.emoteSet.emotes;

    for (let i = 0; i < emotes.length; i++) {
        const emoteUrl = emotes[i].data.host.url;
        const emoteName = emotes[i].name;
        emote_links[emoteName] = `https:${emoteUrl}/4x.webp`;
    }
} catch (error) {
    console.error('Error:', error);
}
}

function generateRandomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
  }
  return result;
}

const socket = new WebSocket("wss://irc-ws.chat.twitch.tv:443");
socket.addEventListener('open', () =>{
  socket.send(`PASS oauth:` + generateRandomString(10));
  socket.send(`NICK justinfan` + Math.floor(Math.random() * 99999));
  socket.send(`JOIN #${channel}`);
  socket.send(`CAP REQ :twitch.tv/commands twitch.tv/membership twitch.tv/tags`);
  document.getElementById("chat").innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"
})

async function start(){
  const loadingStatus = document.getElementById("loadingStatus");
  loadingStatus.innerHTML = "Loading";
  
  try {
    await Promise.all([
      fetchBadges(),
      fetchSubBadges(channel),
      fetchBitsBadges(channel),
      fetchFFZModVipBadges(channel),
      fetchEmotes(channel),
      fetchlolnotAPI(),
      fetchChatterino(),
      fetchDankBadges(),
      fetchFFZAPI(),
      fetchHomiesBadges(),
      fetchHomiesSubBadges(),
      fetchHomiesModBadges(),
      fetchChatsenBadges()
    ]);
    
    loadingStatus.remove();
    document.getElementById("loading").remove();
    document.getElementById("chat").style.boxShadow = "none";
  } catch (error) {
    console.error('Failed to initialize:', error);
  }
}

start().then(() => {
  setInterval(cleanup, 5000);
  setInterval(updateEmotes, 60000);
});

async function handleCommand(message){
if (message.startsWith(`!lellolchat reload`)){
  location.reload();
}
}

socket.addEventListener('message', async event => {
  console.log(event.data);
  if (event.data.includes("PING")) {
      socket.send(`PONG`);
  }

  if (event.data.includes("CLEARCHAT")) {
    const targetUserMatch = event.data.match(/target-user-id=(\d+)/);
    if (targetUserMatch) {
      const targetUserId = targetUserMatch[1];
      const messages = document.getElementsByClassName("message");
      Array.from(messages).forEach(message => {
        if (message.getAttribute("data-user-id") === targetUserId) {
          message.remove();
        }
      });
    } else if (event.data.includes(`:tmi.twitch.tv CLEARCHAT #`)) {
      document.getElementById("chat").innerHTML = "";
    }
  }

  if (event.data.includes("PRIVMSG")) {
      const message = getMessage(event.data);
      const messageChannel = event.data.split(`PRIVMSG #`)[1].split(" :")[0];
      const username = await getUserName(event.data);
      const usernameColor = getUsernameColor(event.data);
      const badgesInfo = getBadgeNames(event.data);

      const emotes = {};
      const emotesMatch = event.data.match(/emotes=([^;]*)/);
      if (emotesMatch && emotesMatch[1] !== '') {
          const emotesList = emotesMatch[1].split('/');

          emotesList.forEach(emote => {
              const [emoteId, positions] = emote.split(':');

              positions.split(',').forEach(position => {
                  const [start, end] = position.split('-');
                  emotes[emoteId] = {
                      start: parseInt(start),
                      end: parseInt(end)
                  };
              });
          });
      }

      let userId = null;
      const userIdMatch = event.data.match(/;user-id=(\d+);/);
      if (userIdMatch) {
          userId = userIdMatch[1];
      }

      await fetchPersonalEmote(userId);

      if (messageChannel == "lellol800"){
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

          if (userId) {
            Object.keys(userIdsWithChatterinoBadges).forEach(key => {
              if (key.endsWith('Url')) return;
              if (userIdsWithChatterinoBadges[key].includes(userId)) {
                const urlKey = key + 'Url';
                badgesImg += `<img class="badge" src="${userIdsWithChatterinoBadges[urlKey]}">`;
              }
            });
          }

          //FFZ
          if (userId) {
            if (ffzdeveloper.includes(parseInt(userId))) {
                badgesImg += `<img class="badge" src="${BadgeffzDeveloper}" style="background-color: rgb(250, 175, 25); border-radius: 10%;">`;
            }
            if (ffzBot.includes(parseInt(userId))) {
                badgesImg += `<img class="badge" src="${BadgeffzBot}" style="background-color: rgb(89, 89, 89); border-radius: 10%;">`;
            }
            if (ffzSupporter.includes(parseInt(userId))) {
                badgesImg += `<img class="badge" src="${BadgeffzSupporter}" style="background-color: rgb(117, 80, 0); border-radius: 10%;">`;
            }
            if (ffzSubwoofer.includes(parseInt(userId))) {
                badgesImg += `<img class="badge" src="${BadgeffzSubwoofer}" style="background-color: rgb(61, 100, 182); border-radius: 10%;">`;
            }
        }

        if (userId) {
          if (userIdsWithChatsenBadges.developer.includes(userId)) {
            badgesImg += `<img class="badge" src="${userIdsWithChatsenBadges.developerUrl}">`;
          }
          if (userIdsWithChatsenBadges.earlySupporter.includes(userId)) {
            badgesImg += `<img class="badge" src="${userIdsWithChatsenBadges.earlySupporterUrl}">`;
          }
          if (userIdsWithChatsenBadges.earlyBird.includes(userId)) {
            badgesImg += `<img class="badge" src="${userIdsWithChatsenBadges.earlyBirdUrl}">`;
          }
        }

          const sevenTVBadgeUrl = await fetch7tvBadge(userId);
          if (sevenTVBadgeUrl) {
            badgesImg += `<img class="badge" src="${sevenTVBadgeUrl}">`;
          }

          if (userId && lolnotAdmins.includes(userId)) {
            badgesImg += `<img class="badge" src="${AdminBadge}">`;
          }
          if (userId && lolnotMods.includes(userId)) {
            badgesImg += `<img class="badge" src="${ModBadge}">`;
          }
          if (userId && lolnotContributor.includes(userId)) {
            badgesImg += `<img class="badge" src="${ContibutorBadge}">`;
          }
          if (userId && lolnotFounders.includes(userId)) {
            badgesImg += `<img class="badge" src="${FounderBadge}">`;
          }
    
          if (userId && userId in DankBadges) {
            const badgeUrls = DankBadges[userId];
            badgeUrls.forEach(badgeUrl => {
              badgesImg += `<img class="badge" src="${badgeUrl}">`;
            });
          }
          if (userId && userId in HomiesBadges) {
            badgesImg += `<img class="badge" src="${HomiesBadges[userId]}">`;
          }
          if (userId) {
            Object.keys(userIdsWithHomiesBadges).forEach(key => {
              if (key.endsWith('Url')) return;
              if (userIdsWithHomiesBadges[key].includes(userId)) {
                const urlKey = key + 'Url';
                badgesImg += `<img class="badge" src="${userIdsWithHomiesBadges[urlKey]}">`;
              }
            });
          }
        }
        
        let processedMessage = escapeHtml(message);
        
        if (Object.keys(emotes).length > 0) {
            const sortedEmotes = Object.entries(emotes).sort((a, b) => b[1].end - a[1].end);
            for (const [emoteId, positions] of sortedEmotes) {
                const emoteUrl = `https://static-cdn.jtvnw.net/emoticons/v2/${emoteId}/default/dark/3.0`;
                const emoteText = message.substring(positions.start, positions.end + 1);
                processedMessage = processedMessage.split(emoteText).join(`<img class="emote" src="${emoteUrl}">`);
            }
        }
        
        let words = processedMessage.split(' ');
        processedMessage = words.map(word => {
            word = word.trim();
            return emote_links[word] ? `<img class="emote" src="${emote_links[word]}">` : word;
        }).join(' ');
        
        if(message.includes("ACTION")){
            requestAnimationFrame(() => {
                document.getElementById("chat").innerHTML += (
                    `<p class="message">${badgesImg} <span style="${usernameStyle}">${username}</span> <span style="color:${usernameColor};">${processedMessage}</span><br>`
                );
                scrollToBottom();
            });
        } else {   
            const paintData = await fetch7tvPaint(userId);
            let usernameStyle = '';
            
            if (paintData) {
                usernameStyle = `
                    color: ${usernameColor};
                    display: inline-block;
                    ${applyPaintStyle(paintData, usernameColor)}
                `;
            } else {
                usernameStyle = `color: ${usernameColor};`;
            }
            
            requestAnimationFrame(() => {
                document.getElementById("chat").innerHTML += (
                    `<p class="message" data-user-id="${userId}">${badgesImg} <span style="${usernameStyle}">${username}</span><span style="color: white;">: ${processedMessage}</span></p>`
                );
                scrollToBottom();
            });
        }
      }
    }
  }
});

function scrollToBottom(){
  const chat = document.getElementById("chat");
  chat.scrollTop = chat.scrollHeight;
}

async function updateEmotes() {
  try {
    await fetchEmotes(channel);
  } catch (error) {
    console.error('Failed to update emotes:', error);
  }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

socket.addEventListener('close', () => {
  setTimeout(() => {
    window.location.reload();
  }, 1000);
});

socket.addEventListener('error', () => {
  setTimeout(() => {
    window.location.reload();
  }, 1000);
});

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
