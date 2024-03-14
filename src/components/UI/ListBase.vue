<template>
  <section class="list_base-container">
    <section class="list_base_container-header">
      <section>
        <slot name="header"></slot>
      </section>
      <button class="btn" @click="handleAddItem">
        <PlusList :width="24" />
      </button>
    </section>
    <ul class="list_base_container-list">
      <li
        class="list_base_container-item"
        v-for="todo in props.listItems"
        :key="todo.id"
      >
        <slot name="listEl" :item="todo"> </slot>
      </li>
    </ul>
  </section>
</template>

<script setup>
import PlusList from "../icons/PlusList.vue";

const emits = defineEmits(["onAddItem"]);
const props = defineProps({
  listItems: {
    type: Array,
    required: true,
  },
});

function handleAddItem() {
  emits("onAddItem", props.listItems.length);
}
</script>
