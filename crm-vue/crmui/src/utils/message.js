import { ElMessage } from 'element-plus'

export const okmsg = () => {
  ElMessage({
    showClose: true,
    message: '系统提醒, this is a success message.',
    type: 'success'
  })
}

export const errormsg = () => {
  ElMessage({
    showClose: true,
    message: '系统提醒, 操作失败，请重试！',
    type: 'error'
  })
}

export const errorYourMsg = (msg) => {
  ElMessage({
    showClose: true,
    message: msg,
    type: 'error'
  })
}

export const infomsg = (msg) => {
  ElMessage({
    showClose: true,
    message: msg,
    type: 'info'
  })
}
