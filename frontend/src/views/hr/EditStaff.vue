<template>
    <div>
        <div class="page-title">
            <h3>Измнить профиль сотрудника</h3>
        </div>
        <div class="container" style="width: 100%">
            <form @submit.prevent="submitHandler">
                <div class="row">
                    <div class="col s4 m4 l4">
                        <div class="input-field ">
                            <input
                                    id="photo"
                                    type="text"
                                    v-model.trim="photo"
                                   >
                            <label for="photo">Путь к фотографии</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="fullNameRus"
                                    type="text"
                                    v-model.trim="fullNameRus"
                            >
                            <label for="fullNameRus">ФИО (Рус)</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="fullNameEng"
                                    type="text"
                                    v-model.trim="fullNameEng"
                            >
                            <label for="fullNameEng">ФИО (Англ)</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="birthDate"
                                    type="text"
                                    v-model.trim="birthDate"
                            >
                            <label for="birthDate">Дата рождения</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="address"
                                    type="text"
                                    v-model.trim="address"
                            >
                            <label for="address">Адрес</label>
                        </div>

                    </div>
                    <div class="col s4 m4 l4">

                        <div class="input-field ">
                            <input
                                    id="position"
                                    type="text"
                                    v-model.trim="position"
                            >
                            <label for="position">Должность</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="familyContacts"
                                    type="text"
                                    v-model.trim="familyContacts"
                            >
                            <label for="familyContacts">Контакты родственников</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="extTelephone"
                                    type="text"
                                    v-model.trim="extTelephone"
                            >
                            <label for="extTelephone">Внутренний телефон</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="telephone"
                                    type="text"
                                    v-model.trim="telephone"
                            >
                            <label for="telephone">Телефон</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="email"
                                    type="text"
                                    v-model.trim="email"
                            >
                            <label for="email">Электронная почта</label>
                        </div>

                    </div>
                    <div class="col s4 m4 l4">

                        <div class="input-field ">
                            <input
                                    id="skype"
                                    type="text"
                                    v-model.trim="skype"
                            >
                            <label for="skype">Скайп</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="department"
                                    type="text"
                                    v-model.trim="department"
                            >
                            <label for="department">Отдел</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="subordination"
                                    type="text"
                                    v-model.trim="subordination"
                            >
                            <label for="subordination">Подчинение</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="hireDate"
                                    type="text"
                                    v-model.trim="hireDate"
                            >
                            <label for="hireDate">Дата приёма на работу</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="probation"
                                    type="text"
                                    v-model.trim="probation"
                            >
                            <label for="probation">Испытательный срок</label>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col s4 m4 l4 offset-s4 offset-m4 offset-l4">
                        <button class="btn waves-effect waves-light blue-grey darken-5" type="submit">
                            Изменить
                            <i class="material-icons right">save</i>
                        </button>
                    </div>
                    <div class="col s4 m4 l4">
                        <button class="btn waves-effect waves-light blue-grey darken-5" type="reset">
                            Сбросить
                            <i class="material-icons right">refresh</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import messages from "@/utils/messages";
    import requests from "@/utils/requests";

    export default {
        name: "EditStaff",
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
            }
            try {
                const responce = await requests.request('/api/staff/get-one', 'POST', formData)
                this.$message(responce.message)
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

        methods: {
            async submitHandler() {
                const formData = {
                    _id: this.employee._id,
                    photo: this.photo,
                    fullNameRus: this.fullNameRus,
                    fullNameEng: this.fullNameEng,
                    birthDate: this.birthDate,
                    address: this.address,
                    position: this.position,
                    familyContacts: this.familyContacts,
                    extTelephone: this.extTelephone,
                    telephone: this.telephone,
                    email: this.email,
                    skype: this.skype,
                    department: this.department,
                    subordination: this.subordination,
                    hireDate: this.hireDate,
                    probation: this.probation
                };

                for (let key in formData) {
                    if (formData[key] == '') {
                        formData[key] = 'Не указано'
                    }
                }

                try {
                    const response = await requests.request('/api/staff/update', 'PUT', formData);
                    this.$message(response.message);
                    if (response.message === 'Работник обновлен!') {
                        await this.$router.push('/login?message=staff')
                    }
                } catch (e) {
                    console.log(e.message)
                }
            }
        }
    }
</script>

<style scoped>

</style>