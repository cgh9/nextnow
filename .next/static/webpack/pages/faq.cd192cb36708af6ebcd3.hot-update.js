self["webpackHotUpdate_N_E"]("pages/faq",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./styles/components/Layout.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./styles/components/Layout.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Layout_header__2iLWX {\n  max-width: 800px;\n  margin: 0px auto;\n  padding: 15px 20px;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: space-between;\n     -moz-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-pack: justify;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n.Layout_header__2iLWX > div {\n  width: auto;\n  -webkit-flex: 1 1 50%;\n     -moz-box-flex: 1;\n          flex: 1 1 50%;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Layout_header__logo__2Zu-m a {\n  font-size: 24px;\n  color: #112a46;\n  -webkit-transition: 50ms ease-in-out;\n  transition: 50ms ease-in-out;\n}\n.Layout_header__logo__2Zu-m a:hover {\n  opacity: 0.8;\n}\n\n.Layout_header__links__2tkmn {\n  -webkit-justify-content: flex-end;\n     -moz-box-pack: end;\n          justify-content: flex-end;\n}\n.Layout_header__links__2tkmn ul {\n  list-style-type: none;\n  margin: 0px;\n  padding: 0px;\n}\n.Layout_header__links__2tkmn ul li {\n  display: inline-block;\n  margin: 0px 15px;\n}\n.Layout_header__links__2tkmn ul li a {\n  color: #838383;\n  font-size: 18px;\n}\n.Layout_header__links__2tkmn ul li a:hover {\n  text-decoration: underline;\n}\n.Layout_header__links__2tkmn ul li:nth-last-of-type(1) {\n  margin-right: 0px;\n}\n\n.Layout_header__links_active__2DGAB {\n  color: black !important;\n}\n\n.Layout_footer__2GYdL {\n  padding: 20px 0px;\n  text-align: center;\n}\n.Layout_footer__2GYdL p {\n  font-size: 20px;\n  color: #720808;\n}\n.Layout_footer__2GYdL p > a {\n  text-decoration: underline;\n  color: #838383;\n}", "",{"version":3,"sources":["webpack://Layout.module.scss"],"names":[],"mappings":"AACA;EACE,gBAAA;EACA,gBAAA;EACA,kBAAA;EAGA,qBAAA;EAAA,iBAAA;EAAA,aAAA;EACA,sCAAA;KAAA,sBAAA;UAAA,8BAAA;EACA,yBAAA;EACA,2BAAA;KAAA,sBAAA;UAAA,mBAAA;AAFF;AAIE;EACE,WAAA;EACA,qBAAA;KAAA,gBAAA;UAAA,aAAA;EACA,qBAAA;EAAA,iBAAA;EAAA,aAAA;EACA,2BAAA;KAAA,sBAAA;UAAA,mBAAA;AAFJ;;AAOE;EACE,eAAA;EACA,cAAA;EACA,oCAAA;EAAA,4BAAA;AAJJ;AAMI;EACE,YAAA;AAJN;;AASA;EACE,iCAAA;KAAA,kBAAA;UAAA,yBAAA;AANF;AAQE;EACE,qBAAA;EACA,WAAA;EACA,YAAA;AANJ;AAQI;EACE,qBAAA;EACA,gBAAA;AANN;AAQM;EACE,cAAA;EACA,eAAA;AANR;AAQQ;EACE,0BAAA;AANV;AAUM;EACE,iBAAA;AARR;;AAcA;EACE,uBAAA;AAXF;;AAcA;EACE,iBAAA;EACA,kBAAA;AAXF;AAaE;EACE,eAAA;EACA,cAAA;AAXJ;AAaI;EACE,0BAAA;EACA,cAAA;AAXN","sourcesContent":["// Header\n.header {\n  max-width: 800px;\n  margin: 0px auto;\n  padding: 15px 20px;\n\n  // Alignment\n  display: flex;\n  justify-content: space-between;\n  -webkit-box-pack: justify;\n  align-items: center;\n\n  > div {\n    width: auto;\n    flex: 1 1 50%;\n    display: flex;\n    align-items: center;\n  }\n}\n\n.header__logo {\n  a {\n    font-size: 24px;\n    color: #112a46;\n    transition: 50ms ease-in-out;\n\n    &:hover {\n      opacity: 0.8;\n    }\n  }\n}\n\n.header__links {\n  justify-content: flex-end;\n\n  ul {\n    list-style-type: none;\n    margin: 0px;\n    padding: 0px;\n\n    li {\n      display: inline-block;\n      margin: 0px 15px;\n\n      a {\n        color: #838383;\n        font-size: 18px;\n\n        &:hover {\n          text-decoration: underline;\n        }\n      }\n\n      &:nth-last-of-type(1) {\n        margin-right: 0px;\n      }\n    }\n  }\n}\n\n.header__links_active {\n  color: rgb(0, 0, 0) !important; //클릭시 메뉴 강조\n}\n\n.footer {\n  padding: 20px 0px;\n  text-align: center;\n\n  p {\n    font-size: 20px;\n    color: #720808;\n\n    > a {\n      text-decoration: underline;\n      color: #838383;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": "Layout_header__2iLWX",
	"header__logo": "Layout_header__logo__2Zu-m",
	"header__links": "Layout_header__links__2tkmn",
	"header__links_active": "Layout_header__links_active__2DGAB",
	"footer": "Layout_footer__2GYdL"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmFxLmNkMTkyY2IzNjcwOGFmNmViY2QzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsaUVBQWlFLHFCQUFxQixxQkFBcUIsdUJBQXVCLDBCQUEwQixzQkFBc0Isa0JBQWtCLDJDQUEyQyw4QkFBOEIsMkNBQTJDLDhCQUE4QixnQ0FBZ0MsOEJBQThCLGdDQUFnQyxHQUFHLCtCQUErQixnQkFBZ0IsMEJBQTBCLHdCQUF3QiwwQkFBMEIsMEJBQTBCLHNCQUFzQixrQkFBa0IsZ0NBQWdDLDhCQUE4QixnQ0FBZ0MsR0FBRyxtQ0FBbUMsb0JBQW9CLG1CQUFtQix5Q0FBeUMsaUNBQWlDLEdBQUcsdUNBQXVDLGlCQUFpQixHQUFHLGtDQUFrQyxzQ0FBc0MsMEJBQTBCLHNDQUFzQyxHQUFHLG1DQUFtQywwQkFBMEIsZ0JBQWdCLGlCQUFpQixHQUFHLHNDQUFzQywwQkFBMEIscUJBQXFCLEdBQUcsd0NBQXdDLG1CQUFtQixvQkFBb0IsR0FBRyw4Q0FBOEMsK0JBQStCLEdBQUcsMERBQTBELHNCQUFzQixHQUFHLHlDQUF5Qyw0QkFBNEIsR0FBRywyQkFBMkIsc0JBQXNCLHVCQUF1QixHQUFHLDJCQUEyQixvQkFBb0IsbUJBQW1CLEdBQUcsK0JBQStCLCtCQUErQixtQkFBbUIsR0FBRyxPQUFPLG1GQUFtRixXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLDZDQUE2QyxxQkFBcUIscUJBQXFCLHVCQUF1QixvQ0FBb0MsbUNBQW1DLDhCQUE4Qix3QkFBd0IsYUFBYSxrQkFBa0Isb0JBQW9CLG9CQUFvQiwwQkFBMEIsS0FBSyxHQUFHLG1CQUFtQixPQUFPLHNCQUFzQixxQkFBcUIsbUNBQW1DLGlCQUFpQixxQkFBcUIsT0FBTyxLQUFLLEdBQUcsb0JBQW9CLDhCQUE4QixVQUFVLDRCQUE0QixrQkFBa0IsbUJBQW1CLFlBQVksOEJBQThCLHlCQUF5QixhQUFhLHlCQUF5QiwwQkFBMEIscUJBQXFCLHVDQUF1QyxXQUFXLFNBQVMsaUNBQWlDLDRCQUE0QixTQUFTLE9BQU8sS0FBSyxHQUFHLDJCQUEyQixvQ0FBb0MsY0FBYyxhQUFhLHNCQUFzQix1QkFBdUIsU0FBUyxzQkFBc0IscUJBQXFCLGFBQWEsbUNBQW1DLHVCQUF1QixPQUFPLEtBQUssR0FBRyxxQkFBcUI7QUFDL3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvY29tcG9uZW50cy9MYXlvdXQubW9kdWxlLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkxheW91dF9oZWFkZXJfXzJpTFdYIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDBweCBhdXRvO1xcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLkxheW91dF9oZWFkZXJfXzJpTFdYID4gZGl2IHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgLXdlYmtpdC1mbGV4OiAxIDEgNTAlO1xcbiAgICAgLW1vei1ib3gtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMSAxIDUwJTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5MYXlvdXRfaGVhZGVyX19sb2dvX18yWnUtbSBhIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiAjMTEyYTQ2O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiA1MG1zIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogNTBtcyBlYXNlLWluLW91dDtcXG59XFxuLkxheW91dF9oZWFkZXJfX2xvZ29fXzJadS1tIGE6aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uTGF5b3V0X2hlYWRlcl9fbGlua3NfXzJ0a21uIHtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgIC1tb3otYm94LXBhY2s6IGVuZDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLkxheW91dF9oZWFkZXJfX2xpbmtzX18ydGttbiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuLkxheW91dF9oZWFkZXJfX2xpbmtzX18ydGttbiB1bCBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDBweCAxNXB4O1xcbn1cXG4uTGF5b3V0X2hlYWRlcl9fbGlua3NfXzJ0a21uIHVsIGxpIGEge1xcbiAgY29sb3I6ICM4MzgzODM7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5MYXlvdXRfaGVhZGVyX19saW5rc19fMnRrbW4gdWwgbGkgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLkxheW91dF9oZWFkZXJfX2xpbmtzX18ydGttbiB1bCBsaTpudGgtbGFzdC1vZi10eXBlKDEpIHtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG5cXG4uTGF5b3V0X2hlYWRlcl9fbGlua3NfYWN0aXZlX18yREdBQiB7XFxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLkxheW91dF9mb290ZXJfXzJHWWRMIHtcXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uTGF5b3V0X2Zvb3Rlcl9fMkdZZEwgcCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogIzcyMDgwODtcXG59XFxuLkxheW91dF9mb290ZXJfXzJHWWRMIHAgPiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6ICM4MzgzODM7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9MYXlvdXQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFHQSxxQkFBQTtFQUFBLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHNDQUFBO0tBQUEsc0JBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7S0FBQSxzQkFBQTtVQUFBLG1CQUFBO0FBRkY7QUFJRTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtLQUFBLGdCQUFBO1VBQUEsYUFBQTtFQUNBLHFCQUFBO0VBQUEsaUJBQUE7RUFBQSxhQUFBO0VBQ0EsMkJBQUE7S0FBQSxzQkFBQTtVQUFBLG1CQUFBO0FBRko7O0FBT0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7QUFKSjtBQU1JO0VBQ0UsWUFBQTtBQUpOOztBQVNBO0VBQ0UsaUNBQUE7S0FBQSxrQkFBQTtVQUFBLHlCQUFBO0FBTkY7QUFRRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFOSjtBQVFJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQU5OO0FBUU07RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQU5SO0FBUVE7RUFDRSwwQkFBQTtBQU5WO0FBVU07RUFDRSxpQkFBQTtBQVJSOztBQWNBO0VBQ0UsdUJBQUE7QUFYRjs7QUFjQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFYRjtBQWFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFYSjtBQWFJO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0FBWE5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gSGVhZGVyXFxuLmhlYWRlciB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiAwcHggYXV0bztcXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcXG5cXG4gIC8vIEFsaWdubWVudFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgPiBkaXYge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZmxleDogMSAxIDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLmhlYWRlcl9fbG9nbyB7XFxuICBhIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogIzExMmE0NjtcXG4gICAgdHJhbnNpdGlvbjogNTBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgb3BhY2l0eTogMC44O1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5oZWFkZXJfX2xpbmtzIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFxuICB1bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG5cXG4gICAgbGkge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBtYXJnaW46IDBweCAxNXB4O1xcblxcbiAgICAgIGEge1xcbiAgICAgICAgY29sb3I6ICM4MzgzODM7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgICY6bnRoLWxhc3Qtb2YtdHlwZSgxKSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmhlYWRlcl9fbGlua3NfYWN0aXZlIHtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCkgIWltcG9ydGFudDsgLy/tgbTrpq3si5wg66mU64m0IOqwleyhsFxcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgcCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6ICM3MjA4MDg7XFxuXFxuICAgID4gYSB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgICAgY29sb3I6ICM4MzgzODM7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiTGF5b3V0X2hlYWRlcl9fMmlMV1hcIixcblx0XCJoZWFkZXJfX2xvZ29cIjogXCJMYXlvdXRfaGVhZGVyX19sb2dvX18yWnUtbVwiLFxuXHRcImhlYWRlcl9fbGlua3NcIjogXCJMYXlvdXRfaGVhZGVyX19saW5rc19fMnRrbW5cIixcblx0XCJoZWFkZXJfX2xpbmtzX2FjdGl2ZVwiOiBcIkxheW91dF9oZWFkZXJfX2xpbmtzX2FjdGl2ZV9fMkRHQUJcIixcblx0XCJmb290ZXJcIjogXCJMYXlvdXRfZm9vdGVyX18yR1lkTFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==