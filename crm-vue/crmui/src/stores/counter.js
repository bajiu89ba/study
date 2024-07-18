import { defineStore } from 'pinia'

import { ref, computed } from 'vue'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(99)
  function increment() {
    count.value++
  }

  const myCount = computed({
    get: () => {
      return count.value + 5
    },
    set: (value) => {
      count.value += value
    }
  })

  return { count, myCount, increment }
})
