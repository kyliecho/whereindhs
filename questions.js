function randQ() {
	countdown(10)
	// need to make sure questions do not repeat...
	question = Math.floor(Math.random()*3 +1);
	switch (question) {
		case 1:
			q1();
			break;
		case 2:
			q2();
			break;
		case 3:
			q3();
			break;
	}
}
function countdown(time) {
	document.getElementById('timer').innerHTML = time;
	time--;
	count = setInterval(function() {
			if (time > -1) {
				document.getElementById('timer').innerHTML = time;
				time -= 1;
				console.log(time);
			}
			else {
				clearInterval(count);
				randQ();
			}
	},1000, time);
}
function q1() {
	document.getElementById('picture').src = 'pics/q1.jpg';
	ans = ['correct', 'wrong1', 'wrong2', 'wrong3']
	randA(ans);
}
function q2() {
	document.getElementById('picture').src = 'pics/q2.jpg';
}
function q3() {
	document.getElementById('picture').src = 'pics/q3.png';
	ans = ['correct', 'wrong1', 'wrong2', 'wrong3']
	randA(ans);
}

function randA(ans) {
	buttid=['first','second','third','fourth'];
	var i;
	for (i = 4; i > 0; i--) {
		number = Math.floor(Math.random()*i);
		document.getElementById(buttid[i-1]).innerHTML = ans[number];
		ans.splice(number,1);
	}
}

function checkans() {
	correctans = []
	if (correctans.includes(ans)) {
		
	}
}