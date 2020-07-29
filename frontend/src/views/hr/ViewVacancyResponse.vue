<template>
    <div>
        <div class="page-title">
            <h3>Отклик</h3>
        </div>
        <Toolbar></Toolbar>
        <div class="container" style="width: 100%">
            <div class="row">
                <div class="col s12 m12 l12">
                    <ul class="collection">
                        <li class="collection-item"><b>ФИО:</b><div>{{fullName}}</div></li>
                        <li class="collection-item"><b>E-Mail:</b> <div>{{email}}</div></li>
                        <li class="collection-item"><b>Номер телефона:</b> <div>{{phoneNumber}}</div></li>
                        <li class="collection-item"><b>Пол:</b> <div>{{sex}}</div></li>
                        <li class="collection-item"><b>Возраст:</b> <div>{{age}}</div></li>
                        <li class="collection-item"><b>Навыки:</b> <div>{{skill}}</div></li>
                        <li class="collection-item"><b>Негативный опыт в компаниях:</b> <div>{{badExperience}}</div></li>
                        <li class="collection-item"><b>Психологическая характеристика:</b> <div>{{psychChar}}</div></li>
                    </ul>

                    <div style="width: 500px" id="confirmDelete" class="modal">
                        <div class="modal-content">
                            <h4>Подтверждение удаления</h4>
                            <p>Вы точно хотите удалить этот отклик?</p>
                        </div>
                        <div class="modal-footer">
                            <button class="modal-close waves-effect waves-green btn-flat">Нет</button>
                            <button @click="deleteHandler(vacancyResp._id)" class="modal-close waves-effect waves-red btn-flat">Да</button>
                        </div>
                    </div>
                </div>
             </div>
         </div>
     </div>
 </template>

 <script>
     import messages from "@/utils/messages";
     import requests from "@/utils/requests";
     import Toolbar from "@/components/app/hr/response/Toolbar";

     export default {
         name: "ViewVacancyResponse",
         data : () => ({
             vacancyResp: null,
             fullName: '',
             email: '',
             phoneNumber: '',
             sex: '',
             age: '',
             skill: '',
             badExperience: '',
             psychChar: '',
             messages: ''
         }),
         components: {
             Toolbar
         },
         async mounted() {
             const formData = {
                 _id: this.$route.params.id
             };
             if (messages[this.$route.query.message]) {
                 this.$message(messages[this.$route.query.message])
             }
             const elem = document.querySelectorAll('.modal')
             window.M.Modal.init(elem)
             try {
                 const response_two = await requests.request('/api/vacancyResp/viewed', 'POST', formData);
                 this.messages = response_two.message
             } catch (e) {
                 console.log(e.message)
             }
         },
         async created() {
             const formData = {
                 _id: this.$route.params.id
             };
             try {

                 const response = await requests.request('/api/vacancyResp/getrespbyid', 'POST', formData);
                 this.$message(response.message);
                     if (response.message === 'Выбран отклик') {
                     this.vacancyResp = response.vacancyResp;
                     this.fullName = this.vacancyResp.fullName;
                     this.email = this.vacancyResp.email;
                     this.phoneNumber = this.vacancyResp.phoneNumber;
                     this.sex = this.vacancyResp.sex;
                     this.age = this.vacancyResp.age;
                     this.skill = this.vacancyResp.skill;
                     this.badExperience = this.vacancyResp.badExperience;
                     this.psychChar = this.vacancyResp.psychChar;
                 }
             } catch (e) {
                 console.log(e.message)
             }
         },
         methods: {
            async deleteHandler(id) {
                const formData = {
                    _id: id
                }
                try {
                    const responce = await requests.request('/api/vacancyResp/delete', 'DELETE', formData)
                    this.$message(responce.message)
                    if (responce.message === 'Отклик удален') {
                        await this.$router.push('/login?message=vacancies')
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