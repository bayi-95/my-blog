/**
 * Created by bayi on 1/6/20
 */

import { Notification } from 'element-ui'
import jsonp from 'superagent-jsonp'
import request from 'superagent'

export function fetchSessionKey() {
  request.get('https://openapi.baidu.com/oauth/2.0/token')
    .use(jsonp({ timeout: 1000 }))
    .query({
      grant_type: 'client_credentials',
      client_id: 'B6rE3pbNVQq8uUxyrePOfyME',
      client_secret: 'TTfnYu5gddVHRikwFX9Ycu69kfzd86VF'
    })
    .query({ output: 'jsonp' })
    .then(res => {
      debugger
      if (res && res.access_token) {
        return res.access_token
      } else {
        showError()
      }
    })
    .catch(() => {
      showError()
    })
}

function showError() {
  Notification({
    message: '百度语音合成 - sessionKey 请求异常',
    title: '错误',
    type: 'error',
    duration: 5 * 1000
  })
  return false
}

