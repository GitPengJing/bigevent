// 文章管理
const article = {
    // 获取文章
    get: page => $.get(APILIST.article_get, { page })

}