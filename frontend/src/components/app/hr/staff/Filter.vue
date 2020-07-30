<template>
    <div class="container">
        <form @submit.prevent="submitHandler" @reset.prevent="resetHandler">
            <div class="row">
                <div class="col s6 m6 l6">
                    <div class="input-field">
                        <input
                                id="fullNameRus"
                                type="text"
                                v-model.trim="fullNameRus"
                        >
                        <label for="fullNameRus">ФИО</label>
                    </div>
                    <div class="input-field">
                        <input
                                id="position"
                                type="text"
                                v-model.trim="position"
                        >
                        <label for="position">Должность</label>
                    </div>
                </div>
                <div class="col s6 m6 l6">
                    <div class="input-field">
                        <input
                                id="internalPosition"
                                type="text"
                                v-model.trim="internalPosition"
                        >
                        <label for="internalPosition">Внутренняя должность</label>
                    </div>
                    <div class="input-field">
                        <input
                                id="email"
                                type="text"
                                v-model.trim="email"
                        >
                        <label for="email">Почта</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s2 m2 offset-s8 offset-m8">
                    <button class="btn waves-effect waves-light orange darken-2" type="submit">
                        Поиск
                        <i class="material-icons right">search</i>
                    </button>
                </div>
                <div class="col s2 m2">
                    <button class="btn waves-effect waves-light orange darken-2" type="reset">
                        Сброс
                        <i class="material-icons right">refresh</i>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import requests from "@/utils/requests";

    export default {
        name: "Filter",
        data: () => ({
            fullNameRus: null,
            position: null,
            internalPosition: null,
            email: null
        }),
        methods: {
            async submitHandler() {
                const formData = {
                    fullNameRus: this.fullNameRus,
                    position: this.position,
                    internalPosition: this.internalPosition,
                    email: this.email
                };
                try {
                    const response = await requests.request('/api/staff/filter', 'POST', formData);
                    this.$emit('filter', response.staff);
                    this.$message(response.message);
                } catch (e) {
                    console.log(e.message)
                }
            },
            async resetHandler() {
                this.fullNameRus = null
                this.position = null
                this.internalPosition = null
                this.email = null
            }
        }
    }
</script>

<style scoped>

</style>