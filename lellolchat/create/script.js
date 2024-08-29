function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

values = {
"animated" : 0,
"badges" : 0,
"special_badges" : 0,
"bots" : 0,
"commands" : 0
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

  link = `https://lellolidk.de/lolnotchat?channel=${values['channel']}&size=${values['size']}&shadow=${values['shadow']}&background=${values['background']}&font=${values['font']}&animated=${values['animated']}&badges=${values['badges']}&special_badges=${values['special_badges']}&bots=${values['bots']}&commands=${values['commands']}`;
  copyLink();
  copyLink();
  copyLink();
  return link;
}

toggle("badges")
toggle("special_badges")
toggle("bots")
toggle("commands")