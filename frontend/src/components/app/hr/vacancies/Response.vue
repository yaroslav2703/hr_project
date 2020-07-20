<template>
    <td>
        <a class="waves-effect waves-orange btn-flat">
            {{user.email}}
        </a>
    </td>
</template>

<script>
    import requests from "@/utils/requests";
    export default {
        name: "Response",
        props: ['vacancyResponse'],
        data: () => ({
            id: null,
            user: null
        }),
        async mounted() {
            this.id = this.vacancyResponse.user;
            const formData = {
                _id: this.id
            };
            try {
                const response = await requests.request('/api/users/get-one', 'POST', formData);
                this.user = response.user;
            } catch (e) {
                console.log(e.message)
            }
        },
    }
</script>

<style scoped>

</style>