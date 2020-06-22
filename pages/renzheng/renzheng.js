// pages/renzheng/renzheng.js
var api = require('../../request/request.js').default;
Page({
  data: {
    userPhone:"",
    userName:""
  },
  onLoad(){

  },
  //获取openId
  userInfo(){
    let that = this
    let userInfo = {};
    let arr = []
    let flag = false
    userInfo.userPhone = that.data.userPhone
    userInfo.userName = that.data.userName
    if( userInfo.userPhone == "" || userInfo.userName == "" ){
      flag = false
    }else{
      flag = true
    }
    if( flag ){
      wx.login({
      success (res) {
        var code = res.code
        if (code) {
          //发起网络请求
          api.openId(code).then(res=>{
            let data = JSON.parse(res.data)
              wx.setStorage({
                data,
                key: 'openId',
              })
              arr.push(data,userInfo)
              return arr
          }).then(data=>{
            that.renzheng(data)
          })
        } 
      }
    })
    }
    
  },
  //认证接口
  renzheng(data){
    let parms = {}
    wx.getSetting({
      success(res) {
          wx.authorize({
            scope: 'scope.userInfo',
            success (res) {
              wx.getUserInfo({
                success: res=>{
                  let userInfo = res.userInfo
                  parms = userInfo
                  parms.OpenId = data[0].openid
                  parms.UserName = data[1].userName
                  parms.PhoneNumber = data[1].userPhone
                  api.renzheng(parms).then(res=>{
                    console.log(res,"89")
                  })
                }
              })
            }
          })
      }
    })
  },
  getUserPhone(e){
    this.setData({
      userPhone:e.detail.value
    })
  },
  getUserName(e){
    this.setData({
      userName:e.detail.value
    })
  },
})

