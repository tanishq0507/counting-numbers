// creating variables
let countLabel = document.getElementById("countLabel");
let decreaseBtn = document.getElementById("decreaseBtn");
let increaseBtn = document.getElementById("increaseBtn");
let resetBtn = document.getElementById("resetBtn");

// making sure count starts for 0 
let count = 0;


// bring btn to live 
decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
