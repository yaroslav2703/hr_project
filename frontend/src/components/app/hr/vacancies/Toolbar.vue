<template>
    <div style="padding-bottom: 20px">
        <div class="row">
            <div class="col s2 m2 l2">
                <router-link :to="{ name: 'hr-vacancies-add'}" class="white-text">
                    <button class="btn waves-effect waves-light orange darken-2" type="button">
                        Добавить
                        <i class="material-icons right">add</i>
                    </button>
                </router-link>
            </div>
            <div class="col s2 m2 l2">
                <button class="btn waves-effect waves-light orange darken-2"  @click="OpenFilter()" type="button">
                    Фильтры
                    <i class="material-icons right">arrow_drop_down_circle</i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Toolbar",
        mounted() {
            var elemSelect = document.querySelectorAll('select');
            window.M.FormSelect.init(elemSelect);
        },
        methods: {
            OpenFilter(){
                this.$emit('openFilter');
            }
        }
    }
</script>

<style scoped>

</style>