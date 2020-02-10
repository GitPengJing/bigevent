var user = {
    // 用户登录
    login: (name, password) => $.post(APILIST.user_login,
        {
            'user_name': name,
            password
        })
    ,
    // 用户退出
    logout: () => $.post(APILIST.user_logout),
    // 获取用户信息
    getuser: () => $.get(APILIST.user_getuser)
}