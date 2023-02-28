<script setup lang="ts">
defineProps<{
  type: 'button' | 'submit' | 'reset'
  title: string
}>()

defineEmits(['@click'])
</script>

<template>
  <div>
    <button :type="type" @click="$emit('@click')">{{ title }}</button>
  </div>
</template>
