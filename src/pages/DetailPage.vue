
<script>

</script>

<template>
    <div class="container d-flex flex-column">
        <div class="container-detail mx-auto d-flex">
            <div class="container-thumb-detail">
                <img class="img-fluid"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/ebee05c1-0c41-4850-a985-49748f8f6d55.jpeg?im_w=1440"
                    alt="">
                <p>Casa sull'albero di frasino, 10mq</p>
            </div>
            <div class="container-info-detail">
                <p></p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    .container-detail {
        margin-top: 200px;
        height: 400px;
        width: 900px;
        border: 1px solid #FFD6D7;
        border-radius: 10px;


        .container-thumb-detail {
            flex-basis: 40%;
            border-radius: 10px 0 0 10px;
            position: relative;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px 0 0 10px;
                object-position: center;

            }

            p {
                position: absolute;
                bottom: 5px;
                left: 5px;
                color: white;
                font-weight: 700;
                font-size: larger;
                width: 280px;
            }
        }

        .container-info-detail {
            flex-basis: 60%;
            border-radius: 0 10px 10px 0;
            background-image: url(../assets/img/boolbnb.png);
            background-color: #FFD6D7;
            background-position: 50% 25%;
            opacity: 20%;


        }
    }

}
</style>