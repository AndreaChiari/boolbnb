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
    <main>
        <RouterView />
    </main>
    <AppFooter />
</template>

<style lang="scss">
@use './assets/styles/style.scss';

main {
    height: calc(100vh - 150px);
}
</style>
