<script>
import AppJumbotron from '../components/AppJumbotron.vue';

export default {
    name: "HomePage",
    data() {
        return {
            city: '',
        }
    },
    methods: {
        getCityToSearch(city) {
            this.city = city
        }
    },
    components: { AppJumbotron }
}
</script>

<template>
    <AppJumbotron @search-city="getCityToSearch" />
</template>

<style scoped></style>