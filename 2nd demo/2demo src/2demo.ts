/*Has optional static typing--less errors->infers types but you can change them
IDE support--intergrated development environment(the editor supports this for easier debugging)
Node.js--open source cross platform that runs JS cross platform
Module has its own scope, scripts share scope..TS treats files as script, exporting nothing treats it as a module
*/
export{}
var message='Hello World'//the script will be used as a module
//let declarations can be initialized without a value, const declarations however require values during initializing

let x;
const z=2;//without the value, you get an error
/*After strong/static typing, calling the variable. provides al, the fetaures applicable to the specific data type
Null and undefined were subtypes and can be applied to other data types, not anymore */
let isNew=undefined;
let list1:Array<number>=[]//has a generic feel in interfaces--but for this the type in <>applies to all values that will be entered in the array

list1=[1,2]

let list2:number[]//simpler to use
let lsist3:[number, number, number]//use this when the array will have diffrent data types, follow order
lsist3=[2,3,4]
let list4:[number, string, boolean,null];
list4=[1, 'Hey', true, null]

//Enums
enum color{Red, Green, Blue}//its a type array of values that can be called and reassigned with indices
let c:color=color.Green//console c gives you the index of the input value
let d:color=color.Red
//assigning enum values custom indices
 enum newColor{magenta=6, plum, cyan}
 let e:newColor=newColor.cyan//its value will be 8..as the firts was initailized as 6
 //used for codes in code:)
 //type any can allow dynamic typing--similar unknown, only that in reassigning after giving type unknown requires type assertion
 let unK:unknown=10;
 (unK as string).toUpperCase()//Type assertion to allows data type change
 /*Static typing in aufnction
 function hasName(obj:any):obj is {name:string}{
    code block to be excutioned
 }---the function allows any parameter, but returns a string--no void no other data type

 If you assign the varibale in the first initailization, the type of the var is infered, no dynamic types

 */
let a2;
a2=12;
a2=false;//acceptable , no type inference during initialization

//FUNCTIONS
//tyep of return is often inferred
//optional parameters--add the ? to make it optional ...the optional param should also come later after the mandatory one

//Interface
function fullName(person:{firt1:string,fisrt2:string }){
    return `${person.firt1} is also called ${person.fisrt2}`
}
//you''ll have to define the object that you want thi function to work on first
let p={
    firt1:'John',
    fisrt2:'Mavercyn'
}
console.log(fullName(p))//rather than define all this on the function, we can set the param structure(any object) using inetrfaces and call isnatnces, useful especially in larger objects parameters whose properties can be reused in the differnt intances

interface Person{
    firtsname:string;
    lastname:string;
    age?:number//this proerty of the interface is optional
}
function easyfunction(person:Person){
    return `${person.firtsname} ${person.lastname}`
}
let p1={
    firtsname:"Mellow",
    lastname:"Willow"
}
easyfunction(p1)//will run as p1 has the properties the inteface adde din the parameters that the function manipulates
//instantitaing the intefrace to the function and parameter to be solved
let p2:Person={
    firtsname:'John',
    lastname:'Wick'
}
easyfunction(p2)//basically the same thing :D


//CLASSES--OOP
 class employee{
    emmployeename:string
      constructor(name:string){
        this.emmployeename=name;
    
    }
    greetthem(){
        return`Hello ${this.emmployeename}`
    }
 }
 //inheritence
 class Manager extends employee{
    constructor(mangername:string){
        super(mangername)
    }
    delegatework(){
       console.log(this.greetthem())
       console.log(`Hi ${this.emmployeename}`)
    }
 }
let m1=new Manager("Brent")