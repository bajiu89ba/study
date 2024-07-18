<template>
  <el-cascader
    v-model="defaultValues"
    :options="getTree"
    :props="cascaderProps"
    clearable
    @change="cascaderChange"
    :disabled="props.disabled"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useAddiStore } from '../../stores/addi'

const emits = defineEmits(['areaSelectChanged'])

const cascaderChange = (cascaderValue) => {
  emits('areaSelectChanged', cascaderValue[cascaderValue.length - 1])
}

const props = defineProps({
  areano: {
    type: String,
    deafult: ''
  },
  disabled: {
    type: Boolean,
    deafult: false
  }
})

onMounted(() => {
  // 110101
  let temp = props.areano
  for (let i = 2; temp && temp.length >= i && i < 7; i += 2) {
    defaultValues.value.push(temp.substring(0, i))
  }
})

const defaultValues = ref([])

const addiStore = useAddiStore()

const { getTree } = storeToRefs(addiStore)

const cascaderProps = {
  value: 'addrno',
  label: 'aname',
  checkStrictly: true
}
</script>
