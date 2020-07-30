<template>
    <div>
        <div class="page-title">
            <h3>Новая вакансия</h3>
        </div>
        <div class="container" style="width: 100%">
            <form @submit.prevent="submitHandler">
                <div class="row">
                    <div class="col s8 m8 l8 offset-s2 offset-m2 offset-l2">
                        <div class="input-field ">
                            <input
                                    id="title"
                                    type="text"
                                    class="validate"
                                    v-model.trim="title"
                                   >
                            <label for="title">Название</label>
                        </div>
                        <div class="input-field ">

                            <select v-model="type" id="type">
                                <option value="" disabled selected>Выберите тип вакансии</option>
                                <option value="Открытая">Открытая</option>
                                <option value="Срочная">Срочная</option>
                                <option value="Закрытая">Закрытая</option>
                                <option value="Текущая">Текущая</option>
                                <option value="Резервная">Резервная</option>
                            </select>
                            <label>Тип</label>

                        </div>

                        <div class="input-field ">
                            <select v-model="company" id="company">
                                <option value="" disabled selected>Выберите компанию</option>
                                <option value="ООО 'Завод Теплосила'">ООО "Завод Теплосила"</option>
                                <option value="ООО 'ПК Теплосила'"> ООО "ПК Теплосила"</option>
                                <option value="ООО 'ТеплоЭнергоСила'">ООО "ТеплоЭнергоСила"</option>
                            </select>
                            <label>Компания</label>
                        </div>

                        <div class="input-field ">
                            <input
                                    id="department"
                                    type="text"
                                    class="validate"
                                    v-model.trim="department"
                            >
                            <label for="department">Отдел</label>
                        </div>
                        <div class="input-field ">
                            <textarea
                                    id="searchReason"
                                    class="materialize-textarea validate"
                                    v-model.trim="searchReason"
                            ></textarea>
                            <label for="searchReason">Причина поиска</label>
                        </div>


                        <div class="input-field ">
                            <input
                                    id="subordination"
                                    type="text"
                                    class="validate"
                                    v-model.trim="subordination"
                            >
                            <label for="subordination">Подчинение</label>
                        </div>
                        <div class="input-field ">
                            <textarea
                                    id="responsibility"
                                    class="materialize-textarea validate"
                                    v-model.trim="responsibility"
                            ></textarea>
                            <label for="responsibility">Обязанности</label>
                        </div>
                         <div class="input-field">
                            <input
                                    id="exitToWork"
                                    type="text"
                                    class="datepicker validate"
                                    v-model.lazy="exitToWork"
                            >
                            <label for="exitToWork">Выход на работу</label>
                        </div>

                        <div class="input-field ">

                            <select v-model="highEducation" id="highEducation">
                                <option value="" disabled selected>Высшее образование</option>
                                <option value="Обязательное">Обязательное</option>
                                <option value="Желательное">Желательное</option>
                                <option value="Не важно">Не важно</option>
                            </select>
                            <label>Высшее образование</label>

                        </div>
                        <div class="input-field ">
                            <textarea
                                    id="requiredSkill"
                                    class="materialize-textarea validate"
                                    v-model.trim="requiredSkill"
                            ></textarea>
                            <label for="requiredSkill">Необходимые навыки работы</label>
                        </div>


                        <div class="input-field ">
                            <input
                                    id="wageProbation"
                                    type="text"
                                    class="validate"
                                    v-model.trim="wageProbation"
                            >
                            <label for="wageProbation">ЗП на время испытательного срока</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="wage"
                                    type="text"
                                    class="validate"
                                    v-model.trim="wage"
                            >
                            <label for="wage">Зарплата</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="wageKPI"
                                    type="text"
                                    class="validate"
                                    v-model.trim="wageKPI"
                            >
                            <label for="wageKPI">ЗП KPI</label>
                        </div>
                        <div class="input-field ">
                            <textarea
                                    id="wageAdditional"
                                    class="materialize-textarea validate"
                                    v-model.trim="wageAdditional"
                            ></textarea>
                            <label for="wageAdditional">Дополнительные сведения о ЗП</label>
                        </div>
                        <div class="input-field ">
                            <textarea
                                    id="workingConditions"
                                    class="materialize-textarea validate"
                                    v-model.trim="workingConditions"
                            ></textarea>
                            <label for="workingConditions">Условия работы</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s3 m3 l3 offset-m4 offset-s4 offset-l4">
                        <button class="btn waves-effect waves-light blue-grey darken-5" type="submit">
                            Опубликовать
                            <i class="material-icons right">save</i>
                        </button>
                    </div>
                    <div class="col s3 m3 l3">
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
            var elemDate = document.querySelectorAll('.datepicker');
            window.M.Datepicker.init(elemDate, {
                format: 'dd.mm.yyyy',
                i18n: {
                    months: [ 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'декабря' ],
                    monthsShort: [ 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек' ],
                    weekdays: [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ],
                    weekdaysShort: [ 'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб' ],
                    weekdaysAbbrev: ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'],
                    today: 'Сегодня',
                    clear: 'Удалить',
                    close: 'Закрыть',
                    firstDay: 1,
                }
            });
            var elemSelect = document.querySelectorAll('select');
            window.M.FormSelect.init(elemSelect);
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