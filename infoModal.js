var modal = document.getElementById("infoModal");

var buttons = document.getElementsByClassName("widget-infoButton");

var span = document.getElementsByClassName("close")[0];

/* event info elements */

var eventTitle = document.getElementById("eventTitle");
var eventDate = document.getElementById("eventDate");
var eventClock = document.getElementById("eventClock");
var eventPrice = document.getElementById("eventPrice");
var eventDescription = document.getElementById("eventDescription");
var eventImage = document.getElementById("eventImage");



function openModal(eventID) {
  var event = eventData[eventID]
  eventTitle.textContent = event.title;
  eventDescription.textContent = event.description;
  eventClock.textContent = event.clock;
  eventPrice.textContent = event.price;
  eventDate.textContent = event.date;
  eventImage.src = event.image;
  
  modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
            modal.style.display = "none";
        }
    
}

// Event listeners for info buttons
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    var eventID = event.target.getAttribute("eventID");
    openModal(eventID);
  });
  buttons[i].addEventListener("mouseenter", mouseEnter)
  buttons[i].addEventListener("mouseleave", mouseLeave)
}

function mouseEnter(){
  this.classList.add('hovered');
}

function mouseLeave(){
  this.classList.remove('hovered');
}

// Event listener for closing the modal with the escape key
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});


//Hover Animation/Transition




/* Event data */

var eventData = {
    "rajaton": {
      "title": "Rajaton kohtaaminen",
      "description": "Kassun sinfonia ja Onni Muikun lauluja. Ohjelmassa väliaika.",
      "clock": "18:00",
      "date": "2.9.",
      "price": "25 / 22 €",
      "venue": "Carelia-sali",
      "image": "images/ClefPainted.jpg" 
    },
    "ystavat": {
      "title": "Olkaa hyvät, rakkaat ystävät",
      "description": "Solistit: Juliana Vehviläinen, Juha Eskelinen, Aleksi Suikkanen, Timo Turunto, Heikki Kotilainen.",
      "clock": "15:00",
      "date": "3.9.",
      "price": "20 / 17 €",
      "venue": "Konservatorion sali"
    },
    "karjalaista": {
      "title": "Karjalaista ja kansainvälistä",
      "description": "Taiga-kvartetti ja Huojuva lato",
      "clock": "19:00",
      "date": "1.9.",
      "price": "15 €",
      "venue": "Konservatorion sali"
    },
    "electro": {
      "title": "Electronic in the tropics",
      "description": "Electronic music (tech house, psytrance, dnb) in the Botania gardens",
      "clock": "20 - 24",
      "date": "26.8.",
      "price": "9 €",
      "venue": "Botania"
    },
    "lasten": {
      "title": "Lasten Botania",
      "description": "Lapsille kivoja musiikillisia askareita Botanian trooppisissa tiloissa!",
      "clock": "11-15",
      "date": "27.8.",
      "price": "Maksuton",
      "venue": "Botania"
    }
  }