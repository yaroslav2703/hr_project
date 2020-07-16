<template>
    <ul class="sidenav app-sidenav" :class="{open: value}">
        <img src="../../../../public/logo.png" width="95%" height="8%" style="padding: 5px"/>
        <router-link v-for="link in links" :key="link.url" tag="li" active-class="active" :to="link.url" >
            <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
        </router-link>
    </ul>
</template>

<script>
    export default {
        name: "Sidebar",
        props: ['value'],
        data: () => ({
                links: [
                    {title: 'Вакансии', url: '/member/vacancies'},
                ]
            })
    }
</script>

<style scoped>

</style>