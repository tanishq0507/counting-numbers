// creating variables
let countLabel = document.getElementById("countLabel");
let decreaseBtn = document.getElementById("decreaseBtn");
let increaseBtn = document.getElementById("increaseBtn");
let resetBtn = document.getElementById("resetBtn");

// load saved count from localStorage (fallback to 0)
let saved = localStorage.getItem("count");
let count = (saved !== null && !isNaN(Number(saved))) ? Number(saved) : 0;
countLabel.textContent = count;

// bring btn to live
decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
  localStorage.setItem("count", count);
};

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
  localStorage.setItem("count", count);
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
  localStorage.setItem("count", count);
};
