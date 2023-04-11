<script>
export default {
    name: "NotFound"
};
</script>

<template>
    <main class="d-flex justify-content-center align-items-center text-light flex-column">
        <h1>
            404
        </h1>
        <h2 class="my-3">
            Page Not Found
        </h2>
        <p class="my-3">
            <router-link to="/" class="btn btn-outline-light">Go back to home</router-link>
        </p>
    </main>
</template>

<style scoped lang="scss">
main {
    background-image: url("https://blog.gruppocapital.it/wp-content/uploads/2021/07/case-vip.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    min-height: calc(100vh - 150px);

    h1 {
        font-size: 100px;
    }
}
</style>
