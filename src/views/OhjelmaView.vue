<template>
  <div class="info-card-container">
    <InfoCard
      title="Juhlakonsertti: Rakkaudella"
      location="Carelia-sali"
      date="La 28.9."
      time="17.00"
      ticket-price="30€"
      :desc="[
        'Tässä konsertissa juhlistetaan taiteellisen johtajamme Kemal Achourbekovin 60-vuotista taivalta. Tapahtumassa esiintyy sekä estradin timanttisia konkareita että uusia lupauksia, tarjoten ainutlaatuisen kattauksen musiikkia vailla rajojen. Teemoja ovat rakkaus, menetys, ja kaikkea siltä väliltä.',
        '<br>',
        'Juontajana Olli-Kalle Heimo',
        '<br>',
        'Bändi:',
        'Kemal Achourbekov, piano',
        'Mikko Tirronen, kitara ja taustalaulu',
        'Sami Hopponen, koskettimet',
        'Jukka Kolehmainen, basso',
        'Arto Tarkkonen, haitari',
        '<br>',
        'Solistit: ',
        'Juliana Vehviläinen, laulu',
        'Matilda Nikkinen, laulu',
        'Johannes Manninen, kitara',
        'Furkan Karsavuran, laulu',
        'Petrus Eskelinen, laulu ja kitara',
      ]"
      :img-url="JuhlaKonserttiKuva"
      ticket-url="https://www.eventim-light.com/fi/a/5cf0e42e36e54b0001789765/e/66c23aae8000ee47da80d7cf"
    ></InfoCard>
    <InfoCard
      date="Su 22.9."
      time="15.00"
      location="Konservatorion sali, Yliopistokatu 4"
      ticket-price="15€"
      title="Halki Aikojen"
      :desc="[
        '<strong> Veila </strong> on joensuulainen – samalla maailman ensimmäinen – yhteiskanteleyhtye, joka tekee uudenlaisia sovituksia popmaailman kappaleista. Maailmasta löytyy vain kourallinen yhteissoittoon suunniteltuja soittimia, ja Koistisen yhteiskantele on tässä mielessä ainut laatuaan. Veilan esiintyminen on intensiivistä hetken vangitsemista ja herkkää läsnäoloa yhteisen instrumentin äärellä. Yhtyeen musisoinnissa korostuu jäsenten luova lahjakkuus sekä pyrkimys ainutlaatuisten musiikkikokemusten tuottamiseen yhdessä tekemällä.',
        '<br>',
        'Veila on yhtä kuin:',
        'Siiri Ahtola',
        'Joel Kenakkala',
        'Lumi Ollila',
        'Tiia Turunen',
        '<br>',
        '<strong> Taiga </strong> á3, tässä konsertissa triona esiintyvä yhtye, on vankka kokoonpano klassisen musiikin ammattilaisia. Vuonna 2019 perustettu yhtye on tullut tunnetuksi monipuolisesta ohjelmistosta, aktiivisesta yhteistyöstä Pohjois-Karjalan kulttuuritoimijoiden kanssa, sekä ahkerasta aikamme musiikin esille tuomisesta. Taiga on esiintynyt Rajaton Taide konserteissa useita kertoja. Kuin vuoreen, kuulijat voivat luottaa, että Taiga vie tulkinnoillaan unohtumattomalle matkalle – tällä kertaa rakkaudesta syntyneiden teosten maailmaan.',
        '<br>',
        'Hans Lodders',
        'Sakari Tervo',
        'Huba Hollókői',
      ]"
      ticket-url="https://www.eventim-light.com/fi/a/5cf0e42e36e54b0001789765/e/66c23d8d21296948ec627a4e"
      :img-url="HalkiAikojenKuva"
    ></InfoCard>
    <InfoCard
      date="La 7.9."
      time="18.00"
      location="Botania"
      ticket-price="12/15€"
      title="ElectroJungle"
      ticket-url="https://electrojungle.fi"
      :desc="[
        '(K18) Botanialla ajoittain järjestettävä ElectroJungle-tapahtuma tuo yhteen elektronisen musiikin sekä kauniin taidepuutarhan trooppisine kasveineen. Koe ainutlaatuinen elämys tanssien värillisesti valaistun kasvuston seassa!',
      ]"
      :img-url="ElectroJungleKuva"
    >
    </InfoCard>
  </div>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";
import HalkiAikojenKuva from "@/assets/Halki Aikojen kuva.jpg";
import JuhlaKonserttiKuva from "@/assets/Juhlakonsertti Kemal 60.jpg";
import ElectroJungleKuva from "@/assets/ElectroJungle_7-9-24_Kide.png";
</script>

<style scoped>
.info-card-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  width: 100%;
}
</style>
