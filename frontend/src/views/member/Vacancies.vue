<template>
    <div>
        <div class="page-title">
            <h3>Вакансии</h3>
        </div>
        <div class="preloader-wrapper big active preloader-page" v-if="showPreloader">
            <Preloader/>
        </div>
        <div v-else>
            <div style="overflow-y:scroll; overflow-x:hidden; height: 500px">
                <Table  v-bind:vacancies="vacancies"></Table>
            </div>
        </div>
    </div>
</template>

<script>
    import Table from "@/components/app/member/vacancies/Table";
    import Preloader from "@/components/app/ shared/Preloader";
    import messages from "@/utils/messages";
    import requests from "@/utils/requests";


    export default {
        name: "Vacancies",
        data: () => ({
            vacancies: null,
            showPreloader: true
        }),
        components: {
            Table, Preloader
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
        },
        methods: {
            async filterTable(staff) {
                this.staff = staff;
            }
        }


    }
</script>

<style scoped>

</style>