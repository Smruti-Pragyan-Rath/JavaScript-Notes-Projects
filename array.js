//Array in Js
//Array Declaration ->
arr=[1, 6, 8, 3];
console.log(arr); // 1 6 8 3
n=arr.length;
console.log(n);//4
console.log(arr[3]);//3

//To add element to the array we use push->

arr.push(10);//add at last 
console.log(arr); // 1 6 8 3 10
arr.unshift(5);//add in the begining
console.log(arr);// 5 1 6 8 3 10


//To remove element of the array->

arr.pop();//removes last element
console.log(arr); // 1 6 8 3 
arr.shift(); //removes first element
console.log(arr);//  1 6 8 3 

//for off loop
for(ele of arr){
    console.log(ele) // 1 6 8 3 in 4 different lines
}

//for each loop
arr.forEach(element => {
    console.log(element);// 1 6  8 3 in 4 different lines
});


//Note:-
//you can give multiple datatype in one array...
//you can put an array inside an array






