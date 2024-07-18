import { defineStore } from 'pinia'
import $axios from '../utils/axios'

import { okmsg, errormsg, errorYourMsg } from '../utils/message'
import { ElMessage, ElMessageBox } from 'element-plus'
export const usePlanStore = defineStore('plan', {
  state: () => ({
    modulepath: '/plan',
    dialogFormVisible: false,
    dialogFormTitle: '增加计划',
    currentList: [],
    form: {},
    /**
     * 当前机会对象
     */
    currentChance: {},
    feedBackDialogVisible: false,
    index: 0
  }),
  getters: {
    // double: (state) => state.count * 2
  },
  actions: {
    async feedBack() {
      const path = this.modulepath + '/mod'
      const { data: res } = await $axios.post(path, this.form)
      if (res.statusCode === 200) {
        this.currentList.splice(this.index, 1, this.form)
        this.feedBackDialogVisible = false
      } else {
        errorYourMsg('修改 失败，请重试！')
      }
    },
    preData4Feedback(plan, index) {
      this.index = index
      this.form = JSON.parse(JSON.stringify(plan))
      this.form.donedate = new Date()
      this.feedBackDialogVisible = true
    },

    async modPlan() {
      this.form.ft = new Date()
      const path = this.modulepath + '/mod'
      const { data: res } = await $axios.post(path, this.form)
      if (res.statusCode === 200) {
        this.currentList.splice(this.index, 1, this.form)
        this.currentList.sort((x, y) => {
          if (x.dt > y.dt) return 1
          else if (x.dt < y.dt) return -1
          else return 0
        })
        this.dialogFormVisible = false
      } else {
        errorYourMsg('修改 失败，请重试！')
      }
    },
    preData4Mod(plan, index) {
      this.index = index
      this.form = JSON.parse(JSON.stringify(plan))
      this.dialogFormVisible = '编辑计划内容'
      this.dialogFormVisible = true
    },

    async delByid(plan, index) {
      ElMessageBox.confirm(
        `系统将要删除 ${plan.dt} 日的 ${plan.info} 行动. 继续吗?`,
        '删除计划提醒',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }
      )
        .then(async () => {
          const path = this.modulepath + '/del/byid?planid=' + plan.planid
          const { data: res } = await $axios.delete(path)
          if (res.statusCode === 200) {
            this.currentList.splice(index, 1)
          } else {
            errorYourMsg('删除失败，请重试！')
          }
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: 'Delete canceled'
          })
        })
    },
    async qryByChanceno() {
      // const chance = tablerow.row
      this.currentList.length = 0
      const path =
        '/plan/qry/bychanceno?chanceno=' + this.currentChance.chanceno
      const { data: res } = await $axios.get(path)
      if (res.statusCode === 200) {
        this.currentList = res.result
        this.currentList.sort((x, y) => {
          if (x.dt > y.dt) return 1
          else if (x.dt < y.dt) return -1
          else return 0
        })
      } else {
        errorYourMsg('查询计划失败，请重试！')
      }
    },
    async addPlan() {
      const path = this.modulepath + '/add'
      if (this.form.dt == null) this.form.dt = new Date()
      const { data: res } = await $axios.put(path, this.form)
      if (res.statusCode === 200) {
        this.form.planid = res.result
        this.currentList.push(this.form)
        this.currentList.sort((x, y) => {
          if (x.dt > y.dt) return 1
          else if (x.dt < y.dt) return -1
          else return 0
        })
        this.dialogFormVisible = false
      } else {
        errorYourMsg('增加失败，请重试！')
      }
    },
    save() {
      if (this.form.planid === -1) {
        this.addPlan()
      } else {
        this.modPlan()
      }
    },
    preData4Add(chance) {
      this.dialogFormTitle = '增加机会 ' + chance.title + ' 的活动计划 '
      this.form = {}
      this.form.planid = -1
      this.form.chanceno = chance.chanceno
      this.form.serviceno = chance.service
      this.form.info = ''
      this.form.outcome = '未执行'
      this.form.ft = new Date()
      this.form.dt = new Date()
      this.dialogFormVisible = true
    }
  }
})
