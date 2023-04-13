<script>
import GeneralButton from './GeneralButton.vue';
export default {
    name: 'IndexFilter',
    components: { GeneralButton },

    data() {
        return {
            filters: {
                price: null,
                rooms: null,
                bathrooms: null,
                range: 20,
                checkedServices: [],

            },
            serviceStatus: false,
            services: [
                {
                    name: 'Wifi',
                    icon: 'fa-solid fa-wifi'
                },
                {
                    name: 'Piscina',
                    icon: 'fa-solid fa-person-swimming'
                },
                {
                    name: 'Parcheggio Gratuito',
                    icon: 'fa-solid fa-square-parking'
                },
                {
                    name: 'TV',
                    icon: 'fa-solid fa-tv'
                }
            ],

            others: [
                {
                    name: 'Colazione Inclusa',
                    icon: 'fa-solid fa-mug-saucer'
                },
                {
                    name: 'Spa & centro benessere',
                    icon: 'fa-solid fa-spa'
                },
                {
                    name: 'Palestra',
                    icon: 'fa-solid fa-dumbbell'
                },
                {
                    name: 'Spiaggia Inclusa',
                    icon: 'fa-solid fa-umbrella-beach'
                },
                {
                    name: 'Aria Condizionata',
                    icon: 'fa-solid fa-fan fa-spin'
                },
                {
                    name: 'Tavolo da Ping Pong',
                    icon: 'fa-solid fa-table-tennis-paddle-ball'
                },
            ]
        }
    },

    methods: {
        toggleStatus() {
            this.serviceStatus = !this.serviceStatus;
        },

        sendFilters() {
            this.$emit('send-filters', this.filters);
        }
    },
    emits: ['range-release']
}
</script>


<template>
    <section id="filter">
        <div class="container">
            <div class="row g-2">

                <div class="col-12 col-sm-4 col-lg-2">
                    <div class="input-group">
                        <span class="input-group-text">
                            <i class="fa-solid fa-euro-sign"></i>
                        </span>
                        <input v-model="filters.price" type="number" min="1" class="form-control" id="price" name="price"
                            placeholder="Prezzo" @keyup="sendFilters()">
                    </div>
                </div>

                <div class="col-12 col-sm-4 col-lg-2">
                    <div class="input-group">
                        <span class="input-group-text"><i class="fa-solid fa-bed"></i></span>
                        <input v-model="filters.rooms" type="number" min="1" class="form-control" id="rooms" name="rooms"
                            placeholder="Stanze" @keyup="sendFilters()">
                    </div>
                </div>

                <div class="col-12 col-sm-4 col-lg-2">
                    <div class="input-group">
                        <span class="input-group-text"><i class="fa-solid fa-toilet"></i></span>
                        <input v-model="filters.bathrooms" type="number" min="1" class="form-control" id="bathrooms"
                            placeholder="Bagni" name="bathrooms" @keyup="sendFilters()">
                    </div>
                </div>


                <!-- Servizi  -->
                <div class="col-12 col-lg-6 my-3 services d-flex justify-content-between align-items-center">
                    <div v-for="service in services" class="icon-service">
                        <span class="me-2">
                            <input v-model="filters.checkedServices" class="form-check-input" :id="service.name"
                                :value="service.name" type="checkbox" :name="service.name" @click="sendFilters()">
                            <label class="form-check-label ms-2" :for="service.name"> <span class="d-none d-lg-inline">{{
                                service.name }} </span> <i :class="service.icon" class="ms-1"></i></label>
                        </span>
                    </div>
                </div>

                <!-- Range kms  -->
                <div class="col-12 col-lg-10 text-center my-2">
                    <label for="km_range" class="form-label w-100">Kms Range: {{ filters.range }}km</label>
                    <input v-model="filters.range" type="range" step="1" min="0" max="100" class="form-range" id="km_range"
                        name="km_range" @change="sendFilters()" @mouseup="$emit('range-release')">
                </div>

                <!-- Bottoni filtro e servizi Aggiuntivi  -->
                <div class="col-12 col-lg-2 mb-2 d-flex justify-content-end align-items-center">
                    <!-- <GeneralButton @click="sendFilters()" buttonText="Filter" /> -->
                    <GeneralButton buttonText='<i class="fa-solid fa-filter fa-lg" style="color: #ffffff;"></i>'
                        @Click="toggleStatus" />
                </div>
                <!-- Servizi Aggiuntivi  -->
                <div class="more-services col-12 d-flex justify-content-between mt-1 mb-5">
                    <div v-if="serviceStatus" v-for="service in others" class="icon-service">
                        <span class="me-2">
                            <input v-model="filters.checkedServices" class="form-check-input" :id="service.name"
                                :value="service.name" type="checkbox" :name="service.name">
                            <label class="form-check-label ms-2" :for="service.name"> <span class="d-none d-lg-inline">{{
                                service.name }}</span> <i :class="service.icon" class="ms-1"></i></label>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">
@use '../assets/styles/partials/variables' as *;

#filter {
    min-height: 80px;

    label {
        color: $pink-2;
    }

    .form-check-input {
        &:checked {
            background-color: $pink-3;
            border-color: $pink-2;
        }

        &:focus {
            box-shadow: 0 0 0 0.25rem rgba($color: $pink-2, $alpha: 0.25);
        }
    }

    #km_range::-webkit-slider-thumb {
        background-color: $pink-3;
    }

    #km_range::-moz-range-thumb {
        background-color: $pink-3;
    }

    .input-group {
        &:hover {
            box-shadow: 0 0 5px #FF385C;
            cursor: pointer;
        }
    }

}
</style>