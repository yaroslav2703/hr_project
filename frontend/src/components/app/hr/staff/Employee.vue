<template>
    <li class="collection-item avatar">
        <img src="https://img.freepik.com/free-photo/_127657-159.jpg" alt="" class="circle">
        <div class="row center-align">
            <div class="col s4 m4 l4">
                <router-link :to="{ name: 'hr-staff-view', params: { id: employee._id }}" >
                    <a class="orange-text">{{employee.fullNameRus}}</a>
                </router-link>
            </div>
            <div class="col s4 m4 l4">
                <span>{{employee.position}}</span>
            </div>
            <div class="col s4 m4 l4">
                <span>{{employee.email}}</span>
            </div>
        </div>
        <div class="secondary-content">
            <router-link :to="{ name: 'hr-employee-edit', params: { id: employee._id }}">
                <a class="btn-flat"><i class="material-icons blue-grey-text">edit</i></a>
            </router-link>
            <a class="btn-flat" @click="deleteHandler(employee._id)">
                <a><i class="material-icons blue-grey-text">clear</i></a>
            </a>
        </div>
    </li>
</template>

<script>

    import requests from "@/utils/requests";

    export default {
        name: "Employee",
        props: ['employee'],
        methods: {
            async deleteHandler(id) {
                const formData = {
                    _id: id
                }
                try {
                    const responce = await requests.request('/api/staff/delete', 'DELETE', formData)
                    this.$message(responce.message)
                    if (responce.message === 'Работник удален') {
                        await this.$router.push('/login?message=staff')
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