showStart();
function showStart() {
  document.getElementById('app').innerHTML = /*HTML*/ `
  <div style="display:flex;justify-content:center;margin-top:20vh" class="battleText">Welcome to Death Academy</div>
  <div class="startFight">
  <button class="myButton" onclick="showView(),playBackgroundSound()">START FIGHT!</button>
  
  </div>
  
  `
}

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

function endedGameView(){
  document.getElementById('app').innerHTML = /*HTML*/ `
  <div style="display:flex;justify-content:center" class="battleText">${endedGame ? 'Therese won!' : 'Erlend won!'}</div>
  <div class="endedGame">
  <img src="./bilder/${endedGame ? therese.bilde : erlend.bilde}"/>
  </div>
  
  `
}
