<script setup lang="ts">
import TodoItem from './TodoItem.vue'

const badgeColors: { [key: string]: any } = {
  Opened: 'bg-primary',
  'In progress': 'bg-info',
  Done: 'bg-success',
  Closed: 'bg-secondary'
}

defineProps<{
  items: Array<{ [k: string]: any }>
  statusTransitions: object
}>()
</script>

<template>
  <div>
    <h2 class="text-center">Current Todos</h2>
    <div class="row g-3" v-if="items.length">
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
    <p v-else class="text-center">There are no To do items added</p>
  </div>
</template>
