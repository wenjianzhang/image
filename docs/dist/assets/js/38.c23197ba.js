(window.webpackJsonp = window.webpackJsonp || []).push([[38], { 217: function (t, e, s) { "use strict"; s.r(e); var a = s(0), r = Object(a.a)({}, (function () { var t = this, e = t.$createElement, s = t._self._c || e; return s("div", { staticClass: "content" }, [t._m(0), t._v(" "), s("div", { staticClass: "tip custom-block" }, [s("p", { staticClass: "custom-block-title" }, [t._v("TIP")]), t._v(" "), s("p", [t._v("本节内容为 Golang 开发环境及 IDE 配置教程，仅针对 Golang 新选手，老司机请绕行。\n"), s("router-link", { attrs: { to: "/guide/ksks.html" } }, [t._v("老司机绕行")])], 1)]), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), s("p", [t._v("官方下载地址 "), s("a", { attrs: { href: "https://golang.org/dl/", target: "_blank", rel: "noopener noreferrer" } }, [t._v("https://golang.org/dl/"), s("OutboundLink")], 1), t._v(" ，可以选择适合自己操作系统的版本，默认下载最新版本：")]), t._v(" "), t._m(3), t._v(" "), t._m(4), t._v(" "), s("p", [s("code", [t._v("Golang")]), t._v(" 官网直接给出了安装指引，可以访问 "), s("a", { attrs: { href: "https://golang.org/doc/install", target: "_blank", rel: "noopener noreferrer" } }, [t._v("https://golang.org/doc/install"), s("OutboundLink")], 1), t._v(" 按照指引下一步就好了；")]), t._v(" "), t._m(5), t._v(" "), t._m(6), t._v(" "), s("p", [t._v("双击下载好的安装包，按照以下流程进行操作；")]), t._v(" "), t._m(7), t._v(" "), t._m(8), t._v(" "), t._m(9), t._v(" "), t._m(10), t._v(" "), t._m(11), t._v(" "), t._m(12), t._v(" "), t._m(13), t._v(" "), t._m(14), t._m(15), t._v(" "), s("div", { staticClass: "tip custom-block" }, [s("p", { staticClass: "custom-block-title" }, [t._v("TIP")]), t._v(" "), s("p", [t._v("如果您在安装过程中遇到了其他问题，也可以通过"), s("a", { attrs: { href: "https://github.com/go-admin-team/go-admin/issues", target: "_blank", rel: "noopener noreferrer" } }, [t._v("反馈"), s("OutboundLink")], 1), t._v("的方式一起解决您的问题，同时我们很期待您的建议。")])])]) }), [function () { var t = this.$createElement, e = this._self._c || t; return e("h1", { attrs: { id: "golang-开发环境" } }, [e("a", { staticClass: "header-anchor", attrs: { href: "#golang-开发环境" } }, [this._v("#")]), this._v(" Golang 开发环境")]) }, function () { var t = this.$createElement, e = this._self._c || t; return e("h2", { attrs: { id: "go-开发环境安装" } }, [e("a", { staticClass: "header-anchor", attrs: { href: "#go-开发环境安装" } }, [this._v("#")]), this._v(" go 开发环境安装")]) }, function () { var t = this.$createElement, e = this._self._c || t; return e("h3", { attrs: { id: "下载" } }, [e("a", { staticClass: "header-anchor", attrs: { href: "#下载" } }, [this._v("#")]), this._v(" 下载")]) }, function () { var t = this.$createElement, e = this._self._c || t; return e("p", [e("img", { attrs: { src: "https://raw.githubusercontent.com/wenjianzhang/image/master/img/godown.png", alt: "" } })]) }, function () { var t = this.$createElement, e = this._self._c || t; return e("h3", { attrs: { id: "安装" } }, [e("a", { staticClass: "header-anchor", attrs: { href: "#安装" } }, [this._v("#")]), this._v(" 安装")]) }, function () { var t = this.$createElement, e = this._self._c || t; return e("div", { staticClass: "tip custom-block" }, [e("p", { staticClass: "custom-block-title" }, [this._v("TIP")]), this._v(" "), e("p", [this._v("如果不清楚下载哪一个，可以根据下图 1.Go Download 处有提示适合的安装包")])]) }, function () { var t = this.$createElement, e = this._self._c || t; return e("p", [e("img", { attrs: { src: "https://raw.githubusercontent.com/wenjianzhang/image/master/img/go-install.png", alt: "" } })]) }, function () { var t = this.$createElement, e = this._self._c || t; return e("p", [e("img", { attrs: { src: "https://raw.githubusercontent.com/wenjianzhang/image/master/img/go-install-step1.png", alt: "" } })]) }, function () { var t = this.$createElement, e = this._self._c || t; return e("p", [e("img", { attrs: { src: "https://raw.githubusercontent.com/wenjianzhang/image/master/img/go-install-step2.png", alt: "" } })]) }, function () { var t = this.$createElement, e = this._self._c || t; return e("p", [e("img", { attrs: { src: "https://raw.githubusercontent.com/wenjianzhang/image/master/img/go-install-step3.png", alt: "" } })]) }, function () { var t = this.$createElement, e = this._self._c || t; return e("p", [e("img", { attrs: { src: "https://raw.githubusercontent.com/wenjianzhang/image/master/img/go-install-step4.png", alt: "" } })]) }, function () { var t = this.$createElement, e = this._self._c || t; return e("p", [this._v("到这一步就说明"), e("code", [this._v("Golang")]), this._v("已经安装好了！")]) }, function () { var t = this.$createElement, e = this._self._c || t; return e("h3", { attrs: { id: "验证" } }, [e("a", { staticClass: "header-anchor", attrs: { href: "#验证" } }, [this._v("#")]), this._v(" 验证")]) }, function () { var t = this.$createElement, e = this._self._c || t; return e("p", [this._v("检查一下"), e("code", [this._v("Golang")]), this._v("版本信息，")]) }, function () { var t = this.$createElement, e = this._self._c || t; return e("div", { staticClass: "language-sh line-numbers-mode" }, [e("pre", { pre: !0, attrs: { class: "language-text" } }, [e("code", [this._v("$ go version\ngo version go1.16.4 darwin/amd64\n")])]), this._v(" "), e("div", { staticClass: "line-numbers-wrapper" }, [e("span", { staticClass: "line-number" }, [this._v("1")]), e("br"), e("span", { staticClass: "line-number" }, [this._v("2")]), e("br")])]) }, function () { var t = this, e = t.$createElement, s = t._self._c || e; return s("p", [t._v("看到以上信息说明当前工作环境已经安装成功了"), s("code", [t._v("go1.16.4 darwin/amd64")]), t._v("，当前笔者因为是 MacOS 所以提示的是"), s("code", [t._v("darwin")]), t._v("。这个信息会根据操作系统当前安装的版本提示。"), s("code", [t._v("windows")]), t._v("和"), s("code", [t._v("linux")]), t._v(" 会有所不同；")]) }], !1, null, null, null); e.default = r.exports } }]);