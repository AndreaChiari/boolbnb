<script>
import { RouterLink } from 'vue-router';

export default {
    name: "GeneralButton",
    components: { RouterLink },
    props: { buttonText: String },
    emits: ['button-click']
}

</script>

<template>
    <button class="contact-button" @click="$emit('button-click')" v-html="buttonText"></button>
</template>

<style scoped lang="scss">
.contact-button {
    text-decoration: none;
    padding: 10px;
    border-radius: 10px;
    background-color: #FF385C;
    border: 0.6px solid #FFDEDF;
    color: white;
    font-family: sans-serif;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.246);

    &:before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, rgba(255, 255, 255, 0.104), rgba(255, 255, 255, 0));
        transform: rotate(-45deg);
        transition: all 0.3s ease-out;
    }

    &:hover:before {
        top: 30%;
        left: 30%;
    }

    &:active {
        transform: scale(0.95);
    }

}
</style>