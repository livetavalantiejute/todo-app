<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

import Select from './common/BaseSelect.vue'

const selection = ref('placeholder')

const todoStore = useTodoStore()

const { editStatus } = todoStore

const props = defineProps<{
  id: string
  title: string
  description: string
  options: Array<string>
  status: string
}>()

const changeStatus = (todoId: string, newStatus: string) => {
  editStatus(todoId, newStatus)
  selection.value = 'placeholder'
}
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>{{ status }}</h3>
    <p>{{ description }}</p>
    <Select
      v-model="selection"
      :options="options"
      :id="'status-change'"
      @input="changeStatus(props.id, selection)"
    />
  </div>
</template>
