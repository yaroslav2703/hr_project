<template>
    <div>
        <div class="page-title">
            <h3>Сотрудники</h3>
        </div>
        <div class="preloader-wrapper big active preloader-page" v-if="showPreloader">
            <Preloader/>
        </div>
        <div v-else>
            <Toolbar @openFilter="openFilter"/>
            <template v-if="isopen">
                <FormFilter @filter="filterTable"/>
            </template>
            <div class="divider"></div>
            <div style="overflow-y:scroll; overflow-x:hidden; height: 500px">
                <Table  v-bind:staff="staff"></Table>
            </div>
        </div>
    </div>
</template>

<script>
    import Toolbar from "@/components/app/hr/staff/Toolbar";
    import FormFilter from "@/components/app/hr/staff/Filter";
    import Table from "@/components/app/hr/staff/Table";
    import Preloader from "@/components/app/ shared/Preloader";
    import messages from "@/utils/messages";
    import requests from "@/utils/requests";

    export default {
        name: "Staff",
        data: () => ({
            staff: null,
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
            const response = await requests.request('/api/staff/get');
            if (response.message === 'Выбраны все сотрудники'){
                this.staff = response.staff;
                this.showPreloader = false
            }

        },
        methods: {
            async filterTable(staff) {
                this.staff = staff;
            },
            async openFilter(){
                this.isopen = !this.isopen;
            },
        }
    }
</script>

<style scoped>

</style>