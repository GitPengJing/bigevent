// 文章类别管理
const category = {
    // 获取文章类别
    get: () => $.get(APILIST.category_get),

    // 添加文章类别
    add: (name, slug) => $.post(APILIST.category_add, {
        name,
        slug
    }),

    // 删除文章类别
    delete: id => $.post(APILIST.category_delete, { id }),

    // 编辑文章类别
    edit: (id, name, slug) => $.post(APILIST.category_edit,
        {
            id,
            name,
            slug
        })
}