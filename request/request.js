import api from './api'   //  引入api.js文件

const apiRequest = (url, method, data, header) => {     //接收所需要的参数，如果不够还可以自己自定义参数
  let promise = new Promise((resolve, reject) =>{
    wx.request({
      url: url,
      data: data ? data : null,
      method: method,
      header: header ? header : { 'content-type':'application/x-www-form-urlencoded'},
      success: function (res) {
        //接口调用成功
        resolve(res);    //根据业务需要resolve接口返回的json的数据
      },
      fail: function (res) {
        // fail调用接口失败
        reject({ errormsg: '网络错误,请稍后重试', code: -1 });
      }
    })
  });
  return promise;  //注意，这里返回的是promise对象
}

//登录接口的调用
let login = (data)=>{
  return new Promise((resolve, reject) => {
    resolve (apiRequest(api.login, 'get', data))
  })
}
//注册接口的调用
let register= (data) => {
  return new Promise((resolve, reject) => {
    resolve(apiRequest(api.register, 'get', data))
  })
}
//获取openId
let openId= (data) => {
  return new Promise((resolve, reject) => {
    resolve(apiRequest(api.openId + data, 'get', data))
  })
}

//认证
let renzheng= (data) => {
  return new Promise((resolve, reject) => {
    resolve(apiRequest(api.renzheng, 'post', data))
  })
}

//最后需要将具体调用的函数暴露出，给具体业务调用
export default {
  // login: login,
  // register: register,
  openId,
  renzheng
}
