<script>
import ApartmentCard from "../components/apartments/ApartmentCard.vue";
import IndexFilter from "../components/IndexFilter.vue";
export default {
  name: "Index",
  components: { ApartmentCard, IndexFilter },
  data() {
    return {
      filters: {}
    }
  },
  methods: {
    searchNewAddress() {
      document.getElementById("searchCity").focus();
      searchCity.value = '';
    },

    storeFilters(filters) {
      this.filters = filters;
    },

  },
  computed: {
    apartments() {
      return JSON.parse(this.$route.query.apartments);
    },
    sortedApartments() {
      return this.apartments.sort((a, b) => {
        return a.is_sponsored === b.is_sponsored ? 0 : a.is_sponsored ? -1 : 1;
      });
    },

    filteredApartments() {
      let apartments = this.sortedApartments;
      if (this.filters.price) {
        apartments = apartments.filter(apartment => apartment.price <= this.filters.price)
        console.log(apartments)
      }
      if (this.filters.rooms) {
        apartments = apartments.filter(apartment => apartment.rooms >= this.filters.rooms)
      }
      if (this.filters.bathrooms) {
        apartments = apartments.filter(apartment => apartment.bathrooms >= this.filters.bathrooms)
      }
      if (this.filters.checkedServices) {
        console.log('qui')
        apartments = apartments.filter(apartment => {
          const apartmentServices = [];
          apartment.services.forEach(service => {
            apartmentServices.push(service.name);
          })
          console.log(apartmentServices)
          const checkedServices = this.filters.checkedServices;
          console.log(checkedServices)
          let checker = (array, target) => target.every(value => array.includes(value));
          console.log(checker(apartmentServices, checkedServices));
          return checker(apartmentServices, checkedServices);
        });
      }
      return apartments;
    }
  }
};
</script>

<template>
  <main class="py-3">
    <IndexFilter @send-filters="storeFilters" />
    <div class="container">

      <div v-if="apartments.length" class="row gutter">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" v-for="apartment in filteredApartments">
          <ApartmentCard :apartment="apartment" />
        </div>

        <!-- <div v-else="apartments.length" class="row gutter">
                                            <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" v-for="apartment in sortedApartments">
                                              <ApartmentCard :apartment="apartment" />
                                            </div>
                                          </div> -->
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
@use '../assets/styles/partials/variables' as *;

main {
  min-height: calc(100vh - 150px);
  background-color: $main-bg;
}
</style>
