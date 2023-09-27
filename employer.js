// console.log("Hello employer registration form");

const registrationForm = document.getElementById("registration-form");

// Type-02

document.querySelector("form").addEventListener("submit", myform);

var employer = JSON.parse(localStorage.getItem("form-details")) || [];

// count = employer.length;

// console.log(count);

function myform(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  // var password = document.querySelector("#password").value;
  var phone = document.querySelector("#phone").value;
  var industry = document.querySelector("#industry").value;
  var description = document.querySelector("#description").value;
  var address = document.querySelector("#address").value;
  var city = document.querySelector("#city").value;
  var state = document.querySelector("#state").value;
  var postalcode = document.querySelector("#postalcode").value;

  console.log(
    name,
    email,
    phone,
    industry,
    description,
    address,
    city,
    state,
    postalcode
  );

  var obj = {
    name: name,
    email: email,
    // password: password,
    phone: phone,
    industry: industry,
    description: description,
    address: address,
    city: city,
    state: state,
    postalcode: postalcode,
  };

  employer.push(obj);

  localStorage.setItem("form-details", JSON.stringify(employer));

  alert("Details field successfully");

  window.location.reload();
}

// Type -01

// registrationForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   // Get user input
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const phone = document.getElementById("phone").value;
//   const industry = document.getElementById("industry").value;
//   const description = document.getElementById("description").value;
//   const address = document.getElementById("address").value;
//   const city = document.getElementById("city").value;
//   const state = document.getElementById("state").value;
//   const postalCode = document.getElementById("postal-code").value;
//   const termsAgreed = document.getElementById("terms").checked;

//   // You can perform further validation and submit data to a server here

//   // For this example, we'll just display the input in an alert
//   alert(
//     `Company Name: ${name}\nEmail: ${email}\nPassword: ${password}\nPhone Number: ${phone}\nIndustry: ${industry}\nCompany Description: ${description}\nAddress: ${address}\nCity: ${city}\nState: ${state}\nPostal Code: ${postalCode}\nTerms Agreed: ${
//       termsAgreed ? "Yes" : "No"
//     }`
//   );

//   // Clear the form
//   registrationForm.reset();
// });
