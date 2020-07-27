<template>
   <div>
      <ul class="collection">
         <li class="collection-item" v-for="vacancy in vacancies" :key="vacancy._id">
            <template v-if="vacancy.isHide">
               <span class="new badge waves-effect waves-light orange darken-2">{{vacancy.col}}</span>
            </template>
            <div class="secondary-content">
               <router-link :to="{ name: 'hr-vacancies-edit', params: { id: vacancy._id }}" class="btn-flat">
                  <i class="material-icons blue-grey-text">edit</i>
               </router-link>
               <a class="btn-flat modal-trigger" @click="tempId=vacancy._id" href="#confirmDelete">
                  <i class="material-icons blue-grey-text">clear</i>
               </a>
            </div>
            <h6>
               <router-link :to="{ name: 'hr-vacancies-view', params: { id: vacancy._id }}" class="orange-text title" >
                  {{vacancy.title}}
               </router-link>
            </h6>
            <p>{{vacancy.company}}</p>
            <div style="white-space: pre">Причина поиска: <br>{{vacancy.searchReason}}</div>
            <div style="white-space: pre">Необходимые навыки: <br>{{vacancy.requiredSkill}}</div>
         </li>
      </ul>

      <div style="width: 500px" id="confirmDelete" class="modal">
         <div class="modal-content">
               <h4>Подтверждение удаления</h4>
               <p>Вы точно хотите удалить эту вакансию?</p>
         </div>
         <div class="modal-footer">
               <button class="modal-close waves-effect waves-green btn-flat">Нет</button>
               <button @click="deleteHandler(tempId)" class="modal-close waves-effect waves-red btn-flat">Да</button>
         </div>
      </div>

   </div>
</template>

<script>
   import requests from "@/utils/requests";

    export default {
        name: "Table",
        props: ['vacancies'],
        data: () => ({
            tempId: null,
            col: 0,
        }),
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
        },
        mounted() {
            var elems = document.querySelectorAll('.modal');
            window.M.Modal.init(elems);

        }
    }
</script>

<style scoped>

</style>