import { people } from "./people.js";
// element variables;
const results = document.querySelector(".results");
const selectInput = document.querySelector(".navbar__select-input");
const searchInput = document.querySelector(".navbar__search-input");

// eventListeners
document.addEventListener("DOMContentLoaded", (event) => {
  populateResults(people);
});

selectInput.addEventListener("change", () => {
  populateResults(people);
});

searchInput.addEventListener("change", () => {
  searchMatches();
});
// FUNCTIONS

function populateResults(arr) {
  results.innerHTML = "";

  for (let person in arr) {
    // create new Card element
    const resultCard = document.createElement("li");
    resultCard.classList.add("results__card");

    // create name
    const name = document.createElement("p");
    name.textContent = arr[person].name;

    // create last name
    const lastName = document.createElement("p");
    lastName.textContent = arr[person].lastName;

    // create an email
    const email = document.createElement("p");
    email.textContent = arr[person].email;

    // create a date
    const date = document.createElement("p");
    date.textContent = arr[person].date;

    // append all the data to result card element
    resultCard.appendChild(name);
    resultCard.appendChild(lastName);
    resultCard.appendChild(email);
    resultCard.appendChild(date);

    // append result card to the results div
    results.appendChild(resultCard);

    if (person == selectInput.value - 1) {
      return;
    }
  }
}

function searchMatches() {
  const searchString = searchInput.value;
  const searchObjectsArr = [];
  for (let person in people) {
    let perfectMatch = false;
    Object.values(people[person]).forEach((value) => {
      if (value.match(searchString)) {
        perfectMatch = true;
      } else return;
    });
    if (perfectMatch) {
      searchObjectsArr.push(people[person]);
    }
  }
  populateResults(searchObjectsArr);
}
