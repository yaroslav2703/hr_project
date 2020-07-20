<template>
    <div class="col s4 m4 l4">
        <div class="card blue-grey darken-5">
                <div class="card-content white-text" >
                    <span class="card-title">
                         <router-link :to="{ name: 'hr-vacancies-view', params: { id: vacancy._id }}" >
                                    <a class="orange-text">{{vacancy.title}}</a>
                                </router-link>
                    </span>
                    <p>Компания: {{vacancy.company}}</p>
                    <p>Тип: {{vacancy.type}}</p>
                    <p>Отдел: {{vacancy.department}}</p>
                    <div class="card-action" style="height: 30px; margin-bottom: 10px;">
                        <router-link :to="{ name: 'hr-vacancies-edit', params: { id: vacancy._id }}">
                            <a class="orange-text">Изменить</a>
                        </router-link>
                        <a class="waves-effect waves-teal btn-flat black-text" @click="deleteHandler(vacancy._id)">
                            <a class="orange-text">Удалить</a>
                        </a>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    import requests from "@/utils/requests";

    export default {
        name: "Card",
        props: ['vacancy'],
        data: () => ({
            dropdown: null
        }),
        methods: {
            async deleteHandler(id) {

                console.log(id)

                const formData = {
                    _id: id
                };
                console.log('delete: ' + formData._id)
                try {
                    const responce = await requests.request('/api/vacancy/delete', 'DELETE', formData);
                    this.$message(responce.message);
                    if (responce.message === 'Вакансия удалена') {
                        await this.$router.push('/login?message=vacancies');

                    }
                } catch (e) {
                    console.log(e.message)
                }
            },
        },
        mounted() {
            this.dropdown = window.M.Dropdown.init(this.$refs.dropdown, {
                constrainWidth: false
            })
        },
        beforeDestroy() {
            if(this.dropdown && this.dropdown.destroy){
                this.dropdown.destroy()
            }
        }
    }
</script>

<style scoped>

</style>