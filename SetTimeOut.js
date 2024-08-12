//Set Time Out functions in js

//Time out functions are buildin js functions that run at a certain time(given) by the coder after the code is run

function hello(){
    console.log("Hello");
}

function mello(){
    console.log("Mello");
}
//For giving the desired time you have to multiply it by 1000
setTimeout(hello, 2*1000);//hello will get printed after 2 seconds of hitting the run button
setTimeout(mello, 1*1000);//mello will get printed after 1 seconds of hitting the run button

//Print 1 to 10 but with a gap of one second


for(let i=1; i<=10; i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);// 1 2 3 4 5 6 7 8 9 10 wil be printed in the interval od 1sec
}


