<script>
import { citiesData } from '../data';
export default {
    name: 'AppJumbotron',
    data() {
        return {
            citiesData,
            currentIndex: 0,
            intervalId: null,
            timeoutId: null,
            direction: 'next'
        }
    },
    computed: {
        currentCity() {
            return citiesData[this.currentIndex].name;
        },
    },
    methods: {
        getImageUrl(image) {
            return new URL(`../assets/img/${image}`, import.meta.url).href;
        },
        goTo(direction) {
            if (direction === 'next') {
                this.currentIndex < this.citiesData.length - 1 ? this.currentIndex++ : this.currentIndex = 0;
                this.direction = 'next';
            }
            if (direction === 'prev') {
                this.currentIndex > 0 ? this.currentIndex-- : this.currentIndex = (this.citiesData.length - 1);
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
            <div class="thumb-container h-100" v-for="(city, i) in citiesData" :key="city.id"
                @mouseenter="jumbotronMouseover()" @mouseleave="restartAutoplay()" v-show="currentIndex === i">
                <i class="fa-solid fa-chevron-left" @click="goTo('prev')"></i>
                <img :src="getImageUrl(city.thumb)" :alt="city.name">
                <div class="info text-center d-flex flex-column justify-content-center"
                    @click="$emit('searchCity', currentCity)">
                    <h2>{{ city.name }}</h2>
                    <h4>{{ city.region }}</h4>
                </div>
                <i class="fa-solid fa-chevron-right" @click="goTo('next')"></i>
            </div>
        </transition-group>
    </section>
</template>

<style scoped lang="scss">
.jumbotron {
    height: 100px;
    position: relative;

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
                font-size: 30px;
            }

            h4 {
                font-size: 18px;
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

.next-enter-active,
.next-leave-active {
    transition: all 1.5s;
}

.next-enter-from {

    transform: translateX(-100%);
}

.next-leave-from {
    transform: translateX(0%);
}

.next-enter-to {
    transform: translateX(0%);
}

.next-leave-to {
    transform: translateX(100%);
}

.prev-enter-active,
.prev-leave-active {
    transition: all 2s;
}

.prev-enter-from {

    transform: translateX(100%);
}


.prev-enter-to {
    transform: translateX(0%);
}

.prev-leave-from {
    transform: translateX(0%);
}

.prev-leave-to {
    transform: translateX(-100%);
}


//Media Queries

@media screen and (min-width: 577px) {
    .jumbotron {
        height: 200px;

        .fa-solid {
            font-size: 2em;
        }
    }
}

@media screen and (min-width: 1201px) {
    .jumbotron {
        height: 420px;

        .fa-solid {
            font-size: 4em;
        }

        .thumb-container .info h2 {
            font-size: 65px;
        }

        .thumb-container .info h4 {
            font-size: 32px;
        }
    }
}
</style>