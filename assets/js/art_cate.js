$(function() {
    var layer = layui.layer
    var form = layui.form

    getlist()

    function getlist() {
        $.ajax({
            method: "get",
            url: "/my/article/cates",
            success: function(res) {
                $('tbody').html(template('tpl-table', res))
            }
        });
    }
    var indexAdd = null
    $("#btnAddCate").on('click', function() {
        indexAdd = layer.open({
            type: 1,
            area: ['500px', '250px'],
            title: '添加文章分类',
            content: $('#dialog-add').html()
        })
    })
    $('body').on('submit', '#form-add', function(e) {
            e.preventDefault()
            $.ajax({
                method: 'POST',
                url: '/my/article/addcates',
                data: $(this).serialize(),
                success: function(res) {
                    if (res.status !== 0) {
                        return layer.msg('新增分类失败！')
                    }
                    getlist()
                    layer.msg('新增分类成功！')
                        // 根据索引，关闭对应的弹出层
                    layer.close(indexAdd)
                }
            })
        })
        // 通过代理的形式，为删除按钮绑定点击事件
    $('tbody').on('click', '.btn-delete', function() {
        var id = $(this).attr('data-id')
            // 提示用户是否要删除
        layer.confirm('确认删除?', { icon: 3, title: '提示' }, function(index) {
            $.ajax({
                method: 'GET',
                url: '/my/article/deletecate/' + id,
                success: function(res) {
                    console.log(res);
                    if (res.status !== 0) {
                        return layer.msg('删除分类失败！')
                    }
                    layer.msg('删除分类成功！')
                    layer.close(index)
                    initArtCateList()
                }
            })
        })
    })

})