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
  badgeClass?: string
}>()

const changeStatus = (todoId: string, newStatus: string) => {
  editStatus(todoId, newStatus)
  selection.value = 'placeholder'
}
</script>

<template>
  <div>
    <div class="card p-3 shadow-sm">
      <h4 class="d-flex justify-content-end">
        <span class="badge" :class="badgeClass">{{ status }}</span>
      </h4>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <Select
        v-model="selection"
        :options="options"
        :id="'status-change'"
        @input="changeStatus(props.id, selection)"
        class="m-0"
      />
    </div>
  </div>
</template>
