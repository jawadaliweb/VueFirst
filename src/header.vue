<script setup>
import { RouterLink, RouterView } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-vue/dist/bootstrap-vue.css';
</script>

<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <RouterLink class="nav-link navbar-brand" to="/">Navbar</RouterLink>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
     
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/about">About</RouterLink>
      </li>
      
      <li class="nav-item">
        <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
      </li>
    </ul>

  </div>
</nav>

<div class="container pt-4">

  <RouterView />

</div>
</template>
