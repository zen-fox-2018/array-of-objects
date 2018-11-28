//your code here

var arr = []

function createObj(name,phase,gender){
    var obj = {}
    obj.name = name
    obj.phase = phase
    obj.gender = gender
    arr.push(obj)
}
createObj('akbar',1, 'male')
createObj('icha', 1, 'female')
createObj('adhit',2,'male')
console.log(arr)


var icha = arr[1]

function getData (name){
    return name
}
console.log(getData(icha))
