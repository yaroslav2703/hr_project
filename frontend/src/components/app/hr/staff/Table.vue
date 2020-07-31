<template>
   <div>
      <div class="table-of-contents">
         <table class="highlight centered responsive-table" id="staffTable">
            <thead>
            <tr>
               <th>Фото</th>
               <th @click="sortTable(1)" style="cursor: pointer">ФИО</th>
               <th @click="sortTable(2)" style="cursor: pointer">Должность</th>
               <th @click="sortTable(3)" style="cursor: pointer">Внутренняя должность</th>
               <th @click="sortTable(4)" style="cursor: pointer">Почта</th>
               <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="employee in staff" :key="employee._id">
               <td>
                  <StaffImg v-bind:id="employee._id"/>
               </td>
               <td>
                  <router-link :to="{ name: 'hr-staff-view', params: { id: employee._id }}" class="orange-text" >
                     {{employee.fullNameRus}}
                  </router-link>
               </td>
               <td>{{employee.position}}</td>
               <td>{{employee.internalPosition}}</td>
               <td>{{employee.email}}</td>
               <td>
                  <router-link :to="{ name: 'hr-employee-edit', params: { id: employee._id }}" class="btn-flat">
                     <i class="material-icons blue-grey-text">edit</i>
                  </router-link>
                  <a class="btn-flat modal-trigger" @click="tempId=employee._id" href="#confirmDelete">
                     <i class="material-icons blue-grey-text">clear</i>
                  </a>
               </td>
            </tr>
            </tbody>
         </table>
      </div>


      <div style="width: 500px" id="confirmDelete" class="modal">
         <div class="modal-content">
               <h4>Подтверждение удаления</h4>
               <p>Вы точно хотите удалить этого сотрудника?</p>
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
   import StaffImg from '@/components/app/hr/staff/StaffImg'

    export default {
        name: "Table",
        props: ['staff'],
        data: () => ({
            tempId: null,
            currentPage: 1,
            totalPages: 10
        }),
        components: {
           StaffImg
        },
        methods: {
            async deleteHandler(id) {
                const formData = {
                    _id: id
                }
                try {
                    const response = await requests.request('/api/staff/delete', 'DELETE', formData)
                    this.$message(response.message)
                    if (response.message === 'Сотрудник удален') {
                        await this.$router.push('/login?message=staff')
                    }
                } catch (e) {
                    console.log(e.message)
                }
            },
            async sortTable(n) {
              var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
              table = document.getElementById("staffTable");
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