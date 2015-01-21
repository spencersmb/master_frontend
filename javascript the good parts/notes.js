////**
// * Created by spencer on 1/18/2015.
// *//

//self invoking function
(function (){



}());

//CLOSURES
//self invoking
//names is now private and not part of global scope
var digit_name = (function (){
    var names = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine'];

    return function (n) {
        return names[n];
    };

}());

alert(digit_name(3));   // 'three'


//MODULE PATTERN
//A constructer is a function that returns an object
//make an object with 2 methods that have share acces to a private variable
var singleton = (function () {
    var privateVariable;
    function priviateFunction(x) {
        //..privateVariable..
    }
    return {
        firstMethod: function(a,b){
            //..privateVariable..
        },
        secondMethod: function (c) {
            //..privateVariable..
        }
    };
}());

//Turn the object above into a power constructor
//1. Make an object
//     - Object literal
//     - new
//     - object.create

function myPowerConstructor(x) {
    var that = otherMaker(x);
}

//2. define variable and functions
function myPowerConstructor(x) {
    var that = otherMaker(x);
    var secret = f(x);
}

//3. Augemnt the object with privvileged methods
function myPowerConstructor(x) {
    var that = otherMaker(x);
    var secret = f(x);
    that.priv = function () {
        //..secret x that..
    };
}
//4. return the object
function myPowerConstructor(x) {
    var that = otherMaker(x);
    var secret = f(x);
    that.priv = function () {
        //..secret x that..
    };
    return that;
}

//addf = applyf(add);
//addf(3)(4)   --7
//add is a function that adds number but could be any function with 2 inputs

function applyf(binary) {
    return function(a) {
        return function(b) {
            return binary(a, b);
        };
    };
}


//add3 -> curry(add, 3);
//add3(4) //7
//the curry function takes a function and first parameter - that returns a function that takes a 2nd parameter
//and returns the result of calling the function with both parameters

function curry(binary, first) {
    return function(b) {
        return binary(first, b);
    };
}

//extra credit
function curry(func, first) {
    return applyf(func)(first);
}


//3 examples on how to create the inc function
//inc(5) //6

function add (a,b){
    return a + b;
}

inc = curry(add, 1);

inc = applyf(add)(1);

inc = addf(1);


//
function demethodize(func){
    return function(that, y){
        return func.call(that, y);
    }
}

//twice - takes function add(11) and returns 22
//var double = twice(add)
//double(11) //22

function twice(binary){
    return function(a){
        return binary(a,a);
    };
}

//composeu(double, square)(3)
function composeu(function1, function2) {
    return function(a) {
        return function() {
            return function2(function1(a));
        }
    }
}
//composeu(add, mul)(2,3,5) = 25
//2+3 * 5 == 25
// add takes 2 varaibles
function compseb(function1, function2){
    return function(a, b, c){
        return function2(function1(a, b), c);
    }
}

//function that only gets called once
//add_once(3,4) //7
//add_once(3,4) !boom

function once(func){
    return function(){
        var f = func;
        func = null;
        return f.apply(
            this,
            arguments
        );
    }
}

//could also do this using the 3 wishes protocall set variable to 3 and decrement each time its used.


//basic module pattern
var Module = (function () {
  
  return {
    publicMethod: function () {
      // code
    }
  };

})();

//write a factory function
//counter = counterf(10)
//counter.inc() //11
//counter.dec() //10

var counterf = (function (value){

    return {
        inc: function(){
            value += 1;
            return value;
        },
        dec: function(){
            value -= 1;
            return value;
        }
    };

})();

//temp = revocable(alert);
//a factory that can can call a function once and if you call the other it wont call it again

var revocable = (function (value){

    return{
        invoke: function (){
            return value.apply(
                this,
                arguments
            );
        },
        revoke: function (){
            value = null;
        }
    };

})();
