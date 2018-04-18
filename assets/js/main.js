console.log("up and running....")
var currentScore = 0;
var scoreboard = document.getElementById('score');

var cards = [
    
        { rank: 'Queen',
          suit: 'Hearts',
          image: "images/queen-of-hearts.png"
        },  
        { rank: 'Queen',
          suit: 'Diamonds',
          image: "images/queen-of-diamonds.png"
        },
        { rank: 'King',
          suit: 'Hearts',
          image: "images/king-of-hearts.png"
        }, 
        { rank: 'King',
          suit: 'Diamonds',
          image: "images/king-of-diamonds.png"
      },
]
var cardsInPlay = [];

// var checkForMatch = function(){
//     if (cardsInPlay[0] === cardsInPlay[1]) {
//         alert("You found a match!");
//         } else {
//         alert("Sorry, try again.");
//         }
// }

// var flipCard = function(){

//      var cardId = this.getAttribute('data-id');
//     console.log("user Fliped" + " " + cards[cardId].rank);
//     this.setAttribute('src', cards[cardId].image);
//    cardsInPlay.push(cards[cardId]);
//    if (cardsInPlay.length > 1){checkForMatch()};
// }

// var creatBoard = function(){
//     //console.log("new game, start or finish this one first")
  
//     for(var i = 0; i <cards.length; i++){
//       var ran = Math.random()*cards.length;
//       var cardElement = document.createElement('img');
//       cardElement.setAttribute('src',"images/back.png");
//       cardElement.setAttribute('data-id', Math.floor(ran));
//       cardElement.addEventListener('click', flipCard);
//       document.getElementById('game-board').appendChild(cardElement);
//     }
//     document.getElementById('score').innerHTML(currentScore)
//   }
 

// creatBoard();