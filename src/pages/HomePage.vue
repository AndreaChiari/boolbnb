<script>
import axios from 'axios';
import ApartmentCard from '../components/apartments/ApartmentCard.vue';
import AppJumbotron from '../components/AppJumbotron.vue';

export default {
    name: "HomePage",
    data() {
        return {
            city: '',
            sponsoredApartments: [],
        }
    },
    methods: {
        getCityToSearch(city) {
            this.city = city
        },
        fetchSponsoredApartments() {
            axios.get('http://127.0.0.1:8000/api/apartments?sponsored=1').then(res => {
                this.sponsoredApartments = res.data;
            })
        }
    },
    computed: {
        otherSponsoredApartments() {
            const now = new Date();
            const otherSponsoredApartments = this.sponsoredApartments.filter(apartment => {
                let isNotMaster = false;
                for (let i = 0; i < apartment.sponsorships.length && !isNotMaster; i++) {
                    const endDate = new Date(apartment.sponsorships[i].pivot.end_date);
                    if (endDate.getTime() - now.getTime() > 0 && apartment.sponsorships[i].name !== 'Master') {
                        isNotMaster = true;
                    }
                }
                return isNotMaster;
            });
            return otherSponsoredApartments;
        }
    },
    components: { AppJumbotron, ApartmentCard },
    created() {
        this.fetchSponsoredApartments();
    }
}
</script>

<template>
    <AppJumbotron @search-city="getCityToSearch" :sponsored-apartments="sponsoredApartments" />
    <main class="py-5">
        <div class="container">
            <h1 class="text-white mb-5">I nostri appartamenti in evidenza</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                <div class="col d-flex justify-content-center" v-for="apartment in otherSponsoredApartments">
                    <ApartmentCard :apartment="apartment" />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use '../assets/styles/partials/variables' as *;

main {
    background-color: $main-bg;
    min-height: calc(100vh - 570px);
}
</style>