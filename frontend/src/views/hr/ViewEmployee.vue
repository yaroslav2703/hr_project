<template>
    <div>
        <div class="page-title">
            <h3>{{fullNameRus}}</h3>
        </div>
        <div class="container" style="width: 100%">
            <ul class="collection">
                <li class="collection-item"><b>Фото:</b><div>{{photo}}</div></li>
                <li class="collection-item"><b>Полное имя на английском:</b> <div>{{fullNameEng}}</div></li>
                <li class="collection-item"><b>Дата рождения:</b> <div>{{birthDate}}</div></li>
                <li class="collection-item"><b>Адрес:</b> <div>{{address}}</div></li>
                <li class="collection-item"><b>Должность:</b> <div>{{position}}</div></li>
                <li class="collection-item"><b>Внутренняя должность:</b> <div>{{internalPosition}}</div></li>
                <li class="collection-item"><b>Контакты родственников:</b> <div>{{familyContacts}}</div></li>
                <li class="collection-item"><b>Внутренний телефон:</b> <div>{{extTelephone}}</div></li>
                <li class="collection-item"><b>Телефон:</b> <div>{{telephone}}</div></li>
                <li class="collection-item"><b>Электронная почта:</b> <div>{{email}}</div></li>
                <li class="collection-item"><b>Скайп:</b> <div>{{skype}}</div></li>
                <li class="collection-item"><b>Отдел:</b> <div>{{department}}</div></li>
                <li class="collection-item"><b>Подчинение:</b><div>{{subordination}}</div></li>
                <li class="collection-item"><b>Дата приёма на работу:</b> <div>{{hireDate}}</div></li>
                <li class="collection-item"><b>Испытательный срок:</b> <div>{{probation}}</div></li>
            </ul>
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
            internalPosition: '',
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
                    this.internalPosition = this.employee.internalPosition
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