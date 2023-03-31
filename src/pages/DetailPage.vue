
<script>
import GeneralButton from '../components/GeneralButton.vue';




export default {
    name: "DetailPage",
    components: { GeneralButton },

}

</script>

<template>
    <div class="container d-flex">
        <div class="container-detail mx-auto d-flex flex-column flex-lg-row">
            <div class="container-thumb-detail">
                <img class="img-fluid"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/ebee05c1-0c41-4850-a985-49748f8f6d55.jpeg?im_w=1440"
                    alt="">
                <p class="apartment-name ms-2">Casa sull'albero di frassino, 10mq</p>
                <p class="rating mt-3">
                    <i class="fa-solid fa-star me-1"></i>4.86
                </p>
            </div>
            <div class="container-info-detail">
                <div class="info-apartment">
                </div>
                <h6 class="mb-2">Indirizzo: Via Alcide de gasperi , 36</h6>
                <h6 class="mb-2">Camere: 3</h6>
                <h6 class="mb-2">Letti: 3</h6>
                <h6 class="mb-2">Servizi: Wi-Fi, Animali, Aria Condizionata</h6>
                <h6 class="mb-2">Descrizione: Lorem ihsum dolor sit amet consectetur, adipisicing elit. Tempora vitae magnam
                    a ducimus
                    quos! Veniam laudantium natus repudiandae dolores unde sed quibusdam dolorem nobis aliquid sit, ratione
                    obcaecati ut aliquam.</h6>
                <h6 class="mb-5">Prezzo: 25€ / notte </h6>
                <div class="d-flex justify-content-end button-conteiner">
                    <GeneralButton buttonText="Contattaci" routeName="index" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.button-container {
    width: 100%;
    height: 100%;
}

.container {
    width: 90%;


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
                color: white;
                font-weight: 700;
                font-size: larger;
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