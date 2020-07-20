<template>
    <div class="col s4 m4 l4">
        <div class="card blue-grey darken-5">
            <div class="card-content white-text" >
                    <span class="card-title">
                         <router-link :to="{ name: 'member-vacancies-view', params: { id: vacancy._id }}" >
                                    <a class="orange-text">{{vacancy.title}}</a>
                                </router-link>
                    </span>
                <p>Компания: {{vacancy.company}}</p>
                <p>Тип: {{vacancy.type}}</p>
                <p>Отдел: {{vacancy.department}}</p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Card",
        props: ['vacancy'],
    }
</script>

<style scoped>

</style>