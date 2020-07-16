<template>
    <div>

        <div class="row">
            <div class="col s3 m3 l3">
                <div class="card blue-grey lighten-5" style="min-height: 155px">
                    <div class="card-content white-text center-align" style="padding: 50px 0px 0px 0px">
                        <router-link to="/hr/vacancies/add" class="white-text" >
                            <button class="btn-floating btn-large waves-effect waves-light orange darken-2">
                                <i class="material-icons">add</i>
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div v-for="vacancy in vacancies" :key="vacancy._id">
                <Card  v-bind:vacancy="vacancy"></Card>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "@/components/app/hr/vacancies/Card";
    import messages from "@/utils/messages";
    import requests from "@/utils/requests";

    export default {
        name: "Vacancies",
        data: () => ({
            vacancies: null
        }),
        components: {
            Card
        },
        async created() {
            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message])
            }
            const response = await requests.request('/api/vacancy/get');
            this.vacancies = response.vacancies;
            this.$message(response.message);
        },


    }
</script>

<style scoped>

</style>