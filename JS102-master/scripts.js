//Use this file to implement Part One of your project


var animal = {};

animal.username = 'bob';

animal["tagline"] = 'bob the slob';

var noises = [];

animal.noises = noises;

// for ( var key in animal){
// 	if ( key === 'username' ){
// 		console.log('Hi my name is ' + animal[key]);
// 	} else if (key === 'tagline') {
// 		console.log('I like to say ' + animal[key])
// 	}
// };

var noiseArray = [];

noiseArray.push('honk');
noiseArray.push('beep');

noiseArray[2] = 'vrooom';

//console.log(noiseArray.length); //2

animal.noises = noiseArray;

//console.log(animal);

var animals = [];

var quackers = {
	username: 'DaffyDuck',
	tagline: 'Yippeee!',
	noises: ['quack','duck duck', 'growl']
};

animals[1] = quackers;


/////////////////////////
//FUNCTIONS
/////////////////////////

// ability to take in extra arguments

function AnimalTestUser(username){

	var argLength = arguments.length;
	var otherArgs = [];

	if ( argLength > 1){
		for ( var i=1; i < argLength; i++){
			otherArgs.push(arguments[i]);
		}
	}

	console.log()
	return{
		username: username,

		otherArgs: otherArgs
	}
}

var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );
// console.log(testSheep); //{ username: 'CottonBall', otherArgs: [ {'loves dancing': true}, [1,2,3] ] }

// constructor function based on codeschool
function AnimalCreator (userName, species, tagLine, noises){

	this.username = userName,
	this.species = species,
	this.tagline = tagLine,
	this.noises = noises,
	this.friends = []

}

// var sheep = new AnimalCreator( 'sheepman', 'sheep');

//console.log(typeof sheep);
 

//  function AnimalCreator(username, species, tagline, noises) {
 	
//  	var animal = {
//  		username: username,
//  		species: species,
//  		tagline: tagline,
//  		noises: noises,
//  		friends: []
//  	};

//  	return animal;
//  }

var sheep = new AnimalCreator( 'sheepman', 'sheep', 'you can do it', ['baahhh', 'arrgg']);
var pig = new AnimalCreator('little piggy', 'pig', 'Going to the market', ['oink', 'gulp']);
var cow = new AnimalCreator( 'bessie', 'cow', '2 legit to quit', ['moo', 'chomp chomp']);

// console.log(sheep);
// console.log(cow);

// v1
// function addFriend( animal, friend){
// 	animal.friends.push(friend);
// }

function addFriend( animal, friend){
	var animalFriend = friend.username
	animal.friends.push(animalFriend);
}

addFriend( sheep, cow);
addFriend( cow, sheep);
addFriend( cow, pig);
addFriend(pig, cow);

// console.log(sheep);

var myFarm = []
//add object to farm
function addFarm(object){
	myFarm.push(object);
}

addFarm(sheep);
addFarm(cow);
addFarm(pig);

// console.log(myFarm);

//create an empty array in each animal
function addMatchesArray(farm){
	for ( var animal in farm) {
		farm[animal].matches = [];
	}
}

addMatchesArray(myFarm);
// console.log(myFarm);

//send friends to matches array
function giveMatches(farm){
	for ( var animal in farm){
		farm[animal].matches.push(farm[animal].friends);
	}
}

giveMatches(myFarm);
console.log(myFarm);




// //////////////////
// NESTING
// //////////////////

// example

var box = {};
box['innerBox'] = {};

box['innerBox']['full'] = true;


//results in
// var box = {
// 	'innerBox': {
// 		full: true
// 	}
// }

//dot notation
box.innerBox.full = true;

var myInnerBox = box.innerBox;

// console.log(myInnerBox); //{full:true}

var friends = [];

function addFriendList(animal){
	friends.push(animal.username);
}

addFriendList(sheep);
addFriendList(pig);
// console.log(friends);

var relationships = {};

relationships.friends = friends;

var matches = [];

relationships.matches = matches;

relationships.matches.push(relationships.friends[0]);

console.log(relationships); 

//length of an object
console.log(Object.keys(relationships).length);
console.log(myFarm.length);

for( var i=0; i < myFarm.length; i++){
	myFarm[i].relationships = relationships;
}

console.log(myFarm[0]);

///
// SCOPE
////////

var g = 'global';

function go() {
	var i = 'local';
	var g = 'in here!';
	alert(g + ' inside scope');
}

go();
//go doesnt effect global scope. When writting varaibles.
alert(g + " outside scope");


