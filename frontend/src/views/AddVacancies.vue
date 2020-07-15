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
                            <label for="title">title</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="type"
                                    type="text"
                                    v-model.trim="type"
                            >
                            <label for="type">type</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="company"
                                    type="text"
                                    v-model.trim="company"
                            >
                            <label for="company">company</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="department"
                                    type="text"
                                    v-model.trim="department"
                            >
                            <label for="department">department</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="searchReason"
                                    type="text"
                                    v-model.trim="searchReason"
                            >
                            <label for="searchReason">searchReason</label>
                        </div>

                    </div>
                    <div class="col s4 m4 l4">

                        <div class="input-field ">
                            <input
                                    id="subordination"
                                    type="text"
                                    v-model.trim="subordination"
                            >
                            <label for="subordination">subordination</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="responsibility"
                                    type="text"
                                    v-model.trim="responsibility"
                            >
                            <label for="responsibility">responsibility</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="exitToWork"
                                    type="text"
                                    v-model.trim="exitToWork"
                            >
                            <label for="exitToWork">exitToWork</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="highEducation"
                                    type="text"
                                    v-model.trim="highEducation"
                            >
                            <label for="highEducation">highEducation</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="requiredSkill"
                                    type="text"
                                    v-model.trim="requiredSkill"
                            >
                            <label for="requiredSkill">requiredSkill</label>
                        </div>

                    </div>
                    <div class="col s4 m4 l4">

                        <div class="input-field ">
                            <input
                                    id="wageProbation"
                                    type="text"
                                    v-model.trim="wageProbation"
                            >
                            <label for="wageProbation">wageProbation</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="wage"
                                    type="text"
                                    v-model.trim="wage"
                            >
                            <label for="wage">wage</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="wageKPI"
                                    type="text"
                                    v-model.trim="wageKPI"
                            >
                            <label for="wageKPI">wageKPI</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="wageAdditional"
                                    type="text"
                                    v-model.trim="wageAdditional"
                            >
                            <label for="wageAdditional">wageAdditional</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="workingConditions"
                                    type="text"
                                    v-model.trim="workingConditions"
                            >
                            <label for="workingConditions">workingConditions</label>
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
    import requests from "../utils/requests";

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
                try {
                    const responce = await requests.request('http://localhost:5000/api/vacancy/add', 'POST', formData);
                    this.$message(responce.message);
                    if (responce.message === 'Вакансия добавлена') {
                        await this.$router.push('vacancies')
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