
let arr=[1, 2, 6 , 7 ,4 ]
console.log(arr);
let brr=[];
brr= arr.reduce(function(a,b){
    return a+b
});
console.log(brr);//20

brr= arr.reduce(function(a,b){
    return a*a;
});
console.log(brr);//1