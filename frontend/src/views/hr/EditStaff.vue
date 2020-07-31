<template>
    <div>
        <div class="page-title">
            <h3>Изменить профиль сотрудника</h3>
        </div>
        <div class="container" style="width: 100%">
            <form @submit.prevent="submitHandler">
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
                            <img id="img" :src="`data:image/png;base64,${oldPhoto}`" height="150">
                        </div>

                        <div class="input-field ">
                            <input
                                    id="fullNameRus"
                                    type="text"
                                    class="validate"
                                    v-model.trim="fullNameRus"
                            >
                            <label class="active" for="fullNameRus">ФИО (Рус)</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="fullNameEng"
                                    type="text"
                                    class="validate"
                                    v-model.trim="fullNameEng"
                            >
                            <label class="active" for="fullNameEng">ФИО (Англ)</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="birthDate"
                                    type="text"
                                    class="datepicker validate"
                                    v-model.lazy="birthDate"
                            >
                            <label class="active" for="birthDate">Дата рождения</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="address"
                                    type="text"
                                    class="validate"
                                    v-model.trim="address"
                            >
                            <label class="active" for="address">Адрес</label>
                        </div>

                        <div class="input-field ">
                            <input
                                    id="position"
                                    type="text"
                                    class="validate"
                                    v-model.trim="position"
                            >
                            <label class="active" for="position">Должность</label>
                        </div>
                        <div class="input-field ">
                            <textarea
                                    id="familyContacts"
                                    class="materialize-textarea validate"
                                    v-model.trim="familyContacts"
                            ></textarea>
                            <label class="active" for="familyContacts">Контакты родственников</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="extTelephone"
                                    type="tel"
                                    class="validate"
                                    v-model.trim="extTelephone"
                            >
                            <label class="active" for="extTelephone">Внутренний телефон</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="telephone"
                                    type="tel"
                                    class="validate"
                                    v-model.trim="telephone"
                            >
                            <label class="active" for="telephone">Телефон</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="email"
                                    type="email"
                                    class="validate"
                                    v-model.trim="email"
                            >
                            <label class="active" for="email">Электронная почта</label>
                        </div>

                        <div class="input-field ">
                            <input
                                    id="skype"
                                    type="text"
                                    class="validate"
                                    v-model.trim="skype"
                            >
                            <label class="active" for="skype">Скайп</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="department"
                                    type="text"
                                    class="validate"
                                    v-model.trim="department"
                            >
                            <label class="active" for="department">Отдел</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="subordination"
                                    type="text"
                                    class="validate"
                                    v-model.trim="subordination"
                            >
                            <label class="active" for="subordination">Подчинение</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="hireDate"
                                    type="text"
                                    class="datepicker validate"
                                    v-model.lazy="hireDate"
                            >
                            <label class="active" for="hireDate">Дата приёма на работу</label>
                        </div>
                        <div class="input-field ">
                            <input
                                    id="probation"
                                    type="text"
                                    class="validate"
                                    v-model.trim="probation"
                            >
                            <label class="active" for="probation">Испытательный срок</label>
                        </div>

                        <span>Прикреплённые документы</span>

                        <div v-for="doc in documents" :key="doc.systemName">
                            <a style="cursor: pointer" @click="downloadDoc(doc.originalName, doc.systemName)">{{doc.originalName}}</a>
                            <a :id=doc.systemName class="btn-flat" @click="deleteDoc(doc.systemName)">Удалить</a>
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
                            Изменить
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
    import requests from "@/utils/requests";
    import axios from 'axios'

    export default {
        name: "EditStaff",
        data : () => ({
            employee: null,
            photo: null,
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
            probation: '',
            photoView: '',
            oldPhoto: null,
            image: null,
            documents: [],
            deleteDocuments: [],
            newDocuments: []
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

        async created() {

            let fData = new FormData()
            fData.append('_id', this.$route.params.id)

            let tempImg = null
            
            await axios.post('/api/staff/get-one-file', fData).then(res => {
                tempImg = res.data
            }).catch(error => {
                console.log(error)
            })
            this.oldPhoto = tempImg

            try {
                const responce = await requests.request('/api/staff/get-one', 'POST', {_id: this.$route.params.id})
                this.$message(responce.message)
                if (responce.message === 'Сотрудник выбран') {
                    this.employee = responce.employee
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
                    this.documents = this.employee.documents
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

                if (this.deleteDocuments != []) {
                    this.deleteDocuments.forEach(el => {
                        fData.append('deleteDocuments', el)
                    })
                }

                if(this.newDocuments != null) {
                    this.newDocuments.forEach(el => {
                        fData.append('documents', el)
                    })
                } else {
                    fData.append('documents', 'DOC')
                }  

                try {

                    await axios.post('/api/staff/update', fData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then((res) => {
                        console.log(res.data)
                        this.$message(res.data.message);
                        if (res.data.message === 'Работник обновлен!') {
                            this.$router.push('/hr/staff')
                        }
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
                    document.getElementById("img").src = this.photoView
                })
                fileReader.readAsDataURL(file[0])
                this.image = file[0]
                this.photo = this.image
            },
            async downloadDoc(docName, docId) {
                const formData = new FormData()
                formData.append('docId', docId)
                let tempI = null
                await axios.post('/api/staff/doc-download', formData).then(res => {
                    tempI = res.data
                }).catch(e => {
                    console.log(e)
                })
                const linkSource = `data:application/*;base64,${tempI}`;
                const downloadLink = document.createElement("a");

                downloadLink.href = linkSource;
                downloadLink.download = docName;
                downloadLink.click();
            },
            deleteDoc(id) {
                if (document.getElementById(id).innerText == 'УДАЛИТЬ') {
                    this.deleteDocuments.push(id)
                    document.getElementById(id).innerText = 'УДАЛЕНО'
                    document.getElementById(id).className += ' orange-text'
                } else {
                    this.deleteDocuments.splice(this.deleteDocuments.indexOf(id), 1)
                    document.getElementById(id).innerText = 'УДАЛИТЬ'
                    document.getElementById(id).className = 'btn-flat'
                }
            },
            documentPicked() {
                const files = event.target.files
                files.forEach(el => {
                    let fReader = new FileReader()
                    fReader.readAsDataURL(el)
                })
                this.newDocuments = files
            }
        }
    }
</script>

<style scoped>

</style>