/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

var i, allAnswersString;
var Question = function(q, answers, correctAnswer){
	this.q = q;
	this.answers = answers;
	this.correctAnswer = correctAnswer;
	this.checkAns = function(ans){
		if (ans == this.correctAnswer){
			return 'That is correct!!';
		} else {
			return 'Sorry, that is not the answer';
		}
	}


}

var q1 = new Question(
	"Serious physical violence or any action deemed by the officials to cause and extraordinary physcial threat is grounds for a/an:",
	[ "No Impact/No Penalty", "Gross Misconduct Penalty", "Penalty"],
	1
);

var q2 = new Question(
	"Numbers on the helmet must match roster numbers, true/false?",
	[ "False", "True"],
	1
);

var q3 = new Question(
	"A skater swings their elbow in such a way that forces an opponent slightly off balance but does not cause them to lose their relative position. This is a/an:",
	[ "No Impact/No Penalty", "Expulsion", "Penalty"],
	0
);

var q4 = new Question(
	"Which of these are Legal Target Zones?",
	[ "Anywhere above the shoulders", "On the back of the buttocks", "On the back of the thigh", "The arms and hands"],
	3
);

var questions = [q1,q2,q3,q4];

var rand = Math.ceil(Math.random() *4);

console.log(questions[rand].q);

allAnswersString = questions[rand].q + '\n';
for(i=0; i< questions[rand].answers.length; i++){
	allAnswersString += '\n' + i + ': ' + questions[rand].answers[i];
}
var ans=prompt(allAnswersString);

console.log(questions[rand].checkAns(ans));

