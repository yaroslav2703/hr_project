<template>
    <div>
        <div class="page-title">
            <h3>{{fullNameRus}}</h3>
        </div>
        <div class="container" style="width: 100%">
            <ul class="collection">
                <li class="collection-item"><b>Фото:</b>
                    <img class="materialboxed" :src="`data:image/png;base64,${img}`" height="150">
                </li>
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
                <li class="collection-item"><b>Прикреплённые документы:</b> 
                    <div v-for="doc in documents" :key="doc.systemName">
                        <a style="cursor: pointer" @click="downloadDoc(doc.originalName, doc.systemName)">{{doc.originalName}}</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import messages from "@/utils/messages";
    import requests from "@/utils/requests";
    import axios from 'axios'

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
            probation: '',
            img: null,
            documents: []
        }),
        mounted() {
            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message])
            }
            var elemImg = document.querySelectorAll('.materialboxed');
            window.M.Materialbox.init(elemImg);
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
            this.img = tempImg
            
            try {
                const responce = await requests.request('/api/staff/get-one', 'POST', {_id: this.$route.params.id});
                this.$message(responce.message);
                if (responce.message === 'Сотрудник выбран') {
                    this.employee = responce.employee
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
                    this.documents = this.employee.documents
                }
            } catch (e) {
                console.log(e.message)
            }
        },
        methods: {
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
            }
        }
    }
</script>

<style scoped>

</style>