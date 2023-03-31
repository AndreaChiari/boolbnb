<script>
import { RouterLink } from 'vue-router';
import GeneralButton from './GeneralButton.vue';

export default {
    name: "AppHeader",
    components: { RouterLink, GeneralButton }
}
</script>

<template>
    <header>
        <nav class="container d-flex justify-content-between align-items-center py-3 h-100">
            <div class="nav-left h-100">
                <router-link :to="{ name: 'home' }"><img
                        src="https://loghi-famosi.com/wp-content/uploads/2020/07/Airbnb-Logo.png" alt="logo"></router-link>
            </div>
            <div class="nav-center flex-grow-1 px-5">
                <div class="input-group ">
                    <input type="text" class="form-control" placeholder="Recipient's username"
                        aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn btn-secondary" type="button" id="button-addon2"><i
                            class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div class="nav-right">
                <GeneralButton buttonText="Login" routeName="index" />
                <GeneralButton buttonText="Sign in" routeName="not-found-page" />
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
}</style>
