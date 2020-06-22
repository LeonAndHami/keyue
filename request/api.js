let host = 'http://192.168.10.103:8080'   // 设置API接口的ip地址和端口

let api = {

  login: host +'/user/login',     //用户登录的API
  
  register: host + '/user/register',   //用户注册的API

  openId: host + '/getopenid?code=', //获取openId

  renzheng: host + '/authorize', //获取openId
  //...

}

module.exports = api;    //暴露出来
