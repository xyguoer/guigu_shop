"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ajax;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//  封装ajax请求
function ajax() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  return new Promise(function (resolve, reject) {
    var promise;

    if (type === 'GET') {
      //  准备 url query 参数数据
      //  数据拼接字符串
      if (Object.keys(data).length !== 0) {
        var dataStr = '';
        Object.keys(data).forEach(function (key) {
          dataStr += key + '=' + data[key] + '&';
        }); //  去掉最后一个&

        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
      } // 发送 get 请求


      promise = _axios["default"].get(url);
    } else {
      // 发送 post 请求
      promise = _axios["default"].post(url, data);
    }

    promise.then(function (response) {
      resolve(response.data);
    })["catch"](function (error) {
      reject(error);
    });
  });
}