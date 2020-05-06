const authorization = "Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e";

// Select the button, input, 4 table cells
const button = document.querySelector('#clearbitSubmit');
const input = document.querySelector('#clearbitEmail');
const name = document.querySelector('#userName');
const email = document.querySelector('#userEmail');
const bio = document.querySelector('#userBio');
const location = document.querySelector('#userLocation');

//https://person.clearbit.com/v2/combined/find?email=:email



const fetchData = (event) => {
  event.preventDefault();
  const url = `https://person.clearbit.com/v2/combined/find?email="${input.value}"`;
  fetch(url, {
    headers: {
      'Authorization': 'Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e'
    }
  })
    .then(response => response.json())
    .then((data) => {
      name.innerText = data.person.name.fullName;
      email.innerText = data.person.email;
      bio.innerText = data.person.bio;
      location.innerText = data.person.location;
  });
};

// Add an event listener to the button
button.addEventListener('click', fetchData);
// use email from input to make an API request

// use the info from the API request to fill out the table cells
