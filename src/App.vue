<script setup lang="ts">
import { storeToRefs } from 'pinia'
import NewToDo from './components/NewToDo.vue'
import TodoList from './components/TodoList.vue'

import { useTodoStore } from './stores/todo'

const todoStore = useTodoStore()

const { todos } = storeToRefs(todoStore)
</script>

<template>
  <NewToDo />
  <TodoList :items="todos" />
</template>

<style scoped></style>
