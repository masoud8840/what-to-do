<template>
  <svg
    :width="props.width"
    :height="props.height || props.width"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.0303 5.0303L18.9697 3.9697L12 10.9394L5.03034 3.9697L3.96966 5.0303L10.9394 12L3.96966 18.9697L5.03034 20.0303L12 13.0606L18.9697 20.0303L20.0303 18.9697L13.0606 12L20.0303 5.0303Z"
      :fill="props.color"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    default: null,
  },
  color: {
    type: String,
    default: "#5F5D9C",
  },
});
</script>
