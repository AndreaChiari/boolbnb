<template>
    <main>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div class="container">
            <div class="cards d-flex justify-content-center flex-wrap py-5">
                <div class="card rounded-5" style="width: 18rem;">
                    <a href="https://www.linkedin.com/in/alessandro-villani/"></a>
                    <img src="public/img/ale.jpeg" alt="" class="rounded-5">
                    <div class="card-body">
                        <h5 class=" text-center">Alessandro <span>Villani</span></h5>
                        <p class="card-text"></p>
                    </div>
                </div>
                <div class="card rounded-5" style="width: 18rem;">
                    <a href="https://www.linkedin.com/in/andrea-chiari-55b9bb24a/"></a>
                    <img src="public/img/andrea.jpeg" alt="" class="rounded-5">
                    <div class="card-body">
                        <h5 class=" text-center">Andrea <span>Chiari</span></h5>
                        <p class="card-text"></p>
                    </div>
                </div>
                <div class="card rounded-5" style="width: 18rem;">
                    <img src="public/img/ant.jpeg" alt="" class="rounded-5">
                    <a href="https://www.linkedin.com/in/antonio-novelli-dev/"></a>
                    <div class="card-body">
                        <h5 class=" text-center">Antonio <span>Novelli</span></h5>
                        <p class="card-text"></p>
                    </div>
                </div>
                <div class="card rounded-5" style="width: 18rem;">
                    <a href="https://www.linkedin.com/in/roberto-simonini-370733117/"></a>
                    <img src="public/img/rob.jpg" alt="" class="rounded-5">
                    <div class="card-body">
                        <h5 class=" text-center">Roberto <span>Simonini</span></h5>
                        <p class="card-text"></p>
                    </div>
                </div>
            </div>
        </div>

        <p class="my-5 text-center">
            <router-link to="/" class="btn btn-outline-dark my-5 ">Go back to home</router-link>
        </p>
    </main>
</template>

<style scoped lang="scss">
@use "../assets/styles/partials/variables" as *;

main {
    min-height: calc(100vh - 150px);

    .card {
        margin: 20px 18px;
        box-shadow: 0 0 30px black;
        filter: grayscale(1);
        transform: scale(1);
        transition: transform 0.3s ease-in-out;
        position: relative;

        a {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        &:hover {
            transform: scale(1.1);
            filter: grayscale(0);
            cursor: pointer;
        }


    }

    h5 {
        text-shadow: 0 0 1.3px black;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: 0.1rem;
    }
}




.bg {
    animation: slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #dd1f3f 50%, $secondary-bg 50%);
    bottom: 0;
    left: -50%;
    opacity: .5;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: -1;
}

.bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 4s;
}

.bg3 {
    animation-duration: 5s;
}


@keyframes slide {
    0% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(25%);
    }
}
</style>
