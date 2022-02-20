function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // clear input field
  inputField.value = '';
  return amountValue;
}

function updateTotalField(totalFieldId, amount) {
  // debugger;
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  totalElement.innerText = previousTotal + amount;
}

function updateBalance(depositAmount, isAdd) {
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
  }
  else {
    balanceTotal.innerText = previousBalanceTotal - depositAmount;
  }
}


document.getElementById('deposit-btn').addEventListener
('click', function () {
  /* 
  const depositInput = document.getElementById('deposit-input');
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText); 
  */
  
  // get and update deposit total
  /* 
  const depositTotal = document.getElementById('deposit-total');
  const depositTotalText = depositTotal.innerText;
  const previousDepositTotal = parseFloat(depositTotalText);
  depositTotal.innerText = previousDepositTotal + depositAmount; 
  */
  
  // update balance
  /* 
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  balanceTotal.innerText = previousBalanceTotal + depositAmount;
  */

  const depositAmount = getInputValue('deposit-input');
  updateTotalField('deposit-total', depositAmount);
  updateBalance(depositAmount, true);
});


// handle withdraw button 
document.getElementById('withdraw-btn').addEventListener
('click', function () {
  // get and update withdraw total
  /* 
  const withdrawTotal = document.getElementById('withdraw-total');
  const previousWithdrawTotalText = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
  withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; 
  */

  // update balance after withdraw
  /* 
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */

  const withdrawAmount = getInputValue('withdraw-input');
  updateTotalField('withdraw-total', withdrawAmount);
  updateBalance(withdrawAmount, false);
});