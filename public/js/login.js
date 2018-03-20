
(function () {
    // 表单验证
    $.validator.setDefaults({
        errorElement: "span",
        errorPlacement: function(e, r) {
            e.appendTo(r.parent());
        },
        submitHandler: function(form) {  // 通过验证后运行的函数，里面要加上表单提交的函数，否则表单不会提交。
            $("#regiestbtn").attr('disabled','disabled');
            $.ajax({
                uri: '/login',
                type: 'post',
                dataType: 'json',
                data: {
                    username: $('#username').val(),
                    password: $('#password').val()
                },
                success: function(data){
                    $('.err_text').remove();
                    if(!data.result && data.info == '用户名不存在'){
                        $('#username').parent().append('<div class="err_text"><i class="fa fa-times-circle"></i>用户名不存在</div>');
                        $("#regiestbtn").removeAttr('disabled');
                    }else if(!data.result && data.info == '密码错误') {
                        $('#password').parent().append('<div class="err_text"><i class="fa fa-times-circle"></i>密码错误</div>');
                        $("#regiestbtn").removeAttr('disabled');
                    }else if(data.result && data.info == '密码正确'){
                        window.location.href="/";
                    }
                },
                error: function(data){
                    alert('登录失败，服务器返回错误信息');
                }
            });
            return false;
        }
    });
    $().ready(function() {
        var e = "<i class='fa fa-times-circle'></i> ";
        $("#ajax-contact").validate({
            rules: {
                username: {
                    required: !0,
                    isUser: '用户名为4到16位（字母，数字，下划线，减号）'
                },
                password: {
                    required: !0,
                    isPass: '8到16位数字与字母组合'
                }
            },
            messages: {
                username: {
                    required: e+'请输入账号',
                    isUser: e+"用户名为4到16位（字母，数字，下划线，减号）"
                },
                password: {
                    required: e+'密码不能为空',
                    isPass: e+'8到16位数字与字母组合'
                }
            }
        });
    });

    jQuery.validator.addMethod("isUser", function(value, element) {
        var isUser = /^[a-zA-Z0-9_-]{4,16}$/;
        return this.optional(element) || (isUser.test(value));
    }, "用户名不合法");

    jQuery.validator.addMethod("isPass", function(value, element) {
        var isPass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        return this.optional(element) || (isPass.test(value));
    }, "密码不合法");
})();