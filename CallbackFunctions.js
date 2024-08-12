//Advanced functions in js


//1. CALL BACK FUNCTIONS
/*Call back functions are functions inside functions */

function product(x, y, z){
    return x*y*z;
}

function fun(x, y){
    a=x(2,1,1);
    console.log(a-y);
}
//This is a call back function ->
fun(product, 1)//1
