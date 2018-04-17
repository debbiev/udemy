/*
// Lecture IIFE

//weird way to create a PRIVATE var score
function game(){
	var score = Math.random() *10;
	console.log(score >=5);
}

game();

//Same thing, this is an IIFE
// This is how people hacked JS, stick () around something to make it a fx arg?
// put the final () to get it to run
//  DATA PRIVACY
(function () {
	var score = Math.random() *10;
	console.log(score >=5);
})();

//Add an arg, the 5 gets passed in as the arg goodLuck
(function (goodLuck) {
	var score = Math.random() *10;
	console.log(score >=5 - goodLuck);
})(5);
*/

// CLOSURES

/*
function retirement(retirementAge){
	var a = ' years left until retirement';
	return function(yearOfBirth){
		var age = 2018 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
retirementUS(1962);

retirement(66)(1999);
*/


/*
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
*/

//This demonstrates the power of closures, because "job" comes
//from the parent which has already executed, and returned???
// and job, and name are kept private, which is the real reason for 
// using closures

function interviewQuestion(job){
	return function(name){
		if (job === 'designer') {
			console.log(name + ', can you explain what UX design is?');
		} else if (job ==='teacher'){
			console.log(name + ', what subject do you teach?');
		} else {
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
interviewQuestion('coder')('Deb');


