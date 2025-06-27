console.log("Hello Mummy");
console.log("Ky bey atkeli satkeli jhatkeli");
let name='Jaivardhan';
console.log(name);
const age=20;
// age = 21 error dega
console.log(age);

/* Comparison Operaters
   == , !=   checks the values of the variables
   === , !== checks the data types as well as values
*/
console.log("5 =='5'",5=='5');
console.log("5 == 5", 5==5);
console.log("5 ==='5'",5==='5');
console.log("5 === 5", 5===5);

// conditional statement
if(age%2==0)
{
  console.log("even number");
}
else{
  console.log("odd number");
}

// loops
for(let i=0; i<5; i++)
{
  console.log("Jaivardhan");
}
let str = "Jai"
for(let i of str)
{
  console.log(i,"\t");
}

// Objects: key-value pair
let student = {
  name : "Jai",
  age : 20 , 
  cgpa : 8.33 ,
  branch : "CSE"
}

for(let i in student)
{
  console.log("Key= ", i , " Value= ", student[i]);
}

// let username = prompt("Enter your name");
// username += "@gmail.com";
// alert("Welcome " + username);

let marks = [99,86,56,77,90];
for(let i=0; i<marks.length;i++)
{
  console.log(marks[i]);
}

marks.push(84);
console.log(marks);


// Function
let sum=0;
function marksAdd()
{
  for(let i=0;i<marks.length; i++)
  {
    sum+=marks[i];
  }
  return sum;
}
console.log("Sum= ",marksAdd());


//Arrow Function
let avg = () =>{
  return marksAdd()/5;
}

console.log(avg());


// callback -> function ko another function mei as a parameter paas krna

let arr = [1,2,3,4,5];
arr.forEach(function show(val)
{
  console.log(val*val);
})

let newArr = arr.map(function show(val)
{
  console.log(val*val*val);
  return val*val*val; // new arr banaye h isilye return statement likhe h
})

console.log(newArr);

let add = arr.reduce(function add(res,curr)
{
  return res+curr;
})

console.log(add);

let largest = arr.reduce(function add(res,curr)
{
  if(res<curr){
    return curr;
  }
  else{
    return res;
  }
})

console.log(largest);


function clearC()
{
  let exp = document.querySelector(".screen");
  exp.textContent = "";
}

function press1()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".one");
  scr_exp.textContent+=inp_exp.textContent;
}
function press2()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".two");
  scr_exp.textContent+=inp_exp.textContent;
}
function press3()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".three");
  scr_exp.textContent+=inp_exp.textContent;
}
function press4()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".four");
  scr_exp.textContent+=inp_exp.textContent;
}
function press5()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".five");
  scr_exp.textContent+=inp_exp.textContent;
}
function press6()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".six");
  scr_exp.textContent+=inp_exp.textContent;
}
function press7()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".seven");
  scr_exp.textContent+=inp_exp.textContent;
}
function press8()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".eight");
  scr_exp.textContent+=inp_exp.textContent;
}
function press9()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".nine");
  scr_exp.textContent+=inp_exp.textContent;
}
function press0()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".zero");
  scr_exp.textContent+=inp_exp.textContent;
}
function pressAdd()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".add");
  scr_exp.textContent+=inp_exp.textContent;
}
function pressSub()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".sub");
  scr_exp.textContent+=inp_exp.textContent;
}
function pressX()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".multi");
  scr_exp.textContent+=inp_exp.textContent;
}
function pressDiv()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".divide");
  scr_exp.textContent+=inp_exp.textContent;
}
function pressPrcnt()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".prcnt");
  scr_exp.textContent += "/100";
}
function pressMod()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".mod");
  scr_exp.textContent+="%";
}
function pressDel()
{
  let scr_exp = document.querySelector(".screen");
  let inp_exp = document.querySelector(".del");
  let stringExp = scr_exp.textContent;
  scr_exp.textContent="";
  for(let i=0; i<stringExp.length-1; i++)
  {
    scr_exp.textContent+=stringExp[i];
  }
}
function Equalto()
{
  let scr_exp = document.querySelector(".screen");
  try {
    scr_exp.textContent = eval(scr_exp.textContent);
  } catch (error) {
    scr_exp.textContent="Error! Invalid Input";
  }
  
}

