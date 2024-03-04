// console.log('Hello world');

// window.alert('prem');


// document.getElementById('my1').textContent= "Hello";

// let age = 22;
// let name="prem";


// console.log('your age is', age);
// console.log('your name is', typeof name, name);

// let online = true;
// console.log('Prem is online',online);


// let name= "prem Kathayat";
// let age = 22;
// let isstudent = true;

// document.getElementById("p1").textContent = `My name is: ${name}`;
// document.getElementById("p2").textContent = `Age is: ${age}`;
// document.getElementById("p3").textContent = `I am student: ${isstudent}`;


// let username ;
// username = window.prompt("Whatis your username :");
// console.log(username);

// let name;
// document.getElementById("submit").onclick = function(){
//     name = document.getElementById("name").value;

//     document.getElementById('display').textContent= `Hello ${name}`;
// }

// ------------ type conversion= change datatype of a value to another (string, number, boolean)-----------

// let age = window.prompt("how old are you?");
// age= Number(age);
// age+=1;

// console.log(age, typeof age);

// let x;
// let y;
// let z;

// x = Number(x);
// y= String(y);
// z= Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);

// console.log(z, typeof z);



//------- const= variable that can't be change---------

// const PI= 3.14;
// let r;
// let areaCircle;

// r= window.prompt(`Enter rediuys of circle: `)
// r=Number(r);

// areaCircle = PI *r*r;
// console.log(areaCircle)


//-------- Counter Program----------

const dec = document.getElementById('dec');
const reset = document.getElementById('reset');
const inc = document.getElementById("inc");
const countlabel = document.getElementById("countlabel");
let count = 0;

inc.onclick = function () {
    count++;
    countlabel.textContent = count;
}
reset.onclick = function () {
    count=0;
    countlabel.textContent = count;
}
dec.onclick = function () {
    count--;
    countlabel.textContent = count;
}



//-------Math ------------

// console.log(Math.PI);

// let x= 3.99;
// let y= 4;

// z=Math.round(x);
// console.log(z);

// z=Math.floor(x);
// console.log(z);

// z= Math.ceil(x);
// console.log(z);

// z=Math.trunc(x);
// console.log(z);

// z=Math.pow(x,y);
// console.log(z);

// z=Math.sqrt(x);
// console.log(z);

// z=Math.log(x);
// console.log(z);

// z=Math.sin(x);
// console.log(z);

// z=Math.max(x,y);
// console.log(z);

// let random = Math.random();
// console.log(random);



//-------------Object----------
const student = {
    name: "prem",
    age: 22,
    cgpa: 8.3,
    isPass: true
};

console.log (student);
console.log(student.age);
console.log(student["age"]);

student["age"] = student['age']+1;
console.log(student["age"]);



//------------Array------------
let cities= ["Ktm","Pok","Bkt","Dhg","Lat"];
//for each loop
for(let city of cities){
    console.log(city.toUpperCase());
}


//---------push in end of array---------
let students = ["prem","Hari","sita"];

students.push("Ram");
console.log(students);

//--------pop in end of array--------
students.pop();
console.log(students);

//-------Function ----------
function myFunction(){
    console.log("Welcome");
}
myFunction();
myFunction();
myFunction();
myFunction();

function myFunction2(msg,n){
    // paraneter -> input
    console.log(msg,n);
}
myFunction2("I am prem",100);// arguments

function sum(x,y){
    // Parimeter act as Local variable
    s= x+y;
    console.log("before return");
    return s;
    console.log("after return"); //It cannot run 
}
let val = sum(3,5);
console.log(val);


//-------------Arrow Function----------
 const arrowSum = (x,y) =>{
    s= x+y;
    console.log(s);
 };
 arrowSum(2,4);