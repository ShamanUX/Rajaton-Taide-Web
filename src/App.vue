<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";

const vidRef = ref<HTMLVideoElement>();

onMounted(() => {
  if (vidRef.value) {
    vidRef.value.playbackRate = 2.0;
  }
});
</script>

<template>
  <div class="header-and-body">
    <header>
      <div class="header-graphics">
        <div class="header-text">
          <h1 class="slogan">Koe Elämys. Elä kokemus.</h1>
          <h2 class="subSlogan">
            Musiikkielämyksiä <br />
            Joensuussa
          </h2>
        </div>
        <video
          width="100%"
          height="100%"
          loop
          autoplay
          muted
          id="headerVid"
          ref="vidRef"
        >
          <source
            src="@/assets/Colorfulpianoart_Hueanimation_Comp.mp4"
            type="video/mp4"
          />
        </video>
        <img
          alt="Rajaton Taide logo"
          class="logo"
          src="@/assets/RT LOGO circular.png"
          width="125"
          height="125"
        />
      </div>

      <div class="wrapper">
        <nav>
          <RouterLink to="/">Ohjelma 2024</RouterLink>
          <RouterLink to="/info">Meistä</RouterLink>
          <RouterLink to="/kumppanit">Yhteistyössä</RouterLink>
        </nav>
      </div>
    </header>

    <div class="page-content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;

  position: relative;
  min-width: 50vw;
  flex-grow: 1;
}

.header-graphics {
  position: relative;
}

.page-content {
  min-width: 0;
  padding-top: 32px;
}

.header-text {
  position: absolute;
  left: 0;
  color: white;
  text-align: left;
  background: linear-gradient(
    to left,
    #4d168020,
    #8204d660 25%,
    #9c0ac960 75%,
    #4e0764
  );
  display: flex;
  padding-left: 20px;
  flex-direction: column;
}

.slogan {
  font-family: "legault";
  white-space: nowrap;
  text-shadow: 1px -1px 3px rgba(117, 13, 241, 0.9);
}

.subSlogan {
  width: fit-content;
  -webkit-text-stroke: #4e0764 0.2px;
}

.logo {
  bottom: 0;
  left: 0;
  display: block;
  position: absolute;
  width: 25%;
  height: auto;
  padding: 16px;
  box-sizing: content-box;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .slogan {
    font-size: 40px;
  }

  .subSlogan {
    width: fit-content;
    -webkit-text-stroke: #4e0764 0.2px;
    font-size: 25px;
  }
  .header-and-body {
    display: flex;
    flex-direction: row;
    position: relative;
    min-width: 100% !important;
    max-height: 100vh !important;

    place-content: center;
  }

  .header-text {
    min-width: 75%;
  }
  .header-graphics {
    overflow: hidden;
  }

  #headerVid {
    width: 100%;
    object-position: center center;
  }

  .page-content {
    flex-grow: 1;
    flex-shrink: 1;
    position: relative;
    width: 100%;
    max-width: 1200px;
    overflow-y: auto;
  }

  header {
    display: flex;
    place-items: center;
    place-content: center;
    flex-direction: column;
    max-width: 30vw;
    min-width: 0;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
    width: 100%;
    white-space: nowrap;
  }
}
</style>
