<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

import Input from './common/BaseInput.vue'
import Textarea from './common/BaseTextarea.vue'
import Select from './common/BaseSelect.vue'
import Button from './common/BaseButton.vue'

const titleText = ref('')
const descriptionText = ref('')
const selectedStatus = ref('Opened')

const errors: Ref<Array<string>> = ref([])

const todoStore = useTodoStore()
const { addTodo } = todoStore

defineProps<{
  statusTransitions: object
}>()

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
  <form class="border p-5 rounded-3 shadow-sm" @submit.prevent="submitTodo">
    <h2 class="text-center">Add a new To do</h2>
    <div class="alert alert-danger" role="alert" v-if="errors.length">
      <p>Please fix the following errors:</p>
      <ul>
        <li v-for="(err, index) in errors" :key="index">{{ err }}</li>
      </ul>
    </div>
    <div class="d-flex flex-column gap-3">
      <Input
        :type="'text'"
        :placeholder="'Enter title'"
        :labelText="'Title'"
        :id="'title'"
        v-model="titleText"
      />
      <Textarea
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
    </div>
    <Button
      :title="'Submit'"
      :type="'submit'"
      class="d-flex justify-content-end mt-3"
      :buttonClass="'btn btn-success'"
    />
  </form>
</template>
