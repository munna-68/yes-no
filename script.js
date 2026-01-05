const yesBtn = document.querySelector('.yes')
const noBtn = document.querySelector('.no')
const container = document.querySelector('.container')
const popUpModal = document.querySelector('.pop-up-modal')
const emojiHolder = document.querySelector('.emoji-holder')

noBtn.addEventListener('click', () => {
  container.classList.add('no')
  popUpModal.classList.add('hidden')
  emojiHolder.classList.remove('hidden')
})

