<script>
import AppAlert from './AppAlert.vue';
import GeneralButton from './GeneralButton.vue';

export default {
    name: "Contact Modal",
    data() {
        return {
            message: {
                apartment_id: this.id,
                email: '',
                object: '',
                content: ''
            },
            hasErrors: false,
            errors: ''
        }
    },
    props: { contact: String, id: String },
    components: { GeneralButton, AppAlert },
    methods: {
        validateForm() {
            this.hasErrors = false;
            this.errors = '';
            if (!this.message.email) {
                this.errors += "<li>L'email è obbligatoria</li>";
                this.hasErrors = true;
            }
            if (!this.message.object) {
                this.errors += "<li>L'oggetto è obbligatorio</li>";
                this.hasErrors = true;
            }
            if (!this.message.content) {
                this.errors += "<li>Il messaggio è obbligatorio</li>";
                this.hasErrors = true;
            }

            if (this.hasErrors) {
                return
            } else {
                this.$emit('send-form', this.message)
            }

        }
    },
    emits: ['send-form', 'close-modal'],
}

</script>

<template>
    <form class="modal-form overlay d-flex justify-content-center align-items-center" action=""
        @submit.prevent="validateForm">
        <div class="card d-flex flex-column p-5">
            <AppAlert v-if="hasErrors" type="danger" :text="errors" @close-alert="hasErrors = false" />
            <button class="close-btn align-self-end" type="button" @click="$emit('close-modal')"><i
                    class="fa-solid fa-xmark fa-2x"></i></button>
            <h4 class="text-center mb-5">Contatta il proprietario di {{ contact }}</h4>
            <div class="row justify-content-center p-4">
                <label for="email" class="col-5">Email:</label>
                <input class="col-7 mb-3" type="email" name="email" v-model="message.email">
                <label for="object" class="col-5">Oggetto:</label>
                <input class="col-7 mb-3" type="text" name="object" v-model="message.object">
                <label class="col-5" for="content">Messaggio:</label>
                <textarea class="col-7 mb-5" name="content" id="content" cols="30" rows="10"
                    v-model="message.content"></textarea>
                <div class="col-12 d-flex justify-content-center justify-content-sm-end">
                    <GeneralButton buttonText="Invia" />
                </div>
            </div>
        </div>

    </form>
</template>

<style scoped lang="scss">
@use '../assets/styles/partials/variables' as *;

.modal-form.overlay {

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    z-index: 3;
    color: black;

    .close-btn {
        border: none;
        background-color: transparent;
        color: rgba($color: #000000, $alpha: 0.5);
        transition: all 0.5s;

        &:hover {
            color: $pink-3;
        }
    }
}
</style>