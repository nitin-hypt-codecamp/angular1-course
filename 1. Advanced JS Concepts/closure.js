/*
//Example 1: Describe scoping of variables
function add(x, y){
  var result = x + y;
  console.log("Result:" + result);
}


//Once the function retuns i.e it is executed the parameters and local variables
//are no longer available in memeory

//This line generates an error - variable is undefined
console.log("value of x:" + x);
console.log("value of y:" + y);

*/

/*
//Example 2:Define an inner fucntion and call it inside the outer one
function add(x,y){

  var res = x + y;
  //Nested function defined
  function incrementResult(){
    console.log("value of x:" + x);
    console.log("value of y:" + y);

    res++;
    console.log("Result:" + res);

  }
  //inner function called
  incrementResult();
}

add(2,5);
*/


//Example 3:Define an inner fucntion and but do not call it, simply return it
function add(x,y){

  var res = x + y;
  function incerementResult(){
    console.log("value of x:" + x);
    console.log("value of y:" + y);

    res++;
    console.log("Result:" + res);
  }

  return incerementResult;
}

var outer = add(2,5);
outer()
