function attackSlag() {
	if (criticalHit() < 90 && erlend.helse > 0) {
		erlend.helse -= therese.slag * 2;
	} else if (erlend.helse > 0) {
		erlend.helse -= therese.slag;
	}
	if (erlend.helse <= 0) {
		(erlend.helse = 0), alert('Erlend is toast');
		buttons = true;
	}
	npcHit();
	showView();
}

function attackSpark() {
	if (criticalHit() < 90 && erlend.helse > 0) {
		erlend.helse -= therese.spark * 2;
	} else if (erlend.helse > 0) {
		erlend.helse -= therese.spark;
	}
	if (erlend.helse <= 0) {
		(erlend.helse = 0), alert('Erlend is toast');
		buttons = true;
	}
	npcHit();
	showView();
}

function npcHit() {
	if (therese.helse <= 0) {
		(therese.helse = 0), alert('Therese is toast');
		buttons = true;
	} else {
		if (missHit() < 20) {
			return;
		} else {
			if (npcHitsWithWhat() > 50) {
				therese.helse -= erlend.spark;
			} else {
				therese.helse -= erlend.slag;
			}
		}
	}
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
