<script>
export default {
    name: "ApartmentCard",
    props: {
        apartment: Object,
    },
    methods: {
        getImageUrl(image) {
            return new URL(`../../assets/img/${image}`, import.meta.url).href;
        },
    },
};

</script>

<template>
    <router-link :to="{ name: 'apartment-detail', params: { id: apartment.id } }"
        class="apartment-card rounded d-flex flex-column justify-content-between mb-4">
        <div class="card-img-wrapper h-100">
            <img class="rounded" :src="apartment.thumb" :alt="apartment.name">
            <div class="card-price">{{ apartment.price }} € notte</div>
            <div class="card-hover-details">
                <h6 class="card-title mb-2">{{ apartment.name }}</h6>
                <p class="card-rating mb-0"><i class="fa-solid fa-eye me-1"></i>{{ apartment.views.length }}</p>
            </div>
            <div class="label py-1 px-2 rounded" v-if="apartment.is_sponsored"><b>SPONSORED</b></div>
        </div>
    </router-link>
</template>

<style scoped lang="scss">
.link-detail {
    height: 100%;
    width: 100%;
}

.apartment-card {
    width: 300px;
    height: 200px;
    background-color: white;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border: 2px solid transparent;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease-in-out;

    &:hover {
        border-color: #f44336;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-image: linear-gradient(to right,
                rgba(244, 67, 54, 0.5),
                rgba(244, 67, 54, 0.2),
                rgba(244, 67, 54, 0.5));
        z-index: -1;
        animation: moveLines 2s infinite linear;
        border-radius: 10px;
    }

    &::after {
        transform: rotate(180deg);
    }

    .card-img-wrapper {
        position: relative;
        overflow: hidden;
        height: 100%;

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
            background-color: rgba(0, 0, 0, 0.63);
            color: white;
            padding: 10px;
            font-weight: bold;
            font-size: 13px;
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
            border-radius: 0px 30px 0 0;


            .card-rating {
                font-size: 12px;
            }
        }
    }

    .card-price {
        position: absolute;
        top: 0px;
        left: -2px;
        background-color: rgba(0, 0, 0, 0.412);
        color: white;
        padding: 5px;
        font-weight: bold;
        font-size: 14px;
        border-radius: 0 0 20px 0;
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
