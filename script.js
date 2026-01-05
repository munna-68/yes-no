const yesBtn = document.querySelector('.yes')
const noBtn = document.querySelector('.no')
const container = document.querySelector('.container')
const popUpModal = document.querySelector('.pop-up-modal')
const emojiHolder = document.querySelector('.emoji-holder')

let number = {
  random(min, max) {
    let number
    if(min && max) {
      number = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      number = Math.floor(Math.random() * 2)
    }
    return number
  }
}

noBtn.addEventListener('click', () => {
  container.classList.add('no')
  popUpModal.classList.add('hidden')
  emojiHolder.classList.remove('hidden')
})

yesBtn.addEventListener('mouseenter', () => {
  yesBtn.style.position = 'absolute'

  yesBtn.style.top = 'auto'
  yesBtn.style.bottom = 'auto'
  yesBtn.style.left = 'auto'
  yesBtn.style.right = 'auto'

  if(number.random() % 2 === 1 ) {
    yesBtn.style.top = number.random(20, window.innerHeight - 100) + 'px'
    yesBtn.style.left = number.random(20, window.innerHeight - 100) + 'px'
  } else {
    yesBtn.style.bottom = number.random(20, window.innerHeight - 100) + 'px'
    yesBtn.style.right = number.random(20, window.innerHeight - 100) + 'px'
  }
  
})