var happy = document.querySelector('.happy');
var sad = document.querySelector('.sad');
var messageSpace = document.querySelector('.message');

happy.addEventListener('click', happyMessage);
sad.addEventListener('click', sadMessage);

happyMessages = ['Im so happy excited!!', 'WOOHOO lets have some fun!', 'My code is actually working!', 'Its Friday!'];
sadMessages = ['Lets get some ice cream to cheer up.', 'Lets listen to sad songs together.', 'My code doesnt work'];

function happyMessage() {
  var num = Math.floor(Math.random() * happyMessages.length);
  var message = happyMessages[num];
  messageSpace.innerText = message;
}

function sadMessage() {
  var num = Math.floor(Math.random() * sadMessages.length);
  var message = sadMessages[num];
  messageSpace.innerText = message;
}
