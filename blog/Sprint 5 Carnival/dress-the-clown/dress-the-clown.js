  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

//variables that track which image is currently shown for what section(head, body or shoes)

var headIndex = [3, 4, 5, 0, 1, 2]
var bodyIndex = [4, 5, 0, 1, 2, 3]
var shoeIndex = [4, 5, 0, 1, 2, 3]

//variables that track which section(head, body or shoes) is currently selected.
//Will always be the same, potential to put them into a single object, if you search for the object methods

var clothingIndex = [headIndex, bodyIndex, shoeIndex]
var clothingIndexString = ['head', 'body', 'shoes']

//Records what key is pressed and calls the required functions

document.addEventListener ('keydown', function(e) {
  switch (e.keyCode) {
      case 37:
        changeBodyPart('left');
        break;

      case 38:
        clothingIndexShuffle('up');
        break;
          
      case 39:
        changeBodyPart('right');
          break;

      case 40:
        clothingIndexShuffle('down');
        break;    

  }
});

//Function that takes in which section(head, body or shoes) and changes the index either up or down
//Will only ever be called by the function which changes the images

function bodyPartIndexShuffle(direction){
  index = clothingIndex[0]
  if(direction === 'left'){
    index.push(index.shift())
  }else if(direction === 'right'){
    index.unshift(index.pop())
  }  
}

//Function that changes between section(head body and shoes indexs) currently highlighted, up or down

function clothingIndexShuffle(direction){
  textChangeColorBlack()
  if(direction === 'up'){
    clothingIndex.unshift(clothingIndex.pop())
    clothingIndexString.unshift(clothingIndexString.pop())
    textChangeColorYellow()
  }else if(direction === 'down'){
    clothingIndex.push(clothingIndex.shift())
    clothingIndexString.push(clothingIndexString.shift())
    textChangeColorYellow()
  }
}

//Function that actually changes the images on screen basesd on indexs
//Then it calls the function to change the clothing indexes

function changeBodyPart(direction){
  if (direction === 'left'){
    bodyPartIndexShuffle('left')
  }else if (direction === 'right'){
    bodyPartIndexShuffle('right')
  }
  var bodyPart = document.getElementById(clothingIndexString[0])
  var image = "./images/" + clothingIndexString[0] + clothingIndex[0][0] + ".png"
  bodyPart.src = image
}

//Stretch functions to highlight which option is selected

function textChangeColorBlack(){
  var colorChange = document.getElementById(clothingIndexString[0] +"-text")
  colorChange.style.color = "black"
}

function textChangeColorYellow(){
  var colorChange = document.getElementById(clothingIndexString[0] +"-text")
  colorChange.style.color = "yellow"

}



// OG functions, no longer Needed


// function changeClownHead(direction){
//   if (direction === 'left'){
//     headIndexShuffle('left')
//   }else if (direction === 'right'){
//     headIndexShuffle('right')
//   }
//   var head = document.getElementById("head")
//   var image = "./images/head" + headIndex[0] +".png"
//   head.src = image
// }

// function headIndexShuffle(direction){
//   if(direction === 'left'){
//     headIndex.push(headIndex.shift())
//   }else if(direction === 'right'){
//     headIndex.unshift(headIndex.pop())
//   }  
// }