
<script>
import axios from 'axios';
import GeneralButton from '../components/GeneralButton.vue';

export default {
    name: "DetailPage",
    data() {
        return {
            apartment: null
        }
    },


    components: { GeneralButton },
    methods: {
        fetchApartment() {
            axios.get(`http://127.0.0.1:8000/api/apartments/${this.$route.params.id}`).then((res) => {
                this.apartment = res.data[0]

            })
        }
    },
    created() {
        this.fetchApartment()
    }
}


</script>

<template>
    <div class="container d-flex">
        <div class="container-detail mx-auto d-flex flex-column flex-lg-row">
            <div class="container-thumb-detail">
                <img class="img-fluid" :src=apartment.thumb :alt=apartment.name>
                <h2 class="apartment-name ms-2">{{ apartment.name }}</h2>
                <p class="rating mt-3">
                <h5>{{ apartment.views.length }}<i class="ms-2 fs-3 fa-solid fa-eye"></i>
                </h5>
                </p>
            </div>
            <div class="container-info-detail">
                <div class="info-apartment">
                </div>
                <h2 class="mb-2 mb-4">{{ apartment.name }}</h2>
                <h6 class="mb-2">{{ apartment.address }}</h6>
                <h6 class="mb-2">Numero stanze: {{ apartment.rooms }}</h6>
                <h6 class="mb-2">Numero letti: {{ apartment.beds }}</h6>
                <h6 class="mb-2">Numero bagni: {{ apartment.bathrooms }}</h6>
                <div class="d-flex">
                    <h6 v-for="service in apartment.services" :key="service" class="mb-2">{{ service.name }}</h6>
                </div>
                <h6 class="mb-4">{{ apartment.description }}</h6>
                <h5 class="mb-5">{{ apartment.price }}€ / notte </h5>
                <div class="d-flex justify-content-end button-conteiner">
                    <GeneralButton buttonText="Contattaci" routeName="index" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
//generals

.button-container {
    width: 100%;
    height: 100%;
}

.container {
    width: 90%;
    height: calc(100vh - 150px);


    .container-detail {

        height: 400px;
        width: 900px;

        .container-thumb-detail {

            position: relative;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;

            }

            .apartment-name {
                position: absolute;
                bottom: 5px;
                left: 5px;
                color: rgb(255, 255, 255);
                font-weight: 700;
                width: 280px;
            }

            .rating {
                position: absolute;
                top: 10px;
                left: 10px;
                color: white;
                font-size: 25px;
            }
        }

        .container-info-detail {
            flex-basis: 60%;
            border-radius: 0 10px 10px 0;
            position: relative;
            padding-top: 10px;



            .info-apartment {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: url(../assets/img/boolbnb.png);
                background-color: #FFD6D7;
                background-position: 50% 25%;
                opacity: 20%;
                background-repeat: no-repeat;

                p {
                    font-weight: 900;
                }

            }
        }
    }

}

@media screen and (max-width: 576px) {

    .contact-button {

        bottom: 15px;
        position: relative;
        z-index: 2;
        right: 5px;

    }

    .container-detail {
        margin-top: 50px;
        height: 400px;
        width: 900px;
        border-radius: 10px;


        .container-thumb-detail {
            flex-basis: 40%;
            border-radius: 10px 10px 0 0;
            position: relative;
            padding: 5px;


            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
                object-position: center;

            }

        }

        .container-info-detail {


            .info-apartment {
                border-radius: 10px;
            }

            h6 {
                padding-left: 5px;
            }
        }
    }

}

@media screen and (min-width: 576px) {

    .contact-button {

        bottom: 15px;
        position: absolute;
        z-index: 2;
        right: 5px;

    }

    .container-detail {
        margin-top: 50px;
        height: 400px;
        width: 900px;
        border-radius: 10px;


        .container-thumb-detail {
            flex-basis: 40%;
            border-radius: 10px 10px 0 0;
            position: relative;
            padding: 5px;


            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
                object-position: center;

            }

        }

        .container-info-detail {


            .info-apartment {
                border-radius: 10px;
            }

            h6 {
                padding-left: 5px;
            }
        }
    }

}


@media screen and (min-width: 992x) {
    .contact-button {
        margin-top: 110px;
    }

    .container-detail {
        margin-top: 50px;
        height: 400px;
        width: 900px;



        .container-thumb-detail {
            flex-basis: 40%;
            border-radius: 10px 0 10px 0;
            position: relative;
            padding: 5px;
            padding-top: 0px;
            border-radius: 10px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
                object-position: center;

            }

        }

        .container-info-detail {
            padding-top: 20px;

            .info-apartment {
                border-radius: 10px;
            }

            h6 {
                padding-left: 5px;
            }
        }
    }

}
</style>