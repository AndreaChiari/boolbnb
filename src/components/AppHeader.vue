<script>
import { apiUri, key, backEndUri } from "../data/index.js";
import { RouterLink } from "vue-router";
import GeneralButton from "./GeneralButton.vue";

// axios import
import axios from "axios";

export default {
  name: "AppHeader",
  components: { RouterLink, GeneralButton },
  data: () => ({
    isShown: false,
    isLoading: false,
    address: [],
    termSearch: "",
    suggestions: [],
    suggestionStatus: false,
  }),
  methods: {
    toggleMenu() {
      this.isShown = !this.isShown;
    },

    fetchApiCall() {
      if (this.termSearch && event.keyCode !== 13) {
        axios
          .get(
            `https://api.tomtom.com/search/2/search/${this.termSearch}.json?key=lCdijgMp1lmgVifAWwN8K9Jrfa9XcFzm`
          )
          .then((res) => {
            this.suggestions = [];
            this.suggestionStatus = true;
            res.data.results.forEach((result) => {
              this.suggestions.push(result.address.freeformAddress);
            });
          });
      }
    },

    changeAddress(suggestion) {
      this.termSearch = suggestion;
      document.getElementById("searchCity").focus();
      this.suggestionStatus = false;
    },

    getAddress(termSearch) {
      if (this.suggestions.includes(this.termSearch)) {
        axios
          .get(`${apiUri}geocode/${termSearch}.json?key=${key}`)
          .then((res) => {
            this.address = res.data.results[0];

            //prendo latitudine e longitudine
            const lat = this.address.position.lat;
            const lon = this.address.position.lon;
            const coordinates = [lat, lon];

            this.suggestionStatus = false;

            this.$router.push({
              name: "index",
              query: { coordinates: JSON.stringify(coordinates) }
            });
          });
      }
    },

    goToBackoffice() {
      window.location.href = 'http://127.0.0.1:8000/admin/apartments'
    },

    cleanInput() {
      this.termSearch = '';
    }

  },

  mounted() {
    document.addEventListener("click", () => (this.suggestionStatus = false));
  },
};
</script>

<template>
  <header>
    <nav class="container d-flex justify-content-between align-items-center py-3 h-100">
      <div class="nav-left h-100 row align-items-center">
        <div class="col-auto p-0">
          <router-link :to="{ name: 'home' }" class="text-decoration-none d-flex align-items-center logo-container"
            @click="cleanInput()">
            <div class="logo-header">
              <img src="../assets/img/boolbnb_2.png" alt="" class="img-fluid logo">
            </div>
            <p class="title d-none d-md-inline">OOLBNB</p>
          </router-link>
        </div>
      </div>

      <div class="nav-center flex-grow-1 px-5 address-container">
        <div class="input-group">
          <input id="searchCity" type="text" @keyup="fetchApiCall()" @keyup.enter="getAddress(termSearch)"
            v-model.trim="termSearch" class="form-control col rounded-5" placeholder="Ex. Milan"
            aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button @click="getAddress(termSearch)" class="btn rounded-5 px-3" type="button" id="button-addon2">
            <i class="fa-solid fa-plane"></i>
          </button>
        </div>

        <!-- lista dei suggerimenti autocompletamento  -->
        <ul v-if="suggestionStatus" id="suggestions" class="list-group w-100" style="opacity: 0.9">
          <li v-for="suggestion in suggestions" @click="changeAddress(suggestion), getAddress(termSearch)"
            class="list-group-item list-group-item-action" :class="{ active: termSearch === suggestion }">
            {{ suggestion }}
          </li>
        </ul>
      </div>

      <div class="nav-right">
        <div class="d-none d-md-inline">
          <GeneralButton buttonText="Area Personale" routeName="index" @button-click="goToBackoffice()" />
        </div>
        <div class="group-btn d-sm-block d-md-none">
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
              @click="toggleMenu()">
              <i class="fa-solid fa-bars fa-lg" style="color: #ffffff"></i>
            </button>
            <div class="dropdown-menu flex-column custom-dropdown-menu dropdown-menu-right"
              :class="{ 'show d-flex': isShown }">
              <GeneralButton buttonText="Area Personale" routeName="index" @button-click="goToBackoffice()" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.logo-container {
  &:hover {
    text-shadow: 0 0 5px red;
  }

  .logo {
    max-height: 110px;
    position: absolute;
    top: -15px;
    margin-left: -10px;

    &:hover {
      -webkit-filter: drop-shadow(5px 5px 5px #f50606);
      filter: drop-shadow(5px 5px 5px #e00000);

    }
  }
}

.logo-header {
  width: 100px;
  height: 50px;
  margin-right: -20px;

}

.contact-button {
  margin-right: 10px;
}

header {
  height: 80px;
  background: linear-gradient(to bottom, #2020209b, #2222229b, #24242497);
  color: white;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);


  .nav-left img {
    max-height: 80px;

  }

  .title {
    color: #FF5A5F;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    letter-spacing: 3px;
    font-size: 19px;
    margin-bottom: 0;


    &:hover {
      text-shadow: 0 0 5px red;
    }
  }
}

.address-container {
  position: relative;

  #suggestions {
    background-color: white;
    position: absolute;
    top: 50px;
    z-index: 2;
    max-height: 100px;
    max-width: 76%;
    left: 9%;
    overflow-y: auto;

    li {
      cursor: pointer;
      color: black;
      padding: 5px 10px;
      font-size: 14px;
      height: auto;

      &:hover {
        background-color: rgb(253, 13, 89);
        color: white;
      }
    }
  }
}

.custom-dropdown-menu {
  background-color: rgba(20, 20, 20, 0.341);
  border: none;
  padding: 0.5rem;
  position: absolute;
  left: 0;
  top: 37px;
  text-align: center;
}

.custom-dropdown-menu.dropdown-menu-right {
  right: 0;
  left: auto;
}

.custom-button {
  background-color: transparent;
  border: none;
  color: #FE5D58;
}

.custom-button:hover {
  background-color: #FE5D58;
  color: #fff;
  border: 1px solid #fff;
}


.custom-button:focus {
  box-shadow: none;
  outline: none;
}

i {
  color: $pink-4;
  font-size: 20px;
  transition: transform 0.8s ease;

  &:hover {
    background: linear-gradient(to right, #ff6ec4, #ff1493);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    transform: rotate(270deg);
  }

  &:active {
    transform: scale(1.1) rotate(270deg);
  }
}
</style>
