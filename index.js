let arr = []
function createObj(dataObject) {
    arr.push({
        name: dataObject.name,
        phase: dataObject.phase,
        gender: dataObject.gender
    })
}

function getData(name) {
    for (let i = 0; i < arr.length; i++) {
        //ASUMSI TIDAK CASE SENSITIVE
        if (arr[i].name.toLowerCase() == name.toLowerCase()) {
            return arr[i]
        }
    }
}

createObj({
    name: `Akbar`,
    phase: 1,
    gender: `male`
})
createObj({
    name: `Icha`,
    phase: 1,
    gender: `female`
})
console.log(arr);
console.log(getData(`Icha`));


