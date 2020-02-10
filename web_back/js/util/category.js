// 文章类别管理
const category = {
    // 获取文章类别
    get: function () {
        return $.get(APILIST.category_get)
    },

    // 添加文章类别
    add: function (name, slug) {
        return $.post(APILIST.category_add,
            {
                'name': name,
                'slug': slug
            })
    },

    // 删除文章类别
    delete: function (id) {
        return $.post(APILIST.category_delete,
            {
                'id': id
            })
    },

    // 编辑文章类别
    edit: function (id, name, slug) {
        return $.post(APILIST.category_edit,
            {
                'id': id,
                'name': name,
                'slug': slug
            })
    }

}