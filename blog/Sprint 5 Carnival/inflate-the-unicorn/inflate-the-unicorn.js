  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

let unicornStages = {
  unicorn1:0,
  unicorn2:0,
  unicorn3:0,
}

function inflateBalloon(value){
  var x =value.charAt(7)
  unicornStages[value]++
  switch(unicornStages[value]){
    case 1:
      document.getElementById(value).src = "./images/unicorn-1.png";
      break;
    case 2:
      document.getElementById(value).src = "./images/unicorn-2.png";
      break;
    case 3:
      document.getElementById(value).src = "./images/unicorn-3.png";
      break;
    case 4:
      console.log("more than 4")
      alert("Unicorn Number " + x + " says thank you!")
      break;
    case 5:
      unicornStages[value] = 0
      alert("Oh no, You've popped the horn!!")
      alert("I can't believe you've done this")
      alert("Will you help it out again?")
      document.getElementById(value).src = "./images/unicorn-0.png";
      console.log(unicornStages[value])
  }
}
