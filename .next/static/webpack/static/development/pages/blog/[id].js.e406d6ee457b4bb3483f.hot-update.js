webpackHotUpdate("static\\development\\pages\\blog\\[id].js",{

/***/ "./pages/blog/[id].js":
/*!****************************!*\
  !*** ./pages/blog/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _posts_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../posts.json */ "./posts.json");
var _posts_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../posts.json */ "./posts.json", 1);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\bigcorps\\Documents\\LATHIF\\belajar-next-js\\pages\\blog\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import { useRouter } from 'next/router'

 // export default () => {
// 	const router = useRouter()
// 	const post = posts[router.query.id]
// 	if (!post) return <p></p>
// 	return (
// 		<>
// 			<h1>Blog Post</h1>
// 			<h3>{post.title}</h3>
// 			<p>{post.content}</p>
// 		</>
// 	)
// }

var Post = function Post(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Post")), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Blog Post"), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, props.post.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, props.post.content));
};

Post.getInitialProps = function (_ref) {
  var query = _ref.query,
      pathname = _ref.pathname,
      asPath = _ref.asPath;
  console.log('coba1');
  console.log(pathname);
  console.log('coba2');
  console.log(asPath);
  return {
    post: _posts_json__WEBPACK_IMPORTED_MODULE_1__[query.id]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.e406d6ee457b4bb3483f.hot-update.js.map