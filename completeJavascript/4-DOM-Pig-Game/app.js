/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;



scores = [0,0];
roundScore = 0;
activePlayer = 0;
document.querySelector('.dice').style.display = 'none';
/*
p1Score = document.getElementById("score-0").textContent = '0';
p2Score = document.getElementById("score-1").textContent = '0';
p1Current = document.getElementById("current-0").textContent = '0';
p2Current = document.getElementById("current-1").textContent = '0';
*/
p0Score = document.getElementById("score-0");
p1Score = document.getElementById("score-1");
p0Current = document.getElementById("current-0");
p1Current = document.getElementById("current-1");
var DomScores = [ p0Score, p1Score ];

p0Score.textContent = '0';
p1Score.textContent = '0';
p0Current.textContent = '0';
p1Current.textContent = '0';

/* ---------------  SwitchPlayers  ---------------------------- */
function SwitchPlayers(){
	//switch players
	activePlayerID='player-' + activePlayer + '-panel';
	document.getElementById(activePlayerID).classList.toggle('active');
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	activePlayerID='player-' + activePlayer + '-panel';
	document.getElementById(activePlayerID).classList.add('active');
}
/* ---------------  Hold  ---------------------------- */
document.querySelector('.btn-hold').addEventListener('click', function(){
	document.querySelector('.dice').style.display = 'none';
	//add the roundScore to the player's overall score
	scores[activePlayer] += roundScore;
	roundScore=0;

	/* End of Game Determination  */
	if(scores[activePlayer]  >= 100){
		//We have a WINNER
		document.getElementById('name-' + activePlayer).textContent = 'WINNER';
		document.querySelector('.btn-hold').active = false;
		document.querySelector('.btn-roll').active = false;
	} 

	//upate the displaying of the scores
	if (activePlayer === 0){
		p0Score.textContent = scores[activePlayer];
		p0Current.textContent = '0';
	} else {
		p1Score.textContent = scores[activePlayer];
		p1Current.textContent = '0';
	}
	//switch players
	//activePlayer = !activePlayer;
	//console.log('Hold.pre.activePlayer=' + activePlayer);
	//activePlayer = Math.floor(!activePlayer);
	//console.log('Hold.post.activePlayer=' + activePlayer);
	SwitchPlayers();
});

/* ---------------  Roll the Die ---------------------------- */
document.querySelector('.btn-roll').addEventListener('click', function(){
	// 1.  generate random number
	var dice =  Math.floor(Math.random() * 6) + 1;
	var diceDOM = document.querySelector('.dice');
	//console.log(dice);

	// 2. display the result
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';


	// 3.  Update the round score, IFF dice !=1

	if(dice !== 1 ){
		
		roundScore += dice;
		//DomScores[activePlayer].textContent += roundScore;
		if (activePlayer === 0){
			p0Current.textContent=roundScore;
		} else {
			p1Current.textContent=roundScore;
		}

	} else {
		SwitchPlayers();

		roundScore = 0;
		//set both current scores back to  zero
		p0Current.textContent = '0';
		p1Current.textContent = '0';
	}
});


