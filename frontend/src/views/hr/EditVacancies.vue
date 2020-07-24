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
                                    v-model.trim="title"
                            >
                            <label class="active" for="title">Название</label>
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
                            <input
                                    id="company"
                                    type="text"
                                    v-model.trim="company"
                            >
                            <label class="active" for="company">Компания</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="department"
                                    type="text"
                                    v-model.trim="department"
                            >
                            <label class="active" for="department">Отдел</label>
                        </div>
                        <div class="input-field ">
                            <textarea
                                    id="searchReason"
                                    class="materialize-textarea"
                                    v-model.trim="searchReason"
                            ></textarea>
                            <label class="active" for="searchReason">Причина поиска</label>
                        </div>

                        <div class="input-field ">
                            <input
                                    id="subordination"
                                    type="text"
                                    v-model.trim="subordination"
                            >
                            <label class="active" for="subordination">Подчинение</label>
                        </div>
                        <div class="input-field ">
                            <textarea
                                    id="responsibility"
                                    class="materialize-textarea"
                                    v-model.trim="responsibility"
                            ></textarea>
                            <label class="active" for="responsibility">Обязанности</label>
                        </div>
                        <div class="input-field">
                            <input
                                    id="exitToWork"
                                    type="text"
                                    class="datepicker"
                                    v-model.lazy="exitToWork"
                            >
                            <label class="active" for="exitToWork">Выход на работу</label>
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
                                    class="materialize-textarea"
                                    v-model.trim="requiredSkill"
                            ></textarea>
                            <label class="active" for="requiredSkill">Необходимые навыки работы</label>
                        </div>

                        <div class="input-field ">
                            <input
                                    id="wageProbation"
                                    type="text"
                                    v-model.trim="wageProbation"
                            >
                            <label class="active" for="wageProbation">ЗП на время испытательного срока</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="wage"
                                    type="text"
                                    v-model.trim="wage"
                            >
                            <label class="active" for="wage">Зарплата</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="wageKPI"
                                    type="text"
                                    v-model.trim="wageKPI"
                            >
                            <label class="active" for="wageKPI">ЗП KPI</label>
                        </div>
                        <div class="input-field ">
                            <textarea
                                    id="wageAdditional"
                                    class="materialize-textarea"
                                    v-model.trim="wageAdditional"
                            ></textarea>
                            <label class="active" for="wageAdditional">Дополнительные сведения о ЗП</label>
                        </div>
                        <div class="input-field ">
                            <textarea
                                    id="workingConditions"
                                    class="materialize-textarea"
                                    v-model.trim="workingConditions"
                            ></textarea>
                            <label class="active" for="workingConditions">Условия работы</label>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col s3 m3 l3 offset-s4 offset-m4 offset-l4">
                        <button class="btn waves-effect waves-light blue-grey darken-5" type="submit">
                            Изменить
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
        name: "EditVacancies",
        data : () => ({
            vacancy: null,
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
        async created() {
            const formData = {
                _id: this.$route.params.id
            };
            console.log(formData)
            try {
                const responce = await requests.request('/api/vacancy/get-one', 'POST', formData);
                this.$message(responce.message);
                console.log(responce)
                if (responce.message === 'Вакансия выбрана') {
                    this.vacancy = responce.vacancy;
                    this.title = this.vacancy.title;
                    this.type= this.vacancy.type;
                    this.company = this.vacancy.company;
                    this.department = this.vacancy.department;
                    this.searchReason = this.vacancy.searchReason;
                    this.subordination = this.vacancy.subordination;
                    this.responsibility = this.vacancy.responsibility;
                    this.exitToWork = this.vacancy.exitToWork;
                    this.highEducation = this.vacancy.highEducation;
                    this.requiredSkill = this.vacancy.requiredSkill;
                    this.wageProbation = this.vacancy.wageProbation;
                    this.wage = this.vacancy.wage;
                    this.wageKPI = this.vacancy.wageKPI;
                    this.wageAdditional = this.vacancy.wageAdditional;
                    this.workingConditions = this.vacancy.workingConditions;
                }
            } catch (e) {
                console.log(e.message)
            }
        },
        methods: {
            async submitHandler() {
                const formData = {
                    _id: this.vacancy._id,
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
                    if (formData[key] === '') {
                        formData[key] = 'Не указано'
                    }
                }

                try {
                    const response = await requests.request('/api/vacancy/update', 'PUT', formData);
                    this.$message(response.message);
                    if (response.message === 'Вакансия обновлена!') {
                        await this.$router.push('/login?message=vacancies')
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