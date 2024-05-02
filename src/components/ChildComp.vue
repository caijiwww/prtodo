<script setup>
const emit = defineEmits(['response'])

emit('response', 'hello from childdfgdfgdf')
</script>

<template>
  <h2>Child component</h2>
  <br>
  <slot><br>Fallback content</slot>
</template>