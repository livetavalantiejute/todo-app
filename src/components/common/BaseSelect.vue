<script setup lang="ts">
defineProps<{
  options: Array<any>
  id: string
  labelText: string
}>()
</script>

<template>
  <div>
    <label :for="id">{{ labelText }}</label>
    <select :id="id">
      <option v-for="(option, index) in options" :key="index">{{ option }}</option>
    </select>
  </div>
</template>
