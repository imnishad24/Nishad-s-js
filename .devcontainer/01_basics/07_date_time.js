// Dates

let myDate = new Date()
/*console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());
console.log(typeof myDate); */

//let myCreateDate = new Date(2023,09,27);
//let myCreateDate = new Date(2023,09,27, 5, 55);
//let myCreateDate = new Date("2023-10-27");
let myCreateDate = new Date("10-27-2023");
//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();

//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());

//document.write(Date.now()/1000);

let newDate = new Date();
//document.write(newDate.getMonth());
// console.log(newDate.getDay());

// `${newDate.geDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
});