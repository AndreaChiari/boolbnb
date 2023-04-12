<script>
import ApartmentCard from "../components/apartments/ApartmentCard.vue";
import IndexFilter from "../components/IndexFilter.vue";
export default {
  name: "Index",
  components: { ApartmentCard, IndexFilter },
  data: {
    isLoading: false
  },
  methods: {
    searchNewAddress() {
      document.getElementById("searchCity").focus();
      searchCity.value = '';
    }
  },
  computed: {
    apartments() {
      return JSON.parse(this.$route.query.apartments)
    },
    sortedApartments() {
      return this.apartments.sort((a, b) => {
        return a.is_sponsored === b.is_sponsored ? 0 : a.is_sponsored ? -1 : 1;
      });
    }
  }
};
</script>

<template>
  <app-loader v-if="isLoading"></app-loader>
  <main v-if="!isLoading" class="py-3">
    <IndexFilter />
    <div class="container">

      <div v-if="apartments.length" class="row row-cols-4">
        <div class="col d-flex" v-for="apartment in sortedApartments">
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
@use '../assets/styles/partials/variables' as *;

main {
  min-height: calc(100vh - 150px);
  background-color: $main-bg;
}
</style>
