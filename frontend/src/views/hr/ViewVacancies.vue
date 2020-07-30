<template>
    <div>
        <div class="page-title">
            <h3>Вакансия</h3>
        </div>
        <div class="preloader-wrapper big active preloader-page" v-if="showPreloader">
            <Preloader/>
        </div>
        <div v-else>
            <div class="container" style="width: 100%">
                <div class="row">
                    <div class="col s8 m8 l8">
                        <div style="text-align: center">
                            <h5><b>Описание</b></h5>
                        </div>
                        <ul class="collection">
                            <li class="collection-item textWrap"><b>Название:</b><div>{{title}}</div></li>
                            <li class="collection-item textWrap"><b>Тип:</b> <div>{{type}}</div></li>
                            <li class="collection-item textWrap"><b>Компания:</b> <div>{{company}}</div></li>
                            <li class="collection-item textWrap"><b>Отдел:</b> <div>{{department}}</div></li>
                            <li class="collection-item textWrap"><b>Причина поиска:</b> <div>{{searchReason}}</div></li>
                            <li class="collection-item textWrap"><b>Подчинение:</b> <div>{{subordination}}</div></li>
                            <li class="collection-item textWrap"><b>Обязанности:</b> <div>{{responsibility}}</div></li>
                            <li class="collection-item textWrap"><b>Выход на работу:</b> <div>{{exitToWork}}</div></li>
                            <li class="collection-item textWrap"><b>Высшее образование:</b> <div>{{highEducation}}</div></li>
                            <li class="collection-item textWrap"><b>Необходимые навыки работы:</b> <div>{{requiredSkill}}</div></li>
                            <li class="collection-item textWrap"><b>ЗП на время испытательного срока:</b> <div>{{wageProbation}}</div></li>
                            <li class="collection-item textWrap"><b>Зарплата:</b><div>{{wage}}</div></li>
                            <li class="collection-item textWrap"><b>ЗП KPI:</b> <div>{{wageKPI}}</div></li>
                            <li class="collection-item textWrap"><b>Дополнительные сведения о ЗП:</b> <div>{{wageAdditional}}</div></li>
                            <li class="collection-item textWrap"><b>Условия работы:</b> <div>{{workingConditions}}</div></li>
                        </ul>
                    </div>
                    <div class="col s4 m4 l4">
                        <div style="text-align: center">
                            <h5><b>Отклики</b></h5>
                        </div>
                        <div class="table-of-contents">
                            <table class="highlight centered responsive-table">
                                <thead>
                                <tr>
                                    <th>соискатель</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="vacancyResponse in vacancyResponses" :key="vacancyResponse._id">
                                    <Response  v-bind:vacancyResponse="vacancyResponse"></Response>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
 </template>

 <script>
     import Response from "@/components/app/hr/vacancies/Response";
     import Preloader from "@/components/app/ shared/Preloader";
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
             vacancyResponses: '',
             email: '',
             showPreloader: true
         }),
         mounted() {
             if (messages[this.$route.query.message]) {
                 this.$message(messages[this.$route.query.message])
             }
         },
         components: {
             Response, Preloader
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
                     this.type = this.vacancy.type;
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
                     this.email = this.vacancy.email;
                     this.showPreloader = false
                 }
             } catch (e) {
                 console.log(e.message)
             }
         },

     }
 </script>

 <style scoped>

 </style>