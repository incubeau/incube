  
function sheet(event) {
    event.preventDefault();
    console.log("Running");
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxbfsUjbeCtO2VCju-QnUN_NE2HXuUdTl81dOKIXn3RjcmLFJ-e2ZY3mVSNG-VdLZnK3w/exec'; // Replace with your actual script URL
    const form = document.forms['regform'];
  
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        if (response.ok) {
          alert("Thank you! Your form has been submitted successfully.");
          window.location.reload();
        } else {
          alert("Oops! Something went wrong. Please try again later.");
        }
      })
      .catch((error) => console.error('Error!', error.message));
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.forms['regform'];
    form.addEventListener('submit', sheet);
  });