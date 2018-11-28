//your code here

var arr = []
function createObj (name, phase, gender) {
    arr.push({
        name: name,
        phase: phase,
        gender: gender
    })
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

// console.log(arr)

function getData(name) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].name === name) {
            return arr[i]
        } 
    }
    return `Data Not Found`
}

console.log(getData('Icha'))
console.log(getData('Januar'))
console.log(getData('Tama'))

