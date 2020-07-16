<template>
    <li class="collection-item avatar">
        <img src="https://img.freepik.com/free-photo/_127657-159.jpg" alt="" class="circle">
        <div class="row center-align">
            <div class="col s4 m4 l4">
                <span>{{employee.fullNameRus}}</span>
            </div>
            <div class="col s4 m4 l4">
                <span>{{employee.position}}</span>
            </div>
            <div class="col s4 m4 l4">
                <span>{{employee.email}}</span>
            </div>
        </div>
        <a href="#!" class="secondary-content"><i class="material-icons">more_horiz</i></a>
    </li>
</template>

<script>

    export default {
        name: "Employee",
        props: ['employee'],
    }
</script>

<style scoped>

</style>