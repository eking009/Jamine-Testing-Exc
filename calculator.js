window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // default value input from the DOM
  document.getElementById("loan-amount").value = 150000;
  document.getElementById("loan-years").value = 30;
  document.getElementById("loan-rate").value = 4;
}

// Get the current values from the UI
// Update the monthly payment
function update() {

  calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let i = values.rate / 1200;
  let compounding = 1 - ((1 + i) ** (-1 * (values.years * 12)));
  return ((Math.round(((values.amount * i) / compounding) * 100)) / 100).toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {

  const domMonthlyPayment = document.getElementById("monthly-payment");

  if (isNaN(monthly)) {

    domMonthlyPayment.innerText = "Please ensure Loan Amount, Term, and Rate contain only numbers and decimal points."
    domMonthlyPayment.classList.add("error");

  } else {

    domMonthlyPayment.innerText = monthly;
    if (domMonthlyPayment.classList.contains("error")) {
      domMonthlyPayment.classList.remove("error");
    }
  }
}