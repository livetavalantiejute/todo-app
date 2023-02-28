<script setup lang="ts">
import TodoItem from './TodoItem.vue'

import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()
const { statusTransitions }: { [key: string]: any } = todoStore

defineProps<{
  items: Array<{ [k: string]: any }>
}>()
</script>

<template>
  <div>
    <TodoItem
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :description="item.description"
      :options="statusTransitions[item.status]"
      :status="item.status"
    />
  </div>
</template>
