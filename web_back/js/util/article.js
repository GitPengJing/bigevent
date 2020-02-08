// 文章管理
var article = {
    // 获取文章
    get: function (state, page, id, type) {
        return $.get(APILIST.article_get, {
            'state': state,
            'page': page,
            'id': id,
            'type': type
        })
    }
}