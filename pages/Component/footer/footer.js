// pages/Component/dialog/dialog.js
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataIndex:{
      type:Number,
      value:0 
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    "selected":0,
    "custom": true,
    "color": "#7A7E83",
    "selectedColor": "#333333",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "/pages/index/index",
        "index":"0",
        "iconPath": "/image/home.png",
        "selectedIconPath": "/image/homeCur.png",
        "text": "首页"
      },
      {
        "pagePath": "/pages/shouquan/index",
        "index":"1",
        "iconPath": "/image/home.png",
        "selectedIconPath": "/image/homeCur.png",
        "text": "分类"
      },
      {
        "pagePath": "/pages/index/index",
        "index":"2",
        "iconPath": "/image/home.png",
        "selectedIconPath": "/image/homeCur.png",
        "text": "购物车"
      },
      {
        "pagePath": "/pages/personal/index",
        "index":"3",
        "iconPath": "/image/my1.png",
        "selectedIconPath": "/image/myCur.png",
        "text": "我的"
      }
    ]
  },
  
  attached(){
    let that = this
    that.setData({
      selected:that.data.dataIndex
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    goUrl(e){
      let that = this
      let data = e.currentTarget.dataset
      that.setData({
        selected: that.data.dataIndex
      })
      wx.switchTab({
        url: data.item.pagePath
      })
    }
  }
})
