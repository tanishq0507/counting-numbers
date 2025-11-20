// creating variables
let countLabel = document.getElementById("countLabel");
let decreaseBtn = document.getElementById("decreaseBtn");
let increaseBtn = document.getElementById("increaseBtn");
let resetBtn = document.getElementById("resetBtn");

// load saved count from localStorage (fallback to 0, force non-negative)
let saved = localStorage.getItem("count");
let count = (saved !== null && !isNaN(Number(saved)) && Number(saved) >= 0) ? Number(saved) : 0;

function updateUI() {
  countLabel.textContent = count;
  localStorage.setItem("count", count);
  decreaseBtn.disabled = (count <= 0); // prevent negative by disabling decrease when zero
}

// initialize UI
updateUI();

// bring btn to live
decreaseBtn.onclick = function () {
  if (count > 0) {
    count--;
    updateUI();
  }
};

increaseBtn.onclick = function () {
  count++;
  updateUI();
};

resetBtn.onclick = function () {
  count = 0;
  updateUI();
};
