<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

import Input from './common/BaseInput.vue'
import Select from './common/BaseSelect.vue'
import Button from './common/BaseButton.vue'


const titleText = ref('')
const descriptionText = ref('')
const selectedStatus = ref('Opened')

const errors: Ref<Array<string>> = ref([])

const todoStore = useTodoStore()

const { statusTransitions, addTodo } = todoStore

const submitTodo = () => {
  let isValid: boolean = false

  errors.value = []

  if (titleText.value.trim().length === 0) {
    const errMsg = 'Please provide a title'
    errors.value.push(errMsg)
  }

  if (descriptionText.value.trim().length === 0) {
    const errMsg = 'Please provide a description'
    errors.value.push(errMsg)
  }

  if (!errors.value.length) {
    isValid = true
  }

  if (isValid) {
    const newTodo: object = {
      title: titleText.value,
      description: descriptionText.value,
      status: selectedStatus.value
    }

    addTodo(newTodo)

    titleText.value = ''
    descriptionText.value = ''
    selectedStatus.value = 'Opened'
  }
}
</script>

<template>
  <form>
    <div>
      <p v-if="errors.length">Please fix the following errors:</p>
      <p v-for="(err, index) in errors" :key="index">{{ err }}</p>
    </div>
    <Input
      :type="'text'"
      :placeholder="'Enter title'"
      :labelText="'Title'"
      :id="'title'"
      v-model="titleText"
    />
    <Input
      :type="'text'"
      :placeholder="'Enter description'"
      :labelText="'Description'"
      :id="'description'"
      v-model="descriptionText"
    />
    <Select
      :options="Object.keys(statusTransitions)"
      :id="'statuses'"
      :labelText="'Status'"
      v-model="selectedStatus"
    />
    <Button :title="'Submit'" :type="'submit'" @click.prevent="submitTodo" />
  </form>
</template>
