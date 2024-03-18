<template>
  <main class="signup-view">
    <form class="signup-form container">
      <section class="input-group col">
        <label for="userEmail">Email</label>
        <input type="email" name="userEmail" id="userEmail" />
      </section>
      <section class="input-group col">
        <label for="userPassword">Password</label>
        <input type="password" name="userPassword" id="userPassword" />
      </section>
      <section class="input-group col">
        <label for="userConfirmPassword">Confirm Password</label>
        <input
          type="email"
          name="userConfirmPassword"
          id="userConfirmPassword"
        />
      </section>
      <button type="submit" class="btn btn-primary">Create Account</button>
      <h5>• something went wrong!</h5>
    </form>
  </main>
</template>
