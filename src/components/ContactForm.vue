<script>

import axios from 'axios';


export default {
    name: 'ContactForm',
    data() {
        return {
            apiUrl: 'http://localhost:8000',
            name: '',
            email: '',
            message: '',
            success: false,
            sending: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {

            this.success = false;
            this.sending = true;
            this.errors = {};

            const payload = {
                name: this.name,
                email: this.email,
                message: this.message,
            }

            axios.post(`${this.apiUrl}/api/contacts`, payload)
                .then(response => {

                    if (response.data.success) {
                        this.name = '';
                        this.email = '';
                        this.message = '';
                        this.success = true;
                    } else {
                        this.errors = response.data.errors;
                        console.log(this.errors);
                    }

                    this.sending = false;

                }).catch(error => {
                    this.sending = false;
                });

        }
    }
}
</script>

<template>
    <div class="container">
        <div v-if="success" class="alert alert-success" role="alert">
            Grazie di avermi contattato, ti risponderò entro 48 ore lavorative!
        </div>
        <form @submit.prevent="sendForm()">
            <div class="mb-3">
                <label for="email" class="form-label">La tua email</label>
                <input type="email" class="form-control" :class="{ 'is-invalid': errors.email }" id="email" v-model="email">
                <div class="invalid-feedback" v-for="error in errors.email">
                    {{ error }}
                </div>
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Il tuo nome</label>
                <input type="text" class="form-control" :class="{ 'is-invalid': errors.name }" id="name" v-model="name">
                <div class="invalid-feedback" v-for="error in errors.name">
                    {{ error }}
                </div>
            </div>
            <div class="mb-3">
                <label for="message">Il tuo messaggio</label>
                <textarea class="form-control" :class="{ 'is-invalid': errors.message }" id="message"
                    v-model="message"></textarea>
                <div class="invalid-feedback" v-for="error in errors.message">
                    {{ error }}
                </div>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="sending">
                {{ sending ? 'Invio in corso...' : 'Invia messaggio' }}
            </button>
        </form>
    </div>
</template>