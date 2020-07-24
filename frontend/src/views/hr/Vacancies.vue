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