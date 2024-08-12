//we can sort the array using sort function

let arr=[1, 6, 4, 9, 2, -9, -2, -1];
arr=arr.sort();
console.log(arr);//-1, -2, -9, 1, 2,  4,  6, 9
   
// it does sort the array properly for positive numbers but for negative numbers it gives incorrect/invalid results
//we can customise the sort function

let brr=[1, 6, 4, 9, 2, -9, -2, -1];
brr=brr.sort((a, b)=> a-b);
console.log(brr);//-9, -2, -1, 1, 2,  4,  6, 9
//This gives the correct sorting ascending order

let crr=[1, 6, 4, 9, 2, -9, -2, -1];
crr=crr.sort((a, b)=> b-a);
console.log(crr);// 9,  6,  4,  2, 1, -1, -2, -9
//This gives the correct sorting descending order

let drr=[1, 6, 4, 9, 2, -9, -2, -1];
drr=drr.sort((a, b)=> Math.abs(a)-Math.abs(b));
console.log(drr);//  1, -1, 2, -2, 4,  6, 9, -9
//This gives the correct sorting ascending order igonoring the sign of the element


