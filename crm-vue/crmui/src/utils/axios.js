import Axios from 'axios'

import { errormsg } from './message'

// 定义默认的基础路径
const baseUrl = 'http://localhost:18888'

//  定义令牌

let AUTH_TOKEN = 'TOken'
// 创建 axios对象
// Set config defaults when creating the instance
const instance = Axios.create({
  baseUrl,
  timeout: 5000, //
  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8' // default
})

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN

//  定义发送请求时携带数据的格式
instance.defaults.baseURL = baseUrl
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=utf8'
instance.defaults.headers.put['Content-Type'] = 'application/json;charset=utf8'
instance.defaults.headers.delete['Content-Type'] =
  'application/json;charset=utf8'

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response
  },
  function (error) {
    errormsg()
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance
