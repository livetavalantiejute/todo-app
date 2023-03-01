<script setup lang="ts">
import { watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import NewToDo from './components/NewToDo.vue'
import TodoList from './components/TodoList.vue'

import { useTodoStore } from './stores/todo'

const todoStore = useTodoStore()

const { todos } = storeToRefs(todoStore)

const statusTransitions = {
  Opened: ['In progress', 'Closed'],
  'In progress': ['Opened', 'Done', 'Closed'],
  Done: ['Closed'],
  Closed: ['Opened']
}

watchEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos.value))
})
</script>

<template>
  <div class="container">
    <header class="row">
      <h1>To do app</h1>
    </header>
    <main>
      <div class="row mt-3">
        <NewToDo :statusTransitions="statusTransitions" />
      </div>
      <div class="row mt-5">
        <TodoList :items="todos" :statusTransitions="statusTransitions" />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
