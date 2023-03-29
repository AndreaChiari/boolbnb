<script>
import AppHeader from './components/AppHeader.vue';

export default {
    name: "BoolBnB",
    components: { AppHeader }
}

</script>

<template>
    <AppHeader />
    <RouterView />
</template>

<style lang="scss">
@use './assets/styles/style.scss';
</style>
