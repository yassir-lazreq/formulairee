const form = document.getElementById('myForm');
const dateInput = document.getElementById('date');
const phoneInput = document.getElementById('phone');
const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const textInput = document.getElementById('test');
const thankYouMessage = document.getElementById('thankYouMessage');

async function onSubmit () {
  // event.preventDefault();

  // Hide all previous error messages
  hideErrors();



  if (nameInput.value === "") {
    showError('Name is Required',"nameError");
    return;
  }


  const emailRegxt = /^[A-Z-a-z-0-9]+@([a-z]+.)+[a-z]{2,3}$/;
  
  if (!emailRegxt.test(email.value)) {
    showError('email is Required',"emailError");
    return;
  }


    // Date validation
  const currentDate = new Date();
  const selectedDate = new Date(dateInput.value);

  const minDate = new Date('2000-01-01');
  const maxDate = new Date('2024-12-31');
  if (selectedDate >= minDate && selectedDate <= maxDate && selectedDate !== "") {
   
  }
  else{
    showError('Date should be between 2000 and 2024.',"dateError");
    return;
  }



  // Phone number validation
  const phonePattern =  /^\+212[ -]?\d{9}$/;

  if (!phonePattern.test(phoneInput.value)) {
    showError('Phone number should be in the format +212xxxxxxxxx.',"phoneError");
    return;
  }




  // Text validation
  const textInput = document.getElementById('text');
  
  if (!textInput.value.trim()) {
    showError('Text is required.',"textError");
    return;
  }


 await showThankYouMessage(nameInput.value, email.value, phoneInput.value);




}

function hideErrors() {
  const errorElements = document.querySelectorAll('.error');
  errorElements.forEach((errorElement) => {
    errorElement.style.display = 'none';
  });
}


function showError(message,id) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }






function showThankYouMessage(name, email, phone) {
  form.style.display = 'none'; // Hide the form
  thankYouMessage.style.display = 'block'; // Show the thank you message

  // Construct and set the thank you message content
  const message = `Thank you ${name} for your registration with us. We will contact you in your email ${email} or your personal phone number ${phone}.`;
  thankYouMessage.textContent = message;
}
