<script>
import { citiesData } from '../data';
export default {
    name: 'AppJumbotron',
    data() {
        return {
            currentIndex: 0,
            intervalId: null,
            timeoutId: null,
            direction: 'next'
        }
    },
    props: {
        sponsoredApartments: Array,
    },
    computed: {
        masterApartments() {
            const now = new Date();
            const masterApartments = this.sponsoredApartments.filter(apartment => {
                let isMaster = false;
                for (let i = 0; i < apartment.sponsorships.length && !isMaster; i++) {
                    const endDate = new Date(apartment.sponsorships[i].pivot.end_date);
                    if (endDate.getTime() - now.getTime() > 0 && apartment.sponsorships[i].name === 'Master') {
                        isMaster = true;
                    }
                }
                return isMaster;
            });
            return masterApartments;
        }
    },
    methods: {
        getImageUrl(image) {
            return new URL(`../assets/img/${image}`, import.meta.url).href;
        },
        goTo(direction) {
            if (direction === 'next') {
                this.currentIndex < this.masterApartments.length - 1 ? this.currentIndex++ : this.currentIndex = 0;
                this.direction = 'next';
            }
            if (direction === 'prev') {
                this.currentIndex > 0 ? this.currentIndex-- : this.currentIndex = (this.masterApartments.length - 1);
                this.direction = 'prev';
            }
        },
        autoplay() {
            this.intervalId = setInterval(() => {
                this.goTo('next');
            }, 3000);
        },
        stopAutoplay() {
            clearInterval(this.intervalId);
        },
        restartAutoplay() {
            this.timeoutId = setTimeout(() => {
                this.autoplay();
            }, 3000)
        },
        stopRestartAutoplay() {
            clearTimeout(this.timeoutId);
        },
        jumbotronMouseover() {
            this.stopAutoplay();
            if (this.timeoutId) this.stopRestartAutoplay();
        },
    },
    mounted() {
        this.autoplay();
    },
    emits: ['searchCity']

}
</script>

<template>
    <section class="jumbotron">
        <transition-group :name="direction">
            <div class="thumb-container h-100" v-for="(apartment, i) in masterApartments" :key="apartment.id"
                @mouseenter="jumbotronMouseover()" @mouseleave="restartAutoplay()" v-show="currentIndex === i">
                <i class="fa-solid fa-chevron-left" @click="goTo('prev')"></i>
                <img :src="apartment.thumb" :alt="apartment.name">
                <router-link :to="{ name: 'apartment-detail', params: { id: apartment.id } }"
                    class="info h-100 d-flex flex-column justify-content-between py-3 text-white cs-text-unstyled">
                    <div class="label py-1 px-2 rounded text-center mb-2"><b>SPONSORED</b></div>
                    <div
                        class="info-box h-100 d-flex flex-sm-column justify-content-between align-items-center align-items-sm-start">
                        <div class="info-top d-flex flex-column">
                            <h2>{{ apartment.name }}</h2>
                            <h6>{{ apartment.address }}</h6>
                        </div>
                        <div class="info-bottom">
                            <h4>€{{ apartment.price }}/notte</h4>
                        </div>
                    </div>

                </router-link>
                <i class="fa-solid fa-chevron-right" @click="goTo('next')"></i>
            </div>
        </transition-group>
    </section>
</template>

<style scoped lang="scss">
.jumbotron {
    height: 100px;
    position: relative;
    overflow-x: hidden;
    padding-top: 100px;

    .thumb-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: white;
        cursor: pointer;

        img {
            max-height: 100%;
            width: 100%;
            object-fit: cover;
        }

        .info {
            position: absolute;
            height: 100%;
            top: 0;
            left: 100px;
            right: 100px;
            z-index: 1;

            h2 {
                font-size: 14px;
            }

            h6 {
                font-size: 8px;
            }

            h4 {
                font-size: 10px;
            }

            .label {
                align-self: center;
                font-size: 10px;
                background-color: rgb(255, 93, 88);
            }
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba($color: #000000, $alpha: 0.3);
        }

        .fa-solid {
            position: absolute;
            z-index: 1;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
            transition: all 0.5s;

            &.fa-chevron-left {
                left: 30px;
            }

            &.fa-chevron-right {
                right: 30px;
            }

            &:hover {
                scale: 1.2;
            }
        }

        &:hover .fa-solid {
            opacity: 1;
        }

    }

}

.prev-enter-active,
.prev-leave-active {
    transition: all 1.5s;
}

.prev-enter-from {

    transform: translateX(-100%);
}

.prev-leave-from {
    transform: translateX(0%);
}

.prev-enter-to {
    transform: translateX(0%);
}

.prev-leave-to {
    transform: translateX(100%);
}

.next-enter-active,
.next-leave-active {
    transition: all 2s;
}

.next-enter-from {

    transform: translateX(100%);
}


.next-enter-to {
    transform: translateX(0%);
}

.next-leave-from {
    transform: translateX(0%);
}

.next-leave-to {
    transform: translateX(-100%);
}


//Media Queries

@media screen and (min-width: 577px) {
    .jumbotron {
        height: 200px;

        .fa-solid {
            font-size: 2em;
        }

        .thumb-container .info .label {
            position: absolute;
            top: 20px;
            right: 0;
            font-size: 12px;
        }

        .thumb-container .info h2 {
            font-size: 28px;
        }

        .thumb-container .info h4 {
            font-size: 20px;
        }

        .thumb-container .info h6 {
            font-size: 16px;
        }
    }
}

@media screen and (min-width: 1201px) {
    .jumbotron {
        height: 420px;

        .fa-solid {
            font-size: 4em;
        }

        .thumb-container .info .label {
            font-size: 24px;
        }

        .thumb-container .info h2 {
            font-size: 65px;
        }

        .thumb-container .info h4 {
            font-size: 36px;
        }

        .thumb-container .info h6 {
            font-size: 32px;
        }
    }
}
</style>