<template>
    <div>
        <div class="page-title">
            <h3>Вакансии</h3>
        </div>
        <Toolbar></Toolbar>
        <div style="overflow-y:scroll; overflow-x:hidden; height: 500px">
            <Table  v-bind:vacancies="vacancies"></Table>
        </div>
    </div>
</template>

<script>
    import Toolbar from "@/components/app/hr/vacancies/Toolbar";
    import Table from "@/components/app/hr/vacancies/Table";
    import messages from "@/utils/messages";
    import requests from "@/utils/requests";

    export default {
        name: "Vacancies",
        data: () => ({
            vacancies: null
        }),
        components: {
            Toolbar, Table
        },
        async mounted() {
            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message])
            }
            const response = await requests.request('/api/vacancy/get');
            this.vacancies = response.vacancies;
            for(var i = 0;i < this.vacancies.length; i++){
                this.vacancies[i].isHide = await this.checkNewVacancies(this.vacancies[i]._id)
                this.vacancies[i].col = await this.addColResponse(this.vacancies[i]._id)
            }
        },
        methods: {
            async filterTable(staff) {
                this.staff = staff;
            },
            async checkNewVacancies(id) {
                const formData = {
                    _id: id
                }
                try {
                    const response = await requests.request('/api/vacancyResp/checkviewbyvacancy', 'POST', formData)
                    return response.col > 0;
                } catch (e) {
                    console.log(e.message)
                }
            },
            async addColResponse(id) {
                const formData = {
                    _id: id
                }
                try {
                    const response = await requests.request('/api/vacancyResp/checkviewbyvacancy', 'POST', formData)
                    return response.col;
                } catch (e) {
                    console.log(e.message)
                }
            }
        }
    }
</script>

<style scoped>

</style>