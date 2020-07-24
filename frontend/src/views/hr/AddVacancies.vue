<template>
    <div>
        <div class="page-title">
            <h3>Новая вакансия</h3>
        </div>
        <div class="container" style="width: 100%">
            <form @submit.prevent="submitHandler">
                <div class="row">
                    <div class="col s4 m4 l4">
                        <div class="input-field ">
                            <input
                                    id="title"
                                    type="text"
                                    v-model.trim="title"
                                   >
                            <label for="title">Название</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="type"
                                    type="text"
                                    v-model.trim="type"
                            >
                            <label for="type">Тип</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="company"
                                    type="text"
                                    v-model.trim="company"
                            >
                            <label for="company">Компания</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="department"
                                    type="text"
                                    v-model.trim="department"
                            >
                            <label for="department">Отдел</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="searchReason"
                                    type="text"
                                    v-model.trim="searchReason"
                            >
                            <label for="searchReason">Причина поиска</label>
                        </div>

                    </div>
                    <div class="col s4 m4 l4">

                        <div class="input-field ">
                            <input
                                    id="subordination"
                                    type="text"
                                    v-model.trim="subordination"
                            >
                            <label for="subordination">Подчинение</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="responsibility"
                                    type="text"
                                    v-model.trim="responsibility"
                            >
                            <label for="responsibility">Обязанности</label>
                        </div>
                         <div class="input-field">
                            <input
                                    id="exitToWork"
                                    type="text"
                                    class="datepicker"
                                    v-model.lazy="exitToWork"
                            >
                            <label for="exitToWork">Выход на работу</label>
                        </div>

                        <div class="input-field ">
                            <input
                                    id="highEducation"
                                    type="text"
                                    v-model.trim="highEducation"
                            >
                            <label for="highEducation">Высшее образование</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="requiredSkill"
                                    type="text"
                                    v-model.trim="requiredSkill"
                            >
                            <label for="requiredSkill">Необходимые навыки работы</label>
                        </div>

                    </div>
                    <div class="col s4 m4 l4">

                        <div class="input-field ">
                            <input
                                    id="wageProbation"
                                    type="text"
                                    v-model.trim="wageProbation"
                            >
                            <label for="wageProbation">ЗП на время испытательного срока</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="wage"
                                    type="text"
                                    v-model.trim="wage"
                            >
                            <label for="wage">Зарплата</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="wageKPI"
                                    type="text"
                                    v-model.trim="wageKPI"
                            >
                            <label for="wageKPI">ЗП KPI</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="wageAdditional"
                                    type="text"
                                    v-model.trim="wageAdditional"
                            >
                            <label for="wageAdditional">Дополнительные сведения о ЗП</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="workingConditions"
                                    type="text"
                                    v-model.trim="workingConditions"
                            >
                            <label for="workingConditions">Условия работы</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s4 m4 l4 offset-s4 offset-m4 offset-l4">
                        <button class="btn waves-effect waves-light blue-grey darken-5" type="submit">
                            Опубликовать
                            <i class="material-icons right">save</i>
                        </button>
                    </div>
                    <div class="col s4 m4 l4">
                        <button class="btn waves-effect waves-light blue-grey darken-5" type="reset">
                            Сбросить
                            <i class="material-icons right">refresh</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import messages from "@/utils/messages";
    import requests from "@/utils/requests";

    export default {
        name: "AddVacancies",
        data : () => ({
            title: '',
            type: '',
            company: '',
            department: '',
            searchReason: '',
            subordination: '',
            responsibility: '',
            exitToWork: '',
            highEducation: '',
            requiredSkill: '',
            wageProbation: '',
            wage: '',
            wageKPI: '',
            wageAdditional: '',
            workingConditions: ''
        }),
        mounted() {
            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message])
            }
            var elems = document.querySelectorAll('.datepicker');
            window.M.Datepicker.init(elems, {
                format: 'dd.mm.yyyy',
                i18n: {
                    months: [ 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'декабря' ],
                    monthsShort: [ 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек' ],
                    weekdays: [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ],
                    weekdaysShort: [ 'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб' ],
                    weekdaysAbbrev: ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'],
                    today: 'сегодня',
                    clear: 'удалить',
                    close: 'закрыть',
                    firstDay: 1,
                }
            });
        },
        methods: {
            async submitHandler() {
                const formData = {
                    title: this.title,
                    type: this.type,
                    company: this.company,
                    department: this.department,
                    searchReason: this.searchReason,
                    subordination: this.subordination,
                    responsibility: this.responsibility,
                    exitToWork: this.exitToWork,
                    highEducation: this.highEducation,
                    requiredSkill: this.requiredSkill,
                    wageProbation: this.wageProbation,
                    wage: this.wage,
                    wageKPI: this.wageKPI,
                    wageAdditional: this.wageAdditional,
                    workingConditions: this.workingConditions
                };

                for (let key in formData) {
                    if (formData[key] == '') {
                        formData[key] = 'Не указано'
                    }
                }

                try {
                    const response = await requests.request('/api/vacancy/add', 'POST', formData);
                    this.$message(response.message);
                    if (response.message === 'Вакансия добавлена') {
                        await this.$router.push('/hr/vacancies')
                    }
                } catch (e) {
                    console.log(e.message)
                }
            }
        }
    }
</script>

<style scoped>

</style>