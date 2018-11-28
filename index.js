var arr = [];
function CreateObj(name,phase,gender) {
  var obj = {
    name : name,
    phase : phase,
    gender : gender
  }
  arr.push(obj);
}

CreateObj('luthfi',1,'male');
CreateObj('Celyn',1,'female');
CreateObj('Anton',1,'male');
CreateObj('Ulfa',1,'female');

console.log(arr);

function getData(name) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name === name){
      return  arr[i];
    }
  }
  return -1;
}

console.log(getData('luthfi'));
