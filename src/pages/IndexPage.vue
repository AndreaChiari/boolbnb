<script>
import ApartmentCard from "../components/apartments/ApartmentCard.vue";
import IndexFilter from "../components/IndexFilter.vue";
export default {
  name: "Index",
  components: { ApartmentCard, IndexFilter },
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
  <main class="py-3">
    <IndexFilter />
    <div class="container">
      <div class="row row-cols-4">
        <div class="col d-flex" v-for="apartment in sortedApartments">
          <ApartmentCard :apartment="apartment" />
        </div>
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
