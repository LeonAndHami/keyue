//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    blannceList:['../../image/yan-lb.jpg','../../image/yan-lb.jpg','../../image/yan-lb.jpg'],
    navList:["../../image/5ae01befN2494769f.png","../../image/5ae01befN2494769f.png","../../image/5ae01befN2494769f.png","../../image/5ae01befN2494769f.png","../../image/5ae01befN2494769f.png"],
    productList:[
      {
          img: "image/de08b2c9c772d8d8.jpg",
          des: "本高升降插座桌洞隐藏式厨房桌面家用带开关嵌入式多功能电源智能排插桌面接线板桌面插座 1个开关+3个五孔+1个USB（银色)",
          price: "999",
          point: "100"
      },
      {
          img: "image/de08b2c9c772d8d8.jpg",
          des: "本高升降插座桌洞隐藏式厨房桌面家用带开关嵌入式多功能电源智能排插桌面接线板桌面插座 1个开关+3个五孔+1个USB（银色)",
          price: "999",
          point: "100"
      },
      {
          img: "image/de08b2c9c772d8d8.jpg",
          des: "本高升降插座桌洞隐藏式厨房桌面家用带开关嵌入式多功能电源智能排插桌面接线板桌面插座 1个开关+3个五孔+1个USB（银色)",
          price: "999",
          point: "100"
      },
      {
          img: "image/de08b2c9c772d8d8.jpg",
          des: "本高升降插座桌洞隐藏式厨房桌面家用带开关嵌入式多功能电源智能排插桌面接线板桌面插座 1个开关+3个五孔+1个USB（银色)",
          price: "999",
          point: "100"
      }, 
  ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
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
          wx.showToast({
            title: '请授权登录！',
            icon: 'none',
            duration: 1500,
            success: function () {
         //定时器，未授权1.5秒后跳转授权页面
            setTimeout(function () {
            wx.reLaunch({
            url: '../shouquan/index',
               })
             }, 1500);
            }
           })
       }
      }
    })
    wx.getStorage({
      key: 'userInfo',
      success (res) {
        let data = res.data
        that.setData({
          userInfo:{
            avatarUrl:data.avatarUrl,
            nickName:data.nickName
          }
        })
      }
    })
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

