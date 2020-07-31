<template>
    <div>
        <div class="page-title">
            <h3>Новый сотрудник</h3>
        </div>
        <div class="container" style="width: 100%">
            <form enctype="multipart/form-data" @submit.prevent="submitHandler">
                <div class="row">
                    <div class="col s8 m8 l8 offset-s2 offset-m2 offset-l2">

                        <div class="file-field input-field">
                            <div class="btn">
                                <span>Фото</span>
                                <input name="photo" accept="image/*" @change="onFilePicked" type="file">
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text" placeholder="Выберите фото сотрудника">
                            </div>
                        </div>

                        <div class="center-align">
                            <img :src="photoView" height="150">
                        </div>

                        <div class="input-field ">
                            <input
                                    id="fullNameRus"
                                    type="text"
                                    class="validate"
                                    v-model.trim="fullNameRus"
                            >
                            <label for="fullNameRus">ФИО (Рус)</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="fullNameEng"
                                    type="text"
                                    class="validate"
                                    v-model.trim="fullNameEng"
                            >
                            <label for="fullNameEng">ФИО (Англ)</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="birthDate"
                                    type="text"
                                    class="datepicker validate"
                                    v-model.lazy="birthDate"
                            >
                            <label for="birthDate">Дата рождения</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="address"
                                    type="text"
                                    class="validate"
                                    v-model.trim="address"
                            >
                            <label for="address">Адрес</label>
                        </div>

                        <div class="input-field ">
                            <input
                                    id="position"
                                    type="text"
                                    class="validate"
                                    v-model.trim="position"
                            >
                            <label for="position">Должность</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="internalPosition"
                                    type="text"
                                    class="validate"
                                    v-model.trim="internalPosition"
                            >
                            <label for="internalPosition">Внутренняя должность</label>
                        </div>
                        <div class="input-field ">
                            <textarea
                                    id="familyContacts"
                                    class="materialize-textarea validate"
                                    v-model.trim="familyContacts"
                            ></textarea>
                            <label for="familyContacts">Контакты родственников</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="extTelephone"
                                    type="tel"
                                    class="validate"
                                    v-model.trim="extTelephone"
                            >
                            <label for="extTelephone">Внутренний телефон</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="telephone"
                                    type="tel"
                                    class="validate"
                                    v-model.trim="telephone"
                            >
                            <label for="telephone">Телефон</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="email"
                                    type="email"
                                    class="validate"
                                    v-model.trim="email"
                            >
                            <label for="email">Электронная почта</label>
                        </div>

                        <div class="input-field ">
                            <input
                                    id="skype"
                                    type="text"
                                    class="validate"
                                    v-model.trim="skype"
                            >
                            <label for="skype">Скайп</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="department"
                                    type="text"
                                    class="validate"
                                    v-model.trim="department"
                            >
                            <label for="department">Отдел</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="subordination"
                                    type="text"
                                    class="validate"
                                    v-model.trim="subordination"
                            >
                            <label for="subordination">Подчинение</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="hireDate"
                                    type="text"
                                    class="datepicker validate"
                                    v-model.lazy="hireDate"
                            >
                            <label for="hireDate">Дата приёма на работу</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="probation"
                                    type="text"
                                    class="validate"
                                    v-model.trim="probation"
                            >
                            <label for="probation">Испытательный срок</label>
                        </div>

                        <div class="file-field input-field">
                            <div class="btn">
                                <span>Выбрать документы</span>
                                <input @change="documentPicked" type="file" multiple>
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text" placeholder="Выберите документы для загрузки">
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col s3 m3 l3 offset-s4 offset-m4 offset-l4">
                        <button class="btn waves-effect waves-light blue-grey darken-5" type="submit">
                            Опубликовать
                            <i class="material-icons right">save</i>
                        </button>
                    </div>
                    <div class="col s3 m3 l3">
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
    //import requests from "@/utils/requests";
    import axios from 'axios'

    export default {
        name: "AddStaff",
        data : () => ({
            photo: null,
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
            probation: '',
            photoView: '',
            image: null,
            documents: []
        }),
        mounted() {
            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message])
            }
            var elemDate = document.querySelectorAll('.datepicker');
            window.M.Datepicker.init(elemDate, {
                format: 'dd.mm.yyyy',
                i18n: {
                    months: [ 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'декабря' ],
                    monthsShort: [ 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек' ],
                    weekdays: [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ],
                    weekdaysShort: [ 'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб' ],
                    weekdaysAbbrev: ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'],
                    today: 'Сегодня',
                    clear: 'Удалить',
                    close: 'Закрыть',
                    firstDay: 1,
                },
                yearRange: [1960, new Date().getFullYear()]
            });
            var elemSelect = document.querySelectorAll('select');
            window.M.FormSelect.init(elemSelect);
        },
        methods: {
            async submitHandler() {
                const formData = {
                    photo: this.photo,
                    fullNameRus: this.fullNameRus,
                    fullNameEng: this.fullNameEng,
                    birthDate: this.birthDate,
                    address: this.address,
                    position: this.position,
                    internalPosition: this.internalPosition,
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
                    if (formData[key] === '') {
                        formData[key] = 'Не указано'
                    }
                }

                let fData = new FormData()

                for (let key in formData) {
                    if (!(key == 'photo')) {
                        fData.append(key, formData[key])
                    }
                }

                if (this.photo != null) {
                    fData.append('photo', this.photo)
                } else {
                    fData.append('photo', 'noImage')
                }

                if(this.documents != null) {
                    this.documents.forEach(el => {
                        fData.append('documents', el)
                    })
                } else {
                    fData.append('documents', 'DOC')
                }
                
                try {
                    await axios.post('/api/staff/add', fData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then((res) => {
                        this.$message(res.data.message);
                        if (res.data.message === 'Работник добавлен') {
                            this.$router.push('/hr/staff')
                        }
                    }).catch(e => {
                        console.log(e)
                    })
                } catch (e) {
                    console.log(e.message)
                }
            },
            onFilePicked(event) {
                const file = event.target.files
                let fileName = file[0].name
                if (fileName.lastIndexOf('.') <= 0) {
                    return alert('Please add a valid file!')
                }
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.photoView = fileReader.result
                })
                fileReader.readAsDataURL(file[0])
                this.image = file[0]
                this.photo = this.image
            },
            documentPicked() {
                const files = event.target.files
                files.forEach(el => {
                    let fReader = new FileReader()
                    fReader.readAsDataURL(el)
                })
                this.documents = files
            }
        }
    }
</script>

<style scoped>

</style>