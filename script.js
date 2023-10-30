function showModal(targetModal) {
  let modalContainer = document.getElementById(
    `${targetModal}-modal-container`
  );
  modalContainer.classList.add('modal-container');

  let closeModalButton = document.querySelectorAll('.close-modal-btn');
  closeModalButton.forEach((item) => {
    item.addEventListener('click', () => {
      closeModal(modalContainer);
    });
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal(modalContainer);
    }
  });

  modalContainer.addEventListener('click', (event) => {
    if (event.target == modalContainer) {
      closeModal(modalContainer);
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

function closeModal(modalContainer) {
  modalContainer.classList.remove('modal-container');
}
