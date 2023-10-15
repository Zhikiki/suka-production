// var heightPage = document.querySelector('.page-container').offsetHeight;
// console.log(heightPage);

// document.querySelector('.highlights-modal').style.height =
//   document.querySelector('.page-container').offsetHeight;

// var heightModal = document.querySelector('.highlights-modal').offsetHeight;
// console.log(heightModal);

function showModal(targetModal) {
  // Shows modal according to the title of the element, which was clicked
  let modalTitle = targetModal.getAttribute('title');

  let modalContainer = document.getElementById(`${modalTitle}-modal-container`);
  modalContainer.classList.add('modal-container');
  console.log(modalContainer);

  // Call close modal function when user tap on modal container
  modalContainer.addEventListener('click', (event) => {
    let target = event.target;
    if (target === modalContainer) {
      closeModal();
    }
  });
}

// Click the button, call modal with corresponding title
let showModalButton = document.querySelectorAll('a.info-block');

showModalButton.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    let targetModal = event.target;

    showModal(targetModal);
  });
});

// Function closes modal
function closeModal() {
  let modalContainer = document.querySelector('.modal-container');
  console.log(modalContainer);
  modalContainer.classList.remove('modal-container');
}

// Call close modal function when user press Esc button on keyboard
window.addEventListener('keydown', (event) => {
  let modalContainer = document.querySelector('.modal-container');
  if (modalContainer && event.key === 'Escape') {
    closeModal();
  }
});
// Call close modal function when user press 'Close' button in modal
document.querySelector('.close-modal-btn').addEventListener('click', () => {
  closeModal();
});
