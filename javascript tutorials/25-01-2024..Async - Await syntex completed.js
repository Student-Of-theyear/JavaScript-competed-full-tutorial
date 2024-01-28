// // // promise chaining......?
// function getData(dataId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 5000);
//     });
// }

// // The help of actiual promise chain...!
// getData(1)
//  .then((res) => {
//     return getData(2);
//  })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

//the help of Async-await...!
// async function getAllData() {
//     console.log("getting data1...");
//     await getData(1); // ye wali call complete hogi
//     console.log("getting data2...");
//     await getData(2); // tabhi 2 ko lagayenge
//     console.log("getting data3...");
//     await getData(3); // av output check krenge...!
// }




// Async - Await..........? (enka kam Asynchronous programming ko Easy banana..!)
//Async...? (kisi bhi normal fun ko Async bna skte hai..!)
// async function hello() {
//     console.log("hello");
// }

// //Await.....? (Await only Async function ke andar hi use hota hai Normaly use nhi hota..!)
// function api() {
//     return new Promise((resolve, reject) => {

// //turant data print krane ke liye......!
//     //    console.log("weather data");
//     //    resolve("200"); // (200 = represent in weather(success))

// //ham chahte hai ye jo kam hai turant na ho 4sec ke bad data return kre....!
//         setTimeout(() => {
//          console.log("weather data");
//          resolve(200);
//         }, 4000);

//     });
// }
// //Await only async function andar use hoti hai 
// async function getWeatherData() {
//     await api();  //1st time call hone ke bad hi
//     await api(); //2nd time ka work hota hai..!
//     await api();
//     await api();
// } 



// IIFE = (Immediately Invoked Function Expression)
// ham chahe to output me bina getWeatherData() likhe hi IIFE se print krwa skte hai 

// (async function getWeatherData() {   // ( lageyenge phir last me
//     await api();  //1st time call hone ke bad hi
//     await api(); //2nd time ka work hota hai..!
//     await api();
//     await api();
// }) ();
//last me )(); lga denge => ab ye code apne app execute ho jayega..(aur esko dubara call nhi kr payenge)


                      






