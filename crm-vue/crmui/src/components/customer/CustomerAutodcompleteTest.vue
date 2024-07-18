<template>
  <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearchAsync"
    placeholder="Please input"
    @select="handleSelect"
  />
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, ref, watch } from 'vue'
import { useChanceStore } from '../../stores/chance'
const chanceStore = useChanceStore()
const { form } = storeToRefs(chanceStore)
const props = defineProps({
  state: {
    type: String
  }
})

watch(props.state, (newval, oldval) => {
  state.value = newval
  console.log(oldval)
})

const state = ref('东')

const links = ref([])

const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' }
  ]
}

let timeout
const querySearchAsync = (queryString, cb) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 3000 * Math.random())
}
const createFilter = (queryString) => {
  return (restaurant) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const handleSelect = (item) => {
  form.value.customer = item
  console.log(item)
}

onMounted(() => {
  links.value = loadAll()
})
</script>
