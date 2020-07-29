<template>
    <ul class="sidenav app-sidenav" :class="{open: value}">
        <img src="../../../../public/logo.png" width="250px" height="60px" style="padding: 5px"/>
        <router-link v-for="link in links" :key="link.url" tag="li" active-class="active" :to="link.url" >
            <a href="#" class="waves-effect waves-orange pointer">
                <i class="material-icons">{{link.icon}}</i>
                {{link.title}}
            </a>
        </router-link>
        <li>
            <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
            </a>
        </li>
    </ul>
</template>

<script>
    import auth from "@/utils/auth";

    export default {
        name: "Sidebar",
        props: ['value'],
        data: () => ({
                links: [
                    {title: 'Вакансии', url: '/hr/vacancies', icon: 'search'},
                    {title: 'Сотрудники', url: '/hr/staff', icon: 'group' },
                    {title: 'Регистрация', url: '/register', icon: 'person_add' },
                ]
            }),
        methods: {
            logout() {
                auth.logout();
                this.$router.push('/login?message=logout')
            }
        },
    }
</script>

<style scoped>

</style>