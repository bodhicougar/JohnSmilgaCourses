
let toDOList = [];

// function addItem(arr, item) {
//  arr.push(item);
// }

// addItem(toDOList, "Walk the dog");
// addItem(toDOList, "Make Coffee");

// console.log(toDOList);

function addItem(arr) {
  let answer = prompt("New task to add: ");
  let correct = answer.toLowerCase().trim();

  if(checkDuplicate(arr, correct)) {
    arr.push(correct);
  } else {
    alert("Item already exists.");
  }
}

function checkDuplicate (arr, item) {
  let exists = false;
  let index = arr.indexOf(item);
  if (index != -1) {
    exists = false;
  } else {
    exists = true;
  }

  return exists;
}

addItem(toDOList);
addItem(toDOList);
addItem(toDOList);

console.log(toDOList);
