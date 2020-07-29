<template>
    <form class="card auth-card" @submit.prevent="submitHandler">
        <div class="card-content">
            <span class="card-title">Теплосила</span>
            <div class="input-field">
                <input
                        id="email"
                        type="text"
                        v-model.trim="email"
                        :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                >
                <label for="email">Email</label>
                <small
                        class="helper-text invalid"
                        v-if="$v.email.$dirty && !$v.email.required"
                >Поле Email не должно быть пустым</small>
                <small
                        class="helper-text invalid"
                        v-else-if="$v.email.$dirty && !$v.email.email"
                >Введите корректный Email</small>
            </div>
            <div class="input-field">
                <input
                        id="password"
                        type="password"
                        v-model.trim="password"
                        :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                >
                <label for="password">Пароль</label>
                <small
                        class="helper-text invalid"
                        v-if="$v.password.$dirty && !$v.password.required"
                >Введите пароль</small>
                <small
                        class="helper-text invalid"
                        v-else-if="$v.password.$dirty && !$v.password.minLength"
                >Пароль должен быть {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}}</small>
            </div>
        </div>
        <div class="card-action">
            <div>
                <button
                        class="btn waves-effect waves-light auth-submit blue-grey darken-5"
                        type="submit"
                >
                    Зарегистрировать
                    <i class="material-icons right">send</i>
                </button>
            </div>

            <p class="center">
                <router-link to="/hr">Вернуться назад</router-link>
            </p>
        </div>
    </form>
</template>

<script>
    import {email, minLength, required} from "vuelidate/lib/validators";
    import requests from "../utils/requests";

    export default {
        name: "Register.vue",
        data: () => ({
            email: '',
            password: ''
        }),
        validations: {
            email: {email, required},
            password: {required, minLength: minLength(6)}
        },
        methods: {
            async submitHandler() {
                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return
                }

                const formData = {
                    email: this.email,
                    password: this.password
                };

                try{
                    const responce = await requests.request('/api/auth/register', 'POST', formData);
                    this.$message(responce.message);
                    if (responce.message === 'Пользователь создан') {
                        await this.$router.push('/hr')
                    }

                }catch (e) {
                    console.log(e.message)
                }
            }
        }
    }

</script>

<style scoped>

</style>