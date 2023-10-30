function showModal(targetModal) {
  let modalContainer = document.getElementById(
    `${targetModal}-modal-container`
  );
  modalContainer.classList.add('modal-container');

  let closeModalButton = document.querySelectorAll('.close-modal-btn');
  closeModalButton.forEach((item) => {
    item.addEventListener('click', () => {
      let message = 'close button is being clicked';
      closeModal(message, modalContainer);
    });
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      let message = 'Esc key is being clicked';
      closeModal(message, modalContainer);
    }
  });

  modalContainer.addEventListener('click', (event) => {
    if (event.target == modalContainer) {
      let message = 'Modal container is being clicked';
      closeModal(message, modalContainer);
    }
  });
}

let showModalButtons = document.querySelectorAll('a.info-block');

showModalButtons.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    let targetModal = event.target.getAttribute('title');
    showModal(targetModal);
  });
});

function closeModal(message, modalContainer) {
  console.log(message);
  modalContainer.classList.remove('modal-container');
}
