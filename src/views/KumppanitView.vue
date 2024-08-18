<template>
  <div class="kumppanit">
    <h1>Yhteistyössä</h1>

    <v-container class="grid-container">
      <v-row class="top-row">
        <v-col>
          <h1 class="yksityis-kumppani"><strong>M. Halonen</strong></h1>
        </v-col>
        <v-col
          ><h1 class="yksityis-kumppani">
            <strong>M. Virtaala</strong>
          </h1></v-col
        >
      </v-row>

      <v-row>
        <v-col> <img class="grid-img" src="@/assets/botania.png" /> </v-col>
        <v-col>
          <img class="grid-img" src="@/assets/joensuu_vaakalogo.png" />
        </v-col>
        <v-col>
          <img class="grid-img" src="@/assets/Konservatorio-logo.jpg" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <img class="grid-img" src="@/assets/KakkonenLogo.png" />
        </v-col>
        <v-col>
          <img class="grid-img" src="@/assets/kkes.png" />
        </v-col>
        <v-col>
          <img class="grid-img" src="@/assets/Karjalainen.png" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <img class="last-solo-img" :src="heiliLogo" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import heiliLogo from "@/assets/heili_logo_red.svg";
</script>

<style scoped>
.yksityis-kumppani {
  text-align: center;
  font-size: 20px;
}
.grid-container {
  max-width: 100vw;
  place-items: center;
}

:deep(.v-col) {
  display: flex;
  place-content: center;
  place-items: center;
}

.grid-img {
  max-width: 50vw;
}

.kumppanit {
  background-color: white;
  height: fit-content;
  border-radius: 20px;
}

@media (min-width: 1024px) {
  .top-row {
    width: 100%;
  }
  .grid-img {
    max-width: 100%;
  }
  .last-solo-img {
    max-width: 33% !important;
  }

  .yksityis-kumppani {
    font-size: auto;
  }
  .kumppanit {
    display: flex;
    place-content: center;
    flex-direction: column;
  }
}
</style>
