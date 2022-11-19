"use strict";
//start with compiling. if the two (js and ts) have the same name only different extension,or the js file doesnt exist, just run --- tsc name.ts
//node installed the compiler, work intergrated terminal--npm i -g typescript. confirm version by tsc -v
//autocompilation  tsc name.ts -w
const mario = 'heyya';
console.log(mario); //compile after wirting the code
const inputs = document.querySelectorAll('input');
console.log(inputs);
//manipulating independent items from the array called inputs
inputs.forEach(input => {
    console.log(input);
});
//in a function, you can define the nature of dat that can be parsed in
const circ = (diameter) => {
    return Math.floor(diameter * Math.PI);
};
console.log(circ(2));
//the strict type applies in arrays and objects
//cannot add a new property to an object, pushing also depends on the type preexisting in the array
//cannot overrride an object. it will be changing types, you can restate the object with an another, only the values have to be the same types and values cant be changed
let a;
let b; //explicit assignement
let c;
let g; //common initialization
//if teh content is an array, place the array symbol after the data type
let arry = [];
arry.push("string to be pushed");
//union types. Use |to add more data types
let mixedarray = []; //makes a union type, pushing both strings and numbers will be fine
//common union types
let mymixedvar;
mymixedvar = 23;
mymixedvar = 'luigi';
//onjects
let ninja = {};
ninja = {
//procceed to give it any props and values
};
//alternatively, go explicitly defining the properties directly in the definition for the object, i.e after the :
let ninjatwo;
//dynamic, any type(union without specification)
let age = 2;
age = 'two'; //applies, its type remains any despite any type changes..becomes an array, object..whatever you want
let mix = [];
//you can oush any data type into the mix array
let object1;
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
let greet;
greet = () => {
    console.log("Hi" + " " + "name");
};
greet();
//optional parameters, defining the data type of parameters and default values
let add = (a, b) => {
    console.log(a + b);
};
add(3, 4); //specified the paraemters data types
let add2 = (a, b, c) => {
    console.log(a + b);
    console.log(c); //gives undefined
};
add2(9, 4);
let add3 = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c); // has been given a default value. Parsing a value in the callback overrides the default
};
add3(3, 199);
add3(3, 199, "heyya");
add3(3, 199, 8); // union types define the third parameter
const greet1 = (name) => {
    console.log('hi' + name);
};
greet1(1);
greet1('  JOHN');
let againusedtype; //the type for the variable will be the one string num defines
const greetuser = (user) => {
    console.log(`${user.namee} says hello`);
    console.log(`they id is ${user.uid}`);
};
let user = { namee: "John",
    uid: 23 };
greetuser(user);
const greetwithalias = (input) => {
    console.log(`${input.namee} says hello`); //template literals allow for addition of data into a string
    console.log(`they id is ${input.uid}`);
};
greetwithalias(user);
//FUNCTION SIGNATURES
//type setting:the strong typing specifies the final outpu and the parameter types
let greeted;
//signature setting to state type of function
let greetsignature; //strong typing the parameters a function should have and the type of feedback
//ts infers the returned data 
greetsignature = (name, uid) => {
    console.log(`${name} says this is my id ${uid}`);
};
greetsignature('John', 23);
let sumorminus; //strongtyping the function output creates erros if the output is not the data type
sumorminus = (numOne, numTwo, sign) => {
    if (sign === "add") {
        return numOne + numTwo;
    }
    else if (sign === "minus") {
        return numTwo - numOne;
    }
    else {
        return 0;
    }
};
console.log(sumorminus(1, 3, "add"));
console.log(sumorminus(1, 3, "minus"));
console.log(sumorminus(1, 3, "atsdhs"));
//GENERICS -- reusable code block that can be used with types
const randomId = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid }); //returns the object parts destructured elements plus a new uid index
};
let myIdwithrandomid = randomId({ name: "Iyvone", age: 18, skills: "The most you'll ever hear of" });
console.log(myIdwithrandomid); //at this instance it is impossible to access the specific properties of the object...myidwithrandomid.name gives an error
//the error is because the object type specifiied in the parameter is an object, withoust specifying the props in it. at this juncture, the properties are still unknown
//generics  are used to replace the type of the parameter parsed--add <T>(parameter:T)=>{}
//the generioc capture the properties in the parameter,allowing recalls
const randomId2 = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid }); //returns the object parts destructured elements plus a new uid index
};
let mygenericrandomid = randomId2({ name: "Iyvone", age: 18, skills: "The most you'll ever hear of" });
console.log(myIdwithrandomid);
console.log(mygenericrandomid.name); //the properties are captured by the T generic and can be accessed considering the type T is generic
//however, this degrades strong typing, allowing paraemter type changes. in case below the paremeter is a string and will still get a random is
let mygenericrandomid2 = randomId2('Hello');
console.log(mygenericrandomid2); //it destructures hello to form an object and adds id to it
//to specify the parameter type, without losing the ability to retract the properties
const randomId3 = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid }); //returns the object parts destructured elements plus a new uid index
};
let mygenericparameterspscificrandomid3 = randomId3({ name: 'Iyvone', age: '18' });
console.log(mygenericparameterspscificrandomid3);
//we can specify the type of object parameters to be parsed by replacing the object extension to the actual properties to be expected
const randomId4 = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid }); //returns the object parts destructured elements plus a new uid index
};
let objectwithgenericidforobjectdefinition = randomId4({ name: "Iyvone", age: 18, skillset: "The most you'll ever hear of" });
console.log(objectwithgenericidforobjectdefinition);
console.log(objectwithgenericidforobjectdefinition.skillset);
const resourceinstance0 = {
    uid: 1,
    resourceName: 'John Olsen',
    data: 'can be anything--generic'
};
const resourceinstance2 = {
    uid: 2,
    resourceName: 'Candace Owens',
    data: ['anything, i mean']
};
const resourceinstance = {
    uid: 4,
    resourceName: 'Shapiro',
    data: {} //changing this to any other data form creates an error
};
//ENUMS--Allow storage of a set of contsnts that can be associated with anumeric value
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Book"] = 0] = "Book";
    ResourceType[ResourceType["Author"] = 1] = "Author";
    ResourceType[ResourceType["Film"] = 2] = "Film";
    ResourceType[ResourceType["Director"] = 3] = "Director";
    ResourceType[ResourceType["Person"] = 4] = "Person";
})(ResourceType || (ResourceType = {})); //this list of const can be used as the type for the resource type in the reosirce interface
const enumThingInstance1 = {
    uid: 34,
    name: 'John Cena',
    data: "Won against A.J styles",
    resourceType: ResourceType.Author //--this numeric const can be 
};
console.log(enumThingInstance1); //logs the index for the .author
//TUPLES -prevent type changes in flexible variables
let arr = ['ryu', 34, true]; //its flexible thus all the below code can be run--type changes
arr[0] = false;
arr[1] = 'Yoshi';
arr[2] = 60;
//defining positions with tuples, ensuring any changes remains within the data type
let tup = ['Hey', 34, true]; //limits that any array with the tupple follows the order provided. the tup :[contains the tupple:chronology]
tup[0] = 'can only take up a tring as the position is defined, as in the examples below';
tup[1] = 23;
tup[2] = false; //changes the tup considerintg the order has been respected
console.log(tup);
