"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _MSite = _interopRequireDefault(require("@/pages/MSite/MSite"));

var _Search = _interopRequireDefault(require("@/pages/Search/Search"));

var _Order = _interopRequireDefault(require("@/pages/Order/Order"));

var _Profile = _interopRequireDefault(require("@/pages/Profile/Profile"));

var _Login = _interopRequireDefault(require("@/pages/Login/Login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  routes: [{
    path: '/',
    redirect: '/msite'
  }, {
    path: '/msite',
    component: _MSite["default"],
    meta: {
      footerShow: true
    }
  }, {
    path: '/search',
    component: _Search["default"],
    meta: {
      footerShow: true
    }
  }, {
    path: '/order',
    component: _Order["default"],
    meta: {
      footerShow: true
    }
  }, {
    path: '/profile',
    component: _Profile["default"],
    meta: {
      footerShow: true
    }
  }, {
    path: '/login',
    component: _Login["default"]
  }]
});

exports["default"] = _default;