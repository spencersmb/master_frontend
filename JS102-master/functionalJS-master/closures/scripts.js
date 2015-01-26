//////
// Closures
/////

var nonsense = function(string){

	var blab = function(){
		alert(string);
	}

	setTimeout(blab, 2000);

	return blab;

};

// call the function using these variables
// var blabLater = nonsense('first');

// var blabAgainLater = nonsense('second');

var firstName = function(first){

	var lastName = function(last){
		console.log( first + ' ' + last );
	}

	return lastName;

};

myName = firstName('spencer');
//myName('bigum');


//closure with a method
var storyWriter = function(){

	var a = '';

	return {
		addWords: function(string){
			return a += string;
		},
		erase: function(){
			a = '';
		}
	};
};

var myStory = storyWriter();

// myStory.addWords('Sentence one goes here.');

// myStory.addWords('Sentence two goes here.');
//////////////
//TOASTER
///////////////

var toaster = function(){
	var bread = '';

	return{
		toast: function(bread){
			console.log(bread + ' is toasted');
		}
	};

};

//var breakfast = toaster();
//breakfast.toast('whole wheat bread');





//var checkAttendanceFunc = function(nameArr){
//    var resultArr = [];
//    for(var i = 0; i < nameArr.length; i++){
//        resultArr.push(function(){
//        	console.log('Is', nameArr[i], 'present?', i)
//        })
//    };
//    return resultArr;
//};
//
//var names = ['spencer, teela'];

// myList = checkAttendanceFunc(names);

//console.log(checkAttendanceFunc(names));


//CALLBACKS

var ifElse = function(condition, isTrue, isFalse, arg){

	//or arg could be passed as private
	//var arg = 0;

	if(condition){
		//execute the function variable
		isTrue(arg);
	}else {
		//execute the function variable
		isFalse(arg);
	}
};

var logTrue = function(){
	console.log(true);
};

var logFalse = function(){
	console.log(true);
};

//ifElse(true, logFalse, logTrue);


//////////////////////////
///PASING ARGUMENTS
////////////////////////////


var increment = function(n){
	return n+1;
};

var square = function(n){
	return n*n;
};

//setup to call another func with arg
var doMath = function(n, func){
	return func(n);
};

doMath(5,square); //25

doMath(5,increment); //6


//Callback exercises

//1
var funcCaller = function( func, arg){
	return func(arg);
};

var firstVal = function(array, func){

	return func(array[0], 0, array);
};

//take an object or an array
var secondVal = function(list, func){
	//return true if true
	if(Array.isArray(list)){
		return func(array[0], 0, array);
	} else {
		//for ( var k in list){
		//	return func(list[k], k, list);
		//}

		// method used here
		//pass list that returns array of all the keys
		//dont need to return in this instance
		//get the first value at 0
		var propArr = Object.keys(list);
		//call a func and pass it list with object name of the array,
		// show the first item of the propArray, and show the whole list
		func(list[propArr[0]], propArr[0], list)

	}

};





	///EC - Once
	//var once = function(func){
	//	var called = false;
	//	return function(a,b){
	//		//if called doesn't = true then run code
	//		//we are returning called below since we are already in a return
	//		//then we change it to true and run func
	//		if(!called){
	//			called = true;
	//			return func(a,b);
	//		} else {
	//			return console.log('credit card already charged');
	//		}
	//	}
	//};
	//var i = 0;
	//var once = function(func){
	//	return function(a,b) {
    //
	//		if (i <= 0) {
    //
	//			i++;
	//			return func(a, b);
    //
	//		} else {
	//			return console.log('credit card already charged');
	//		}
	//	};
	//};

//do Once function
var once = function(func){

	var called;

	var init = function(){
		called = true;
	};

	return function(a,b){
		if(typeof called === 'undefined'){
			init();
			return func(a,b);
		}
		console.log('credit card already charged');

	};


};

var chargeCreditCard = function(num, price){
	var total = num*price;
	console.log(total);
	return total;
};

var processPaymentOnce = once(chargeCreditCard);

processPaymentOnce(123456789012, 200);
processPaymentOnce(123456789012, 200);




var test= 'inner1';

//alternate way to do scope?
(function() {
	var test= 'inner2';

})();

//console.log(test);


//////////////////
//underscore
//////////////////
var arr = [1,2,3,4];

var logger = function(val){
	console.log(val);
};

//_.each( arr, function(val,i,list){
//
//	logger(val);
//	//console.log(arr[0]);
//});

//OR

_.each(arr, logger);

function AnimalMaker(name){

	return{
		username: name,

		speak: function(){
			console.log("Hi, my name is " + name);
		}
	};
}

var animalNames = ["smokey", "fluffy", "tigger"];

var pig = new AnimalMaker('miss piggy');

//console.log(pig.username);

var farm = [];

//for(var i= 0; i <animalNames.length; i++){
//	farm.push(AnimalMaker(animalNames[i]));
//}
//
//console.log(farm);
//farm[0].speak();
//loop through names, create animal object, then add to farm arr
//originally used a for loop and run each name through the function then push the object to the farm


//_.each(animalNames, function(name){
//	farm.push(AnimalMaker(name));
//});

//farm[0].speak();


//map function instead of each
var farm = _.map(animalNames, function(name){
	return AnimalMaker(name);
});


//or var farm = _.map(animalNames, AnimalMaker);

//console.log(farm[0].username);



//////////////////
//Excercises for underscore
//////////////////



///////////////////////////////
//1. loop through an object
///////////////////////////////

var farmLoop = function(val){
	//console.log(val);
};


_.each(farm, function(val){
	return farmLoop(val);
});


///////////////////////////////
//2. Write a function called checkValue that searches an array for a value. It takes an array and a value and returns true if the value exists in the array, otherwise it returns false.
///////////////////////////////

//var checkVal = function(array, value){
//	result = false;
//
//	_.each(array, function(val){
//		if(val === value){
//			console.log(true);
//			result = true;
//		}
//		console.log(false);
//
//	});
//	return result;
//};

//alternate to find value
//breaks out of the loop
var checkVal = function(array, value){

	result = false;

	_.find(array, function(val){
		if(val === value){
			console.log(true);

			return result = true;
		}

		return console.log('not found');

	});

};

//checkVal(animalNames,'suck');

///////////////////////////////
//4.Write a loop that pushes all the values in an object to an array.
///////////////////////////////


var input = {two: 2, four: 4, three: 3, twelve: 12};
var output = [];
var animalPush = function(object){

	_.each(object, function(v,i, obj){
		output.push(v);
	});

};
animalPush(input);
console.log(output);

///////////////////////////////
//4.Use _.filter to return all the even numbers in an array.
///////////////////////////////
var even = [];
var filterEven = function(array){
	_.filter(array, function(num){
		if(num % 2 === 0){
			even.push(num);
		}
	});
};

filterEven(input);
//console.log(even);