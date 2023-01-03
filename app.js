/*Homepage*/
const menuEl = document.getElementById("menu");
const menuButtonEl = document.getElementById("menuButton");

function addClass (){
   menuEl.classList.toggle("menuNav");
}

menuButtonEl.addEventListener('click', addClass);

const sendEl = document.getElementById("Send");

function saySend(){
   alert("Thank you!\nWe have received your message!");
}

sendEl.addEventListener('click', saySend);