<script>
import ApartmentCard from "../components/apartments/ApartmentCard.vue";
import IndexFilter from "../components/IndexFilter.vue";
export default {
  name: "Index",
  components: { ApartmentCard, IndexFilter },
};
</script>

<template>
  <IndexFilter />
  <h1>INDEX</h1>
  <div class="container">
    <div class="row row-cols-4">
      <div class="col d-flex">
        <ApartmentCard image="test_casa.jpg" />
      </div>
      <div class="col d-flex">
        <ApartmentCard image="firenze.jpg" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
