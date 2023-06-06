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
var modalImageContainer = document.getElementById("modal-image-container");

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
  if (event.image === "") {
    modalImageContainer.style.display = "none";
  } else {
    modalImageContainer.style.display = "inline";
    eventImage.src = event.image;
  }
  
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
      "date": "Lauantai 2.9.",
      "price": "25 / 22 €",
      "venue": "Carelia-sali",
      "image": "images/ViuluKevätTaivas.png" 
    },
    "ystavat": {
      "title": "Olkaa hyvät, rakkaat ystävät",
      "customDescription": "",
      "description": "Tässä tapahtumassa festivaalin taiteellinen johtaja, pianisti Kemal Achourbekov, yhdessä vankan joukon taitavia esiintyjiä, säestää maagisine sormineen esityksen, joka on täynnä mieltä mullistavia yllätyksiä ja hämmästyttäviä käänteitä. <br> <br> Rakkaille ystäville, kanssa rakkaiden ystävien!",
      "clock": "15:00",
      "date": "Sunnuntai 3.9.",
      "price": "20 / 17 €",
      "venue": "Konservatorion sali",
      "image": "images/jack-in-the-flygel.jpg"
    },
    "karjalaista": {
      "title": "Karjalaista ja kansainvälistä",
      "customDescription": `
      <div class="text-photo-container">
            <div class="text-part">
                <p><strong>Osa yksi: Huojuva lato</strong></p>
                <p>Huojuva Lato on vuonna 2008 perustettu pohjoiskarjalainen bändi, jonka musiikki ammentaa vaikutteita countrysta ja folkista. Heidän juureva soundinsa ja voimakkaat laulut ovat keränneet suosiota ympäri Suomea. Kokoonpanon vahva esiintymisote ja taidokas soitto takaavat unohtumattoman musiikkielämyksen, jossa yhdistyvät nostalgiset sävyt ja moderni twisti.
                <br><br>Bändin ydinjäsenet Suonna Kononen, Ilkka Vartiainen, Teemu Sinkko ja Keijo Korhonen luovat yhdessä ainutlaatuisen kokonaisuuden, jossa akustiset ja sähkökitarat, pedal steel, basso ja rummut pääsevät loistamaan.
                <br><br>Huojuva Lato on saavuttanut menestystä omilla julkaisuillaan, kuten esikoispitkäsoittonsa "Lähde länteen!" ja toinen albuminsa "Rakkaus ja juuret". Heidän musiikkinsa on soinut radiossa ja televisiossa, ja heitä pidetään suomalaisen countrymusiikin kärkiniminä – eikä vauhti hidastu.
                </p>
            </div>
            <div class="photo-part">
              <figure>
                <img src="images/huojuvalato.jpg" alt="Huojuva Lato">
                <figcaption> Huojuva Lato </figcaption>
              </figure>
            </div>
        </div>
        <hr/>

        <div class="text-photo-container">
            <div class="text-part">
                <p><strong>Osa kaksi: Taiga-kvartetti</strong></p>
                   <p> Rajaton Taide -festivaalilla edellisvuonnakin autuutta herättänyt Taiga-kvartetti syntyi keväällä 2019, kun muusikot Huba Hollókői, Sakari Tervo, Hans Lodders ja Ville Kivivuori jakoivat yhteisen halun soittaa kvartettimusiikkia. Kvartetin ensimmäinen esiintyminen oli toukokuussa 2019. Yhtye on edeltävän kahden vuoden aikana järjestänyt Beethoven+ -konserttisarjan, jossa kantavana ohjelmistona ovat olleet Beethovenin jousikvartetot, joiden pariksi on valittu sopivia teoksia muilta säveltäjiltä.
                    <br><br>Omien konserttiensa lisäksi Taiga-kvartetti on esiintynyt Joensuun musiikkijuhlien jouluisessa videokonsertissa, tehnyt studiolivetaltioinnin yhteistyössä Riverian kanssa, kantaesittänyt Huba Hollókőin Corona-kvarteton Op. 1 sekä soittanut jousiosuudet keväällä 2021 julkaistulle nuorten sävellyskilpailun voittajateoksista kootulle Biisinikkari – levylle. Yhtye oli myös ehdolla sanomalehti Karjalaisen vuoden kulttuuriteko – palkinnon saajaksi vuonna 2020.
                </p>
            </div>
            <div class="photo-part">
                <figure>
                    <img src="images/taigakvartettiwide.png" alt="Taiga-kvartetti">
                    <figcaption> Taiga-kvartetti </figcaption>
                </figure>
            </div>
        </div>
      `,
      "description": "Taiga-kvartetti ja Huojuva lato",
      "clock": "19:00",
      "date": "Perjantai 1.9.",
      "price": "15 €",
      "venue": "Konservatorion sali",
      "image": ""
    },
    "electro": {
      "title": "ElectroJungle",
      "customDescription": "",
      "description": `Botanian trooppisessa puutarhassa järjestettävä elektroniselle musiikille pyhitetty tapahtuma tulee jälleen! Nauti rytmeistä ja idyylisestä maisemista viidakon ympäröimänä. Genre ja BPM muuttuvat illan edetessä – kuulet ainakin soivan house, tekno, psytrance ja drum & bass kappaleita. Paikan päällä anniskelu ja snack bar.
      <br><br>The Botania electronic music event is happening again! The lush tropics and breathtaking Sundön combined with energizing music is truly an empowering experience. Genre and BPM will evolve during the event, and you will hear tracks of house, techno, psytrance and drum & bass. There is a snack bar on-site and alcoholic beverages are served.
      `,
      "clock": "20 - 24",
      "date": "Lauantai 26.8.",
      "price": "9 €",
      "venue": "Botania",
      "image": "images/electronicInTheTropics.jpg"
    },
    "lasten": {
      "title": "Lasten Botania",
      "customDescription": "",
      "description": "Lapsille kivoja musiikillisia askareita Botanian trooppisissa tiloissa!",
      "clock": "11-15",
      "date": "Sunnuntai 27.8.",
      "price": "Maksuton",
      "venue": "Botania",
      "image": "images/LastenMusiikkiviidakko.png"
    },
    "mestari": {
      "title": "Mestarikurssien päätöskonsertti",
      "customDescription": `
      <p> Mestarikurssit huipentuvat jälleen yhteiskonserttiin Joensuun konservatoriolla! </p>

<p> Opiskelijoille ilmoittautuminen ja lisätiedot: Kemal Achourbekov, kemal.achourbekov@konsa.joensuu.fi</p>

<div class="text-photo-container">
    
    <div class="text-part">
        <p><strong>Sähkökitara - Mikko Tirronen</strong></p>
        
        <p>Pitkän linjan pop & jazz -kitaristi Mikko Tirronen on saattanut lukuisia muusikoita
            syvemmälle musiikin maailmaan Joensuun Konservatoriolla, ja on toiminut Jyväskylän Ammattikorkeakoulussa opetusharjoittelun ohjaajana.
            <br> <br> Hän tiivistää monigenreisen ja elämänmittaisen tietämyksensä kitaran mestarikurssiin elokuussa.   
        </p>
    </div>
    <div class="photo-part">
        <figure>
            <img src="images/mikkotirronen.jpg" alt="Mikko Tirronen">
            <figcaption> Mikko Tirronen </figcaption>
        </figure>
    </div>
</div>
<hr/>

<div class="text-photo-container">
    
    <div class="text-part">
        <p><strong>Sello - Nuria Rosa Muntañola</strong></p>
        <p>Madridilainen Nuria Rosa Muntañola on toiminut yli 20 vuotta sellon professorina. Hän on soittanut mm. Lontoon Filharmonisessa Orkesterissa ja Lambeth Orkesterissa, sekä Saksan Essenin Orkesterissa.</p>
        <p>Lukuisiin mestarikursseihin myös itse opiskeluvuosinaan osallistunut Muntañola tarjoaa nyt ainutlaatuisen mahdollisuuden syventyä sellon saloihin Rajaton Taide -mestarikurssissa.</p>
    </div>
    <div class="photo-part">
        <figure>
            <img src="images/profmuntanola.png" alt="Nuria Rosa Muntañola">
            <figcaption>Prof. Nuria Rosa Muntañola </figcaption>
        </figure>
    </div>
</div>
      `,
      "description": "Sellon ja sähkökitaran Mestarikurssit huipentuvat!",
      "clock": "18:00",
      "date": "Torstai 31.8.",
      "price": "Maksuton",
      "venue": "Konservatorio",
      "image": ""
    }
  }
