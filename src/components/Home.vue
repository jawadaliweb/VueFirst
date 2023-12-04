<script setup>
import { onMounted } from 'vue';
import Image from './Image.vue';
import { defineProps } from 'vue';

const { data, isLoading } = defineProps(['data', 'isLoading'])


</script>

<template>
  <div>
    <div>
      <h1 class="pt-4 pb-4">Employee Details</h1>

      <div v-if="isLoading">Loading...</div>

      <table v-if="!isLoading" class="table">
        <!-- Table header -->
        <thead class="table-dark">
          <tr>
            <th class="col-1">ID</th>
            <th class="col-2">Name</th>
            <th class="col-2">Email</th>  
            <th class="col-2">phone</th>  
            <th class="col-2">city</th>  
            <th class="col-2">salary</th>
            <th class="col-2">Address</th>
            <th class="col-2">Image</th>
          </tr>
        </thead>
        <!-- Table body -->
        <tbody>
          <tr v-for="employee in data" >
            <td>{{ employee.id }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.phone }}</td>
            <td>{{ employee.city }}</td>
            <td>{{ employee.salary }}</td>
            <td>{{ employee.address }}</td>

            <td>
              <!-- Note: In setup, components are automatically imported -->
              <Image :src="employee.imageUrl" />
            </td>

            <td>{{ employee.employee_email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
