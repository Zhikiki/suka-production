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
  if (!validatePhone() || !validateEmail()) {
    alert('Form not submitted'); //Validation Message
    return false;
  } else {
    submitted = true;
    return true;
  }
}

function showThankYouModal(params) {
  alert('thank you modal will be shown');
}

// // let submitted = false;

// function validateEmail() {
//   let emailInputValue = document.getElementById('email').value;

//   if (emailInputValue.length == 0) {
//     alert("Email can't be blank"); //Validation Message
//     return false;
//   }
//   if (
//     !emailInputValue.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
//   ) {
//     alert('Please enter a correct email address'); //Validation Message
//     return false;
//   }

//   return true;
// }

// function validatePhone() {
//   let phoneInputValue = document.getElementById('tel').value;
//   if (phoneInputValue.length == 0) {
//     alert("Phone number can't be blank"); //Validation Message
//     return false;
//   }

//   if (
//     !phoneInputValue.match(/^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g)
//   ) {
//     alert('Please enter a correct phone number'); //Validation Message
//     return false;
//   }

//   return true;
// }

// function validateContactForm(contactFormEvent) {
//   if (!validateEmail() || !validatePhone()) {
//     alert('Form not submitted need another message');
//     return false;
//   } else {
//     alert('Form is submitted');
//     document.querySelector('#contact-form').submit();
//     // submitted = true;
//     // window.location = 'http://developer.mozilla.org';
//     return true;
//   }
// }

// document.querySelector('#contact-form').addEventListener('submit', (event) => {
//   // console.log(event);
//   window.location = 'http://developer.mozilla.org';
//   console.log(event);
// });
