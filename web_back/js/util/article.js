// 文章管理
const article = {
    // 获取文章
    get: function (page) {
        return $.get(APILIST.article_get, {
            'page': page,
        })
    }
}