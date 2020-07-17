<template>
    <div>
        <div class="page-title">
            <h3>Сотрудники</h3>
        </div>
        <div>
            <router-link :to="{ name: 'hr-staff-add'}" class="white-text">
                <button class="btn waves-effect waves-light orange darken-2" type="button">
                    Добавить
                    <i class="material-icons right">add</i>
                </button>
            </router-link>
        </div>
        <ul class="collection with-header">
            <li class="collection-header">
                <div style="margin-left: 10px" class="row center-align">
                    <div class="col s4 m4 l4">
                        <span>Сотрудники</span>
                    </div>
                    <div class="col s4 m4 l4">
                        <span>Должность</span>
                    </div>
                    <div class="col s4 m4 l4">
                        <span>Почта</span>
                    </div>
                </div>
            </li>

            <div style="overflow-y:scroll; overflow-x:hidden; height: 500px">


                <div v-for="employee in employees" :key="employee._id">
                    <Employee  v-bind:employee="employee"></Employee>
                </div>
                
            </div>
        </ul>
    </div>
</template>

<script>
    import Employee from "@/components/app/hr/staff/Employee";
    import messages from "@/utils/messages";
    import requests from "@/utils/requests";

    export default {
        name: "Staff",
        data: () => ({
            employees: null
        }),
        components: {
            Employee
        },
        async created() {
            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message])
            }
            const response = await requests.request('/api/staff/get');
            this.employees = response.employees;
        }


    }
</script>

<style scoped>

</style>