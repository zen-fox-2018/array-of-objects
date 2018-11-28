//your code here
var arr = []

function createObj(name, phase, gender) {
    let obj = {
        name : name,
        phase : phase,
        gender : gender
    }

    arr.push(obj)
}

createObj('Akbar',1,'male')
createObj('Icha',1,'female')
createObj('Adhit',2,'male')
createObj('Tama',2,'male')
createObj('Rifky',1,'male')

// console.log(arr);

function getData(name) {
    
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        
        if (name == arr[i]['name']) {
            return arr[i]
        }
        
    }

}

console.log(getData('Icha'));
//{name: 'Icha, phase: 1, gender: 'female}

