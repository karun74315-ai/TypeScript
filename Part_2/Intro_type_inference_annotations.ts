// Type Inference

let a : number;

let b = 12; //variable ko type na btaye  --inference

//Annotations

let n : number; //type bta do 


function ab(a:number){

}

//interferces

interface User{
    name:string,
    email:string,
    password:string|number
    gender?:string //optional ho jata hai diya to thik nahi diye to bhi thik...
}


function  cn(obj:User){
    // obj.name="arun",
    // obj.email="jkfdh.com",
    // obj.password="ksndfkl"
    
}

cn({name:"HArsh", email:"fhksdl.com",password:"fsdlfh"});

// extending interface

interface use{
    name:string,
    email:string,
    password:string|number
    gender?:string 
}

interface admin extends use{
 admin:boolean
}

function jj(obj:admin){
    
}

//alises
// let am: boolean

type sankhya = number;
let am: sankhya = 197;


type value = string|number|null;

let yu:value;

// union type

type user = {
    name:string,
    email:string,   }

    type Admin = {
        name:string,
        email:string,
        admin:boolean
    }

