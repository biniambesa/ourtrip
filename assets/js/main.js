console.log("up and running....")
var currentScore = 0;
var scoreboard = document.getElementById('score');

var Events = [
    
  {
    id: 1,
    event_name: "Flight",
    event_date: "2012-04-23T18:25:43.511Z",
    description: "some description",
    duration: 4,
    images: {
      small_img: "./assets/images/flight.jpg",
      large_img: "./assets/images/flight.jpg"
    },
    participants: [
      {
      email: "B.hagos17@gmail.com",
      name: "Biniam",
      at_event: true,
      when: "2012-04-23T18:25:43.511Z"
    },{
    email: "m.hagos17@gmail.com",
      name: "Mical",
      at_event: true,
      when: "2012-04-23T18:25:43.511Z"
    }
  ]  
  },
{
    id: 2,
    event_name: "German",
    event_date: "2012-04-23T18:25:43.511Z",
    description: "some description",
    duration: 4,
    images: {
      small_img: "./assets/images/germanConvention.jpg",
      large_img: "./assets/images/germanConvention.jpg"
    },
    participants: [
      {
      email: "B.hagos17@gmail.com",
      name: "Biniam",
      at_event: true,
      when: "2012-04-23T18:25:43.511Z"
    },{
    email: "m.hagos17@gmail.com",
      name: "Mical",
      at_event: true,
      when: "2012-04-23T18:25:43.511Z"
    }
  ]  
  }
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

var cardClicked = function () {
  console.log("card is clicked")
}
var creatBoard = function(){
    //console.log("new game, start or finish this one first")
  
    for(var i = 0; i <Events.length; i++){
      var listElement = document.createElement('ul');
      listElement.setAttribute('id', "eventsList");
      
      var eventCard = document.createElement('li');
      eventCard.setAttribute('data-index', Events[i].id);
      eventCard.setAttribute('id', "eventCard")
      listElement.appendChild(eventCard);

      var eventImage = document.createElement('img');
      eventImage.setAttribute('src',Events[i].images.large_img);
      eventCard.appendChild(eventImage);

      var eventTitle = document.createElement('H1');
      var titleNode = document.createTextNode(Events[i].event_name);
      eventTitle.appendChild(titleNode);
      eventCard.appendChild(eventTitle);

      var eventDesc = document.createElement('H3');
      var descNode = document.createTextNode(Events[i].description);
      eventDesc.appendChild(descNode);
      eventCard.appendChild(eventDesc);

      var ps = Events[i].participants
      var participantsList = document.createElement('ul');
      participantsList.setAttribute('class', "participants-list");
      for(var p = 0; p < ps.length; i++){
        var list = document.createElement("li");
        var listText = document.createTextNode(ps[p].name);
        console.log(listText)
      list.appendChild(listText);
      participantsList.appendChild(list);
      }
      eventCard.appendChild(participantsList);
      
      
      

    //   <ul class="product-description">
    //   <li><span>Manufacturer: </span>{{specs.manufacturer}}</li>
    //   <li><span>Storage: </span>{{specs.storage}} GB</li>
    //   <li><span>OS: </span>{{specs.os}}</li>
    //   <li><span>Camera: </span>{{specs.camera}} Mpx</li>
    // </ul>
      eventCard.addEventListener('click', cardClicked);
      document.getElementById('main-content').appendChild(listElement);
    }
    // document.getElementById('score').innerHTML(currentScore)
  
  }

//   function participantsLoop(i) {
//     var participantsList = document.createElement('ul');
//     participantsList.setAttribute('class', "participants-list");

//     console.log(ps.length)
//     for(var p = 0; p < ps.length; i++){
//       var list = document.createElement("li");
//       var listText = document.createTextNode(ps[p].name);
//       console.log(listText)
//     list.appendChild(listText);
//     participantsList.appendChild(list);
//     }

//     return participantsList;
// }

creatBoard()
//<ul class="products-list">;
/* <li data-index="{{id}}">
            <a href="#" class="product-photo"><img src="{{image.small}}" height="130" alt="{{name}}"/></a>
            <h2><a href="#"> {{name}} </a></h2>
            <ul class="product-description">
              <li><span>Manufacturer: </span>{{specs.manufacturer}}</li>
              <li><span>Storage: </span>{{specs.storage}} GB</li>
              <li><span>OS: </span>{{specs.os}}</li>
              <li><span>Camera: </span>{{specs.camera}} Mpx</li>
            </ul>
            <button>Buy Now!</button>
            <p class="product-price">{{price}}$</p>
            <div class="highlight"></div>
          </li> */