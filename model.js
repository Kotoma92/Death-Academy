var battleText = 'Therese VS. Erlend!!';
const model = {
	mainTitle: 'Death Academy',

	spiller: [
		{
			navn: 'Therese',
			bilde: 'chefTherese.png',
			helse: 100,
			slag: 10,
			spark: 25,
		},
		{
			navn: 'Erlend',
			bilde: 'PandaErlendPNG.png',
			helse: 250,
			slag: 5,
			spark: 10,
		},
	],
};
var therese = model.spiller[0];
var erlend = model.spiller[1];
var buttons = false;
var thereseHit = false;
var erlendHit = false;
var thereseLost = false;
var erlendLost = false;
var erlendDisplay = true;
var thereseDisplay = true;
var endedGame;