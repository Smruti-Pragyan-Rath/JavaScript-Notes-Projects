//Objects in js
//----------------------------->

//Object in js is kind of like map/dictionary where we have key-value pairs

//Object declaration
let x={
    name: "Smruti",
    age: 19,
    percentage: 90,
    ismarried: false
}

console.log(x);//{ name: 'Smruti', age: 19, percentage: 90, ismarried: false }
console.log(x.age);//19

for (const key in x) {
    console.log( key = x[key]);
}
// Smruti
// 19
// 90
// false




