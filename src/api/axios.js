import axios from 'axios'

// 参数为url请求的地址，参数为{}obj对象，默认为GET请求
export default function ajax(url, data = {}, type = 'GET') {
  if (type === 'GET') {
    //发送get请求
    return axios.get(url, {
      //配置对象
      params: data, //指定请求参数
    })
  } else {
    //发送post请求
    return axios.post(url, data)
  }
}
