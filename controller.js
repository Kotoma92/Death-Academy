function playBackgroundSound() {
	let backgroundSound = new Audio('./lyder/background-theme.mp3');
    backgroundSound.loop = true;
    backgroundSound.volume = 0.03;
    backgroundSound.play();
}

function attackSlag() {
	if (criticalHit() < 90 && erlend.helse > 0) {
		battleText = 'Therese critta Erlend for 20 skade med et slag!';
		erlend.helse -= therese.slag * 2;
	} else if (erlend.helse > 0) {
		battleText = 'Therese slo Erlend for 25 skade.';
		erlend.helse -= therese.slag;
	}
	if (erlend.helse <= 0) {
		(erlend.helse = 0), (battleText = 'Erlend is Toast :D.');
		buttons = true;
		erlendLost = true;
		thereseHit = false;
		erlendHit = false;
		endedGame = true;
		showView();
		setTimeout(endedGameView, 1000);
		return;
	}
	thereseHit = true;
	buttons = true;
	let lyd = new Audio('./lyder/punch.mp3');
	lyd.volume = 0.1;
	lyd.play();
	showView();
	setTimeout(npcHit, 2000);
}

function attackSpark() {
	if (criticalHit() < 90 && erlend.helse > 0) {
		battleText =
			'Therese critta Erlend for 50 skade med et forrykende spark!!!';
		erlend.helse -= therese.spark * 2;
	} else if (erlend.helse > 0) {
		battleText = 'Therese sparket Erlend for 25 skade.';
		erlend.helse -= therese.spark;
	}
	if (erlend.helse <= 0) {
		(erlend.helse = 0), (battleText = 'Erlend is Toast :D.');
		buttons = true;
		erlendLost = true;
		thereseHit = false;
		erlendHit = false;
		endedGame = true;
		showView();
		setTimeout(endedGameView, 1000);
		return;
	}
	thereseHit = true;
	buttons = true;
	let lyd = new Audio('./lyder/kick.mp3');
	lyd.volume = 0.2;
	lyd.play();
	showView();
	setTimeout(npcHit, 2000);
}

function npcHit() {
	if (missHit() < 20) {
		battleText = 'Erlend bomma på Therese :D';
		buttons = false;
		let lyd = new Audio('./lyder/miss.mp3');
		lyd.play();
		therese.hit = false;
		showView();
		return;
	} else {
		if (npcHitsWithWhat() > 50) {
			battleText = 'Erlend sparket Therese for 10 skade. AU!';
			therese.helse -= erlend.spark;
			let lyd = new Audio('./lyder/kick.mp3');
			lyd.volume = 0.2;
			lyd.play();
			buttons = false;
		} else {
			battleText = 'Erlend slo Therese for 5 skade. liten au!';
			therese.helse -= erlend.slag;
			let lyd = new Audio('./lyder/punch.mp3');
			lyd.volume = 0.1;
			lyd.play();
			buttons = false;
		}
		if (therese.helse <= 0) {
			(therese.helse = 0), (battleText = 'Therese is Toast :(.');
			buttons = true;
			thereseLost = true;
			thereseHit = false;
			erlendHit = false;
			endedGame = false;
			showView();
			setTimeout(endedGameView, 1000);
			return;
	}
	erlendHit = true;
}
	thereseHit = false;
	showView();
	erlendHit = false;
}

function criticalHit() {
	crit = Math.floor(Math.random() * 100);
	return crit;
}

function missHit() {
	miss = Math.floor(Math.random() * 100);
	return miss;
}

function npcHitsWithWhat() {
	hitsWithWhat = Math.floor(Math.random() * 100);
	return hitsWithWhat;
}
