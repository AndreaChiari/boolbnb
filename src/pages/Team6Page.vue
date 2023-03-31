<template>
    <main>
        <div class="container">
            <div class="cards d-flex justify-content-center flex-wrap py-5">
                <div class="card rounded-5" style="width: 18rem;">
                    <img src="public/img/ale.jpeg" alt="" class="rounded-5">
                    <div class="card-body">
                        <h5 class=" text-center">Alessandro <span>Villani</span></h5>
                        <p class="card-text"></p>
                    </div>
                </div>
                <div class="card rounded-5" style="width: 18rem;">
                    <img src="public/img/andrea.jpeg" alt="" class="rounded-5">
                    <div class="card-body">
                        <h5 class=" text-center">Andrea <span>Chiari</span></h5>
                        <p class="card-text"></p>
                    </div>
                </div>
                <div class="card rounded-5" style="width: 18rem;">
                    <img src="public/img/ant.jpeg" alt="" class="rounded-5">
                    <div class="card-body">
                        <h5 class=" text-center">Antonio <span>Novelli</span></h5>
                        <p class="card-text"></p>
                    </div>
                </div>
                <div class="card rounded-5" style="width: 18rem;">
                    <img src="public/img/rob.jpeg" alt="" class="rounded-5">
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
main {
    min-height: calc(100vh - 150px);

    .card {
        margin: 20px 18px;
        box-shadow: 0 0 30px black;
        filter: grayscale(1);
        transform: scale(1);
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
            text-transform: uppercase;
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
</style>
