// משימה ראשונה

function filteName(theObjects){
  return theObjects.name
}
var object = {name: "ariel", age: 16,};
var result = filteName(object)
console.log(result)

// משימה שניה

 
function filterNumber(theObject){
  return theObject.age
}
var object = {name: "ariel", age: 16,}
var result = filterNumber(object)
console.log(result) 

// משימה שלישית 

  function filteName(theObjects){
  return theObjects[0]
 }
 var object = [{שם: "//"},{age: 16}]
 var result = filteName(object)
 console.log(result) 

// משימה רביעית

const arr = [
  { name: "John", age: 25 },
  { name: "Mary", age: 30 },
  { name: "Bob", age: 20 }
];

printArrayObjects(arr);

function printArrayObjects(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
} 




