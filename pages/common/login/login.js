/**
 * @created by jiangcheng 2017-11-15
 * @updated by
 * @description 登录页
 */
define(function (require, exports) {
  function genUUID (len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;

    if (len) {
      // Compact form
      for (i = 0; i < len; i++) {
        uuid[i] = chars[0 | Math.random() * radix];
      }
    } else {
      // rfc4122, version 4 form
      var r;

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      // Fill in random data. At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    return uuid.join('');
  }

  // 刷新图形验证码
  var freshImageCodeFn = function () {
    console.log(clientId, 'clientId');
    $('#imageCodePicture').attr('src', yufp.service.getUrl({
      url: backend.uaaService + '/api/codeImage?clientId=' + clientId + '&t=' + (new Date()).getTime()
    }));
  };

  var clientId = genUUID(16, 16);

  /**
     * 页面加载完成时触发
     * @param hashCode 路由ID
     * @param data 传递数据对象
     * @param cite 页面站点信息
     */
  exports.ready = function (hashCode, data, cite) {
    var username = $('#username').val();
    $('#username').val('').focus().val(username);

    $('#imageCodePicture').click(function () {
      freshImageCodeFn();
    });
    // 加载图形验证码
    freshImageCodeFn();

    // //RSA加密
    var getRSAPublicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDAYwQ81rc1KW8tTYpxrLS3ArVxB40otmbWyXwgDQRkLsCuQKiq6KZgAM/8sJuI12S1JVOXnMu5d420vKFFS/+Ibz4TxqjhLmgownaguMTbAGBzIPvfN5lL52mDmm/CvKu2YPCFvZV8YulNTCexvuj7OiWRUXpAbaQqu5tPOjGytQIDAQAB';
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(getRSAPublicKey);
    // 柜员登陆
    var gyLogin = function () {
      yufp.service.request({
        url: backend.uaaService + '/api/gy/ahref',
        method: 'POST',
        data: {clientId: '0'},
        callback: function (code, message, response) {
          if (response && response.code == 0) {
            $('#gyLoginA').attr('href', response.rows);
          } else {
          }
        }
      });
    };

    // 柜员登陆B
    var gyLoginB = function () {
      yufp.service.request({
        url: backend.uaaService + '/api/gy/ahref',
        method: 'POST',
        data: {clientId: '0'},
        callback: function (code, message, response) {
          if (response && response.code == 0) {
            window.open(response.rows);
          } else {
          }
        }
      });
    };

    // 登录
    var loginFn = function () {
    // pubkeyHexFn();
      if ($('#username').val() == '') {
        $('#msg').text('请输入用户名!').show();
        $('#username').focus();
        return;
      }
      if ($('#password').val() == '') {
        $('#msg').text('请输入密码!').show();
        $('#password').focus();
        return;
      }
      if ($('#imageCode').val() == '') {
        $('#msg').text('请输入验证码!').show();
        $('#imageCode').focus();
        return;
      }
      $('#msg').hide();

      yufp.service.request({
        url: backend.uaaService + '/api/login/pubkey',
        method: 'POST',
        callback: function (code, message, response) {
          console.log(response, 'responseresponse');

          if (response && response.code == 0) {
            var data = {
              usercode: $('#username').val(),
              password: encrypt.encrypt($('#password').val()), // rsa方式
              //   password: $('#password').val(),
              imageCode: $('#imageCode').val(),
              clientId: clientId,
              grant_type: 'password'
            };
            var headers = {
              'Content-Type': 'application/json; charset=UTF-8',
              // "Content-Type": "application/application/x-www-form-urlencoded; charset=UTF-8",
              'Authorization': 'Basic d2ViX2FwcDo='
            };
            console.log(data, 'ddd');
            yufp.service.request({
              needToken: false,
              url: backend.uaaService + '/api/oauth/token/bak',
              method: 'POST',
              headers: headers,
              data: data,
              callback: function (code, message, response) {
                console.log(code, message, response, 'code, message, response');
                if (response && response.code == '900000') {
                  var msg = response && response.message ? response.message : '图形校验码验证失败！';
                  $('#msg').text(msg).show();

                  // 刷新图形验证码
                  freshImageCodeFn();
                  $('#imageCode').val('');
                } else if (response && response.code == 0 && response.rows != '') {
                  if (response.message === 'IS_INIT_PWD_N') {
                    yufp.router.to('modifyUserPassword');
                  } else {
                    var token = response && response.rows;
                    yufp.service.putToken(token);
                    yufp.session.loadUserSession(function () {
                      yufp.router.to('frame');
                    });
                  }
                } else {
                  var msg = response && response.message ? response.message : '登录失败，请联系系统管理员！';
                  $('#msg').text(msg).show();
                  // 刷新图形验证码
                  freshImageCodeFn();
                  $('#imageCode').val('');
                }
              }
            });
          } else {
            console.log('公钥获取失败');
          }
        }
      });
    };

    $('#submitBtn').click(function () {
      loginFn();
    });

    $('#username').keyup(function () {
        	if (event.keyCode == '13') {
        		loginFn();
        	}
    });

    $('#password').keyup(function () {
      if (event.keyCode == '13') {
        loginFn();
      }
    });

    $('#imageCode').keyup(function () {
      if (event.keyCode == '13') {
        loginFn();
      }
    });

    $('#gyLoginA').click(function () {
      gyLogin();
    });

    $('#gyLoginBtn').click(function () {
      gyLoginB();
    });
  };
});