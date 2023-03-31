<script>
import { RouterLink } from 'vue-router';
import GeneralButton from './GeneralButton.vue';

export default {
    name: "AppHeader",
    components: { RouterLink },
    data: () => ({}),
    methods: {
        toggleMenu() {
            const dropdown = document.querySelector('.dropdown-menu');
            dropdown.classList.toggle('show');
        },
        closeMenu() {
            const dropdown = document.querySelector('.dropdown-menu');
            dropdown.classList.remove('show');
        },
    },
    mounted() {
        window.addEventListener('click', (event) => {
            if (!event.target.closest('.dropdown')) this.closeMenu();
        });
    }
};




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
                    <input type="text" class="form-control rounded-5" placeholder="Ex. Milan"
                        aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn rounded-5 px-3" type="button" id="button-addon2"><i
                            class="fa-solid fa-magnifying-glass fa-beat-fade fa-lg" style="color: #f2f2f2;"></i></button>
                </div>
            </div>
            <div class="nav-right">
                <div class="d-none d-md-inline">
                    <router-link :to="{ name: 'index' }" class="btn btn-primary me-2">Login</router-link>
                    <router-link to="/apartments/1" class="btn btn-secondary">Sign In</router-link>
                </div>
                <div class="group-btn  d-sm-block d-md-none">
                    <div class="dropdown">
                        <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                            @click="toggleMenu()">
                            <i class="fa-solid fa-bars fa-lg" style="color: #ffffff;"></i>
                        </button>
                        <div class="dropdown-menu">
                            <router-link :to="{ name: 'index' }" class="btn btn-primary me-2">Login</router-link>
                            <router-link to="/apartments/1" class="btn btn-secondary">Sign In</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

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
