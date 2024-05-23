//Task 
//Design an HTML document to accept two values: number of ice creams and cost per ice cream. 
//The program must calculate the total price of the ice-creams.

//Implement a function using JavaScript which will calculate the total cost of ice-creams. 
//Add a button which invokes the function to calculate total price when clicked.
// You should indicate knowledge of parameters and arguments. You can add you own background.

const cones = document.getElementById("ice-creams");
const costOfEach = document.getElementById("cost");
const total = document.getElementById("total");
const calcBtn = document.querySelector("[calcBtn]");

function calculate(iceCream, costPerCone) {
  let conesValue = +iceCream;
  let costValue = +costPerCone;

  let result = parseFloat(conesValue * costValue);

  total.value = result;
}

calcBtn.addEventListener("click", () => {
  calculate(+cones.value, +costOfEach.value);
});
