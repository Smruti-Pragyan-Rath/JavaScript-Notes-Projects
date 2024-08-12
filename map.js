//Map takes the element of one array and stores it in another array in desired or given format
function add(ele){
    return ele+10
}
let arr=[1, 2, 3, 4];
console.log(arr);
let brr=[];// 1 2 3 4
brr= arr.map(ele => ele*ele);
console.log(brr);// 1, 4, 9, 16

brr=arr.map(add) // 
console.log(brr);// 11 12 13 14

