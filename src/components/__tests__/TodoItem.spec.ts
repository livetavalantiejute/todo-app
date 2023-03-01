import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import { createPinia } from 'pinia'

import { useTodoStore } from '@/stores/todo'

import TodoItem from '../TodoItem.vue'

describe('TodoItem', () => {
  it('renders properly', async () => {
    const data = {
      id: '0',
      title: 'Todo title',
      description: 'Description',
      status: 'In progress'
    }
    const wrapper = mount(TodoItem, {
      props: {
        options: ['Opened', 'Closed', 'Done'],
        ...data
      },
      global: {
        plugins: [createPinia()] // initializes Pinia
      }
    })

    expect(wrapper.exists())
  })

  it('changes status', async () => {
    const data = ref({
      id: '0',
      title: 'Todo title',
      description: 'Description',
      status: 'In progress'
    })

    const store = useTodoStore()
    store.addTodo(data.value)
    store.editStatus('0', 'Opened')

    expect(data.value.status === 'Opened')
  })
})
