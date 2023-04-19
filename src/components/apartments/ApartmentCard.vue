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
                <!-- <p class="card-rating mb-0"><i class="fa-solid fa-eye me-1"></i>{{ apartment.views.length }}</p> -->
            </div>
            <div class="label py-1 px-2 rounded" v-if="apartment.is_sponsored">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEzUlEQVR4nN2Yy08bVxTGrT7U7Lqs1EUfm0qt1G6ya8HjGc+MZ8Z2EE0JKpSGRmlTSAnEvEwhgSZEVKhRE0UJiKQ8Qx6ARASBVgL7j2ilqE3VVbtLeM45AyGBUx3zcMFgxmNDpB7pk+w793zn57n3zr0el+v/HiQIB5xc25ewPGo+eHxLoBgPMdt7mFyNL7AsQclDJfCQr1mi78hzgVvM8r6Dko7Ye5OwvYMgr3Dekv1/g2L8A4cLTLxyjbD/FqGkA/fdN7BpWX7VlKTXUDb+hJbWZYxGaUOdXYSd3fHv0ShB68Vl7ss5nLsnUPNu+V2U9Bl0K4SivoiyfwG/qcBNcMlUdhrBayyCoD6LeUj6DHtmDBAENQyhmiXbQNEkmpggqAwvsWfGAC0lOIStF9OHi67phx/JUgODGQMENfgHdvdkDrCnj1AN/J42GE9q8BpXwGs8wbHxzAGOjxN7srfjhQMe5ShIxiyUhSwcvZ85uOiaRkcJTlYsoqTPg6AUpwS3IPjeQslYjD3H0gXp6iG8O7Dz9d4+vpuLlii+aRuQNO0VFDULh4fTg+vtI1T8hHoO4e072/cZGSGulfK2GFu5F75fcQzX178Kx889Vl4hYSSS2K+ldYVruVINdCtBOFI0lxQiEiGcmExs779N6AvG4YxcwoGhbT0gv2gOstRAyoCWxxfCwmIzKVxZiPDYidjDd6Odh1LLicPx8N65u/OPLCgGrpUa3EfyG7GDwMDgznBfl8UhSsoIJydXFwMDrbfzXby1w9xb1+AQgaRZC9nK2/aHVw1OQOO55Ftb/dk4COvESUJ/bvy7GiS8ae8pAPVnn6EanLQPKOlzeP2n3c2/3QK5Lq9B2N1rf0F1dhOI+pxtQMiWfcBDfKMzuXEkQlgV3gKnJxy5ksN1EcgGck1XKmEKXg9IOmDH9d0hQ7XxO5cKXMcNzgGu5XIS6JbLsbQcdi0UiRKGasjWtPivSk8B13A5DciWw1Bb/zSlolH7guq6p+CWax0DWpJ+GZtb9gQOWU3NZHmNS44BTTnQjVV1hGNjmYf7+ReCqjriGs4Bs7QPUAlOg6gRfPo54fmW7ffTqE1xLo/IZ18QShqxt+mW33cER3l5L5qidm8+Jw+nzjTRdFmIIPAx4dV254BX22Ie7PW44RzN5+ajKRrjdPDgy47hHjeep0ffXYhpuuQUYdEx54ui4CjNlJRv+D1qbE4dcie4dUPg/ZX33OF7hNfaCesbCds6EmHaOlbwTFPsTz2fnvmEw7nssdXTNmRSuDXNHi8lFH2Esp9ADS5bonYfJH0qtnfzHItEiD/H2jy+EVADy7G+kkazX5Zu62kL0g7cuqZOVxOImmWJagHn4ofy66j4f4XjpQhflVooG79xW+yaoHzCfacqqpN6JoUkQXjJlHxjpu/Qk6lQDU1VhlcVbkiEq67ju4FbXwqRIBwA2X8ZlMClrcd37muKGnJugl+4IV4vVEOmdmjJFLVxZtowmM+S3gNRewCy/tcmCeqyHTg7wTmcuxWSayTUFbUHzLSrKR8ANsGJmmV61EJbRNvExnBXhjd8uYbLaawDZgJuJ8i0ATMJtx1k2oAg6tZevCW1eE6KGqYFCG7F0YJICdKtoMtp7MdLcHreL9rTjX8ByZ0EPl9a7v8AAAAASUVORK5CYII=">
            </div>
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

        img {
            height: 40px;
            width: 40px;
        }
    }
}
</style>
