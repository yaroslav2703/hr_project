<template>
    <div>
        <div class="container" style="width: 100%">
            <div class="row">
                <div class="col s8 m8 l8">
                    <div style="text-align: center">
                        <h5><b>Описание</b></h5>
                    </div>
                    <div><b>Название:</b> {{title}}</div>
                    <div><b>Тип:</b> {{type}}</div>
                    <div><b>Компания:</b> {{company}}</div>
                    <div><b>Отдел:</b> {{department}}</div>
                    <div><b>Причина поиска:</b> {{searchReason}}</div>
                    <div><b>Подчинение:</b> {{subordination}}</div>
                    <div><b>Обязанности:</b> {{responsibility}}</div>
                    <div><b>Выход на работу:</b> {{exitToWork}}</div>
                    <div><b>Высшее образование:</b> {{highEducation}}</div>
                    <div><b>Необходимые навыки работы:</b> {{requiredSkill}}</div>
                    <div><b>ЗП на время испытательного срока:</b> {{wageProbation}}</div>
                    <div><b>Зарплата:</b> {{wage}}</div>
                    <div><b>ЗП KPI:</b> {{wageKPI}}</div>
                    <div><b>Дополнительные сведения о ЗП:</b> {{wageAdditional}}</div>
                    <div><b>Условия работы:</b> {{workingConditions}}</div>
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
                                <td>
                                    <a class="waves-effect waves-orange btn-flat">
                                        {{vacancyResponse.user.email}}
                                    </a>
                                </td>
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