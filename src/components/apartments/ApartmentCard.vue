<script>
export default {
    name: 'ApartmentCard',
    props: {
        image: String,
    },
    methods: {
        getImageUrl(image) {
            return new URL(`../../assets/img/${image}`, import.meta.url).href;
        },
    }
}

</script>

<template>
    <div class="apartment-card rounded d-flex flex-column justify-content-between mb-4">
        <img class="rounded" :src="getImageUrl(image)" alt="">
        <div class="card-content px-3 py-4">
            <div class="mt-2 d-flex justify-content-between">
                <h5 class="title">
                    Delft, Paesi Bassi
                </h5>
                <p class="rating">
                    <i class="fa-solid fa-star me-1"></i>4.86
                </p>
            </div>
            <p class="price mb-0">
                <strong>650 €</strong> notte
            </p>
        </div>
    </div>
</template>


<style scoped lang="scss">
.apartment-card {
    width: 300px;
    background-color: white;
    cursor: pointer;

    img {
        max-width: 100%;
    }
}
</style>