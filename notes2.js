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

//

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

