<template>
    <div class="container">
        <form @submit.prevent="submitHandler" @reset.prevent="resetHandler">
            <div class="row">
                <div class="col s6 m6 l6">
                    <div class="input-field">
                        <input
                                id="title"
                                type="text"
                                v-model.trim="title"
                        >
                        <label for="title">Название</label>
                    </div>
                    <div class="input-field">
                        <select v-model.trim="isHide" id="isHide">
                            <option value="null" disabled selected>Выберите наличие новых откликов</option>
                            <option value="true">Есть</option>
                            <option value="false">Нет</option>
                        </select>
                        <label for="isHide">Новые отклики</label>
                    </div>
                </div>
                <div class="col s6 m6 l6">
                    <div class="input-field">
                        <input
                                id="company"
                                type="text"
                                v-model.trim="company"
                        >
                        <label for="company">Компания</label>
                    </div>
                    <div class="input-field">
                        <select v-model.trim="type" id="type">
                            <option value="null" disabled selected>Выберите тип вакансии</option>
                            <option value="Открытая">Открытая</option>
                            <option value="Срочная">Срочная</option>
                            <option value="Закрытая">Закрытая</option>
                            <option value="Текущая">Текущая</option>
                            <option value="Резервная">Резервная</option>
                        </select>
                        <label for="type">Тип</label>
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
            title: null,
            company: null,
            isHide: null,
            type: null

        }),
        mounted() {
            var elemSelect = document.querySelectorAll('select');
            window.M.FormSelect.init(elemSelect);
        },
        methods: {
            async submitHandler() {
                if (this.isHide === 'null'){
                    this.isHide = null
                }
                if (this.type === 'null'){
                    this.type = null
                }
                const formData = {
                    title: this.title,
                    company: this.company,
                    isHide: this.isHide,
                    type: this.type
                };
                try {
                    const response = await requests.request('/api/vacancy/filter', 'POST', formData);
                    this.$emit('filter', response.vacancy);
                    this.$message(response.message);
                } catch (e) {
                    console.log(e.message)
                }
            },
            async resetHandler() {
                this.title = null
                this.company = null
                this.isHide = null
                this.type = null
            }
        }
    }
</script>

<style scoped>

</style>