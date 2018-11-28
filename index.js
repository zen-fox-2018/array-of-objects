//your code here

var arr = []

function createObj(name, phase, gender) {
    let objPerson = {
        name: name,
        phase: phase,
        gender: gender
    }

    arr.push(objPerson)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

console.log(arr)

function getData(name) {
    for (let i = 0; i < arr.length; i++){
        if(arr[i].name == name){
            return arr[i]
        }
    }
}

console.log(getData('Icha'))


