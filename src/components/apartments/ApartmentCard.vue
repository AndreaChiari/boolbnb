<script>
export default {
    name: "ApartmentCard",
    props: {
        image: String,
    },
    data: () => ({
        isZoomed: false,
        showDetails: false,
        apartments: [],
    }),
    methods: {
        getImageUrl(image) {
            return new URL(`../../assets/img/${image}`, import.meta.url).href;
        },
        getAddress(termSearch, range = 25) {
            axios.get(`${apiUri}geocode/${termSearch}.json?key=${key}`)
                .then((res) => {
                    this.address = res.data.results[0];

                    //prendo latitudine e longitudine
                    const lat = this.address.position.lat
                    const lon = this.address.position.lon
                    console.log(lat, lon)

                    axios.get(`${backEndUri}lat=${lat}&lon=${lon}&range=${range}`)
                        .then((res) => {
                            this.apartments = res.data;
                            console.log(this.apartments)
                        })
                })

        }
    },
};

</script>

<template>
    <div class="apartment-card rounded d-flex flex-column justify-content-between mb-4" @mouseover="showDetails = true"
        @mouseleave="showDetails = false">
        <div class="card-img-wrapper" @mouseover="isZoomed = true" @mouseleave="isZoomed = false">
            <router-link :to="{ name: 'apartment-detail', params: { id: apartment.id } }" class="text-decoration-none"><i
                    class="link-detail"></i></router-link>
            <img class="rounded" :src="getImageUrl(image)" alt="">
            <div class="card-price">650 € notte</div>
            <div class="card-hover-details" v-show="showDetails">
                <h5 class="card-title">Delft, Paesi Bassi</h5>
                <p class="card-rating"><i class="fa-solid fa-star me-1"></i>4.86</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.apartment-card {
    width: 300px;
    background-color: white;
    cursor: pointer;
    position: relative;

    .card-img-wrapper {
        position: relative;
        overflow: hidden;

        img {
            max-width: 100%;
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
}
</style>
