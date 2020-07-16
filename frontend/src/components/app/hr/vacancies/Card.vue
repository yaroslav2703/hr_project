<template>
    <div class="col s3 m3 l3">
        <div class="card blue-grey darken-5">
            <a class="white-text">
                <div class="card-content" >
                    <span class="card-title">{{vacancy.title}}</span>
                    <p>опыт: Больше 1 лет</p>
                    <p>Уровень: Junior</p>
                    <p>Отдел: Разработка </p>
                </div>
            </a>
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