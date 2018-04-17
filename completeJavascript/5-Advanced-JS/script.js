/*
var Person = function(name, yearOfBirth, job){
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	this.age = 2018 - yearOfBirth;
	this.calculateAge = function(){
		console.log(2018 - this.yearOfBirth);
	}
}

Person.prototype.lastName = "Smith";
Person.prototype.calcRetirementYear =
	function(){
		console.log(65 + this.yearOfBirth);
	};

var john = new Person('John', 1990, 'teacher');
var mary = new Person('Mary', 1965, 'coder');
var susan = new Person('Susan', 1965, 'UX Researcher');

john.calculateAge();
mary.calculateAge();
susan.calcRetirementYear();


//check all this stuff out in the console, by exploring mary instance

//susan.lastName === "Smith"

//Object.create  (instead of function contructors)
var personProto = {
	calculateAge: function(){
		console.log(2018 - this.yearOfBirth);
	}
}

var jon = Object.create(personProto);
jon.name = 'jon';
jon.yearOfBirth = '1990';
jon.job = 'teacher';

var jane = Object.create(personProto, {
	name: { value: 'Jane'},
	yearOfBirth: { value: 1969},
	job: { value: 'hacker'},
});

// jon & jane are pretty much identical (except for the actual data)

//Object.create allows us to create complicated stuff

var a=23;
var b=a;  //This is a Complete COPY of A
a = 46;

var obj1 = {
	name: "John",
	age: 26
}

var obj2 = obj1;
obj1 = 30; //oops, but this was interesting
var obj3 = obj2;
obj2.age = 40;

var age = 27;
var objJonas = {
	name: "Jonas",
	city: "Lisban"
	};

function change( a, b){
	//a is a prim, b is an obj
	a = 31;
	b.city = 'San Francisco';
}

change (age, objJonas);
*/

/*

var years = [1990, 1965, 1937, 1945, 1999, 2005, 1904];

//This is a callback Fx, el = element
function maxHeartRate(el){
	if( el >= 18 && el <= 81){
		return Math.round(206.9 - (0.67 * el));
	} else {
		return -1;
	}
}
//This is a callback Fx, el = element
function isFullAge(el){
	return el >= 18;
}

//This is a callback Fx, el = element
function calcAge(el){
	return 2018 - el;
}

function arrayCalc( arr, fn){
	var arrRes = [];
	for(var i=0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

// NOT calcAge():  which would execute it first
var ages = arrayCalc( years, calcAge );
var fullAges = arrayCalc( ages, isFullAge );
var maxHRate = arrayCalc( ages, maxHeartRate );
*/

function interviewQuestion(job){
	if (job === 'designer'){
		//anonymous fx
		return function(name){
			console.log(name + ', can you explain what UX design is?');
		}
	} else if (job ==='teacher'){
		return function(name){
			console.log(name + ', what subject do you teach?');
		}
	} else {
		return function(name){
			console.log('Hello ' + name + ' what do you do?');
		}
	}

}

//question = interviewQuestion();
var teacherQuestion =
	interviewQuestion('teacher');
teacherQuestion('Jonas');

var designerQuestion =
	interviewQuestion('designer');
designerQuestion('Jonas');

var otherQuestion =
	interviewQuestion('other');
otherQuestion('Jonas');
otherQuestion('Jane');
otherQuestion('Mark');
otherQuestion('Mike');

interviewQuestion('teacher')('Anita');


