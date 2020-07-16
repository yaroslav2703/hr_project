<template>
    <div>

        <div class="row">
            <div v-for="vacancy in vacancies" :key="vacancy._id">
                <Card  v-bind:vacancy="vacancy"></Card>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "@/components/app/member/vacancies/Card";
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
            const response = await requests.request('http://localhost:5000/api/vacancy/get');
            this.vacancies = response.vacancies;
        },


    }
</script>

<style scoped>

</style>