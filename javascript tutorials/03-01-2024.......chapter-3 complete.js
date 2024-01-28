// // String....?
// let str = "Govindpandey";
// let str2 = 'mohanpandey'; // do tariko se string ko define kr skte hai
// console.log(str2[5]); // mohanpandey me 012345 => p aayega to print kr ke dega


// Template Literals....? => this is a special types of string (` `)=> Backtick
// let specialString = `this is template literals`; 
// console.log(specialString);

// string hi print krni hai to " " ya ' ' code tha backtick ` ` kyo use krne ki jarurat padi....?
// example

// let obj = {
//     item : "pen",
//     price : 10,
// };
// console.log("the cost of", obj.item, "is", obj.price, "rupees"); // string ke from me print kra diya

// es puri line ko kyo na ek single line me combine kr du => single line me(template literals) 
//  se kr combine kr skte hai !

// let obj = {
//     item : "pen",
//     price : 10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`; // template literals
// console.log(output);

// Template Literals => tab & scape bhi hota hai
// let str = "govind\tpandey"; // => 1-tab ka work krega
// console.log(str);

// let str = "govind\npandey"; // => 2- scape yani next line ka work 
// console.log(str);

// String method  in js....?

// let str = "Apna college";
// console.log(str);
//          'or'
// let str = "Apna College";
// str = str.toUpperCase(); // same lowercase.!
// console.log(str);

// string print hoga then for upppercase=> str.toUpperCase(); (in run box)=> APNA COLLEGE 

//1-> note=> js ke andr origenal chij kabhi change nhi hot because string immutable(jo chij change nhi ho) hota hai
// nya change aayega to nai chij creat hokr ayega..!


//1->str.trim()  // removes whitepaces.........? (last & ending space remove)

// let str = "        Apna College js       ";
// console.log(str.trim());


//2->str.slice(start,end..?) Returns part of string..........?
// let str = "0123456";
// console.log(str.slice(1,5)); // ending index noneincludeing yani 5 add nhi hoga

// let str = "Hello";
// console.log(str.slice(0,3)); // Hel hi print hoga..


// str1.concat(str2) joins str2 with str1 => do string ko jodna..........?

// let str1 = "Apna";
// let str2 = "College";

// let res = str1.concat(str2);
// console.log(res);
//       'or'
// let res = str1 + str2;  //=> concat krne ka do tarika hota hai..!
// console.log(res);

// str.Replace(Search val,new val)......?R.method string ke andar value ko search krke replace krne kaam ka krta hai 

// let str = "Hellolo";
// console.log(str.replaceAll("lo", "p"));

// str.charAt(idx)........?  => strig ke andar kisi bhi index pr char hame return krana ho

// let str = "IloveJs";
// console.log(str.charAt(5));

//Qs-> prompt the user to enter their full name. Generate a username for them based on the input
//     Start username with @, followed by their full name and ending with the fullname length.

//    eg: user name = "Govindpandey",username should be "@Govindpandey12"

// let fullName = prompt("enter your fullname without space");
// let username = "@" + fullName + fullName.length;
// console.log(username);











