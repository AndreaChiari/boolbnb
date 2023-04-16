<script>
import axios from "axios";
import GeneralButton from "../components/GeneralButton.vue";
import ContactModal from "../components/ContactModal.vue";
import AppAlert from "../components/AppAlert.vue";
import AppMap from "../components/AppMap.vue";

export default {
    name: "DetailPage",
    data() {
        return {
            apartment: null,
            contactModal: false,
            showAlert: false,
            alertType: "",
            alertText: "",
            isLoading: true,
        };
    },
    components: { GeneralButton, ContactModal, AppAlert, AppMap },
    methods: {
        fetchApartment() {
            this.isLoading = true;
            axios
                .get(`http://127.0.0.1:8000/api/apartments/${this.$route.params.id}`)
                .then((res) => {
                    this.isLoading = false;
                    this.apartment = res.data;
                })
                .catch(() => {
                    console.log("ciao");
                    this.$router.push({ name: "not-found-page" });
                });
        },
        sendMessage(message) {
            console.log(message);
            axios
                .post("http://127.0.0.1:8000/api/messages", message)
                .then(() => {
                    this.contactModal = false;
                    this.showAlert = true;
                    this.alertType = "success";
                    this.alertText = "Il messaggio è stato inviato con successo";
                })
                .catch((e) => {
                    this.alertText = "";
                    const errors = e.response.data.errors;
                    this.contactModal = false;
                    this.showAlert = true;
                    this.alertType = "danger";
                    this.alertText = "<h3>Il messaggio non è stato inviato perchè:</h3>";
                    for (let key in errors) {
                        for (let key2 in errors[key]) {
                            this.alertText += `<li>${key} : ${errors[key][key2]}</li>`;
                        }
                    }
                });
            window.scrollTo(0, 0);
        },
    },
    created() {
        this.fetchApartment();
    },

    computed: {
        services() {
            let services = "";
            this.apartment.services.forEach((service, i) => {
                services += `<i class="${service.icon}"></i> ${service.name}`;
                if (i < this.apartment.services.length - 1) {
                    services += ", ";
                }
            });
            return services;
        },
        coordinates() {
            const coordinates = {
                lat: this.apartment.latitude,
                lon: this.apartment.longitude,
            };
            return coordinates;
        },
    },
};
</script>

<template>
    <app-loader v-if="isLoading"></app-loader>
    <main v-if="!isLoading" class="py-5">
        <div v-if="apartment" class="container apartment">
            <AppAlert v-if="showAlert" :type="alertType" :text="alertText" @close-alert="showAlert = false" />
            <div class="pictures row">
                <div class="col-12 py-2 mb-3 border-bottom">
                    <h1 class="apartment-name">{{ apartment.name }}</h1>
                </div>
                <div :class="apartment.apartment_pics.length ? 'col-6' : 'col-12'">
                    <img class="main-pic" :src="apartment.thumb" :alt="apartment.name" />
                </div>
                <div v-if="apartment.apartment_pics.length" class="col-6 p-0 row side-pics">
                    <div class="col-6 border h-50"></div>
                    <div class="col-6 border h-50"></div>
                    <div class="col-6 border h-50"></div>
                    <div class="col-6 border h-50"></div>
                </div>
            </div>
            <div class="info row border-bottom align-items-center">
                <div class="col-6 pt-3">
                    <address class="mb-0">{{ apartment.address }}</address>
                </div>
                <div class="col-6 pt-3">
                    <h4 class="apartment-price text-end">€{{ apartment.price }}/notte</h4>
                </div>
            </div>
            <div class="details row">
                <div class="col-12 py-5 border-bottom">
                    <p class="description mb-0">{{ apartment.description }}</p>
                </div>
                <div class="col-4 py-5 text-center border border-top-none border-left-none">
                    <i class="fa-solid fa-person-shelter fa-2x me-2"></i><span class="h2">{{ apartment.rooms }}</span>
                </div>
                <div class="col-4 py-5 text-center border border-top-none">
                    <i class="fa-solid fa-bed fa-2x me-2"></i><span class="h2">{{ apartment.beds }}</span>
                </div>
                <div class="col-4 py-5 text-center border border-top-none border-right-none">
                    <i class="fa-solid fa-restroom fa-2x me-2"></i><span class="h2">{{ apartment.bathrooms }}</span>
                </div>
            </div>
            <div v-if="apartment.services.length" class="services row">
                <div class="col-12 py-3">
                    <h3>Servizi</h3>
                </div>
                <ul class="col-12 mb-0">
                    <li v-for="service in apartment.services" class="border-bottom py-2">
                        <i class="me-2" :class="service.icon"></i>{{ service.name }}
                    </li>
                </ul>
            </div>
            <div class="buttons row mt-3">
                <div class="col-12 d-flex justify-content-between">
                    <button class="contact-button" @click="$router.go(-1)">
                        Torna Indietro
                    </button>
                    <GeneralButton buttonText="Contatta il proprietario" @button-click="contactModal = true" />
                </div>
            </div>
            <ContactModal v-if="contactModal" :contact="apartment.name" :id="apartment.id"
                @close-modal="contactModal = false" @send-form="sendMessage" />
            <app-map :flag="false" :name="apartment.name" :coordinates="coordinates"></app-map>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use "../assets/styles/partials/variables" as *;

//generals

.contact-button {
    text-decoration: none;
    padding: 10px;
    border-radius: 10px;
    background-color: #ff385c;
    border: 0.6px solid #ffdedf;
    color: white;
    font-family: sans-serif;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.246);

    &:before {
        content: "";
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg,
                rgba(255, 255, 255, 0.104),
                rgba(255, 255, 255, 0));
        transform: rotate(-45deg);
        transition: all 0.3s ease-out;
    }

    &:hover:before {
        top: 30%;
        left: 30%;
    }

    &:active {
        transform: scale(0.95);
    }
}

main {
    background-color: $main-bg;
    color: white;
}

.apartment {
    .border-bottom {
        border-color: $pink-2 !important;
    }

    .main-pic {
        max-height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .info {
        .apartment-price {
            color: $pink-3;
        }
    }

    .details {
        .border {
            border-color: $pink-2 !important;
        }

        .border-left-none {
            border-left: none !important;
        }

        .border-right-none {
            border-right: none !important;
        }

        .border-top-none {
            border-top: none !important;
        }

        .description {
            font-size: 22px;
        }
    }

    .services {
        ul {
            list-style: none;

            li {
                font-size: 20px;
            }
        }
    }

    i {
        color: $pink-3;
    }
}
</style>
