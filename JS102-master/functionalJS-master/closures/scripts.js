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
myName('bigum');


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

var checkAttendanceFunc = function(nameArr){
    var resultArr = [];
    for(var i = 0; i < nameArr.length; i++){
        resultArr.push(function(){ 
        	console.log('Is', nameArr[i], 'present?', i)
        })
    };
    return resultArr;
};

var names = ['spencer, teela'];

// myList = checkAttendanceFunc(names);

console.log(checkAttendanceFunc(names));












