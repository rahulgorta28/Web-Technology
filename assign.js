console.log("Good morning");

function namedFunction() {
    console.log("hello");
}
namedFunction();

(function () {

}())

function fan(a, b) {
    console.log(a, b);
    console.log(typeof (a));
    console.log(typeof (b));
    let total = a + Number(b);
    console.log(total);
    document.getElementById("sum").innerHTML = total;
    document.getElementById("paragraph").innerHTML = "<p style='color:blue'>Seeking a beginner role to enhance and explore my technical knowledge gained at NMIT college in the last four years. I hold a BE degree from NMIT College and won the quiz challenge held at the campus.</P>";
    document.getElementById("heading").innerHTML = "<h1>Hello Good morning</p>";
}
fan(10, 20);

const clickMe = () => {
    document.getElementById("good").style.color = "green"
}

function formSubmit(event) {
    event.preventDefault()
    let name = document.getElementById("name");
    let length = name.value.length;
    console.log(length, name.value)
    let gender = genderform.gender.value;
    console.log(gender)
}
const arrname = () =>{
    console.log("arrow function");

   
let object1 = { name: "Alice", age: 25, city: "New York" };
let object2 = { name: "Bob", age: 30, city: "Los Angeles" };
let object3 = { name: "Charlie", age: 35, city: "Chicago" };
let object4 = { name: "David", age: 28, city: "Miami" };
let object5 = { name: "Eve", age: 22, city: "Boston" };


let array1 = ["Apple", "Banana", "Cherry"];
let array2 = [10, 20, 30, 40, 50];
let array3 = ["Red", "Green", "Blue"];
let array4 = [true, false, true, false];
let array5 = ["Cat", "Dog", "Bird"];


array1.push("Date");                  
array2.pop();                      
array3.shift();
array4.unshift(true);                 
array5.splice(1, 1, "Fish");          


localStorage.setItem("object1", JSON.stringify(object1));
localStorage.setItem("object2", JSON.stringify(object2));
localStorage.setItem("object3", JSON.stringify(object3));
localStorage.setItem("object4", JSON.stringify(object4));
localStorage.setItem("object5", JSON.stringify(object5));

localStorage.setItem("array1", JSON.stringify(array1));
localStorage.setItem("array2", JSON.stringify(array2));
localStorage.setItem("array3", JSON.stringify(array3));
localStorage.setItem("array4", JSON.stringify(array4));
localStorage.setItem("array5", JSON.stringify(array5));

sessionStorage.setItem("object1", JSON.stringify(object1));
sessionStorage.setItem("object2", JSON.stringify(object2));
sessionStorage.setItem("object3", JSON.stringify(object3));
sessionStorage.setItem("object4", JSON.stringify(object4));
sessionStorage.setItem("object5", JSON.stringify(object5));

sessionStorage.setItem("array1", JSON.stringify(array1));
sessionStorage.setItem("array2", JSON.stringify(array2));
sessionStorage.setItem("array3", JSON.stringify(array3));
sessionStorage.setItem("array4", JSON.stringify(array4));
sessionStorage.setItem("array5", JSON.stringify(array5));


let retrievedObject1Local = JSON.parse(localStorage.getItem("object1"));
let retrievedObject2Local = JSON.parse(localStorage.getItem("object2"));
let retrievedObject3Local = JSON.parse(localStorage.getItem("object3"));
let retrievedObject4Local = JSON.parse(localStorage.getItem("object4"));
let retrievedObject5Local = JSON.parse(localStorage.getItem("object5"));

let retrievedArray1Local = JSON.parse(localStorage.getItem("array1"));
let retrievedArray2Local = JSON.parse(localStorage.getItem("array2"));
let retrievedArray3Local = JSON.parse(localStorage.getItem("array3"));
let retrievedArray4Local = JSON.parse(localStorage.getItem("array4"));
let retrievedArray5Local = JSON.parse(localStorage.getItem("array5"));

let retrievedObject1Session = JSON.parse(sessionStorage.getItem("object1"));
let retrievedObject2Session = JSON.parse(sessionStorage.getItem("object2"));
let retrievedObject3Session = JSON.parse(sessionStorage.getItem("object3"));
let retrievedObject4Session = JSON.parse(sessionStorage.getItem("object4"));
let retrievedObject5Session = JSON.parse(sessionStorage.getItem("object5"));

let retrievedArray1Session = JSON.parse(sessionStorage.getItem("array1"));
let retrievedArray2Session = JSON.parse(sessionStorage.getItem("array2"));
let retrievedArray3Session = JSON.parse(sessionStorage.getItem("array3"));
let retrievedArray4Session = JSON.parse(sessionStorage.getItem("array4"));
let retrievedArray5Session = JSON.parse(sessionStorage.getItem("array5"));


console.log("Local Storage:");
console.log(retrievedObject1Local, retrievedObject2Local, retrievedObject3Local, retrievedObject4Local, retrievedObject5Local);
console.log(retrievedArray1Local, retrievedArray2Local, retrievedArray3Local, retrievedArray4Local, retrievedArray5Local);

console.log("Session Storage:");
console.log(retrievedObject1Session, retrievedObject2Session, retrievedObject3Session, retrievedObject4Session, retrievedObject5Session);
console.log(retrievedArray1Session, retrievedArray2Session, retrievedArray3Session, retrievedArray4Session, retrievedArray5Session);

}
arrname();

