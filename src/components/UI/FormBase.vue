<template>
  <form class="signup-form">
    <section
      class="input-group col"
      v-if="props.availableFields.includes('email')"
    >
      <label for="userEmail">Email</label>
      <input type="email" name="userEmail" id="userEmail" />
    </section>
    <section
      class="input-group col"
      v-if="props.availableFields.includes('password')"
    >
      <label for="userPassword">Password</label>
      <input type="password" name="userPassword" id="userPassword" />
    </section>
    <section
      class="input-group col"
      v-if="props.availableFields.includes('confirmPassword')"
    >
      <label for="userConfirmPassword">Confirm Password</label>
      <input type="email" name="userConfirmPassword" id="userConfirmPassword" />
    </section>
    <button type="submit" class="btn btn-primary">
      {{ props.buttonLabel }}
    </button>
    <h5>• something went wrong!</h5>
    <slot name="extras"></slot>
  </form>
</template>

<script setup>
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
</script>
