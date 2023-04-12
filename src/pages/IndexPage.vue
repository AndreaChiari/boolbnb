<script>
import ApartmentCard from "../components/apartments/ApartmentCard.vue";
import IndexFilter from "../components/IndexFilter.vue";
import { apiUri, key, backEndUri } from "../data/index.js";
import axios from 'axios';
export default {
  name: "Index",
  components: { ApartmentCard, IndexFilter },
  data() {
    return {
      filters: {},
      apartments: [],
    };
  },
  methods: {
    fetchApartments(range = 20) {
      axios
        .get(`${backEndUri}lat=${this.coordinates[0]}&lon=${this.coordinates[1]}&range=${range}`)
        .then((res) => {
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
        console.log(apartments);
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
  mounted(){
    this.fetchApartments();
  },
  watch: {
    coordinates: {
      deep: true,
      handler(newCoordinates, oldCoordinates) {
        this.fetchApartments();
      }
    }
  }
};
</script>

<template>
  <main class="py-3">
    <IndexFilter @send-filters="storeFilters" />
    <div class="container">
      <div
        v-if="apartments.length"
        class="gutter row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"
      >
        <div
          class="col d-flex justify-content-center mb-4"
          v-for="apartment in filteredApartments"
        >
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
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "../assets/styles/partials/variables" as *;

main {
  min-height: calc(100vh - 150px);
  background-color: $main-bg;
}
</style>
