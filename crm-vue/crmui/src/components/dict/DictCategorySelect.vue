<template>
  <el-select
    v-model="search"
    class="m-2"
    placeholder="请选择字典信息类别"
    size="small"
    clearable
  >
    <el-option
      v-for="item in dictCategories"
      :key="item"
      :label="item"
      :value="item"
    />
  </el-select>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

import { useDictStore } from '../../stores/dict'

const dictStroe = useDictStore()

const { dictCategories, search } = storeToRefs(dictStroe)

dictStroe.loadall()
</script>
