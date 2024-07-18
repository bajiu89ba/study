import { defineStore } from 'pinia'

import $axios from '../utils/axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    currentPage: 1,
    pageSize: 5,
    total: 100, 
    modulepath: '/product',
    currentPagedList: []
  }),
  getters: {},
  actions: {
    qryPaged() {
      const path =
        this.modulepath + '/qry/paged/' + this.currentPage + '/' + this.pageSize
      $axios
        .get(path)
        .then((response) => {
          let data = response.data
          if (data.statusCode === 200) {
            data = data.result
            this.currentPage = data.current
            this.pageSize = data.size
            this.total = data.total
            this.currentPagedList = data.records
            console.log(this.currentPagedList)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
