// filter filters out the element that satisfies the given conditions
function odd(ele){
    if(ele%2!=0)return true;
    else return false;
}
let arr= [1, 3, 6, 10, 9];
let brr=[];
brr= arr.filter(odd)
console.log(brr)// [ 1, 3, 9 ]

brr=arr.filter(ele => ele%2!=0)
console.log(brr)// [ 1, 3, 9 ]