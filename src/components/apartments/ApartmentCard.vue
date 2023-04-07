<script>
export default {
    name: "ApartmentCard",
    props: {
        apartment: Object,
        isSponsored: Boolean,
    },
    data: () => ({
        isZoomed: false,
        showDetails: false
    }),
    methods: {
        getImageUrl(image) {
            return new URL(`../../assets/img/${image}`, import.meta.url).href;
        },
    },
};

</script>

<template>
    <router-link :to="{ name: 'apartment-detail', params: { id: apartment.id } }"
        class="apartment-card rounded d-flex flex-column justify-content-between mb-4" @mouseover="showDetails = true"
        @mouseleave="showDetails = false">
        <div class="card-img-wrapper h-100" @mouseover="isZoomed = true" @mouseleave="isZoomed = false">
            <img class="rounded" :src="apartment.thumb" :alt="apartment.name">
            <div class="card-price">{{ apartment.price }} € notte</div>
            <div class="card-hover-details">
                <h6 class="card-title mb-2">{{ apartment.name }}</h6>
                <p class="card-rating mb-0"><i class="fa-solid fa-eye me-1"></i>{{ apartment.views.length }}</p>
            </div>
            <div class="label py-1 px-2 rounded" v-if="isSponsored"><b>SPONSORED</b></div>
        </div>
    </router-link>
</template>

<style scoped lang="scss">
.apartment-card {
    width: 300px;
    height: 200px;
    background-color: white;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    .card-img-wrapper {
        position: relative;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.2s ease-in-out;
        }

        .card-hover-details {
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px;
            font-weight: bold;
            font-size: 16px;
            opacity: 0;
            transition: opacity 0.2s ease-in-out;

            .card-rating {
                font-size: 12px;
            }
        }
    }

    .card-price {
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        padding: 5px;
        font-weight: bold;
        font-size: 14px;
    }

    &:hover {
        .card-img-wrapper img {
            transform: scale(1.1);
        }

        .card-hover-details {
            opacity: 1;
        }
    }

    .label {
        color: white;
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: rgb(255, 93, 88);
    }
}
</style>
