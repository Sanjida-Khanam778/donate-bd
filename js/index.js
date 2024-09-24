// utility function

function getElement(id) {
  const getTag = document.getElementById(id);
  return getTag;
}

function calculateMoney(id1, id2, id3) {
  const donateAmount = parseFloat(getElement(id1).value);
  let initialAmount = parseFloat(getElement(id2).innerText);
  totalDonationAmount = donateAmount + initialAmount;
  getElement(id2).innerText = totalDonationAmount.toFixed(2);
  const initialBalance = getElement(id3).innerText;
  const currentBalance = initialBalance - donateAmount;
  return (getElement(id3).innerText = currentBalance.toFixed(2));
}

function historyRow(id) {
  const donateAmount = getElement(id).value;
  const div = document.createElement("div");
  div.className = "border-2 rounded-2xl p-8 mb-6";
  let loc =
    getElement(id).previousElementSibling.previousElementSibling.innerText;
  let now = new Date();
  div.innerHTML = `
  <h2 class = "font-bold text-xl">${donateAmount} Taka is donated for ${loc}</h2>
  <p class = "font-light">
  Date : ${now}
  </p>
  `;
  const history = getElement("history");
  return history.insertBefore(div, history.firstChild);
}

// toggle features
const donationContent = getElement("donation");
const historyContent = getElement("history");
const historyBtn = getElement("history-btn");
const donationBtn = getElement("donation-btn");

document.getElementById("history-btn").addEventListener("click", function () {
  donationContent.classList.add("hidden");
  historyContent.classList.remove("hidden");
  historyBtn.classList.add("bg-primary");
  historyBtn.classList.remove("border-border", "text-text");
  donationBtn.classList.add("border-border", "border", "text-text");
  donationBtn.classList.remove("bg-primary");
});

document.getElementById("donation-btn").addEventListener("click", function () {
  historyContent.classList.add("hidden");
  donationContent.classList.remove("hidden");
  donationBtn.classList.add("bg-primary");
  donationBtn.classList.remove("border-border", "text-text");
  historyBtn.classList.add("border-border", "text-text");
  historyBtn.classList.remove("bg-primary");
});

// donate button function

document
  .getElementById("donate-now-btn1")
  .addEventListener("click", function () {
    const donateAmount = getElement("donate-amount1").value;
    const accountBalance = getElement("initial-balance").innerText;
    if (
      typeof donateAmount !== "number" ||
      donateAmount > accountBalance ||
      isNaN(donateAmount) ||
      donateAmount < 0
    ) {
      return alert("Invalid Donation Amount");
    } else {
      getElement("my_modal_1").showModal();
    }
    calculateMoney("donate-amount1", "total-donate-1", "initial-balance");
    historyRow("donate-amount1");
  });

document
  .getElementById("donate-now-btn2")
  .addEventListener("click", function () {
    const donateAmount = getElement("donate-amount2").value;
    const accountBalance = getElement("initial-balance").innerText;
    console.log(donateAmount);
    if (
      donateAmount > accountBalance ||
      isNaN(donateAmount) ||
      donateAmount < 0
    ) {
      return alert("Invalid Donation Amount");
    } else {
      getElement("my_modal_1").showModal();
    }
    calculateMoney("donate-amount2", "total-donate-2", "initial-balance");

    historyRow("donate-amount2");
  });

document
  .getElementById("donate-now-btn3")
  .addEventListener("click", function () {
    const donateAmount = getElement("donate-amount3").value;
    const accountBalance = getElement("initial-balance").innerText;
    if (
      donateAmount > accountBalance ||
      isNaN(donateAmount) ||
      donateAmount < 0
    ) {
      return alert("Invalid Donation Amount");
    } else {
      getElement("my_modal_1").showModal();
    }
    calculateMoney("donate-amount3", "total-donate-3", "initial-balance");

    historyRow("donate-amount3");
  });
