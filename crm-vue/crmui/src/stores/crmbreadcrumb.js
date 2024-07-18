import { defineStore } from 'pinia'

export const useCrmbreadcrumbStore = defineStore('crmbreadcrumb', {
  state: () => ({
    dept: ['系统管理', '部门管理'],
    dict: ['系统管理', '字典管理'],
    role: ['系统管理', '角色管理'],
    emp: ['系统管理', '员工管理'],
    prod: ['产品管理', '产品列表'],
    cust: ['产品管理', '产品列表'],
    assign: ['客户管理', '指派经理'],
    contact: ['客户管理', '联系人管理'],
    newchance: ['关系管理', '发现关系'],
    approve: ['关系管理', '审批关系'],
    mychance: ['关系管理', '我的关系']
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
    getCrmbreadcrumbByPageName: (state) => {
      return (pagename) => state[pagename]
    }
  },
  actions: {}
})
