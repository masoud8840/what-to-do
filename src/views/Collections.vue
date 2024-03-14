<template>
  <main class="collections-view container">
    <ListBase
      :list-items="collectionsStore.getCollections"
      @on-add-item="handleAddItem"
    >
      <template #header>
        <h3>Collections</h3>
        <p>
          This page will allows you to add customized collections name and
          descriptions, which will show in the todos list page
        </p>
      </template>

      <template #listEl="{ item }">
        <ItemBase
          :item-id="item.id"
          :item-title="item.title"
          :item-description="item.description"
          @on-edit-item="handleEditItem"
          @on-delete-item="handleDeleteItem"
        />
      </template>
    </ListBase>
  </main>
</template>

<script setup>
import ListBase from "../components/UI/ListBase.vue";
import ItemBase from "../components/UI/ItemBase.vue";
import useCollectionsStore from "../store/Collections";
import { onBeforeRouteLeave } from "vue-router";

const collectionsStore = useCollectionsStore();

collectionsStore.loadSavedItems();

function handleAddItem() {
  collectionsStore.addEmpty();
}

function handleEditItem({ id, title, description }) {
  collectionsStore.editCollection(id, { title, description });
}

function handleDeleteItem(id) {
  collectionsStore.deleteCollection(id);
}

onBeforeRouteLeave((_, _1, next) => {
  const empties = collectionsStore.getEmpties;
  if (empties.length) {
    empties.map((col) => collectionsStore.deleteCollection(col.id));
  }
  next();
});
</script>
