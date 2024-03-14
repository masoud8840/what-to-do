<template>
  <main class="home-view container">
    <h1>Welcome to "What To Do" app</h1>
    <p class="text-muted">
      this app will help you to organize what you want to do for later
    </p>
    <router-link :to="{ name: 'TodosList' }" class="btn"
      >Add a new todo</router-link
    >
  </main>
</template>
