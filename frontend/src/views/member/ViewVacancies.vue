<template>
    <div>
        <div class="container" style="width: 100%">
            <div class="row">
                <div class="col s12 m12 l12">
                    <div style="text-align: center">
                        <h5><b>Описание</b></h5>
                    </div>
                    <ul class="collection">
                        <li class="collection-item"><b>Название:</b><div>{{title}}</div></li>
                        <li class="collection-item"><b>Тип:</b> <div>{{type}}</div></li>
                        <li class="collection-item"><b>Компания:</b> <div>{{company}}</div></li>
                        <li class="collection-item"><b>Отдел:</b> <div>{{department}}</div></li>
                        <li class="collection-item"><b>Причина поиска:</b> <div>{{searchReason}}</div></li>
                        <li class="collection-item"><b>Подчинение:</b> <div>{{subordination}}</div></li>
                        <li class="collection-item"><b>Обязанности:</b> <div>{{responsibility}}</div></li>
                        <li class="collection-item"><b>Выход на работу:</b> <div>{{exitToWork}}</div></li>
                        <li class="collection-item"><b>Высшее образование:</b> <div>{{highEducation}}</div></li>
                        <li class="collection-item"><b>Необходимые навыки работы:</b> <div>{{requiredSkill}}</div></li>
                        <li class="collection-item"><b>ЗП на время испытательного срока:</b> <div>{{wageProbation}}</div></li>
                        <li class="collection-item"><b>Зарплата:</b><div>{{wage}}</div></li>
                        <li class="collection-item"><b>ЗП KPI:</b> <div>{{wageKPI}}</div></li>
                        <li class="collection-item"><b>Дополнительные сведения о ЗП:</b> <div>{{wageAdditional}}</div></li>
                        <li class="collection-item"><b>Условия работы:</b> <div>{{workingConditions}}</div></li>
                    </ul>
                </div>
                <div class="row">
                    <div class="col s12 m12 l12 center-align">
                        <router-link :to="{ name: 'member-response-add', params: { id: vacancy._id }}" class="white-text">
                            <button class="btn waves-effect waves-light orange darken-2" type="button">
                                Откликнуться
                                <i class="material-icons right">assignment_turned_in</i>
                            </button>
                        </router-link>
                    </div>
                </div>
             </div>
         </div>
     </div>
 </template>

 <script>
     import messages from "@/utils/messages";
     import requests from "@/utils/requests";

     export default {
         name: "ViewVacancies",
         data : () => ({
             vacancy: null,
             title: '',
             type: '',
             company: '',
             department: '',
             searchReason: '',
             subordination: '',
             responsibility: '',
             exitToWork: '',
             highEducation: '',
             requiredSkill: '',
             wageProbation: '',
             wage: '',
             wageKPI: '',
             wageAdditional: '',
             workingConditions: '',
             vacancyResponses: ''
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
                 const response = await requests.request('/api/vacancy/get-one', 'POST', formData);
                 const vacancy_response = await requests.request('/api/vacancyResp/getbyid', 'POST', formData);
                 this.$message(response.message);
                 if (response.message === 'Вакансия выбрана') {
                     this.vacancy = response.vacancy;
                     this.title = this.vacancy.title;
                     this.type= this.vacancy.type;
                     this.company = this.vacancy.company;
                     this.department = this.vacancy.department;
                     this.searchReason = this.vacancy.searchReason;
                     this.subordination = this.vacancy.subordination;
                     this.responsibility = this.vacancy.responsibility;
                     this.exitToWork = this.vacancy.exitToWork;
                     this.highEducation = this.vacancy.highEducation;
                     this.requiredSkill = this.vacancy.requiredSkill;
                     this.wageProbation = this.vacancy.wageProbation;
                     this.wage = this.vacancy.wage;
                     this.wageKPI = this.vacancy.wageKPI;
                     this.wageAdditional = this.vacancy.wageAdditional;
                     this.workingConditions = this.vacancy.workingConditions;
                     this.vacancyResponses = vacancy_response.vacanciesResp;
                 }
             } catch (e) {
                 console.log(e.message)
             }
         },

     }
 </script>

 <style scoped>

 </style>