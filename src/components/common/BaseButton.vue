<script setup lang="ts">
defineProps<{
  type: 'button' | 'submit' | 'reset'
  title: string
  buttonClass: string
}>()

defineEmits(['@click'])
</script>

<template>
  <div>
    <button :type="type" @click="$emit('@click')" :class="buttonClass">{{ title }}</button>
  </div>
</template>
