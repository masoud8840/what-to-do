<template>
  <form class="signup-form" @submit.prevent="handleSubmit">
    <section
      class="input-group col"
      v-if="props.availableFields.includes('email')"
    >
      <label>Email</label>
      <input type="email" name="userEmail" v-model="user.email" />
    </section>
    <section
      class="input-group col"
      v-if="props.availableFields.includes('password')"
    >
      <label>Password</label>
      <input type="password" name="userPassword" v-model="user.password" />
    </section>
    <section
      class="input-group col"
      v-if="props.availableFields.includes('confirmPassword')"
    >
      <label>Confirm Password</label>
      <input
        type="password"
        name="userConfirmPassword"
        v-model="user.confirmPassword"
      />
    </section>
    <button type="submit" class="btn btn-primary">
      {{ props.buttonLabel }}
    </button>
    <h5>• something went wrong!</h5>
    <slot name="extras"></slot>
  </form>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  availableFields: {
    type: Array,
    default: ["email", "password"],
  },
  buttonLabel: {
    type: String,
    default: "Create Account",
  },
});
const emits = defineEmits(["submit"]);

const user = ref({
  email: "",
  password: "",
  confirmPassword: "",
});

function handleSubmit() {
  if (
    user.value.email.trim() === "" ||
    user.value.password.trim() === "" ||
    user.value.confirmPassword.trim() === ""
  )
    return;

  emits("submit", user.value);
}
</script>
