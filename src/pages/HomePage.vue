<script>
import ApartmentCard from '../components/apartments/ApartmentCard.vue';
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
    components: { AppJumbotron, ApartmentCard }
}
</script>

<template>
    <AppJumbotron @search-city="getCityToSearch" />
    <main class="py-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                <div class="col d-flex justify-content-center" v-for="n in 20">
                    <ApartmentCard image="test_casa.jpg" />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use '../assets/styles/partials/variables' as *;

main {
    background-color: $main-bg;
}
</style>