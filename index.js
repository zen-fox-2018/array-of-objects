//your code here
var arr = []
function createObj(name,phase,gender) {
 let obj = {
     name: name,
     phase:phase,
     gender:gender
 }
 arr.push(obj)
}
function getData(name) {
    let data = arr.forEach(element =>  {
        if(element.name === name){
           console.log(element)
        }
    });

}
createObj("Akbar",1,"male")
createObj("Icha",1,"female")

// console.log(arr)
getData("dadang")