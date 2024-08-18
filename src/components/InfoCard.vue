<template>
  <div class="info-card">
    <div class="info-title"><h2>{{ title }}</h2></div>
    <h3>{{ `${location}` }}</h3>

    <h3> {{ `${date}` }} <strong>{{ time }}</strong> </h3>
    <h3> {{ticketPrice}}</h3>
    <img :src="imgUrl" class="info-image"></img>
    <div class="info-body">
        <p v-if="showInfo" v-for="item in desc" v-html="item"></p>
    </div>
    <v-btn @click="showInfo = !showInfo" class="info-button" color="blue"><p>Info</p></v-btn>
    <v-btn :href="ticketUrl" target="_blank" class="ticket-button" color="purple">
      <p class="btn-label">{{ btnText }}</p>
      <v-icon icon="mdi-chevron-right"></v-icon
    ></v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps({
  title: String,
  imgUrl: String,
  desc: Array<String>,
  ticketPrice: String,
  location: String,
  time: String,
  ticketUrl: String,
  date: String,
  btnText: {
    type: String,
    default: "Liput",
  },

});

const showInfo = ref(false);


</script>

<style scoped>
.info-card {
  width: 100%;
  padding: 16px;
  background-color: none;
  border-color: purple;
  border-width: 2px;
  border-style: solid; 
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 16px;
  position: relative;
}
.info-button {
    width: fit-content;
}

.info-body {
  max-width: 100%;
}

.ticket-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
}

.btn-label {
  font-weight: 600;
}

:deep(.v-icon) {
  padding-top: 2px;
}
</style>
