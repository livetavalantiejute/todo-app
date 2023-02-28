<script setup lang="ts">
import { watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import NewToDo from './components/NewToDo.vue'
import TodoList from './components/TodoList.vue'

import { useTodoStore } from './stores/todo'

const todoStore = useTodoStore()

const { todos } = storeToRefs(todoStore)

watchEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos.value))
})
</script>

<template>
  <div class="container">
    <div class="row">
      <h1 class="">To do app</h1>
    </div>
    <div class="row mt-3">
      <NewToDo />
    </div>
    <div class="row mt-5">
      <TodoList :items="todos" />
    </div>
  </div>
</template>

<style scoped></style>
