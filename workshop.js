/*
TO DO:
  1. Connect JS to HTML.
  2. All hard code will be done in JS.
  3. Use document.querySelector to target existing DOM elements. 
  4. Program initializes an arry of possible names and an array of possible occupations.
  5. The initial array of freelancers is rendered onto the page.
  6. A function calculates the average starting price of the freelancer array.
  7. The DOM is updated to reflect that starting price.
  8. A function generates a freelancer with a random name, occupation, and starting price. This object is PUSHED into the freelancer array. 
  9. An interval is set to add a freelancer and rerender every few seconds. 
*/
const freelancerArr = [
  { name: "Anthony", price: 25, occupation: "Gardener" },
  { name: "Beth", price: 51, occupation: "Programmer" },
  { name: "Carl", price: 43, occupation: "Teacher" },
  { name: "Danielle", price: 81, occupation: "Teacher" },
  { name: "Ethan", price: 43, occupation: "Teacher" },
  { name: "Francesca", price: 76, occupation: "Programmer" },
  { name: "George", price: 47, occupation: "Teacher" },
  { name: "Haley", price: 72, occupation: "Driver" },
];

function randomFreelancer() {
  let freelancerSelector = document.getElementById("freelancer");

  for (let i = 0; i < 2; i++) {
    let currentFreelancer = freelancerArr[i];

    let freelancerDiv = document.createElement("div"); // Creates a parent element.
    freelancerDiv.className = "freelancerInfo";

    freelancerDiv.innerHTML = `<h3>${currentFreelancer.name} ${currentFreelancer.occupation} $${currentFreelancer.price} </h3>`;

    freelancerSelector.appendChild(freelancerDiv); // Append the created element to the actual page.
  }
}

randomFreelancer();

//Function to calculate average starting price of freelancers & update DOM.

//Function to push third randomized freelancer onto th end of the freelancer array.
function addRandomFreelancer() {
  const randomFreelancer = freelancerArr[i];
}

//Set Interval for random Freelancer array
let freelanceIndex = 1;
function addNextFreelancer() {
  freelanceIndex++;
  const addNextFreelancer = freelancerArr[freelanceIndex];
  if (addNextFreelancer === undefined) {
    clearInterval();
  } else {
    let freelancerSelector = document.getElementById("freelancer");
    let freelancerDiv = document.createElement("div");
    freelancerDiv.className = "freelancerInfo";

    freelancerDiv.innerHTML = `<h3>${addNextFreelancer.name} ${addNextFreelancer.occupation} $${addNextFreelancer.price} </h3>`;

    freelancerSelector.appendChild(freelancerDiv);
    updateAveragePrice();
  }
}

function calcAveragePrice() {
  let totalPrice = 0;
  for (let i = 0; i < freelanceIndex; i++) {
    totalPrice += freelancerArr[i].price;
  }
  const averagePrice = totalPrice / freelanceIndex;
  return averagePrice;
}

function updateAveragePrice() {
  const averagePrice = calcAveragePrice();
  const averagePriceElement = document.getElementById("averagePrice");

  if (averagePriceElement) {
    averagePriceElement.textContent = `The average starting price is: $${averagePrice.toFixed(
      2
    )}.`;
  }
}
updateAveragePrice();

setInterval(() => {
  addNextFreelancer();
}, 4000);

/*
const freelancerArr = [
  { name: "Anthony", price: 25, occupation: "gardener" },
  { name: "Beth", price: 51, occupation: "programmer" },
  { name: "Carl", price: 43, occupation: "teacher" },
  { name: "Danielle", price: 81, occupation: "teacher" },
  { name: "Ethan", price: 43, occupation: "teacher" },
  { name: "Francesca", price: 76, occupation: "programmer" },
  { name: "George", price: 47, occupation: "teacher" },
  { name: "Haley", price: 72, occupation: "driver" },
];

function randomFreelancer() {
  let freelancerSelector = document.getElementById("freelancer");
  for (let i = 0; i < freelancerArr.length; i++) {
    let currentFreelancer = freelancerArr[i];

    let freelancerDiv = document.createElement("div"); // Creates a parent element.

    freelancerDiv.className = "freelancerInfo";

    freelancerDiv.innerHTML = `<h3>${currentFreelancer.name}</h3> 
                                <h3>Price $ ${currentFreelancer.price}</h3>
                                <h3> Quantity: ${currentFreelancer.occupation}</h3>`;
    // Add content to the element.

    freelancerSelector.appendChild(currentFreelancer); // Append element to the actual page.
  }
}
randomFreelancer();

/*
//Function to calculate average starting price of freelancers & update DOM.
*/

/*
Function to push third randomized freelancer onto th end of the freelancer array. 
*/

/*
//Set Interval for random Freelancer array 
//setInterval(() => {});
*/
