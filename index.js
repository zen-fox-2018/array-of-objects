
const arr = [];
console.log("==== RELEASE 0 ====")
function createObj(name, phase, gender) {
    arr.push({
        name: name,
        phase: phase,
        gender: gender
    })
}

createObj("Akbar", 1, "male");
createObj("Icha", 1, "female");
createObj("Ruki", 2, "male");
createObj("Kai", 2, "male");
createObj("ahri", 3, "female");

console.log(arr)

console.log("===== RELEASE 1 =====")

function getData (input) {

    let data = arr.findIndex(index => index.name === input)
    
    return arr[data]
}

console.log(getData("Icha"))

//kalau pakai map

// let retrieveData = data.map((element, index) => {
//     if(element.name === input) {
//         return index
//     }
// })
// return arr[retrieveData[1]]