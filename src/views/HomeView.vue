

<template>
    <!-- Button trigger modal -->
    <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
    >
        Add Employee
    </button>
    <Modal id="exampleModal" title="Add Employees">
        <AddEmployee :onAdd="handleAddEmployee" />
    </Modal>

    <div>
        <Home :data="data" :isLoading="isLoading" />
    </div>
</template>

<script setup>
import Home from "../components/Home.vue";
import Modal from "../components/formModals/Modal.vue";
import AddEmployee from "../components/formModals/AddEmployee.vue";
import { onMounted } from 'vue';
import useFetchData from '../components/formModals/GetApi';

const apiUrl = 'http://127.0.0.1:8000/api/employee';

const { data, isLoading, fetchData } = useFetchData(apiUrl);

const handleAddEmployee = () => {
    fetchData();
    console.log(data);
  
};

onMounted(() => {
    fetchData();
    console.log(data);
});
</script>