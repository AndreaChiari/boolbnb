<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
    name: "BoolBnB",
    components: { AppHeader, AppFooter }
}

</script>

<template>
    <AppHeader />
    <RouterView />
    <AppFooter />
</template>

<style lang="scss">
@use './assets/styles/style.scss';
</style>
