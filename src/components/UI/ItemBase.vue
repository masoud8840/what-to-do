<template>
  <h5 v-if="!isEditing">{{ props.itemTitle }}</h5>
  <input
    type="text"
    name="itemTitle"
    id="itemTitle"
    v-model="item.title"
    v-else
  />

  <p class="text-muted" v-if="!isEditing">{{ props.itemDescription }}</p>
  <textarea
    type="text"
    class="text-muted"
    name="itemDescription"
    id="itemDescription"
    cols="15"
    rows="2"
    v-model="item.description"
    v-else
  ></textarea>
  <section :class="`todos_item-actions ${!isEditing ? 'middle' : ''}`">
    <button class="btn" @click="handleEdit">
      {{ isEditing ? "OK" : "Edit" }}
    </button>
    <button class="btn" @click="isDeleting = true">Delete</button>
  </section>

  <section class="confirm_msg-container" v-if="isDeleting">
    <h5>Are you sure to delete this item?</h5>

    <section class="confirm_msg-actions">
      <button class="btn btn-white" @click="handleDelete">Yes</button>
      <button class="btn btn-white" @click="isDeleting = false">No</button>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  itemId: {
    type: String,
    required: true,
  },
  itemTitle: {
    type: String,
    default: "",
  },
  itemDescription: {
    type: String,
    default: "",
  },
});
const emits = defineEmits(["onEditItem", "onDeleteItem"]);

const item = ref({
  title: props.itemTitle,
  description: props.itemDescription,
});

const isEditing = ref(false);
isEditing.value = props.itemTitle === "" && props.itemDescription === "";

function handleEdit() {
  if (isEditing.value === true && item.value.title.trim() === "") {
    return;
  }

  if (isEditing.value === true) {
    emits("onEditItem", { id: props.itemId, ...item.value });
  }
  isEditing.value = !isEditing.value;
}

const isDeleting = ref(false);
function handleDelete() {
  if (isDeleting.value === true) emits("onDeleteItem", props.itemId);
  isDeleting.value = false;
}
</script>
