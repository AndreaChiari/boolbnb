<script>
import ApartmentCard from "../components/apartments/ApartmentCard.vue";
import IndexFilter from "../components/IndexFilter.vue";
export default {
  name: "Index",
  components: { ApartmentCard, IndexFilter },
  computed: {
    apartments() {
      return JSON.parse(this.$route.query.apartments)
    }
  }
};
</script>

<template>
  <main class="py-3">
    <IndexFilter />
    <div class="container">
      <div class="row row-cols-4">
        <div class="col d-flex" v-for="apartment in apartments">
          <ApartmentCard :apartment="apartment" :is-sponsored="false" />
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
