<template>
    <div>
        <div class="page-title">
            <h3>{{fullNameRus}}</h3>
        </div>
        <div class="container" style="width: 100%">
            <div>{{photo}}</div>
            <div>{{fullNameEng}}</div>
            <div>{{birthDate}}</div>
            <div>{{address}}</div>
            <div>{{position}}</div>
            <div>{{familyContacts}}</div>
            <div>{{extTelephone}}</div>
            <div>{{telephone}}</div>
            <div>{{email}}</div>
            <div>{{skype}}</div>
            <div>{{department}}</div>
            <div>{{subordination}}</div>
            <div>{{hireDate}}</div>
            <div>{{probation}}</div>
        </div>
    </div>
</template>

<script>
    import messages from "@/utils/messages";
    import requests from "@/utils/requests";

    export default {
        name: "ViewEmployee",
        data : () => ({
            employee: null,
            photo: '',
            fullNameRus: '',
            fullNameEng: '',
            birthDate: '',
            address: '',
            position: '',
            familyContacts: '',
            extTelephone: '',
            telephone: '',
            email: '',
            skype: '',
            department: '',
            subordination: '',
            hireDate: '',
            probation: ''
        }),
        mounted() {
            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message])
            }
        },
        async created() {
            const formData = {
                _id: this.$route.params.id
            };
            try {
                const responce = await requests.request('/api/staff/get-one', 'POST', formData);
                this.$message(responce.message);
                if (responce.message === 'Сотрудник выбран') {
                    this.employee = responce.employee
                    this.photo = this.employee.photo
                    this.fullNameRus = this.employee.fullNameRus
                    this.fullNameEng = this.employee.fullNameEng
                    this.birthDate = this.employee.birthDate
                    this.address = this.employee.address
                    this.position = this.employee.position
                    this.familyContacts = this.employee.familyContacts
                    this.extTelephone = this.employee.extTelephone
                    this.telephone = this.employee.telephone
                    this.email = this.employee.email
                    this.skype = this.employee.skype
                    this.department = this.employee.department
                    this.subordination = this.employee.subordination
                    this.hireDate = this.employee.hireDate
                    this.probation = this.employee.probation
                }
            } catch (e) {
                console.log(e.message)
            }
        },

    }
</script>

<style scoped>

</style>