<template>
    <div style="padding-bottom: 20px">
        <router-link :to="{ name: 'hr-staff-add'}" class="white-text">
            <button class="btn waves-effect waves-light orange darken-2" type="button">
                Добавить
                <i class="material-icons right">add</i>
            </button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Toolbar"
    }
</script>

<style scoped>

</style>