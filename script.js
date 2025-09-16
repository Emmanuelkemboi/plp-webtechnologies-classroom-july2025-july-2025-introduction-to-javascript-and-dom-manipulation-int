
// this part generaccy about JavaScript Basics
// Variables, Conditionals, and Input

let userName = "Student"; // variable declaration

// DOM elements
const ageInput = document.getElementById("ageInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
  let age = Number(ageInput.value);
  if (age >= 18) {
    ageResult.textContent = `${userName}, you are an adult. ✅`;
  } else if (age > 0) {
    ageResult.textContent = `${userName}, you are a minor. 👶`;
  } else {
    ageResult.textContent = "Please enter a valid age.";
  }
});


//  2: Functions
// Reusable logic blocks


// Function 1: ths is to Calculate square
function calculateSquare(num) {
  return num * num;
}

const squareBtn = document.getElementById("squareBtn");
const numInput = document.getElementById("numInput");
const squareResult = document.getElementById("squareResult");

squareBtn.addEventListener("click", () => {
  let number = Number(numInput.value);
  squareResult.textContent = `The square of ${number} is ${calculateSquare(number)}.`;
});

//funct 2: Toggle text visibility
function toggleText(elementId) {
  const element = document.getElementById(elementId);
  element.style.display = (element.style.display === "none") ? "block" : "none";
}

const toggleTextBtn = document.getElementById("toggleTextBtn");
toggleTextBtn.addEventListener("click", () => toggleText("extraText"));


// Part 3: Loops
// Repetition in actionn


// Example 1: For loop
const listNumbersBtn = document.getElementById("listNumbersBtn");
const numberList = document.getElementById("numberList");

listNumbersBtn.addEventListener("click", () => {
  numberList.innerHTML = ""; // clear old list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number ${i}`;
    numberList.appendChild(li);
  }
});

// Example 2: While loop countdown
const countdownBtn = document.getElementById("countdownBtn");
const countdownResult = document.getElementById("countdownResult");

countdownBtn.addEventListener("click", () => {
  let count = 5;
  countdownResult.textContent = "Countdown: ";
  while (count > 0) {
    countdownResult.textContent += count + " ";
    count--;
  }
  countdownResult.textContent += "🚀 Lift off!";
});

/
// Part 4: DOM Interactions Make the page dynamic

const changeColorBtn = document.getElementById("changeColorBtn");
const changeTextBtn = document.getElementById("changeTextBtn");
const intro = document.getElementById("intro");

// DOM interaction 1: Change background color
changeColorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightyellow" ? "#f9f9f9" : "lightyellow";
});

// DOM interaction 2: Change text content
changeTextBtn.addEventListener("click", () => {
  intro.textContent = "✨ The intro text has been updated using DOM manipulation!";
});
const changeColorBtn = document.getElementById("changeColorBtn");
const changeTextBtn = document.getElementById("changeTextBtn");
const intro = document.getElementById("intro");

// DOM interaction 1: Change background color
changeColorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightyellow" ? "#f9f9f9" : "lightyellow";
});

// DOM interaction 2: Change text content
changeTextBtn.addEventListener("click", () => {
  intro.textContent = "✨ The intro text has been updated using DOM manipulation!";
});
// DOM interaction 3: Already done → toggleText() function modifies the DOM

