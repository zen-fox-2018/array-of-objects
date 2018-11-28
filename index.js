//your code here
var arr = [];
function createObj (name, phase, gender) {
  let objResult = new Object();
  objResult.name = name;
  objResult.phase = phase;
  objResult.gender = gender;

  arr.push(objResult);
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

console.log(arr);

function getData (name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toLowerCase() === name.toLowerCase()) {
      return arr[i];
    }
  }
  return 'get data error';
}

console.log(getData('Icha'));
