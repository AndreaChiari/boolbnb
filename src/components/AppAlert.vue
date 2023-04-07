<script>
export default {
    name: 'AppAlert',
    props: {
        type: String,
        text: String,
    },
    emits: ['close-alert']
}
</script>

<template>
    <div class="alert d-flex justify-content-center" :class="`alert-${type}`" role="alert">
        <ul class="mb-0" v-html="text"></ul>
        <button class="close-btn" type="button" @click="$emit('close-alert')"><i class="fa-solid fa-xmark"></i></button>
    </div>
</template>

<style scoped lang="scss">
.alert {
    position: relative;

    .close-btn {
        position: absolute;
        right: 30px;
        border: none;
        background-color: transparent;
        color: rgba($color: #000000, $alpha: 0.5);
        transition: all 0.5s;

        &:hover {
            color: black;
            scale: 1.1;
        }

    }
}
</style>