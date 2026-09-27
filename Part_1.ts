// primitives and refrence 

var a = 10; // primitive type
var ab = a;
ab++;
console.log(a); // 10
console.log(ab); // 11

var b = "Arun"; // primitive type
var c = true; // primitive type

var d = { name: "Arun", age: 30 }; // refrence type

var e = [1, 2, 3, 4]; // refrence type
var ee = e;

// primitive 

let aa = 12;

// Arrays

let arr =[1,2,3,"Arun"];


let ar: number[]=[1,2,3,"Arun"] // error

//Tuples

let rr: [string, number] = ["arun",23]
let r: [string, number] = [23,"arun"] // error


//enums

enum Userrole{
    Admin= "admin",
    Guest = "guest"
}

Userrole.Admin

enum code{
    notfound = 700,
    found=600
}

let n //any 

// let nn: number;
let nn
nn= 12;
nn="arun"  // error



// unknown
let  bb: unknown
bb=23
bb="ahdf"

if(typeof bb === "string"){
    bb.toLocaleUpperCase
}

//void

function abc(){
    console.log("hey")
}


// null 

let av: null ;

// union

let hh:string | null;

hh = "arun";
hh = null;
hh=23;  // error 
