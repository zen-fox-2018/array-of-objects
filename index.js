var arr = []

function createObj (name,phase, gender) {
    let result = {}
    result['name'] = name
    result['phase'] = phase
    result['gender'] = gender

    arr.push(result)
    
}

function getData(name) {
    let result = {}
    for (let i = 0; i < arr.length; i++){
        if(name === arr[i].name){
            result = arr[i]
        }
    }
    return result
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')

console.log(arr)
console.log(getData('Icha'))