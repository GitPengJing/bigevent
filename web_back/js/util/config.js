// 接口地址
// 基地址
var BASEURL = 'http://localhost:8000';

// 接口列表
var APILIST = {
    // 用户登录
    user_login: BASEURL + '/admin/login',
    // 用户退出
    user_logout: BASEURL + '/admin/logout',
    // 获取用户信息
    user_getuser: BASEURL + '/admin/getuser',


    // 获取文章类别
    category_get: BASEURL + '/admin/category_search',
    // 添加文章类别
    category_add: BASEURL + '/admin/category_add',
    // 删除文章类别
    category_delete: BASEURL + '/admin/category_delete',

}