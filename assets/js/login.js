$(function() {
    //点击注册键，登录框隐藏，注册框显示
    $('#reg').on('click', function() {
            $('.login_box').hide()
            $('.reg_box').show()
        })
        //点击登录键，注册框隐藏，登录框显示
    $('#login').on('click', function() {
            $('.login_box').show()
            $('.reg_box').hide()
        })
        // 从 layui 中获取 form 对象
    var form = layui.form
        // 通过 form.verify() 函数自定义校验规则
    form.verify({
        // 自定义了一个叫做 pwd 校验规则
        zh: [/^[a-zA-Z0-9_-]{4,16}$/, '用户名必须是4到16位，且不能出现空格'],
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
    })
})