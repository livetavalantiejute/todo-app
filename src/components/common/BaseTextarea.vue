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
  <div class="row">
    <label :for="id" class="h6">{{ labelText }}</label>
    <textarea
      :type="type"
      :placeholder="placeholder"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="form-control"
    ></textarea>
  </div>
</template>