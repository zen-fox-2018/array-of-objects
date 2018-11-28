var arr = []

function createObj(name , phase , gender) {
  let obj = new Object
  obj.name = name
  obj.phase = phase
  obj.gender = gender
  arr.push(obj)
}
createObj('Akbar' , 1 , 'male');
createObj('Icha' , 1 , 'female')

console.log(arr)

function getData(name) {
  return arr.filter(x => x.name === name)
}

console.log(getData('Icha'))
console.log(getData('Akbar'))