
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
    },
    computed: {
        services() {
            let services = ''
            this.apartment.services.forEach((service, i) => {
                services += `<i class="${service.icon}"></i> ${service.name}`
                if (i < this.apartment.services.length - 1) {
                    services += ", "
                }
            });
            return services
        }
    }
}


</script>

<template>
    <div class="container">
        <div class="mx-auto row main-container-img mt-5 flex-direction-column">
            <div class="col-sm-6 main-img ">
                <img src="https://upload.wikimedia.org/wikipedia/it/6/65/Bart_Simpson.png" alt="">
            </div>
            <div class="col-6 img-shards d-none d-sm-block">
                <div class="row firstline">
                    <div class="col-6 top-left"></div>
                    <div class="col-6 top-right"></div>
                </div>
                <div class="row secondline ">
                    <div class="col-6 bottom-left"></div>
                    <div class="col-6 bottom-right"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
//generals

.overlay-view {
    position: absolute;
    height: 36px;
    width: 60px;
    background-color: black;
    opacity: 0.6;
    top: 25px;
    left: 5px;
}

.overlay-name {
    position: absolute;
    height: 83px;
    width: 350px;
    background-color: black;
    opacity: 0.6;
    bottom: 5px;
    left: 5px;
    border-radius: 0px 0 10px 10px;
    z-index: 1
}

.button-container {
    width: 100%;
    height: 100%;
}

.container {
    width: 90%;
    height: calc(100vh - 150px);

    .main-container-img {
        width: 100%;
        height: 600px;



        .main-img {
            img {
                max-width: 100%;
                height: auto;
                object-fit: cover;
            }
        }

        .img-shards {
            background: red;

            .firstline {
                width: 100%;
                height: 50%;

                .top-left {
                    background-image: url(https://media.revistagq.com/photos/620b8133cdbd44ca1dadc4bc/4:3/w_2076,h_1557,c_limit/bart-simpson.jpeg);
                }

                .top-right {
                    background-image: url(https://capricho.abril.com.br/wp-content/uploads/2018/05/bart-simpson.jpg?quality=85&strip=info&w=600&resize=1200,800);
                }

            }

            .secondline {
                .bottom-left {
                    background-image: url(https://i0.wp.com/filmbekeken.com/wp-content/uploads/2019/06/human-centipede.png?fit=1272%2C715&ssl=1);
                }

                .bottom-right {
                    background-image: url(https://www.nonapritequestoblog.it/wp-content/uploads/2020/10/The-Human-Centipede-Movie-Centipede.jpg);
                }
            }

            .secondline {
                background: #000;
                width: 100%;
                height: 50%;
            }
        }
    }


}



@media screen and (max-width: 576px) {

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




@media screen and (min-width: 576px) {

    .apartment-name {
        display: none;
    }

    .main-container-detail {
        height: 100vh;
    }

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

@media screen and (min-width: 765px) {
    .apartment-name {
        display: none;
    }

    .main-container-detail {
        height: 110vh;
    }
}

@media screen and (min-width: 992px) {
    .apartment-name {
        display: block;
    }

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