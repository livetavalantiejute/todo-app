<script setup lang="ts">
defineProps<{
  options: Array<string>
  id: string
  labelText?: string
  modelValue: string
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label :for="id" v-if="labelText">{{ labelText }}</label>
    <select
      :id="id"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :value="modelValue"
    >
      <option :value="'placeholder'" disabled>Change status</option>
      <option v-for="(option, index) in options" :key="index">{{ option }}</option>
    </select>
  </div>
</template>
