// // butoon ko access krrnge
// let btn1 = document.querySelector("#btn1");
// //btn1 ke upar event ko acces krane ke liye 
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a); // 26print ho ke aayega
// }

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are indide div");
// };

// event Object....?
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log(evt); // event ko print krwa skte hai 
//     console.log(evt.type); // evt ke type ko...
//     console.log(evt.target); // evt ke target ko..
//     console.log(evt.clientX, evt.clientY); // dippend on position clientX,clientY use krte hai..! 
// }

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log(evt);           // event ko print krwa skte hai 
//     console.log(evt.type);     // evt ke type ko access krne ke liye...
//     console.log(evt.target);  // evt ke target ko..
//     console.log(evt.clientX, evt.clientY);
// }


// event listeners.......?
// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked");
// });
// same event pr mulitipal kam krwa skte hai...! (event Listeners se) 
// enke andr ham event obj/type/taget ko bhi access kr skte hai,,,!
// btn1.addEventListener("click", (evt) => { // (evt)
//     console.log("butto was clicked - handler2");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// });


//Qs-> Creat a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.?
let modebutton = document.querySelector("#mode");
//mujhe asa button creat krna hai jo pahli click pr-dark dusri bar click-light phir durbar click pr darkmode me ho.
//ek variable banayenge jo current mode ko save krwayega
let currentmode = "light";
// phir es mode ke upar eventListener add krenge
modebutton.addEventListener("click", () => {
   if(currentmode === "light") {
    currentmode = "dark";
//if mujhe current mode ko dark banana hai to..
    document.querySelector("body").style.backgroundColor = "black";
   } else {
    currentmode = "light";
//dubara se chahiye to...
    document.querySelector("body").style.backgroundColor = "white";
   }
// change krane ke baad current mode ko print bhi krwa skte hai
   console.log(currentmode); 
});








