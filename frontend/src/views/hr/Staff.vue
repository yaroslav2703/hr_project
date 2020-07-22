<template>
    <div>
        <div class="page-title">
            <h3>Сотрудники</h3>
        </div>
        <Toolbar></Toolbar>
        <FormFilter @filter="filterTable"/>
        <div class="divider"></div>
        <div style="overflow-y:scroll; overflow-x:hidden; height: 500px">
            <Table  v-bind:staff="staff"></Table>
        </div>
    </div>
</template>

<script>
    import Toolbar from "@/components/app/hr/staff/Toolbar";
    import FormFilter from "@/components/app/hr/staff/Filter";
    import Table from "@/components/app/hr/staff/Table";
    import messages from "@/utils/messages";
    import requests from "@/utils/requests";

    export default {
        name: "Staff",
        data: () => ({
            staff: null
        }),
        components: {
            Toolbar, FormFilter, Table
        },
        async mounted() {
            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message])
            }
            const response = await requests.request('/api/staff/get');
            this.staff = response.staff;
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