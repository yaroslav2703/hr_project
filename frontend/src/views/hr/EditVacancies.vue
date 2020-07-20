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
                        <div class="input-field ">
                            <input
                                    id="exitToWork"
                                    type="text"
                                    v-model.trim="exitToWork"
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
                            Изменить
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