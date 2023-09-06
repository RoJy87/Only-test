const page = document.querySelector('.main');
const buttonsList = page.querySelectorAll('.buttons-list__item');

function closePopup(buttonItem, button, text) {
  if (buttonItem) {
    buttonItem.classList.remove('active');
    button.textContent = '+';
    text.classList.add('hidden');
  }
}

function closeAllPopups() {
  buttonsList.forEach((buttonItem) => {
    if (buttonItem.classList.contains('active')) {
      const button = buttonItem.querySelector('.button');
      const text = buttonItem.querySelector('.button__text');
      buttonItem.classList.remove('active');
      button.textContent = '+';
      text.classList.add('hidden');
    }
  });
}

function openPopup(buttonItem, button, text) {
  if (buttonItem) {
    buttonItem.classList.add('active');
    button.textContent = '-';
    text.classList.remove('hidden');
  }
}

function handleClickButton(e) {
  const targets = e.target.classList;
  if (
    targets.contains('button') ||
    targets.contains('button__text') ||
    targets.contains('buttons-list__item')
  ) {
    const buttonItem = targets.contains('buttons-list__item')
      ? e.target
      : e.target.closest('.buttons-list__item');
    const button = buttonItem.querySelector('.button');
    const text = buttonItem.querySelector('.button__text');

    buttonItem.classList.contains('active')
      ? closePopup(buttonItem, button, text)
      : openPopup(buttonItem, button, text);
  }
  if (targets.contains('buttons-list')) {
    closeAllPopups();
  }
}

page.addEventListener('click', handleClickButton);
