<template>
   <div>
      <ul class="collection">
         <li class="collection-item" v-for="vacancy in vacancies" :key="vacancy._id">
            <h6>
               <router-link :to="{ name: 'member-vacancies-view', params: { id: vacancy._id }}" class="orange-text title" >
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
    export default {
        name: "Table",
        props: ['vacancies'],
        methods: {
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