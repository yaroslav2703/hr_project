<template>
    <ul class="sidenav app-sidenav" :class="{open: value}">
        <img src="../../../../public/logo.png" width="250px" height="60px" style="padding: 5px"/>
        <router-link v-for="link in links" :key="link.url" tag="li" active-class="active" :to="link.url" >
            <a href="#" class="waves-effect waves-orange pointer">
                <i class="material-icons">{{link.icon}}</i>
                {{link.title}}
            </a>
        </router-link>
    </ul>
</template>

<script>
    import auth from "@/utils/auth";

    export default {
        name: "Sidebar",
        props: ['value'],
        data: () => ({
                links: [
                    {title: 'Вакансии', url: '/member/vacancies', icon: 'search'},
                    {title: 'Для сотрудников', url: '/login', icon: 'supervisor_account'},
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