<template>
  <svg
    :width="props.width"
    :height="props.height || props.width"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 7.125H21.75V8.625H12V7.125ZM8.25 12H21.75V13.5H8.25V12ZM8.25 16.875H21.75V18.375H8.25V16.875ZM9 7.125H6V4.125H4.5V7.125H1.5V8.625H4.5V11.625H6V8.625H9V7.125Z"
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
