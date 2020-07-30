<template>
    <div>
        <div class="page-title">
            <h3>Новый отклик на вакансию</h3>
        </div>
        <div class="container" style="width: 100%">
            <form @submit.prevent="submitHandler">
                <div class="row">
                    <div class="col s8 m8 l8 offset-s2 offset-m2 offset-l2">

                        <div class="input-field ">
                            <input
                                    id="fullName"
                                    type="text"
                                    class="validate"
                                    v-model.trim="fullName"
                                   >
                            <label for="fullName">ФИО (Рус.)</label>
                        </div>

                        <div class="input-field ">
                            <input
                                    id="email"
                                    type="email"
                                    class="validate"
                                    v-model.trim="email"
                            >
                            <label for="email">e-mail</label>
                        </div>

                        <div class="input-field ">
                            <input
                                    id="phoneNumber"
                                    type="tel"
                                    class="validate"
                                    v-model.trim="phoneNumber"
                            >
                            <label for="phoneNumber">Номер телефона</label>
                        </div>

                        <div class="input-field ">
                            <select v-model="sex" id="sex">
                                    <option value="" disabled selected>Выберите пол</option>
                                    <option value="Мужчина">Мужчина</option>
                                    <option value="Женщина">Женщина</option>
                                </select>
                            <label>Пол</label>
                        </div>

                        <div class="input-field ">
                            <input
                                    id="age"
                                    type="text"
                                    v-model.trim="age"
                            >
                            <label for="age">Возраст</label>
                        </div>
                        <div class="input-field ">
                            <textarea
                                    id="skill"
                                    class="materialize-textarea validate"
                                    v-model.trim="skill"
                            ></textarea>
                            <label for="skill">Навыки</label>
                        </div>
                        <div class="input-field ">
                            <textarea
                                    id="badExperience"
                                    class="materialize-textarea validate"
                                    v-model.trim="badExperience"
                            ></textarea>
                            <label for="badExperience">Негативный опыт работы в компаниях</label>
                        </div>

                        <div class="input-field ">
                            <textarea
                                    id="psychChar"
                                    class="materialize-textarea validate"
                                    v-model.trim="psychChar"
                            ></textarea>
                            <label for="psychChar">Психологическая характеристика</label>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col s4 m4 l4 offset-s4 offset-m4 offset-l4">
                        <button class="btn waves-effect waves-light blue-grey darken-5" type="submit">
                            Опубликовать
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
        name: "AddVacancies",
        data : () => ({
            fullName: '',
            email: '',
            phoneNumber: '',
            sex: '',
            age: '',
            skill: '',
            badExperience: '',
            psychChar: '',
        }),
        mounted() {
            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message])
            }
            var elemSelect = document.querySelectorAll('select');
            window.M.FormSelect.init(elemSelect);
        },
        methods: {
            async submitHandler() {
                const formData = {
                    fullName: this.fullName,
                    email: this.email,
                    phoneNumber: this.phoneNumber,
                    sex: this.sex,
                    age: this.age,
                    skill: this.skill,
                    badExperience: this.badExperience,
                    psychChar: this.psychChar,
                    vacancy: this.$route.params.id
                };

                for (let key in formData) {
                    if (formData[key] == '') {
                        formData[key] = 'Не указано'
                    }
                }

                try {
                    const response = await requests.request('/api/vacancyResp/add', 'POST', formData);
                    this.$message(response.message);
                    if (response.message === 'Отклик отправлен') {
                        await this.$router.push('/member/vacancies')
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