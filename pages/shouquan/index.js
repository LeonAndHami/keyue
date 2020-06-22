// pages/shouquan/index.js
Page({
  data: {

  },
  onLoad(){
    this.userInfo()
  },
  userInfo(){
    let that = this
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success (res) {
              wx.getUserInfo({
                success: res=>{
                  console.log(res)
                 
                }
              })
            }
          })
        }else{

        }
      }
    })
  },
  bindGetUserInfo (e) {
    this.userInfo()
    console.log(e.detail)
    wx.switchTab({
      url: '../index/index'
    })
    wx.setStorage({
      key:"userInfo",
      data:e.detail.userInfo
    })
  }
})

