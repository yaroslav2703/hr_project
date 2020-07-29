<template>
    <td>
        <router-link :to="{ name: 'hr-response-view', params: { id: vacancyResponse._id }}" v-if="!vacancyResponse.viewed" class="orange-text">
            {{email}}
        </router-link>
        <router-link :to="{ name: 'hr-response-view', params: { id: vacancyResponse._id }}" v-if="vacancyResponse.viewed">
            {{email}}
        </router-link>
    </td>
</template>

<script>
    export default {
        name: "Response",
        props: ['vacancyResponse'],
        data: () => ({
            email: ''
        }),
        async mounted() {
            this.email = this.vacancyResponse.email;
        },
    }
</script>

<style scoped>

</style>