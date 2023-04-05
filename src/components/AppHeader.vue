<script>
import { apiUri } from '../data/index.js';
import { key } from '../data/index.js';
import { backEndUri } from '../data/index.js';
import { RouterLink } from 'vue-router';
import GeneralButton from './GeneralButton.vue';


// axios import
import axios from 'axios'

export default {
    name: "AppHeader",
    components: { RouterLink, GeneralButton },
    data: () => ({
        isShown: false,
        address: [],
        termSearch: " ",
        apartments: [],

    }),
    methods: {
        toggleMenu() {
            this.isShown = !this.isShown;
        },
        getAddress(termSearch, range = 25) {
            axios.get(`${apiUri}geocode/${termSearch}.json?key=${key}`)
                .then((res) => {
                    this.address = res.data.results[0];

                    //prendo latitudine e longitudine
                    const lat = this.address.position.lat
                    const lon = this.address.position.lon
                    console.log(lat, lon)

                    axios.get(`${backEndUri}lat=${lat}&lon=${lon}&range=${range}`)
                        .then((res) => {
                            this.apartments = res.data;
                            console.log(this.apartments)
                        })
                })

        }
    },
}





</script>

<template>
    <header>
        <nav class="container d-flex justify-content-between align-items-center py-3 h-100">
            <div class="nav-left h-100 ">
                <router-link :to="{ name: 'home' }" class="text-decoration-none">
                    <img src="https://companieslogo.com/img/orig/ABNB-4aaade0f.png?t=1633511992" alt="logo">
                    <span class="title d-none d-md-inline">BOOLBNB</span>
                </router-link>
            </div>
            <div class="nav-center flex-grow-1 px-5">
                <div class="input-group ">
                    <input type="text" @keyup.enter="termSearch" v-model.trim="termSearch" class="form-control rounded-5"
                        placeholder="Ex. Milan" aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button @click="getAddress(termSearch)" class="btn rounded-5 px-3" type="button" id="button-addon2"><i
                            class="fa-solid fa-magnifying-glass fa-beat-fade fa-lg" style="color: #f2f2f2;"></i></button>
                </div>
            </div>
            <div class="nav-right">
                <div class="d-none d-md-inline">
                    <GeneralButton buttonText="Login" routeName="index" />
                    <GeneralButton buttonText="Sign In" routeName="index" />
                </div>
                <div class="group-btn  d-sm-block d-md-none">
                    <div class="dropdown">
                        <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                            @click="toggleMenu()">
                            <i class="fa-solid fa-bars fa-lg" style="color: #ffffff;"></i>
                        </button>
                        <div class="dropdown-menu flex-column" :class="{ 'show d-flex': isShown }">
                            <GeneralButton buttonText="Login" routeName="index" />
                            <GeneralButton buttonText="Sign In" routeName="index" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.contact-button {
    margin-right: 10px;
}

header {
    height: 80px;
    background-color: $secondary-bg;
    color: white;

    .nav-left img {
        max-height: 100%;
    }

    .title {
        color: #FF385C;
        font-size: 20px;
        padding: 2px 4px;

        &:hover {
            text-shadow: 0 0 5px red;
        }
    }
}
</style>
