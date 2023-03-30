<script>
import { RouterLink } from 'vue-router';

export default {
    name: "GeneralButton",
    components: { RouterLink },
    // to do props 
}

</script>

<template>
    <router-link :to="{ name: 'home' }" class="contact-button">Contattaci</router-link>
</template>

<style scoped lang="scss">
.contact-button {
    text-decoration: none;
    padding: 10px;
    border-radius: 10px;
    margin-left: 340px;
    background-color: #FF5D58;
    border: 1px solid #FFDEDF;
    color: white;

    &:hover {
        background-color: #FFDEDF;
        border: 1px solid #FF5D58;
        color: #FF5D58;

    }
}
</style>