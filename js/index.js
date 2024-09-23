// utility function

function calculateMoney(id1, id2, id3) {
  const donateAmount = parseFloat(getElement(id1).value);
  let initialAmount = parseFloat(getElement(id2).innerText);
  totalDonationAmount = donateAmount + initialAmount;
  getElement(id2).innerText = totalDonationAmount;
  const initailBalance = getElement(id3).innerText;
  const currentBalance = initailBalance - donateAmount;
  return getElement(id3).innerText = currentBalance;
}

function getElement(id) {
  const getTag = document.getElementById(id);
  return getTag;
}

// toggle features

document.getElementById("history-btn").addEventListener("click", function () {
  const donationBtn = getElement("donation");
  donationBtn.classList.add("hidden");
  const historyBtn = getElement("history");
  historyBtn.classList.remove("hidden");
});

document.getElementById("donation-btn").addEventListener("click", function () {
  const historyBtn = getElement("history");
  historyBtn.classList.add("hidden");
  const donationBtn = getElement("donation");
  donationBtn.classList.remove("hidden");
});

// donate button function

document
  .getElementById("donate-now-btn1")
  .addEventListener("click", function () {
    calculateMoney("donate-amount1", "total-donate-1", "initial-balance");
  });

document
  .getElementById("donate-now-btn2")
  .addEventListener("click", function () {
    calculateMoney("donate-amount2", "total-donate-2", "initial-balance");
  });

document
  .getElementById("donate-now-btn3")
  .addEventListener("click", function () {
    calculateMoney("donate-amount3", "total-donate-3", "initial-balance");
  });
