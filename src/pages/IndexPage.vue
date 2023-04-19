<script>
import ApartmentCard from "../components/apartments/ApartmentCard.vue";
import IndexFilter from "../components/IndexFilter.vue";
import { backEndUri } from "../data/index.js";
import AppMap from "../components/AppMap.vue";
import axios from 'axios';
export default {
  name: "Index",
  components: { ApartmentCard, IndexFilter, AppMap },
  data() {
    return {
      filters: {},
      apartments: [],
      isLoading: true,
    };
  },
  methods: {
    fetchApartments(range = 20) {
      this.isLoading = true;
      axios
        .get(`${backEndUri}lat=${this.coordinates[0]}&lon=${this.coordinates[1]}&range=${range}`)
        .then((res) => {
          this.isLoading = false
          this.apartments = res.data;
        });
    },

    searchNewAddress() {
      document.getElementById("searchCity").focus();
      searchCity.value = "";
    },

    storeFilters(filters) {
      this.filters = filters;
    },
  },
  computed: {
    coordinates() {
      return JSON.parse(this.$route.query.coordinates);
    },
    range() {
      return this.filters.range;
    },
    sortedApartments() {
      return this.apartments.sort((a, b) => {
        return a.is_sponsored === b.is_sponsored ? 0 : a.is_sponsored ? -1 : 1;
      });
    },

    filteredApartments() {
      let apartments = this.sortedApartments;
      if (this.filters.price) {
        apartments = apartments.filter(
          (apartment) => apartment.price <= this.filters.price
        );
      }
      if (this.filters.rooms) {
        apartments = apartments.filter(
          (apartment) => apartment.rooms >= this.filters.rooms
        );
      }
      if (this.filters.bathrooms) {
        apartments = apartments.filter(
          (apartment) => apartment.bathrooms >= this.filters.bathrooms
        );
      }
      if (this.filters.checkedServices) {
        //filtro gli appartamenti
        apartments = apartments.filter((apartment) => {
          //svuoto l'array dei servizi
          const apartmentServices = [];
          //per ogni servizio dell'appartamento, pusho il nome nell'array
          apartment.services.forEach((service) => {
            apartmentServices.push(service.name);
          });
          //funzione che determina se tutti gli elementi dell'array sono presenti nell'array target
          let checker = (array, target) =>
            target.every((value) => array.includes(value));
          //ritorno nell'array filtrato solo gli appartamenti che danno true
          return checker(apartmentServices, this.filters.checkedServices);
        });
      }
      return apartments;
    },
  },

  mounted() {
    if (window.sessionStorage.getItem('filters') != null) this.filters = JSON.parse(window.sessionStorage.getItem('filters'))
    this.fetchApartments(this.filters.range);
    console.log('mounted')
  },
  watch: {
    coordinates: {
      deep: true,
      handler(newCoordinates, oldCoordinates) {
        //ciao
        this.fetchApartments(this.filters.range);
      }
    },
  }
};
</script>

<template>
  <app-loader v-if="isLoading"></app-loader>
  <main class="py-3">
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="content">
      <IndexFilter v-if="!isLoading" @send-filters="storeFilters" @range-release="fetchApartments(range)" />
      <div v-if="!isLoading" class="container">
        <div v-if="apartments.length" class="gutter row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          <div class="col d-flex justify-content-center mb-4" v-for="apartment in filteredApartments">
            <ApartmentCard :apartment="apartment" />
          </div>
        </div>
        <div v-else class="text-center not-found-apartment">
          <h1 class="text-white">
            Nessun appartamento trovato al seguente indirizzo.
          </h1>
          <button class="btn btn-warning" @click="searchNewAddress()">
            Cerca un nuovo indirizzo
          </button>
        </div>
        <app-map v-if="filteredApartments.length" :addressCoordinates="coordinates" :flag="true"
          :apartments="filteredApartments"
          class="d-flex justify-content-center row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"></app-map>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "../assets/styles/partials/variables" as *;

main {
  min-height: calc(100vh - 150px);


  .bg {
    animation: slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #dd1f3f 50%, $secondary-bg 50%);
    bottom: 0;
    left: -50%;
    opacity: .5;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: -1;
  }

  .bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 4s;
  }

  .bg3 {
    animation-duration: 5s;
  }


  @keyframes slide {
    0% {
      transform: translateX(-25%);
    }

    100% {
      transform: translateX(25%);
    }
  }
}


#map {
  height: 400px;
  width: 93%;
  border-radius: 20px;
  border: 3px solid white;
  box-shadow: 0 0 30px black;
  padding: 20px;
  margin-right: 10px;

  &:hover {
    border: 3px solid rgb(255, 90, 95);
  }

}

@media screen and (max-width: 767px) {
  #map {
    height: 300px;
    width: 90%;
    margin: 0 auto;
    padding: 10px;
  }
}
</style>
