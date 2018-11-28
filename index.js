var arr = [];
function createObj (name, phase, gender) {
  var obj = {
    name: name,
    phase: phase,
    gender: gender
  }
  arr.push(obj);
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Haha', 2, 'male');
createObj('Rudi', 3, 'male');
createObj('Victor', 1, 'male');


function getData (name) {
  for (var i = 0; i < arr.length; i++) {      //loop arr (arr is outside of function so it can be used)
    if (arr[i].name === name) {
      return arr[i];
    }
  }
}
console.log(getData('Victor'));