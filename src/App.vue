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
  <transition name="page-opacity">
    <RouterView />
  </transition>
  <AppFooter />
</template>

<style lang="scss">
@use './assets/styles/style.scss';


.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: opacity 0.5s;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}
</style>
