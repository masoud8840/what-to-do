<template>
  <header>
    <nav class="navbar container">
      <router-link :to="{ name: 'Home' }" class="brand">What To Do?</router-link>
      <ul>
        <li><router-link :to="{ name: 'TodosList' }">Todos</router-link></li>
        <li>
          <router-link :to="{ name: 'CollectionsList' }">Collections</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Signup' }" class="btn btn-primary">Create Account</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
