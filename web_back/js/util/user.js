var user = {
    // 用户登录
    login: function (name, password) {
        return $.post(APILIST.user_login, {
            'user_name': name,
            'password': password
        })
    },
}