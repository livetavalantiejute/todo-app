import { ref } from 'vue'
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

  const todosFromStorage: Array<{ [k: string]: any }> = JSON.parse(localStorage.getItem('todos') || '[]');

  const todos: Ref<Array<{ [k: string]: any }>> = ref(todosFromStorage)

  console.log(todosFromStorage)
  console.log(todos)

  const addTodo = (passedItem: object) => {
    const newItem = {
      id: uuid.v1(),
      ...passedItem
    }

    todos.value.push(newItem)
  }

  const editStatus = (id: string, newStatus: string) => {
    const changedItem: { [k: string]: any } = todos.value.find(
      (item: { [k: string]: any }) => item.id === id
    ) as Object
    changedItem['status'] = newStatus
  }

  return { statusTransitions, todos, addTodo, editStatus }
})
