//your code here
var arr = []
function createObj(name, phase, gender) {
  let result = {
    name: name,
    phase: phase,
    gender: gender
  }  
  arr.push(result)
}
createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Budi', 2, 'male')
createObj('Amin', 3, 'male')

function getData(name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      return arr[i]  
    }
  }
}

console.log(getData('Akbar'))
console.log(getData('Budi'))