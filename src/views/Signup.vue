<template>
  <main class="signup-view container">
    <section class="forms-container">
      <FormBase
        button-label="Signup"
        :available-fields="['email', 'password', 'confirmPassword']"
        @submit="onSubmit"
      />
      <section class="or-line col">
        <hr />
        <span>OR</span>
        <hr />
      </section>
      <FormBase button-label="Login" />
    </section>
  </main>
</template>
<script setup>
import FormBase from "../components/UI/FormBase.vue";
function onSubmit(userCredentials) {
  console.log(userCredentials);
}
</script>
