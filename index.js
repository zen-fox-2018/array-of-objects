//your code here
var arr = [
    {
        item:'Book',
        quantity: 120
    },
    {
        name: 'Pencil',
        quantity: 380
    },
    {
        name: 'Eraser',
        quantity: 24
    }
]
var arr = []
function createObj (name, phase, gender){
    var objData = {
        name: name,
        phase: phase,
        gender: gender
    }
    arr.push(objData)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

//console.log(arr)

function getData (name){
    for(let i=0; i < arr.length; i++){
        if(arr[i].name == name){
            return arr[i]
        }
    }
    return 'Data tidak ada '
}

console.log(getData('Icha'))