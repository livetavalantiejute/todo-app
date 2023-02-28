import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const statusTransitions = {
    Opened: ['In progress', 'Closed'],
    'In progress': ['Opened', 'Done', 'Closed'],
    Done: ['Closed'],
    Closed: ['Opened']
  }

  return { statusTransitions }
})
