<script setup lang="ts">
import TodoItem from './TodoItem.vue'

import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()
const { statusTransitions }: { [key: string]: any } = todoStore

const badgeColors: { [key: string]: any } = {
  Opened: 'bg-primary',
  'In progress': 'bg-info',
  Done: 'bg-success',
  Closed: 'bg-secondary'
}

defineProps<{
  items: Array<{ [k: string]: any }>
}>()
</script>

<template>
  <div>
    <h2 class="text-center">Current Todos</h2>
    <div class="row g-3">
      <TodoItem
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :options="statusTransitions[item.status]"
        :status="item.status"
        :badgeClass="badgeColors[item.status]"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      />
    </div>
  </div>
</template>