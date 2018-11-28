var arr = []
function createObj(name, phase, gender) {
    let obj = {
        name: name,
        phase: phase,
        gender: gender
    }
    arr.push(obj)
}

createObj('akbar', 1, 'male');
createObj('budi', 2, 'male');
createObj('icha', 1, 'female');

console.log(arr);

function getData(name) {
    let result = []
    arr.forEach(e => {
        if (e.name === name) {
            result = e
        }
    });
    if (result.length) {
        return result
    } else {
        return `err getData`
    }
}

console.log(getData('icha'));
