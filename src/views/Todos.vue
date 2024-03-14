<template>
  <main class="todos-view container">
    <ListBase
      v-for="(collection, index) in collectionsStore.collections"
      :key="index"
      :list-items="collection.todos"
      @on-add-item="handleAddItem(collection)"
    >
      <template #header>
        <h3>{{ collection.title }}</h3>
        <p class="text-muted">{{ collection.description }}</p>
      </template>

      <template #listEl="{ item }">
        <ItemBase
          :item-id="item.id"
          :item-title="item.title"
          :item-description="item.description"
          @on-edit-item="handleEditItem(collection, $event)"
          @on-delete-item="handleDeleteItem(collection, $event)"
        ></ItemBase>
      </template>
    </ListBase>
  </main>
</template>

<script setup>
import ListBase from "../components/UI/ListBase.vue";
import ItemBase from "../components/UI/ItemBase.vue";
import useCollectionsStore from "../store/Collections";
import useTodosStore from "../store/Todos";

const todosStore = useTodosStore();
const collectionsStore = useCollectionsStore();
collectionsStore.loadSavedItems();

function handleAddItem(collection) {
  todosStore.addEmpty(collection.id);
}

function handleEditItem(collection, todo) {
  todosStore.editTodo(collection.id, todo);
}
function handleDeleteItem(collection, todoId) {
  todosStore.deleteTodo(collection.id, todoId);
}
</script>
