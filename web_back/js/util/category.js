// 文章类别管理
var category = {
    get: function () { 
        return $.get(APILIST.category_get)
     },
}