/*var name = 'John';
console.log(name)
var lastName = 'Smith';
console.log(lastName)
var age = 26;
console.log(age)

var fullAge = true
console.log(fullAge)

console.log(name + age)
console.log(age + age)

var job, isMarried;

console.log(job)

job = 'programmer'
console.log(job)

isMarried = false
console.log(isMarried)

console.log(name + ' ' + age + ' ' + job + ' ' + isMarried)
*/

// Lecture: Objects

/*
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth']=1969;
jane.job = 'retired';
jane.isMarried = true;

var john = {
        name: 'John',
        lastName: 'Smith',
        yearOfBirth: 1990,
        job: 'teacher',
        isMarried: false,
				family: ['Jane', 'Mark', jane],
				calculateAge: function(){
					age=2017 - this.yearOfBirth;
					return age;
				}
    };

console.log(john);
console.log(john.lastName);
console.log(john['lastName']);
var xyz = 'job';
console.log(john[xyz]);
console.log(john.$xyz); // undefined, but works in Vue???

john.lastName = 'Miller';
john['job']='programmer';


console.log(jane);
*/

// Coding Challenge 2
//  He did a couple things different (better) than I did.

var years = [1961, 1937, 1999, 2007];
var years2 = [1989, 2003, 1977]
//var ages = Array();
var ages = [];

function printFullAge(yearsArray){
	var result = Array();
	for(var i=0; i < yearsArray.length; i++){
		if((2018 - yearsArray[i]) >= 18){
			//result.push(true);
			result[i]=true;
		} else {
			//result.push(false);
			result[i]=false;
		}
	}
	return result;
}

//just need to declare i the first time
for(var i=0; i < years.length; i++){
	//ages.push(2018 - years[i]);
	ages[i]=2018 - years[i];
}

for(i=0; i < ages.length; i++){
	if(ages[i] >= 18){
		console.log('person ' + (i+1) + ' is ' + ages[i] + ' years old, and is of full age');
	} else {
		console.log('person ' + (i+1) + ' is ' + ages[i] + ' years old, and is NOT of full age');
	}

	console.log(ages[i]);
}

var result1 = printFullAge(years);
var result2 = printFullAge(years2)

console.log('result1: ' + result1);
console.log('result2: ' + result2);
