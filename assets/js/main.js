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
var userClicked = function (email) {
  console.log("user with " + email + " clicked")
}
var creatBoard = function(){
    
    // first create UL
    var listElement = document.createElement('ul');
    listElement.setAttribute('class', "eventsList");

    //loop through events
    for(var i = 0; i <Events.length; i++){
      
      //create li elements
      var eventCard = document.createElement('li');
      eventCard.setAttribute('data-index', Events[i].id);

      //create card div
      var card = document.createElement('div');
      card.setAttribute('class', "card");
      card.addEventListener('click', cardClicked);
      
      //add image to div
      var eventImage = document.createElement('img');
      eventImage.setAttribute('alt', "event_image");
      eventImage.setAttribute( 'class', "rounded mx-auto d-block");
      eventImage.setAttribute('src',Events[i].images.large_img);
      card.appendChild(eventImage);

      //create container div
      var container = document.createElement('div');
      container.setAttribute('class', "container");

      //create content to add to container
      var eventTitle = document.createElement('H1');
      var titleNode = document.createTextNode(Events[i].event_name);
      eventTitle.appendChild(titleNode);
      container.appendChild(eventTitle);

      var eventDesc = document.createElement('H3');
      var descNode = document.createTextNode(Events[i].description);
      eventDesc.appendChild(descNode);
      container.appendChild(eventDesc);

      // loop through participants and display in container
      var ps = Events[i].participants
      var participantsList = document.createElement('ul');
      participantsList.setAttribute('class', "participants-list");
      for(var p = 0; p < ps.length; p++){
        var list = document.createElement("li");
        list.setAttribute('class', "participant");
        var user_name = document.createTextNode(ps[p].name);
        list.appendChild(user_name);
        list.addEventListener('click', userClicked(ps[p].email))
      participantsList.appendChild(list);
      }
      container.appendChild(participantsList);
      
      listElement.appendChild(eventCard);
      card.appendChild(container);
      eventCard.appendChild(card);
    
      document.getElementById('main-content').appendChild(listElement);
    }

  
  }



creatBoard()