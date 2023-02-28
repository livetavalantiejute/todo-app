<script setup lang="ts">
defineProps<{
  type: string
  placeholder: string
  modelValue: string
  labelText: string
  id: string
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label :for="id">{{ labelText }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
