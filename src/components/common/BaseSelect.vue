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
  <div class="row">
    <label :for="id" v-if="labelText" class="h6">{{ labelText }}</label>
    <select
      :id="id"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :value="modelValue"
      class="form-select"
    >
      <option :value="'placeholder'" disabled hidden>Change status</option>
      <option v-for="(option, index) in options" :key="index">{{ option }}</option>
    </select>
  </div>
</template>
