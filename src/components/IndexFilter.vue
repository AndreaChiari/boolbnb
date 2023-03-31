<script>
export default {
    name: 'IndexFilter',

    data() {
        return {
            price: '',
            rooms: '',
            bathrooms: '',
            range: 25,
            checkedServices: [],
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
        toggleStatus () {
        this.serviceStatus = !this.serviceStatus;
      }
    }
}
</script>


<template>
    <section id="filter" class="my-3">
        <div class="container">
            <div class="row g-2">

                <!-- Prezzo  -->
                <div class="col-12 col-sm-4 col-lg-2">
                    <input v-model="price" type="number" min="1" class="form-control" id="price" placeholder="Price"
                        name="price">
                </div>

                <!-- Stanze  -->
                <div class="col-12 col-sm-4 col-lg-2">
                    <input v-model="rooms" type="number" min="1" class="form-control" id="rooms" placeholder="rooms"
                        name="rooms">
                </div>

                <!-- Bagni  -->
                <div class="col-12 col-sm-4 col-lg-2">
                    <input v-model="bathrooms" type="number" min="1" class="form-control" id="bathrooms"
                        placeholder="bathrooms" name="bathrooms">
                </div>

                <!-- Servizi  -->
                <div class="col-12 col-lg-6 my-3 services d-flex justify-content-between align-items-center">
                    <div v-for="service in services" class="icon-service">
                        <span class="me-2">
                            <input v-model="checkedServices" class="form-check-input" :id="service.name" :value="service.name" type="checkbox" :name="service.name">
                            <label class="form-check-label ms-2" :for="service.name"> <span class="d-none d-lg-inline">{{ service.name }} </span> <i
                                    :class="service.icon" class="ms-1"></i></label>
                        </span>
                    </div>
                </div>

                <!-- Range kms  -->
                <div class="col-12 col-lg-10 text-center my-2">
                    <label for="km_range" class="form-label w-100">Kms Range: {{ range }}km</label>
                    <input v-model="range" type="range" step="1" min="0" max="100" class="form-range" id="km_range"
                        name="km_range">
                </div>

                <!-- Bottoni filtro e servizi Aggiuntivi  -->
                <div class="col-12 col-lg-2 justify-content-center mb-3 d-flex align-items-center">
                    <form action="" class="me-2">
                        <button class="btn btn-success">Filter</button>
                    </form>
                    <button @click="toggleStatus" class="btn btn-secondary">
                        More Services
                    </button>

                </div>

                <!-- Servizi Aggiuntivi  -->
                <div class="more-services col-12 d-flex justify-content-between my-1">
                        <div v-if="serviceStatus" v-for="service in others" class="icon-service">
                            <span class="me-2">
                                <input v-model="checkedServices" class="form-check-input" :id="service.name" :value="service.name" type="checkbox" :name="service.name">
                                <label class="form-check-label ms-2" :for="service.name"> <span class="d-none d-lg-inline">{{ service.name }}</span> <i :class="service.icon" class="ms-1"></i></label>
                            </span>
                        </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
#filter {
    min-height: 80px;
}
</style>