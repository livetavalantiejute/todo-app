<script setup lang="ts">
import { storeToRefs } from 'pinia'
import NewToDo from './components/NewToDo.vue'
import TodoList from './components/TodoList.vue'

import { useTodoStore } from './stores/todo'

const todoStore = useTodoStore()

const { todos } = storeToRefs(todoStore)
</script>

<template>
  <!--  | Add a todo

        | To do list
        |-- To do item
  -->
  <NewToDo />
  <TodoList :items="todos"/>
{{ todos }}
</template>

<style scoped></style>
