function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

values = {
"animated" : 0,
"badges" : 0,
"special_badges" : 0,
"bots" : 0,
"commands" : 0,
"twitch_badges" : 0,
"ffz_badges" : 0,
"seventv_badges" : 0,
"bttv_badges" : 0,
"chatsen_badges" : 0,
"chatterino_badges" : 0,
"homies_badges" : 0
}

async function toggle(element){
  if (element == "animated"){
    if (values[element] == 0){
      document.getElementById(element).style.background = "#ed1c43"
      document.getElementById(element).style.backgroundImage = "url('check.svg')"
      values[element] = 1
    }
    else{
      document.getElementById(element).style.background = "#313131"
      document.getElementById(element).style.backgroundImage = "none"
      values[element] = 0
    }
  }
  else{
    if (values[element] == 0){
      document.getElementById(element).style.background = "#00ffa2"
      document.getElementById(element).style.backgroundImage = "url('check.svg')"
      values[element] = 1
    }
    else{
      document.getElementById(element).style.background = "#313131"
      document.getElementById(element).style.backgroundImage = "none"
      values[element] = 0
    }
  }
}

function copyLink(){
  var copyText = document.getElementById("output_link");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
}

function createLink() {
  const channel = document.getElementById("channel").value;
  
  if (!channel) {
    alert("You need to enter an Channel");
    return ""; 
  }
  values['channel'] = document.getElementById("channel").value;
  values['size'] = document.getElementById("size").value;
  values['shadow'] = document.getElementById("shadow").value;
  values['background'] = document.getElementById("background").value;
  values['font'] = document.getElementById("font").value;

  const badgeTypes = ['twitch_badges', 'ffz_badges', 'seventv_badges', 'bttv_badges', 
                     'chatsen_badges', 'chatterino_badges', 'homies_badges'];
  
  link = `https://lellolidk.de/stream/chatoverlay/?channel=${values['channel']}&size=${values['size']}&shadow=${values['shadow']}&background=${values['background']}&font=${values['font']}&animated=${values['animated']}&badges=${values['badges']}&special_badges=${values['special_badges']}&bots=${values['bots']}&commands=${values['commands']}`;
  
  if (values['badges'] === 1) {
    badgeTypes.forEach(type => {
      link += `&${type}=${values[type]}`;
    });
  }
  
  copyLink();
  copyLink();
  copyLink();
  return link;
}

function toggleBadge(badgeType) {
    const checkbox = document.getElementById(badgeType);
    values[badgeType] = checkbox.checked ? 1 : 0;
}

document.getElementById('badges').addEventListener('click', function() {
    const badgeOptions = document.getElementById('badge_options');
    if (values['badges'] === 1) {
        badgeOptions.style.display = 'block';
    } else {
        badgeOptions.style.display = 'none';
        const badgeTypes = ['twitch_badges', 'ffz_badges', 'seventv_badges', 'bttv_badges', 
                          'chatsen_badges', 'chatterino_badges', 'homies_badges'];
        badgeTypes.forEach(type => {
            document.getElementById(type).checked = false;
            values[type] = 0;
        });
    }
});
