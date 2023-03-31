<script>
import { RouterLink } from 'vue-router';

export default {
    name: "GeneralButton",
    components: { RouterLink },
    props: { routeName: String, buttonText: String }
}

</script>

<template>
    <router-link :to="{ name: routeName }" class="contact-button">{{ buttonText }}</router-link>
</template>

<style scoped lang="scss">
.contact-button {
    text-decoration: none;
    padding: 10px;
    border-radius: 10px;
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