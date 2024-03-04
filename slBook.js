function getSum(num1, num2){
    return num1+num2;
}

// variable declare without var key word---
name = "prem";
age = 20;

document.write(name ,", ",age)

// Global variable
var username = "prem";

function modifyUserName(){
   
    username = "Ram";
}
function showUserName(){
    console.log(username);
}

console.log(username);
modifyUserName();
showUserName();


 //local variable
/* 
function crateUserName(){
   
   var crateUsername = "Ram";
}
function showCrateUserName(){
    console.log(crateUsername);
}
crateUserName();
showCrateUserName(); // throw error: crateUserName is not defined
*/


// ------For each...in statement
/*
var sum = 0;
var obj = {
    prop1: 50,
     prop2: 60, 
     prop3: 70
    };
for  (var item in obj){
    sum +=item;
}
console.log(sum);
*/

// ---- For-of Loop--------
var elements = ['x','y','z',1,20,50];

for (var element of elements){
    console.log(element);
}


//---- for each in array---
var mysubj = ["SE","NM","SL","DBMS"];
mysubj.forEach(subject => console.log(subject));


//------ property of Array---
// ---constructor----
var ages = new Array(22,24,25);
console.log("age.constructer is ",ages.constructor);

//Array length property-------
var fruits = ["Apple","Banana","Manog"];
console.log(fruits);
console.log("number of fruits is: "+ fruits.length); 
console.log("size of array 0 is: "+ fruits[0].length); 


//Array protype property ---------
Array.prototype.stringLenght = function(){
    var i;
    for (i=0; i < this.length; i++){
        this[i] = this[i].length;
    }
};
function lengthFunction(){
    var sub = ["Software  Engineering","Scripting Language", "Database Management System"];
    sub.stringLenght();
    console.log(sub);
}
lengthFunction();