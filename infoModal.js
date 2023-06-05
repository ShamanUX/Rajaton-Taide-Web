var modal = document.getElementById("infoModal");

var buttons = document.getElementsByClassName("info-icon");

var span = document.getElementsByClassName("close")[0];

/* event info elements */

var eventTitle = document.getElementById("eventTitle");
var eventDate = document.getElementById("eventDate");
var eventClock = document.getElementById("eventClock");
var eventPrice = document.getElementById("eventPrice");
var eventDescriptionContainer = document.getElementById("eventDescriptionContainer");
var eventImage = document.getElementById("eventImage");

function openModal(eventID) {
  var event = eventData[eventID]
  eventTitle.textContent = event.title;
  if (event.customDescription !== "") {
    eventDescriptionContainer.innerHTML = event.customDescription;
  } else {
    eventDescriptionContainer.innerHTML = "<p>"+event.description+"</p>";
  }
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
      "customDescription": 
      `
        <p><strong>Osa yksi: Sinfonia nr 1 Northern lights (Revontulet)</strong></p>
        <p>S&auml;velt&auml;j&auml; Kassu Halosen vuonna 2019 valmistunut sinfonia "Northern lights" on vaikuttava sinfoniateos, jonka alaotsikko kuuluu "Revontulet - taivaallinen valon&auml;ytelm&auml;". Sinfonia koostuu kolmesta osasta, ja s&auml;vellaji vaihtelee.</p>
        <p>Kassu Halonen ty&ouml;sti ensimm&auml;ist&auml; sinfoniaansa yli 20 vuoden ajan, ja lopputuloksena oli noin kolmekymment&auml; minuuttia kest&auml;v&auml; mahtipontinen teos, joka kunnioittaa revontulia.</p>
        <p>Ensimm&auml;inen osa v&auml;litt&auml;&auml; luonnon koskemattoman rauhan ja harmonian tunnelman. Toisessa osassa esiin nousee upea taivaallinen tulileikki, kun revontulet leiskuvat koko komeudessaan. Sinfonian seesteinen ja juhlava finaali viimeistelee kokonaisuuden.</p>
        <p>Kuten Aleksis Kiven "Seitsem&auml;n veljest&auml;" -teoksessa kerrotaan, Jukolan veljekset tarkkailivat useana talviy&ouml;n&auml; Impivaaran ikkunasta "kelmeitten revontulten v&auml;lkkyn&auml;t&auml; pohjosessa". He n&auml;kiv&auml;t, miten revontulet kajastivat kauas vuorenharjulta, partaisten kuusten takaa. Valo v&auml;lkkyi ja &auml;&auml;net&ouml;n soitto syttyi ja sammui taivaalla, luoden himme&auml;n valon. T&auml;t&auml; lumoavaa n&auml;ytelm&auml;&auml; my&ouml;s Kassu seurasi lapsuudessaan Ouluj&auml;rven rannalla, ihmetellen ilmi&ouml;n alkuper&auml;&auml; ja syyt&auml;. Sinfonia on omistettu t&auml;lle juhlalliselle ilmi&ouml;lle.</p>
        <hr />
        <p><strong>Osa kaksi: Onni Muikun teoksia</strong></p>
        <p>Karjalan kev&auml;&auml;n nimell&auml; kulkevassa kokonaisuudessa esitet&auml;&auml;n Onni Muikun teoksia, ja t&auml;ss&auml; osassa ei ole laulajaa tai sooloartistia.</p>
        <p>Kokonaisuus koostuu seuraavista osista:</p>
        <ol>
        <li><em>Kev&auml;tt&auml; kohti</em>: Teoksen alussa tunnelmoidaan kev&auml;&auml;n odotusta ja kasvavaa toivoa.</li>
        <li><em>Tuoksujen tulvaa</em>: T&auml;ss&auml; osassa korostuvat kev&auml;&auml;n tuoksujen rikkaus ja luonnon her&auml;&auml;minen.</li>
        <li><em>Lintujen liverryst&auml;</em>: Musiikki kuvastaa lintujen iloista laulua ja niiden vilkasta aktiviteettia kev&auml;isess&auml; maisemassa.</li>
        <li><em>Tanssiaiset</em>: T&auml;m&auml; osa on omistettu kev&auml;&auml;n juhlille ja tanssin riemulle.</li>
        <li><em>Kes&auml;n tullen</em>: Musiikissa siirryt&auml;&auml;n kev&auml;&auml;n ja kes&auml;n rajapintaan, kun luonto kukoistaa t&auml;ydess&auml; voimassaan.</li>
        <li><em>Iltarusko</em>: Kokonaisuuden p&auml;&auml;tteeksi tunnelmoidaan kes&auml;illan rauhallista iltaruskoa.</li>
        </ol>
      `,
      "description": "Kassun sinfonia ja Onni Muikun lauluja. Ohjelmassa väliaika.",
      "clock": "18:00",
      "date": "2.9.",
      "price": "25 / 22 €",
      "venue": "Carelia-sali",
      "image": "images/ViuluKevätTaivas.png" 
    },
    "ystavat": {
      "title": "Olkaa hyvät, rakkaat ystävät",
      "customDescription": "",
      "description": "Solistit: Juliana Vehviläinen, Juha Eskelinen, Aleksi Suikkanen, Timo Turunto, Heikki Kotilainen.",
      "clock": "15:00",
      "date": "3.9.",
      "price": "20 / 17 €",
      "venue": "Konservatorion sali",
      "image": "images/jack-in-the-flygel.jpg"
    },
    "karjalaista": {
      "title": "Karjalaista ja kansainvälistä",
      "customDescription": "",
      "description": "Taiga-kvartetti ja Huojuva lato",
      "clock": "19:00",
      "date": "1.9.",
      "price": "15 €",
      "venue": "Konservatorion sali",
      "image": "images/karjalaistajakansainvalista.png"
    },
    "electro": {
      "title": "ElectroJungle",
      "customDescription": "",
      "description": "Electronic music (tech house, psytrance, dnb) in the Botania gardens",
      "clock": "20 - 24",
      "date": "26.8.",
      "price": "9 €",
      "venue": "Botania",
      "image": "images/electronicInTheTropics.jpg"
    },
    "lasten": {
      "title": "Lasten Botania",
      "customDescription": "",
      "description": "Lapsille kivoja musiikillisia askareita Botanian trooppisissa tiloissa!",
      "clock": "11-15",
      "date": "27.8.",
      "price": "Maksuton",
      "venue": "Botania",
      "image": "images/LastenMusiikkiviidakko.png"
    },
    "mestari": {
      "title": "Lasten Botania",
      "customDescription": "",
      "description": "Sellon ja viulun Mestarikurssi huipentuu!",
      "clock": "18",
      "date": "31.8.",
      "price": "Maksuton",
      "venue": "Konservatorio",
      "image": "images/masterclass\ illustration.jpg"
    }
  }


  const rajatonHTML = `
  <p><strong>Osa yksi: Sinfonia nr 1 Northern lights (Revontulet)</strong></p>
  <p>S&auml;velt&auml;j&auml; Kassu Halosen vuonna 2019 valmistunut sinfonia "Northern lights" on vaikuttava sinfoniateos, jonka alaotsikko kuuluu "Revontulet - taivaallinen valon&auml;ytelm&auml;". Sinfonia koostuu kolmesta osasta, ja s&auml;vellaji vaihtelee.</p>
  <p>Kassu Halonen ty&ouml;sti ensimm&auml;ist&auml; sinfoniaansa yli 20 vuoden ajan, ja lopputuloksena oli noin kolmekymment&auml; minuuttia kest&auml;v&auml; mahtipontinen teos, joka kunnioittaa revontulia.</p>
  <p>Ensimm&auml;inen osa v&auml;litt&auml;&auml; luonnon koskemattoman rauhan ja harmonian tunnelman. Toisessa osassa esiin nousee upea taivaallinen tulileikki, kun revontulet leiskuvat koko komeudessaan. Sinfonian seesteinen ja juhlava finaali viimeistelee kokonaisuuden.</p>
  <p>Kuten Aleksis Kiven "Seitsem&auml;n veljest&auml;" -teoksessa kerrotaan, Jukolan veljekset tarkkailivat useana talviy&ouml;n&auml; Impivaaran ikkunasta "kelmeitten revontulten v&auml;lkkyn&auml;t&auml; pohjosessa". He n&auml;kiv&auml;t, miten revontulet kajastivat kauas vuorenharjulta, partaisten kuusten takaa. Valo v&auml;lkkyi ja &auml;&auml;net&ouml;n soitto syttyi ja sammui taivaalla, luoden himme&auml;n valon. T&auml;t&auml; lumoavaa n&auml;ytelm&auml;&auml; my&ouml;s Kassu seurasi lapsuudessaan Ouluj&auml;rven rannalla, ihmetellen ilmi&ouml;n alkuper&auml;&auml; ja syyt&auml;. Sinfonia on omistettu t&auml;lle juhlalliselle ilmi&ouml;lle.</p>
  <hr />
  <p><strong>Osa kaksi: Onni Muikun teoksia</strong></p>
  <p>Karjalan kev&auml;&auml;n nimell&auml; kulkevassa kokonaisuudessa esitet&auml;&auml;n Onni Muikun teoksia, ja t&auml;ss&auml; osassa ei ole laulajaa tai sooloartistia.</p>
  <p>Kokonaisuus koostuu seuraavista osista:</p>
  <ol>
  <li><em>Kev&auml;tt&auml; kohti</em>: Teoksen alussa tunnelmoidaan kev&auml;&auml;n odotusta ja kasvavaa toivoa.</li>
  <li><em>Tuoksujen tulvaa</em>: T&auml;ss&auml; osassa korostuvat kev&auml;&auml;n tuoksujen rikkaus ja luonnon her&auml;&auml;minen.</li>
  <li><em>Lintujen liverryst&auml;</em>: Musiikki kuvastaa lintujen iloista laulua ja niiden vilkasta aktiviteettia kev&auml;isess&auml; maisemassa.</li>
  <li><em>Tanssiaiset</em>: T&auml;m&auml; osa on omistettu kev&auml;&auml;n juhlille ja tanssin riemulle.</li>
  <li><em>Kes&auml;n tullen</em>: Musiikissa siirryt&auml;&auml;n kev&auml;&auml;n ja kes&auml;n rajapintaan, kun luonto kukoistaa t&auml;ydess&auml; voimassaan.</li>
  <li><em>Iltarusko</em>: Kokonaisuuden p&auml;&auml;tteeksi tunnelmoidaan kes&auml;illan rauhallista iltaruskoa.</li>
  </ol>
`
