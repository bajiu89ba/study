<template>
  <el-table
    ref="customerTable"
    :data="currentList"
    border
    style="width: 100%"
    @row-click="handleRowClick"
  >
    <!-- 展开列 -->
    <el-table-column type="expand">
      <template #default="props">
        <div m="4">
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <h3 style="font-size: 24px; margin-left: 30px; margin-bottom: 15px">
              客户联系人
            </h3>
            <el-button
              type="primary"
              :icon="Plus"
              style="margin-right: 30px"
              @click="contactStore.preDate4Add(props.row.customerno)"
              >添加新联系人</el-button
            >
          </div>
          <el-table :data="customerContacts" border>
            <el-table-column prop="contactno" label="#" width="60" />
            <el-table-column prop="cname" label="姓名" />
            <el-table-column prop="gender" label="性别" />
            <el-table-column prop="job" label="职务" />
            <el-table-column prop="tel" label="办公电话" />
            <el-table-column prop="phone" label="手机" />
            <el-table-column fixed="right" label="名片" width="150">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <el-popover
                    placement="left"
                    :width="320"
                    popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                  >
                    <template #reference>
                      <el-avatar
                        src="https://avatars.githubusercontent.com/u/72015883?v=4"
                      />
                    </template>
                    <template #default>
                      <div
                        class="demo-rich-conent"
                        style="display: flex; gap: 16px; flex-direction: column"
                      >
                        <el-avatar
                          :size="60"
                          src="https://avatars.githubusercontent.com/u/72015883?v=4"
                          style="margin-bottom: 8px"
                        />
                        <div>
                          <p
                            class="demo-rich-content__name"
                            style="margin: 0; font-weight: 500"
                          >
                            {{ scope.row.cname }}
                          </p>
                          <p
                            class="demo-rich-content__mention"
                            style="
                              margin: 0;
                              font-size: 14px;
                              color: var(--el-color-info);
                            "
                          >
                            @{{ scope.row.phone }} / {{ scope.row.tel }}
                          </p>
                        </div>

                        <p class="demo-rich-content__desc" style="margin: 0">
                          {{ scope.row.info }}
                        </p>
                      </div>
                    </template>
                  </el-popover>
                  <el-button
                    type="primary"
                    @click="contactStore.preDate4mod(scope.row)"
                    :icon="Edit"
                    size="small"
                  />
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </template>
    </el-table-column>

    <el-table-column prop="cid" label="客户编号" />
    <el-table-column prop="cname" label="名称" />
    <el-table-column prop="cgrade" label="客户级别" />
    <el-table-column prop="satisfaction" label="满意度" />
    <el-table-column prop="service.ename" label="客户经理">
      <template #default="scope">
        {{
          !scope.row.service || !scope.row.service.ename
            ? ''
            : scope.row.service.ename
        }}
      </template>
    </el-table-column>

    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="handleRowClick(scope)"
        >
          联系人
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <ContactFormDialog></ContactFormDialog>
</template>

<script setup>
import { Plus, Edit } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCustomerStore } from '../../stores/customer'
import ContactFormDialog from './ContactFormDialog.vue'
import $axios from '../../utils/axios'

import { okmsg, errormsg } from '../../utils/message'

import { useContactStore } from '../../stores/contact'

const customerContacts = ref([])

const customerTable = ref()

const contactStore = useContactStore()

const customerStore = useCustomerStore()
const { currentList } = storeToRefs(customerStore)

const handleRowClick = async (row) => {
  row.expanded = !row.expanded

  if (row.expanded) {
    const path = '/contact/qry/Contact4Customer?cno=' + row.customerno
    const { data: res } = await $axios.get(path)

    if (res.statusCode === 200) {
      customerContacts.value = res.result
      customerTable.value.toggleRowExpansion(row, row.expanded)
      okmsg()
    } else if (res.statusCode === 202) {
      customerTable.value.toggleRowExpansion(row, row.expanded)
    } else {
      errormsg()
    }
  }
}
</script>
