"use strict";
// primitives and refrence 
Object.defineProperty(exports, "__esModule", { value: true });
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
let arr = [1, 2, 3, "Arun"];
let ar = [1, 2, 3, "Arun"]; // error
//Tuples
let rr = ["arun", 23];
let r = [23, "arun"]; // error
//enums
var Userrole;
(function (Userrole) {
    Userrole["Admin"] = "admin";
    Userrole["Guest"] = "guest";
})(Userrole || (Userrole = {}));
Userrole.Admin;
//# sourceMappingURL=Script.js.map