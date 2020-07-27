<template>
    <div>
        <div class="container" style="width: 100%">
            <div class="row">
                <div class="col s12 m12 l12">
                    <div style="text-align: center">
                        <h5><b>Описание</b></h5>
                    </div>
                    <Toolbar></Toolbar>
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
         }),
         components: {
             Toolbar
         },
         mounted() {
             if (messages[this.$route.query.message]) {
                 this.$message(messages[this.$route.query.message])
             }
             const elem = document.querySelectorAll('.modal')
             window.M.Modal.init(elem)
         },
         async created() {
             const formData = {
                 _id: this.$route.params.id
             };
             try {
                 const response = await requests.request('/api/vacancyResp/getrespbyid', 'POST', formData);
                 this.$message(response.message);
                     if (response.message === 'Выбран отклик') {
                     this.vacancyResp = response.vacancyResp[0];
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