// ============ Login Button event =========

const signInBtn = document.getElementById("sign-in");
signInBtn.addEventListener("click", function () {
  const firstSection = document.getElementById("section-first");
  firstSection.style.display = "none";

  const secondSection = document.getElementById("section-second");
  secondSection.style.display = "block";
});

// ========== Deposit event ===========

const depositBtn = document.getElementById("deposit-button");
depositBtn.addEventListener("click", function () {
  const inputAmount = document.getElementById("depositAmount").value;
  if (inputAmount === "" || inputAmount === null) {
    document.getElementById("deposit").innerText = 0;
  } else if (inputAmount < 0) {
    alert("Negative number");
    document.getElementById("depositAmount").value = "";
  } else {
    const inputNum = parseFloat(inputAmount);
    updateSpanText("deposit", inputNum);
    updateSpanText("balance", inputNum);
    document.getElementById("depositAmount").value = "";
  }
});

// ============ Withdraw event ===========

const withdrawBtn = document.getElementById("withdraw-button");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdrawAmount").value;
  if (withdrawAmount === "" || withdrawAmount === null) {
    document.getElementById("withdraw").innerText = 0;
  } else if (withdrawAmount < 0) {
    alert("Negative number");
    document.getElementById("withdrawAmount").value = "";
  } else {
    const withdrawNum = parseFloat(withdrawAmount);
    updateSpanText("withdraw", withdrawNum);
    updateSpanText("balance", -1 * withdrawNum);
    document.getElementById("withdrawAmount").value = "";
  }
});

// ============ Total Amount Function ==========

function updateSpanText(id, inputNum) {
  const currentText = document.getElementById(id).innerText;
  const currentNum = parseFloat(currentText);
  const Total = inputNum + currentNum;
  document.getElementById(id).innerText = Total;
}
