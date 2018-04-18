// lecture: Bind, call and apply
/*

var john = {
	name: 'John',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay){
		if(style === 'formal'){
			console.log('Good ' + timeOfDay + ' ladies and gentlemen!  I\'m ' +
				this.name + ', I\'m a ' +
				this.job + ', and I\'m  ' +
				this.age + ', years old.');
		} else if (style === 'friendly'){
			console.log('Hey! What\'s up?! I\'m ' +
				this.name + ', I\'m a ' +
				this.job + ', and I\'m  ' +
				this.age + ', years old. Have a good ' + timeOfDay);
		}
	},
}

john.presentation('formal', 'morning');

var emily = {
	name: 'Emily',
	age: 35,
	job: 'designer',
}

//CALL
//method borrowing
//this var == emily
john.presentation.call(emily, 'friendly', 'afternoon');


//APPLY
//apply - put all the extra args in an array
//Jonas said this wouldn't work, but it worked for me
john.presentation.apply(emily, ['friendly', 'morning']);

//BIND
//doesn't call the fx, it generates a copy of the fx, so we can store it sometwhere
// useful to define a fx with predefined args
john.presentation.bind(emily, ['friendly', 'morning']);
*/

//BIND

var years = [1990, 1965, 1937, 2005, 1998]

function arrayCalc(arr, fx){
	var arrResult = [];
	for (var i=0; i < arr.length; i++){
		arrResult.push(fx(arr[i]));
	}
	return arrResult;
}

function calculateAge(el){
	return 2016 - el;
}

function isFullAge(limit, el){
	return el >= limit;
}

var ages=arrayCalc(years, calculateAge);
console.log(ages);

//because we don't care about the "this" arg, just put "this"
// I don't really understand that part
var fullJapan=arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);










