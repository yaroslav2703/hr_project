<template>
    <div>
        <div class="page-title">
            <h3>Вакансии</h3>
        </div>
        <div class="preloader-wrapper big active preloader-page" v-if="showPreloader">
            <Preloader/>
        </div>
        <div v-else>
            <Toolbar @openFilter="openFilter"/>
            <template v-if="isopen">
                <FormFilter @filter="filterTable"/>
            </template>
            <div style="overflow-y:scroll; overflow-x:hidden; height: 500px">
                <Table  v-bind:vacancies="vacancies"></Table>
            </div>
        </div>
    </div>
</template>

<script>
    import Toolbar from "@/components/app/hr/vacancies/Toolbar";
    import FormFilter from "@/components/app/hr/vacancies/Filter";
    import Table from "@/components/app/hr/vacancies/Table";
    import Preloader from "@/components/app/ shared/Preloader";
    import messages from "@/utils/messages";
    import requests from "@/utils/requests";

    export default {
        name: "Vacancies",
        data: () => ({
            vacancies: null,
            messages: null,
            isopen: false,
            showPreloader: true
        }),
        components: {
            Toolbar, FormFilter, Table, Preloader
        },
        async mounted() {
            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message])
            }
            const response = await requests.request('/api/vacancy/get');
            if (response.message === 'Выбраны все вакансии'){
                this.vacancies = response.vacancies;
                this.showPreloader = false
            }
            for(var i = 0;i < this.vacancies.length; i++){
                this.vacancies[i].isHide = await this.checkNewVacancies(this.vacancies[i]._id)
                const formData = {
                    _id: this.vacancies[i]._id,
                    isHide: this.vacancies[i].isHide
                }
                try {
                    const response = await requests.request('/api/vacancy/updateResponse', 'POST', formData)
                    this.messages = response.message
                } catch (e) {
                    console.log(e.message)
                }

                this.vacancies[i].col = await this.addColResponse(this.vacancies[i]._id)
                const formData2 = {
                    _id: this.vacancies[i]._id,
                    col: this.vacancies[i].col
                }
                try {
                    const response = await requests.request('/api/vacancy/updateResponseCol', 'POST', formData2)
                    this.messages = response.message

                } catch (e) {
                    console.log(e.message)
                }
            }
        },
        methods: {
            async filterTable(vacancies) {
                this.vacancies = vacancies;
            },
            async openFilter(){
                this.isopen = !this.isopen;
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