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
            isLoading: true
        }
    },
    methods: {
        getCityToSearch(city) {
            this.city = city
        },
        fetchSponsoredApartments() {
            this.isLoading = true
            axios.get('http://127.0.0.1:8000/api/apartments?sponsored=1').then(res => {
                this.sponsoredApartments = res.data;
            }).catch(() => {

            }).then(() => {
                this.isLoading = false
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
    <app-loader v-if="isLoading"></app-loader>
    <AppJumbotron v-if="!isLoading" @search-city="getCityToSearch" :sponsored-apartments="sponsoredApartments" />
    <main class="py-5" v-if="!isLoading">
        <div class="container">




            <div class="col-md-6">
                <div class="title-wrapper">
                    <h1 class="text-white mb-5">I nostri appartamenti in evidenza</h1>
                    <i class="fa-solid fa-house" style="color: #eb1414;"></i>
                </div>
            </div>






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


.title-wrapper {
    position: relative;
    display: inline-block;
    padding: 20px;
    border: 2px solid rgba(204, 204, 204, 0);
}

.title-wrapper i {
    position: absolute;
    top: 3%;
    left: 20px;
    transition: all 0.3s ease-in-out;
}

.title-wrapper:hover i {
    transform: scale(1.4);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}





main {
    background-color: $main-bg;
    min-height: calc(100vh - 250px);
}

@media screen and (min-width: 577px) {
    main {
        background-color: $main-bg;
        min-height: calc(100vh - 350px);
    }

}

@media screen and (min-width: 1201px) {

    main {
        background-color: $main-bg;
        min-height: calc(100vh - 570px);
    }

}
</style>