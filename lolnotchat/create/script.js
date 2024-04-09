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

function createLink() {
  values['channel'] = document.getElementById("channel").value;
  values['size'] = document.getElementById("size").value;
  values['shadow'] = document.getElementById("shadow").value;
  values['background'] = document.getElementById("background").value;
  values['font'] = document.getElementById("font").value;

  link = `https://lellolidk.de/lolnotchat?ch=${values['channel']}&si=${values['size']}&sh=${values['shadow']}&bg=${values['background']}&fo=${values['font']}&an=${values['animated']}&ba=${values['badges']}&sb=${values['special_badges']}&bo=${values['bots']}&co=${values['commands']}`;
  return link;
}

function copyLink(){
  // Get the text field
  var copyText = document.getElementById("output_link");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}
