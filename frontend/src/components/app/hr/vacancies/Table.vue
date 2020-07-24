<template>
   <div>
      <ul class="collection">
         <li class="collection-item" v-for="vacancy in vacancies" :key="vacancy._id">
            <div class="secondary-content">
               <router-link :to="{ name: 'hr-vacancies-edit', params: { id: vacancy._id }}" class="btn-flat">
                  <i class="material-icons blue-grey-text">edit</i>
               </router-link>
               <a class="btn-flat" @click="deleteHandler(vacancy._id)">
                  <i class="material-icons blue-grey-text">clear</i>
               </a>
            </div>
            <h6>
               <router-link :to="{ name: 'hr-vacancies-view', params: { id: vacancy._id }}" class="orange-text title" >
                  {{vacancy.title}}
               </router-link>
            </h6>
            <p>{{vacancy.company}}</p>
            <div>Причина поиска: {{vacancy. searchReason}}</div>
            <div>Необходимые навыки: {{vacancy. requiredSkill}}</div>
         </li>
      </ul>
   </div>
</template>

<script>
   import requests from "@/utils/requests";

    export default {
        name: "Table",
        props: ['vacancies'],
        methods: {
            async deleteHandler(id) {
                const formData = {
                    _id: id
                }
                try {
                    const response = await requests.request('/api/vacancy/delete', 'DELETE', formData)
                    this.$message(response.message)
                    if (response.message === 'Вакансия удалена') {
                        await this.$router.push('/login?message=vacancies')
                    }
                } catch (e) {
                    console.log(e.message)
                }
            },
            async sortTable(n) {
              var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
              table = document.getElementById("vacanciesTable");
              switching = true;
              dir = "asc";
              while (switching) {
                 switching = false;
                 rows = table.getElementsByTagName("TR");
                 for (i = 1; i < (rows.length - 1); i++) {
                    shouldSwitch = false;
                    x = rows[i].getElementsByTagName("TD")[n];
                    y = rows[i + 1].getElementsByTagName("TD")[n];
                    if (dir === "asc") {
                       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                          shouldSwitch = true;
                          break;
                       }
                    } else if (dir === "desc") {
                       if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                          shouldSwitch = true;
                          break;
                       }
                    }
                 }
                 if (shouldSwitch) {
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                    switchcount ++;
                 } else {
                    if (switchcount === 0 && dir === "asc") {
                       dir = "desc";
                       switching = true;
                    }
                 }
              }
            }
        }
    }
</script>

<style scoped>

</style>