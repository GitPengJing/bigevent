// 文章类别管理
var category = {
    // 获取文章类别
    get: function () {
        return $.get(APILIST.category_get)
    },
    // 添加文章类别
    add: function (name, slug) {
        return $.post(APILIST.category_add, {
            'name': name,
            'slug': slug
        })
    }

}