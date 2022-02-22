showView();
function showView() {
	document.getElementById('app').innerHTML = /*HTML*/ `

    <div>Hei</div>
    <div>Therese: ${therese.helse}</div>
    <div class="healthbar" style="width:${therese.helse}px"></div>
    <button ${
			buttons ? 'disabled' : ''
		} onclick="attackSlag()">ATTACK SLAG!</button>
    <button ${
			buttons ? 'disabled' : ''
		} onclick="attackSpark()">ATTACK SPARK!</button>
    <div>Erlend: ${erlend.helse}</div>
    <div class="healthbar" style="width:${erlend.helse}px"></div>

`;
}
