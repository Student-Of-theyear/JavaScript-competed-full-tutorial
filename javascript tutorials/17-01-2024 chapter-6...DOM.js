//               chapter - 6 [DOM]
// HTML = (stucture) = Hypertext markup language => ye hameri website ko stucture deti hai ki kis type ka content
//        hamamri website ke upr kaha pr aani chahiye heading ya botton, paragraph...

// Css = (syle) = Cascading Style Sheet => Hamri website ko style dena ki background,botton,text ka color kya hoga
//       kon si chij click krane pr kuchh achha sa effect show kranaa hai ya move kranaa hai apni elements ko....

// Js = (logic) = JavaScript => Fanily hamari veb page ke upr logic ko add krna yani botton ko click krne se 
//      hamari page ke upr kya change hona chahiye....

// console.log("hello");
// window.console.log("hellow world");
// window.alert("elo")

//Document ke andar object hoga aur js me html ko kese access krte hai.....? 
// console.log(document);
// console.log(document.body);
// console.log(document.head);

// Dom manipulation.........?
// let heading = document.getElementById("heading"); // h1 ki value return krega
// console.dir(heading);

//gitElementsByClassName - Html ke collection ko return krta hai...........!
// let headings = document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);

//Button ko access krene ka tarika html collection....?
// let button = document.getElementById("myId");
// console.dir(button);

//paragraph tags ko access krna chahte hai.....?
// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);
//To 3 tarike hote hai, to access or elements from the page......! 

//Type-2=>But level up ek aur tarika hota hai that is called=> "Query Selector"
//"Query Selector" => ke andar ham apni id/Class/tag name bhi pass kr skte hai....!

//mujhe sare paragraphs chahiye........?
//1st elements
// let firstElements = document.querySelector("p");
// console.dir(firstElements);

//sare ke sare elements chahiye....?
// let allElements = document.querySelectorAll("p");
// console.dir(allElements); // all elements yani node list aa jayega to hame 1 ko all sbhi ko access kr skte hai

//Class ke bases pr access......?(bs class ke idname dete time aage "." fullstop)...!
//only 1st para ke liye......!
// let firstElements = document.querySelector(".heading");
// console.dir(firstElements);

//para node list ke liye.....!
// let allElements = document.querySelectorAll(".heading");
// console.dir(allElements);

//button bhi access....bs uski idName ke age "#" hona chahiya....
// let firstElements = document.querySelector("#myId");
// console.dir(firstElements);


// let div = document.querySelector("div");
// console.dir(div);
// innerText => me only text..! & innerHTML => me tag related, HTML related info aata hai
// div.innerText....!  div.innerHTML...! check kr skte hai apne inspect-console me.... 

// let heading = document.querySelector("h1");
//heading=> Hello Govindpandey print hoga 
//badalna hai to => heading.innerText="sudhanshu"; / "<i>sudhanshu<i>" ya bold bhi kr skte hai







                                                                                                                                                 