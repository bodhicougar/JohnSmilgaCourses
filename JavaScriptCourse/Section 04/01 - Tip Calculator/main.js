


function calculateTip (amount, tip) {
  let percent = tip / 100;
  let tipAmount = amount * percent;
  let totalAmount = amount + tipAmount;

  console.log(`Tip Percentage: ${percent}\nTip Amount: ${tipAmount}\nTotal Amount: ${totalAmount}`);
}

calculateTip(100, 15);
