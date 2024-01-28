// function sum(a, b) {
//     console.log(a+b);
// }
// function calculator(a, b, sumCallback) {
//     sumCallback(a,b);
// }

// // calculator(1,2, sum); // 2trike se 

// //       "OR"

// calculator(1,2,(a,b) => {
//     console.log(a+b);
// });


// const hello = () => {
//     console.log("hello");
// }
// setTimeout(hello,10000); // output 10sec baad print hoga....!

//Callback Hell.....?
// programming krte samey asi situation ban jati hai jiske andar hamare pass nested callback aa jata hai...!

//nested if else......!
// let age = 19;
// if(age >= 18) {
//     if(age >=60) {
//         console.log("senior");
//     } else {
//         console.log("middle");
//     } 
// } else {
//     console.log("child");
// }

// nested loops.....!
// for(let i=0; i<5; i++) {
// // smae line pr lane ke liye i can creat a string
//     let str = "";
//     for(let j=0; j<5; j++) {
//         str = str + j;
//         console.log(j)
//     }
//     console.log(i,str);
// }

//DATA BASE....! (getData = hame Data return krata hai)

// function getData(dataId) {
//     console.log("data", dataId);
// }

// getData Base time bhi leta hai....!
// function getData(dataId) {
//     //2sec
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000);
// }


// ab mujhe pahale Data1 phir Data2 phir Data3 chahiye.....!yani
//data1
//data2
//data3  lekin do do second bad print krna hai...!(getNextData ka use krte hai)

// function getData(dataId, getNextData) {
//     //2sec
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 5000);
// }
// ese hi Callback hell kahate hai (niche)..!
// getData(1, () => {
//     console.log("getting data2....");
//     getData(2, () => {
//         console.log("getting data3....");
//         getData(3, () => {
//             console.log("getting data4....");
//             getData(4);
//         });
//     });
// });

//callback Hell wali problem ko solve krane ke liye "Promises" ka concept aata hai...!

// let promise = new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     // resolve(123);
//     //    resolve("succes"); // state=> "fulfilled", Result=> "success"
//     //jese promise resolve hota hai wese hi reject bhi hota hai....!
//     reject("some error"); // (red line- error aayega) promise likhe to => state=> rejected, result=>"some error"
    
// })

//*Exm=> Promise....!
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {    //API hame new promise return krati hai
//       setTimeout(() => {

//agar success se apni data return kr dete hai to promise ko resolve krdete hai
//     console.log("data", dataId);
//     resolve("success");

//jb ham data send nhi kr pate to "Promise" ko API reject kr deti hai...!
//         //  reject("error");
//         if(getNextData) {
//             getNextData();
//         }
//       }, 5000);

//     });
// }

//promise me "resolve(success)" & "rejected(error)".......?

// const getpromise = () => {
//    return new Promise((resolve, reject) => {
//         console.log("i am a promise");
//         resolve("success");  // resolve kr de to...!

//         // reject("error");   // reject kr de to..
//     });
// };
// //call kr rhe hai return krega kuchh promise
// let promise = getpromise();  
// promise.then((res) => {  // (resolve ke liye)
//     console.log("promise fulfilled", res);
// })
// //erro ko catch krane ke liye...!
// promise.catch((err) => {
//     console.log("rejected", err);
// })

//"Promise chaining"............?
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 5000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 5000);
    });
}

console.log("fetching data1..."); //(fetching = getting)
//asyncFunc ko call krenge....!
let p1 = asyncFunc1();
p1.then((res) => {
    console.log("fetching data2....");
    let p2 = asyncFunc2();
    p2.then((res) => {
    });
});

//    "OR"        => (ek aur tarika se output same aayega....!);

// console.log("fetching data1..."); //(fetching = getting)
// //asyncFunc ko call krenge....!
//  asyncFunc1().then((res) => {
//     console.log("fetching data2....");
//  asyncFunc2().then((res) => {
//     });
// });
//To es tarike se hamari promise chaining kam karti hai chaining = (ek.then ke sath dusra .then chain krke likhana)















