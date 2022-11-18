//start with compiling. if the two (js and ts) have the same name only different extension,or the js file doesnt exist, just run --- tsc name.ts
//node installed the compiler, work intergrated terminal--npm i -g typescript. confirm version by tsc -v
//autocompilation  tsc name.ts -w
const mario='heyya'
console.log(mario)//compile after wirting the code
const inputs=document.querySelectorAll('input')
console.log(inputs)


//manipulating independent items from the array called inputs
inputs.forEach(input=>{
    console.log(input)
})
//in a function, you can define the nature of dat that can be parsed in

const circ=(diameter:number)=>{
    return Math.floor(diameter*Math.PI)}
    console.log(circ(2))

    //the strict type applies in arrays and objects
    //cannot add a new property to an object, pushing also depends on the type preexisting in the array
    //cannot overrride an object. it will be changing types, you can restate the object with an another, only the values have to be the same types and values cant be changed
    
  let a:number;
  let b:string; //explicit assignement
  let c:boolean;
  
  let g;//common initialization
  //if teh content is an array, place the array symbol after the data type
   let arry:string[]=[];
   arry.push("string to be pushed")
 //union types. Use |to add more data types
   let mixedarray:(string|number)[]=[]//makes a union type, pushing both strings and numbers will be fine
//common union types
 let mymixedvar:string|number;
 mymixedvar=23;
 mymixedvar='luigi'
 //onjects
 let ninja:object={}
  ninja={
  //procceed to give it any props and values
 }
 //alternatively, go explicitly defining the properties directly in the definition for the object, i.e after the :

 let ninjatwo:{
    name:string,
    age:number
 }

 //dynamic, any type(union without specification)
 let age:any=2;
 age='two'//applies, its type remains any despite any type changes..becomes an array, object..whatever you want
 let mix:any[]=[]
//you can oush any data type into the mix array

let object1:{name:any, age:any}

//workflow and tsconfig
//have a public folder, code that will be deployed to the page, with the ts in a src folder
//tsc --init creates a tsconfig.json file-------------------------crucial
//uncomment the root directory in the tsconfig.json file created......changing the ./nameof folder with ts/root/source
//uncomment the outdir directory and ...attach the name of folder with js file..ie---./public(if it has the dir where the code is to be deployed)
//the outdir channels the tsc to where the js file is, where the code in ts(source, channeled by rootdir) is deployed
//after dir setting, just tsc -w
//the tsconfig.json should be in the specific folder, the rootdir(src), outdir(exit)tsc -w...to watch continually


//anything in the source file will compile to the outDir
//outside src folder will be compiled and a new js file be created also, to solve this add a pseudo src file to the display/public folder..which will take up the data in src and ensure only whats in the src compiles
//terminal points out there is a cantcomile.ts outside the src
//go to the end of tsconfig.json, and add an include directive, specifying only src should be included. the icnlude property should be in double quotes so as the value, which is the name of the src file
//without the include part, any ts file while compile to the outDir and create a respective js file for it
//"include":["name of source"]=specifies that values in the named source only will compile to the outDir. 

//arrow functions, the initailized variable becomes the name of the function and the data in () becomes the representative of the parameters

let greet:Function;
greet =()=>{
  console.log("Hi" +" "+"name")
}
greet();

//optional parameters, defining the data type of parameters and default values

let add=(a:number, b:number)=>{
  console.log(a+b)
}
add(3,4)//specified the paraemters data types

let add2=(a:number, b:number, c?:number)=>{
  console.log(a+b)
  console.log(c)//gives undefined
}
add2(9,4)

let add3=(a:number, b:number, c:number|string=10)=>{
  console.log(a+b)
  console.log(c)// has been given a default value. Parsing a value in the callback overrides the default
}
add3(3,199)
add3(3,199, "heyya")
add3(3,199, 8)// union types define the third parameter

//INFERENCES
//lack of return in afunction returns the type of void, otherwise the returned data is inferred. this can also be explicitly dictated in the function after the parameters 
//assigning the result of a function to a varaible sets the type of the variable to that of the returned  value

//ALLIASES
//rather than use long union types, you can assign them to a an allias

type stringNum=String|number

const greet1=(name:stringNum)=>{
  console.log('hi'+name)
}
greet1(1)
greet1('  JOHN')

let againusedtype:stringNum;//the type for the variable will be the one string num defines

//OBJECT ALLIASES
type uidtype=string|number//an alias for the type of uid

const greetuser=(user:{namee:string, uid:uidtype})=>{
  console.log(`${user.namee} says hello`)
  console.log(`they id is ${user.uid}`)
}
let user={namee:"John",
uid:23}
greetuser(user)

//alias for the object parameter in function
type obj={namee:string, uid:uidtype}
const greetwithalias=(input:obj)=>{
  console.log(`${input.namee} says hello`)//template literals allow for addition of data into a string
  console.log(`they id is ${input.uid}`)
}
greetwithalias(user)

//FUNCTION SIGNATURES
 //type setting:the strong typing specifies the final outpu and the parameter types
 let greeted:Function;
 //signature setting to state type of function

 let greetsignature:(a:string, b:number)=>void//strong typing the parameters a function should have and the type of feedback
//ts infers the returned data 
 greetsignature=(name:string, uid:number)=>{
  console.log(`${name} says this is my id ${uid}`)
 }

greetsignature('John', 23)


let sumorminus:(a:number, b:number, c:string)=>number  //strongtyping the function output creates erros if the output is not the data type
sumorminus=(numOne:number, numTwo:number,sign:string)=>{ //parameter aliases do not have to match
  if (sign==="add"){
    return numOne+numTwo;
  }
  else if(sign==="minus"){
     return numTwo-numOne}
   else{
    return 0
   }
  }

console.log(sumorminus(1,3,"add"))
console.log(sumorminus(1,3,"minus"))
console.log(sumorminus(1,3,"atsdhs"))

