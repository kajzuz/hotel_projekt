/*Homepage*/
const menuEl = document.getElementById("menu");
const menuButtonEl = document.getElementById("menuButton");

function addClass (){
   menuEl.classList.toggle("menuNav");
}

menuButtonEl.addEventListener('click', addClass);


/*Contactpage*/ 
const sendEl = document.getElementById("Send");
const contactFormEl = document.getElementById("contactForm");

if(sendEl != null){
   sendEl.addEventListener('click', function saySend(){
      contactFormEl.innerHTML= "Thank you!\nYour message is sent!";
   });
}

/*function saySend(){
alert("Thank you!\nWe have received your message!");
}

sendEl.addEventListener('click', saySend);*/