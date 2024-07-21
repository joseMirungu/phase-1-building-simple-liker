
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

/
document.getElementById('modal').classList.add('hidden');


function handleHeartClick(event) {
  const heart = event.target;

  mimicServerCall()
    .then(() => {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.classList.add('activated-heart');
      } else {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      }
    })
    .catch((error) => {
      const modal = document.getElementById('modal');
      const modalMessage = document.getElementById('modal-message');
      modal.classList.remove('hidden');
      modalMessage.innerText = error;
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 3000);
    });
}


document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.like-glyph');
  hearts.forEach(heart => {
    heart.addEventListener('click', handleHeartClick);
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
