import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { uuid } from 'vue-uuid'

export const useTodoStore = defineStore('todo', () => {
  const statusTransitions = {
    Opened: ['In progress', 'Closed'],
    'In progress': ['Opened', 'Done', 'Closed'],
    Done: ['Closed'],
    Closed: ['Opened']
  }

  const todos: Ref<Array<object>> = ref([])

  const addTodo = (passedItem: object) => {
    const newItem = {
      id: uuid.v1(),
      ...passedItem
    }

    todos.value.push(newItem)
  }

  return { statusTransitions, todos, addTodo }
})
