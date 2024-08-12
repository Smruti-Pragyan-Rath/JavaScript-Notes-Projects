//Functions in js
//-------------------------------------->
//Function declaration

function printonetoN(n){//function to print something
for(let i=1; i<=n;i++){
    console.log(i);
}
}

function eqn(a, b){//function that returns a value
    return Math.abs(a*a*a)+(b*b*b);
}

//Calling function
printonetoN(3);//1 2 3
printonetoN(4); // 1 2 3 4 
console.log(eqn(3, 1)); //28

//Ques1-> Write a code to generate a random integer number between 0 to 9
console.log('Ans');
console.log(Math.floor(Math.random()*10));


//Ques 2 -> Write a code to generate a random integer between -10 to 10 and 1 to 100(included)

function random(min, max){
    console.log(Math.floor(Math.random()* (max-min)+min));
}
random(-10, 10);
random(10, 100);

