<script>
import ApartmentCard from '../components/apartments/ApartmentCard.vue';
import IndexFilter from '../components/IndexFilter.vue';
export default {
    name: 'Index', 
    components: {ApartmentCard, IndexFilter}
}

</script>

<template>
    <IndexFilter />
    <h1>INDEX</h1>
    <ApartmentCard />
</template>

<style scoped></style>