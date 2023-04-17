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
    this.fetchApartments();
    console.log('mounted')
    if (window.sessionStorage.getItem('filters') != null) this.filters = JSON.parse(window.sessionStorage.getItem('filters'))
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
    <div class="content">
      <IndexFilter @send-filters="storeFilters" @range-release="fetchApartments(range)" />
      <div v-if="!isLoading" class="container">
        <div v-if="apartments.length" class="gutter row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          <div class="col d-flex justify-content-center mb-4" v-for="apartment in filteredApartments">
            <ApartmentCard :apartment="apartment" />
          </div>
        </div>
        <div v-else class="text-center not-found-apartment">
          <h1 class="text-danger">
            Nessun appartamento trovato al seguente indirizzo.
          </h1>
          <button class="btn btn-warning" @click="searchNewAddress()">
            Cerca un nuovo indirizzo
          </button>
        </div>
        <app-map v-if="filteredApartments.length" :addressCoordinates="coordinates" :flag="true" :apartments="filteredApartments"
          class="d-flex justify-content-center row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"></app-map>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "../assets/styles/partials/variables" as *;

main {
  position: relative;
  min-height: calc(100vh - 150px);
  background-image: url(https://c.wallhere.com/photos/cd/67/top_view_city_3D_Abstract-1692599.jpg!d);
  background-position: center;
  z-index: 1;
  background-size: cover;
}

main::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
  backdrop-filter: blur(5px);
}

.content {
  position: relative;
  z-index: 2;
}



#map {
  height: 400px;
  width: 93%;
  color: rgb(211, 56, 56);
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
