/******************************** CONSULTATION FORM ********************************/
function getQuotes(){
    fetch("http://localhost:8080/all-quotes")
    .then(response => response.json())
    .then(json => console.log(json))
}


function saveQuote() 
{
    var QuoteData = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        phone: document.getElementById('contact-phone').value,
        system_installer: document.getElementById('system-installer').value,
        project_completed_by: document.getElementById('project-completed-by').value,
        monthly_electric_usage: document.getElementById('electric-usage').value,
        solar_system_type: document.getElementById('solar-system-type').value,
        solar_panels_place: document.getElementById('solar-panels-place').value,
        materials: document.getElementById('materials').value,
        description: document.getElementById('description').value,        
        address:{
            street: document.getElementById('street').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zipcode: document.getElementById('zipcode').value,
              },
        tc: document.getElementById('tc').value };

    let headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'});

    fetch("http://localhost:8080/save-quote", {
        method: 'POST',
        body: JSON.stringify(QuoteData),
        headers: headers,
    })
    .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Assuming the server responds with JSON
      })
      .then(responseData => {
        // Handle the successful response data here
        console.log('Response Data:', responseData);
      })
      .catch(error => {
        // Handle errors, including the 406 (Not Acceptable) error
        console.log('Error:', error);
      });



      
      emailjs.init("i5QBhZOKLg9zRaUEs"); // Replace with your Email.js user ID

      emailjs.send("service_nxxfdbr", "template_vvxera5", {
            username: document.getElementById('contact-name').value,
            to: document.getElementById('contact-email').value,
          })
          .then(function(response) {
              console.log("Email sent successfully", response);
          })
          .catch(function(error) {
              console.error("Email could not be sent", error);
          });
}

