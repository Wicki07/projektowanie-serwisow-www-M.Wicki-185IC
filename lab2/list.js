var inputText = document.querySelector(".recipient");

var newInputText = document.createElement("input");
newInputText.setAttribute('type', 'text');
newInputText.setAttribute('value', 'Change recipient name');
newInputText.setAttribute('id', 'inputRecipient')
newInputText.style.setProperty('padding', '2px 0px 2px 0')
inputText.appendChild(newInputText);

var input = document.getElementById("inputRecipient");
input.addEventListener("keydown", event => {
  if (event.key === 'Enter') {
    var sender = document.querySelector(".recipient1");
    sender.innerText = input.value;
  }
});
var divPlaceDate = document.querySelector(".city span");
var today = new Date();
var date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
divPlaceDate.innerText = 'Wejherowo \n' + date;

var inputText = document.querySelector(".sign");
var newInputText = document.createElement("input");
newInputText.setAttribute('type', 'text');
newInputText.setAttribute('value', 'Change sender name');
newInputText.setAttribute('id', 'inputSign')
newInputText.style.setProperty('padding', '2px 0px 2px 0')
inputText.appendChild(newInputText);

var input = document.getElementById("inputSign");
input.addEventListener("keydown", event => {
  if (event.key === 'Enter') {
    var sender = document.querySelector(".sender1");
    var senderSign = document.querySelector(".senderSign");
    sender.innerText = input.value;
    senderSign.innerText = input.value;
  }
});
function darktheme() {
    var navbar = document.querySelector(".bg-dark");
    var divtext = document.querySelector(".letter");
    if(navbar.style.backgroundColor == ''){
      navbar.setAttribute("style","background-color: green !important");
      document.body.style.backgroundColor = "black";
      divtext.setAttribute("style","color: white !important");
    } else {
      navbar.style.backgroundColor = "";
      document.body.style.backgroundColor = "white";
      divtext.setAttribute("style","color: black !important");
    }
    }