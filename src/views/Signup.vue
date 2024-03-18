<template>
  <main class="signup-view">
    <FormBase :available-fields="['email', 'password', 'confirmPassword']" />
  </main>
</template>
<script setup>
import FormBase from "../components/UI/FormBase.vue";
</script>
