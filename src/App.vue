<template>
  <TheNavbar />
  <router-view></router-view>
</template>

<script setup>
import TheNavbar from "./components/layout/TheNavbar.vue";
import { load, save } from "./composables/localstorage";

// initialize the first collection
const collectionsPreset = [
  {
    id: "1",
    title: "What you want to do first?",
    description:
      "Welcome to the what to do app, feel free to add/edit/delete todos",
    todos: [
      {
        id: "1.1",
        title: "Hello World",
        description: "this is your first todo",
      },
    ],
  },
];

const savedCollections = load("collections");
if (savedCollections.length === 0) {
  save("collections", collectionsPreset);
}
</script>
