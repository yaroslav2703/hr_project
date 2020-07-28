<template>
    <div style="padding-bottom: 20px">
        <router-link :to="{ name: 'hr-vacancies-add'}" class="white-text">
            <button class="btn waves-effect waves-light orange darken-2" type="button">
                Добавить
                <i class="material-icons right">add</i>
            </button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Toolbar",
        mounted() {
            var elemSelect = document.querySelectorAll('select');
            window.M.FormSelect.init(elemSelect);
        }
    }
</script>

<style scoped>

</style>