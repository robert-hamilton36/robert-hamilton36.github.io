  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")



var hitAudio = new Audio();
hitAudio.src = "whack-audio.wav"

var missAudio = new Audio();
missAudio.src = "miss-audio.mp3"

var moleHole = 3
var score = 0

var timer = null

var playing = true

let highscore = 0

var stopStart = document.getElementById('start')
stopStart.addEventListener('click', buttonStartStop)
//Code to create table for mole holes.

var table = document.getElementById("mole-holes")
for (var i = 0; i < 5; i++){
  var row = document.createElement('tr')

  for (var j = 0; j< 5; j++){
    var cell = document.createElement('td')
    cell.id = (i*5)+j +1
    cell.addEventListener("click", holeOnClick)
    row.appendChild(cell)
  }
  table.appendChild(row)
}

function playGame(){
  // if(moleHole){
  //   stopMoleHiding()
  //   // removeMole(moleHole)
  // }

  // buttonStartStop()
  
  timer = 30
  displayMole(chooseRandomHole())
  timeDisplay = window.setInterval(displayTime,1000);
  moleDisplay = window.setInterval(moleTimeOut,2000);
  
  
}

function stopMoleHiding(){
  removeMole(moleHole)
  timer = 0


  // var button = document.getElementById('start');
  // button.innerHTML = "Play Game"
  // button.onclick = function(){playGame()}
}

function displayTime(){
  var timing = document.getElementById('timer')
  if(timer>0){
    timer -= 1
    timing.innerHTML = "Time:" + timer
    console.log(timer)
  }else if(timer === 0){
    clearInterval(timeDisplay)
    stopMoleHiding()
    moleHole = null
    console.log("hello")
    checkNewHighscore(score)
    score = 0
    timer = null
    removeMole(moleHole)
    moleHole = null
   buttonStartStop() 
    
  } 
}


//old code to add eventlistener for all cells
// for (i=1; i<26; i++){
//   var hole = document.getElementById(i)
//   hole.addEventListener("click", holeOnClick)
// }



//Function to display the mole at an a given hole
//Used in tandem with choose Random Hole
function displayMole(cell){
  var image = document.createElement('img')
  image.src = "mole.PNG"
  image.style = "height: 77px; width: 77px;"
  document.getElementById(cell).appendChild(image)
  moleHole = cell
}

//function used to remove mole img from cell
function removeMole(cell){
  if(moleHole){
    moleAt = document.getElementById(cell)
    moleAt.removeChild(moleAt.firstChild)
    return cell
  }

}
  

//function to randomlly give a number between 1 & 26 cells
function chooseRandomHole(){
  return Math.floor((Math.random()*25)+1)
}


//function that decides whether a mole was hit or not
function holeOnClick(event){
  var id = event.target.getAttribute('id')
  var scoring = document.getElementById('score')
  if(id === null){
    hitAudio.play();
    score+=1
    scoring.innerHTML = "Score:" + score
    changeMoleHole()
  }else{
    missAudio.play();
    changeMoleHole()
    score-=1
    scoring.innerHTML = "Score:" + score
  }
}

function changeMoleHole(){
  var x = removeMole(moleHole)
  var y = chooseRandomHole()
  while(y == x){
    y = chooseRandomHole()
  }
  displayMole(y)
}

function moleTimeOut(){
  if(timer>0){
    missAudio.play()
    changeMoleHole()
  }else if(timer === 0){
    clearInterval(moleDisplay)
  }

    
    
  
  
}

function buttonStartStop(){
  var button = document.getElementById('start');
  if(playing){
    playing = false
    button.innerHTML = "Stop Game"
    playGame()
  }else{
    removeMole(moleHole)
    timer = null
    clearInterval(timeDisplay)
    clearInterval(moleDisplay)
    score = 0
    playing = true
    button.innerHTML = "Play Game"
  }
}

function stopGame(){
  timer = 0
  clearInterval(timeDisplay)
}

function checkNewHighscore(score){
  if (score > highscore){
    console.log("highScore")
    alert("Your new high score is:" + score)
    highscore = score
    let scoreDisplay = document.getElementById('highscore')
    scoreDisplay.innerHTML = 'Highscore: ' + highscore
  }
}

// function buttonStartStop(){
//   var button = document.getElementById('start');
//   if (button.innerHTML == "Play Game"){
//     button.innerHTML = "Stop Game"
//     button.onclick = function(){stopMoleHiding()}
//   }else if(button.innerHTML == "Stop Game"){
//     button.innerHTML = "Play Game"
//     button.onclick = function(){playGame()}
//   }
// }

