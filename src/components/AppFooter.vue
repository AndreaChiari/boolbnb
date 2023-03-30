<script>
import { RouterLink } from 'vue-router';

export default {
    name: "AppHeader",
    components: { RouterLink },
    data: () => ({}),
    methods: {

    },
    mounted() {

    }
};




</script>
<template>
    <footer>
        <div class="sub-footer">
            <div class="sub-left d-none d-md-inline">
                <ul>
                    <li>© 2023 Airbnb, Inc.</li>
                    <li>Privacy</li>
                    <li>Termini</li>
                    <li>Mappa del sito</li>
                    <li>Dettagli dell'azienda</li>
                    <!-- TODO rotta con i nostri nomi -->
                    <li>Destinazioni</li>
                </ul>
            </div>
            <div class="sub-right">
                <div class="icons">
                    <div class="icon">
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    height: 70px;
    background-color: #f2f2f2;
}

.sub-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 30px;
}

.sub-left {
    width: 70%;
    display: flex;
    align-items: center;
}

.sub-right {
    width: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

ul {
    list-style: none;
    margin: 0;
    display: flex;
    align-items: center;
}

li {
    margin-right: 15px;
    font-size: 10px;
    color: #484848;
    font-weight: 400;
    line-height: 1.5;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #C13584;
        cursor: pointer;
    }
}

.icon {
    display: flex;
    column-gap: 25px;
}

.icon i {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease-in-out;
    margin: 5px auto;

}

.icon i:hover {
    background-color: #fff;
    cursor: pointer;
}

.fa-instagram {
    color: #C13584;
}

.fa-twitter {
    color: #1DA1F2;
}

.fa-linkedin {
    color: #0077B5;
}

// MQ mobile
@media (max-width: 767px) {
    .sub-footer {
        flex-direction: column;
    }

    .sub-left {
        width: 100%;
        margin-bottom: 20px;
        text-align: center;
    }

    .sub-right {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    ul {
        display: none;
    }

    .icon {
        column-gap: 15px;
    }
}
</style>
