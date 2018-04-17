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
