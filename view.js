showView();
function showView() {
	document.getElementById('app').innerHTML = /*HTML*/ `

    <div class="gridlayout">
      <div class="battleText">${battleText}</div>
      <div class="Therese">
        <div>Therese</div>
        <div class="healthbarLeft" style="width:${therese.helse}px"> ${therese.helse}HP</div>
        <img class="thereseBilde ${thereseHit ? 'thereseHit' : ''}${thereseLost ? 'thereseLost' : ''}" src="./bilder/${therese.bilde}"/>
      </div>
    
      <div class="Erlend">
        <div>Erlend</div>
        <div class="healthbarRight" style="width:${erlend.helse}px"> ${erlend.helse}HP</div>
        <img class ="erlendBilde ${erlendHit ? 'erlendHit' : ''}${erlendLost ? 'erlendLost' : ''}" src="./bilder/${erlend.bilde}"/>
      </div>

      <div class="Footer">
        <button class="myButton"${buttons ? 'disabled' : ''} onclick="attackSlag()">ATTACK SLAG!</button>
        <button class="myButton"${buttons ? 'disabled' : ''} onclick="attackSpark()">ATTACK SPARK!</button>
      </div>
  
    </div>

`;
}
