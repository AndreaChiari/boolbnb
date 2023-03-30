<script>
export default {

}

</script>

<template>

    <div class="container">
        <div class="apartment-card">
            <img class="rounded" src="../../assets/img/test_casa.jpg" alt="">
            <div class="card-content">
                <div class="mt-2 d-flex justify-content-between">
                    <h5 class="title">
                        Delft, Paesi Bassi
                    </h5>
                    <p class="rating">
                        <i class="fa-solid fa-star me-1"></i>4.86
                    </p>
                </div>
                    <p class="price">
                        <strong>650 €</strong> notte
                    </p>
            </div>  
        </div>
    </div>

</template>


<style scoped lang="scss">
.apartment-card {
    width: 300px;
    cursor: pointer;

    img {
            height: 275px;
            width: 300px;
        }
}


</style>