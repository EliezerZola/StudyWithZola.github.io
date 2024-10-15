// Initialize EmailJS with your user ID
(function(){
  emailjs.init("cTgazY8_vGqI9TShW");
})();

// Add an event listener to the form for the 'submit' event
document.getElementById('contact-form').addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  

  // Send the form data using EmailJS
  emailjs.sendForm('Eliezer_Zola2024', 'template_vwmkw02', this)
      .then(function showSuccessMessage() {
        document.getElementById('success-message').style.display = 'block';
       

        setTimeout(function() {
          var successMessage = document.getElementById('success-message');
          if (successMessage) {
            successMessage.style.display = 'none';
          }
        }, 5000);


      }, function(error) {
          // Alert the user if there was an error sending the email
          alert('Failed to send email. Error: ' + JSON.stringify(error));
      });

      

      


});
  