<template>
    <div>
        <div class="page-title">
            <h3>{{title}}</h3>
        </div>
        <div class="container" style="width: 100%">
            <div>{{type}}</div>
            <div>{{company}}</div>
            <div>{{department}}</div>
            <div>{{searchReason}}</div>
            <div>{{subordination}}</div>
            <div>{{responsibility}}</div>
            <div>{{exitToWork}}</div>
            <div>{{highEducation}}</div>
            <div>{{requiredSkill}}</div>
            <div>{{wageProbation}}</div>
            <div>{{wage}}</div>
            <div>{{wageKPI}}</div>
            <div>{{wageAdditional}}</div>
            <div>{{workingConditions}}</div>
        </div>
    </div>
</template>

<script>
    import messages from "@/utils/messages";
    import requests from "@/utils/requests";

    export default {
        name: "AddVacancies",
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
            try {
                const responce = await requests.request('/api/vacancy/get-one', 'POST', formData);
                this.$message(responce.message);
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

    }
</script>

<style scoped>

</style>