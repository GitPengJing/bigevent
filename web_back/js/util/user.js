var user = {
    // 用户登录
    login: function (name, password) {
        return $.post(APILIST.user_login, {
            'user_name': name,
            'password': password
        })
    },
    // 用户退出
    logout: function () {
        return $.post(APILIST.user_logout)
    },
    // 获取用户信息
    getuser: function () { 
        return $.get(APILIST.user_getuser)
     }
}