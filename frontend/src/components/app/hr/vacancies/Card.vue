<template>
    <div class="col s3 m3 l3">
        <div class="card blue-grey darken-5">
                <div class="card-content white-text" >
                    <li>
                        <a
                                class="dropdown-trigger white-text"
                                href="#"
                                data-target="dropdown"
                                ref="dropdown"
                        >
                            <i class="material-icons right white-text">arrow_drop_down</i>
                        </a>
                        <ul id='dropdown' class='dropdown-content'>

                            <li>
                                <router-link :to="{ name: 'hr-vacancies-edit', params: { id: vacancy._id }}" >
                                    <a class="waves-effect waves-teal btn-flat black-text" >
                                        <i class="material-icons ">update</i>Изменить
                                    </a>
                                </router-link>
                            </li>
                            <li class="divider" tabindex="-1"></li>
                            <li>
                                <a class="waves-effect waves-teal btn-flat black-text" @click.prevent="deleteHandler(vacancy._id)">
                                    <i class="material-icons">clear</i>Удалить
                                </a>
                            </li>
                        </ul>
                    </li>
                    <span class="card-title">
                         <router-link :to="{ name: 'hr-vacancies-view', params: { id: vacancy._id }}" >
                                    <a class="orange-text">{{vacancy.title}}</a>
                                </router-link>
                    </span>
                    <p>{{vacancy._id}}</p>
                    <p>Уровень: Junior</p>
                    <p>Отдел: Разработка </p>
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

                const formData = {
                    _id: id
                };
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