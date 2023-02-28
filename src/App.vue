<script setup lang="ts">
import { watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import NewToDo from './components/NewToDo.vue'
import TodoList from './components/TodoList.vue'

import { useTodoStore } from './stores/todo'

const todoStore = useTodoStore()

const { todos } = storeToRefs(todoStore)

watchEffect(()=> {
  localStorage.setItem('todos', JSON.stringify(todos.value));
})

</script>

<template>
  <NewToDo />
  <TodoList :items="todos" />
</template>

<style scoped></style>
