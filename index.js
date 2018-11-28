//your code here
var arr = [];

function createObj (name, phase, gender) {
    arr.push({'name' : name, 'phase' : phase, 'gender' : gender})
    return arr
}
createObj ('Akbar', 1, 'male');
createObj ('Icha', 1, 'female');

console.log(arr)
/*
[
    {
    name: 'Akbar',
    phase: 1,
    gender: 'male'
    },
     {
    name: 'Icha',
    phase: 1,
    gender: 'female'
    },

]
*/
function getData (name) {
    for (let i = 0; i <= arr.length-1; i++) {
        if (arr[i].name == name) {
            return arr[i]
        }
    }
}
console.log(getData('Icha'))
//{name: 'Icha', phase: 1, gender: 'female'}