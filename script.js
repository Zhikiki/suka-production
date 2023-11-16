function showModal(targetModal) {
  let modalContainer = document.getElementById(
    `${targetModal}-modal-container`
  );
  modalContainer.classList.add('modal-container');

  let closeModalButton = document.querySelectorAll(
    '.close-modal-btn, .back-to-main'
  );
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


let showModalButtons = document.querySelectorAll('.show-modal-btn');

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

// Contact form validation and submission

var submitted = false;

function validateName() {
  var name = document.getElementById('name').value;
  if (name.length == 0) {
    alert("Name can't be blank");
    return false;
  }
  if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
    alert('Please enter your correct name'); //Validation Message
    return false;
  }
  return true;
}

function validatePhone() {
  var phone = document.getElementById('tel').value;
  if (phone.length == 0) {
    alert("Phone number can't be blank"); //Validation Message
    return false;
  }

  if (!phone.match(/^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g)) {
    alert('Please enter a correct phone number'); //Validation Message
    return false;
  }

  return true;
}

function validateEmail() {
  var email = document.getElementById('email').value;
  if (email.length == 0) {
    alert("Email can't be blank"); //Validation Message
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    alert('Please enter a correct email address'); //Validation Message
    return false;
  }

  return true;
}

function validateForm() {
  if (!validateName || !validatePhone() || !validateEmail()) {
    alert('Form not submitted'); //Validation Message
    return false;
  } else {
    submitted = true;
    return true;
  }
}

document.getElementById('hidden_iframe').addEventListener('load', (event) => {
  if (submitted) {
    document.querySelector('#contact-form').reset();
    closeModal(document.querySelector('.modal-container'));
    showModal('thank-you');
  }
});