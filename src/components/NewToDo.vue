<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

import Input from './common/BaseInput.vue'
import Select from './common/BaseSelect.vue'
import Button from './common/BaseButton.vue'

const titleText = ref('')
const descriptionText = ref('')

const todoStore = useTodoStore()

const { statusTransitions } = todoStore
</script>

<template>
  <form>
    <Input
      :type="'text'"
      :placeholder="'Enter title'"
      :labelText="'Title'"
      :id="'title'"
      :modelValue="titleText"
      @update:modelValue="(newValue) => (titleText = newValue)"
    />
    <Input
      :type="'text'"
      :placeholder="'Enter description'"
      :labelText="'Description'"
      :id="'description'"
      :modelValue="descriptionText"
      @update:modelValue="(newValue) => (descriptionText = newValue)"
    />
    <Select :options="Object.keys(statusTransitions)" :id="'statuses'" :labelText="'Status'" />
    <Button :title="'Submit'" :type="'submit'" />
  </form>
</template>
