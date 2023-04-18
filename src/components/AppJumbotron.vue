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
                    <div class="label py-1 px-2 rounded text-center mb-2">
                        <img src="data:image/png;base64,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">
                    </div>
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
@use '../assets/styles/partials/variables' as *;

.jumbotron {
    height: 100px;
    position: relative;
    overflow-x: hidden;
    padding-top: 100px;
    box-shadow: 5px 5px 50px rgba(0, 0, 0, 2.25);

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
            text-shadow: 2px 2px 3px rgb(255, 90, 95);


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

.info-box {
    text-shadow: 12.25px 12.25px 22.5px black;
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