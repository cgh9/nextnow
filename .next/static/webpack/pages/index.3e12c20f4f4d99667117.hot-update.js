self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./styles/components/Layout.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./styles/components/Layout.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Layout_header__2iLWX {\n  max-width: 800px;\n  margin: 0px auto;\n  padding: 15px 20px;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: space-between;\n     -moz-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-pack: justify;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n.Layout_header__2iLWX > div {\n  width: auto;\n  -webkit-flex: 1 1 50%;\n     -moz-box-flex: 1;\n          flex: 1 1 50%;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Layout_header__logo__2Zu-m a {\n  font-size: 24px;\n  color: #112a46;\n  -webkit-transition: 50ms ease-in-out;\n  transition: 50ms ease-in-out;\n}\n.Layout_header__logo__2Zu-m a:hover {\n  opacity: 0.8;\n}\n\n.Layout_header__links__2tkmn {\n  -webkit-justify-content: flex-end;\n     -moz-box-pack: end;\n          justify-content: flex-end;\n}\n.Layout_header__links__2tkmn ul {\n  list-style-type: none;\n  margin: 0px;\n  padding: 0px;\n}\n.Layout_header__links__2tkmn ul li {\n  display: inline-block;\n  margin: 0px 15px;\n}\n.Layout_header__links__2tkmn ul li a {\n  color: #9529ee;\n  font-size: 18px;\n}\n.Layout_header__links__2tkmn ul li a:hover {\n  text-decoration: underline;\n}\n.Layout_header__links__2tkmn ul li:nth-last-of-type(1) {\n  margin-right: 0px;\n}\n\n.Layout_header__links_active__2DGAB {\n  color: black !important;\n}\n\n.Layout_footer__2GYdL {\n  padding: 20px 0px;\n  text-align: center;\n}\n.Layout_footer__2GYdL p {\n  font-size: 20px;\n  color: #720808;\n}\n.Layout_footer__2GYdL p > a {\n  text-decoration: underline;\n  color: #838383;\n}", "",{"version":3,"sources":["webpack://Layout.module.scss"],"names":[],"mappings":"AACA;EACE,gBAAA;EACA,gBAAA;EACA,kBAAA;EAGA,qBAAA;EAAA,iBAAA;EAAA,aAAA;EACA,sCAAA;KAAA,sBAAA;UAAA,8BAAA;EACA,yBAAA;EACA,2BAAA;KAAA,sBAAA;UAAA,mBAAA;AAFF;AAIE;EACE,WAAA;EACA,qBAAA;KAAA,gBAAA;UAAA,aAAA;EACA,qBAAA;EAAA,iBAAA;EAAA,aAAA;EACA,2BAAA;KAAA,sBAAA;UAAA,mBAAA;AAFJ;;AAOE;EACE,eAAA;EACA,cAAA;EACA,oCAAA;EAAA,4BAAA;AAJJ;AAMI;EACE,YAAA;AAJN;;AASA;EACE,iCAAA;KAAA,kBAAA;UAAA,yBAAA;AANF;AAQE;EACE,qBAAA;EACA,WAAA;EACA,YAAA;AANJ;AAQI;EACE,qBAAA;EACA,gBAAA;AANN;AAQM;EACE,cAAA;EACA,eAAA;AANR;AAQQ;EACE,0BAAA;AANV;AAUM;EACE,iBAAA;AARR;;AAcA;EACE,uBAAA;AAXF;;AAcA;EACE,iBAAA;EACA,kBAAA;AAXF;AAaE;EACE,eAAA;EACA,cAAA;AAXJ;AAaI;EACE,0BAAA;EACA,cAAA;AAXN","sourcesContent":["// Header\n.header {\n  max-width: 800px;\n  margin: 0px auto;\n  padding: 15px 20px;\n\n  // Alignment\n  display: flex;\n  justify-content: space-between;\n  -webkit-box-pack: justify;\n  align-items: center;\n\n  > div {\n    width: auto;\n    flex: 1 1 50%;\n    display: flex;\n    align-items: center;\n  }\n}\n\n.header__logo {\n  a {\n    font-size: 24px;\n    color: #112a46;\n    transition: 50ms ease-in-out;\n\n    &:hover {\n      opacity: 0.8;\n    }\n  }\n}\n\n.header__links {\n  justify-content: flex-end;\n\n  ul {\n    list-style-type: none;\n    margin: 0px;\n    padding: 0px;\n\n    li {\n      display: inline-block;\n      margin: 0px 15px;\n\n      a {\n        color: #9529ee; //메뉴 평상시 색\n        font-size: 18px;\n\n        &:hover {\n          text-decoration: underline;\n        }\n      }\n\n      &:nth-last-of-type(1) {\n        margin-right: 0px;\n      }\n    }\n  }\n}\n\n.header__links_active {\n  color: rgb(0, 0, 0) !important; //클릭시 메뉴 강조\n}\n\n.footer {\n  padding: 20px 0px;\n  text-align: center;\n\n  p {\n    font-size: 20px;\n    color: #720808;\n\n    > a {\n      text-decoration: underline;\n      color: #838383;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2UxMmMyMGY0ZjRkOTk2NjcxMTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0hBQXlEO0FBQ25HO0FBQ0E7QUFDQSxpRUFBaUUscUJBQXFCLHFCQUFxQix1QkFBdUIsMEJBQTBCLHNCQUFzQixrQkFBa0IsMkNBQTJDLDhCQUE4QiwyQ0FBMkMsOEJBQThCLGdDQUFnQyw4QkFBOEIsZ0NBQWdDLEdBQUcsK0JBQStCLGdCQUFnQiwwQkFBMEIsd0JBQXdCLDBCQUEwQiwwQkFBMEIsc0JBQXNCLGtCQUFrQixnQ0FBZ0MsOEJBQThCLGdDQUFnQyxHQUFHLG1DQUFtQyxvQkFBb0IsbUJBQW1CLHlDQUF5QyxpQ0FBaUMsR0FBRyx1Q0FBdUMsaUJBQWlCLEdBQUcsa0NBQWtDLHNDQUFzQywwQkFBMEIsc0NBQXNDLEdBQUcsbUNBQW1DLDBCQUEwQixnQkFBZ0IsaUJBQWlCLEdBQUcsc0NBQXNDLDBCQUEwQixxQkFBcUIsR0FBRyx3Q0FBd0MsbUJBQW1CLG9CQUFvQixHQUFHLDhDQUE4QywrQkFBK0IsR0FBRywwREFBMEQsc0JBQXNCLEdBQUcseUNBQXlDLDRCQUE0QixHQUFHLDJCQUEyQixzQkFBc0IsdUJBQXVCLEdBQUcsMkJBQTJCLG9CQUFvQixtQkFBbUIsR0FBRywrQkFBK0IsK0JBQStCLG1CQUFtQixHQUFHLE9BQU8sbUZBQW1GLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsNkNBQTZDLHFCQUFxQixxQkFBcUIsdUJBQXVCLG9DQUFvQyxtQ0FBbUMsOEJBQThCLHdCQUF3QixhQUFhLGtCQUFrQixvQkFBb0Isb0JBQW9CLDBCQUEwQixLQUFLLEdBQUcsbUJBQW1CLE9BQU8sc0JBQXNCLHFCQUFxQixtQ0FBbUMsaUJBQWlCLHFCQUFxQixPQUFPLEtBQUssR0FBRyxvQkFBb0IsOEJBQThCLFVBQVUsNEJBQTRCLGtCQUFrQixtQkFBbUIsWUFBWSw4QkFBOEIseUJBQXlCLGFBQWEsMEJBQTBCLG9DQUFvQyxxQkFBcUIsdUNBQXVDLFdBQVcsU0FBUyxpQ0FBaUMsNEJBQTRCLFNBQVMsT0FBTyxLQUFLLEdBQUcsMkJBQTJCLG9DQUFvQyxjQUFjLGFBQWEsc0JBQXNCLHVCQUF1QixTQUFTLHNCQUFzQixxQkFBcUIsYUFBYSxtQ0FBbUMsdUJBQXVCLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUMxcUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9jb21wb25lbnRzL0xheW91dC5tb2R1bGUuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuTGF5b3V0X2hlYWRlcl9fMmlMV1gge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogMHB4IGF1dG87XFxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uTGF5b3V0X2hlYWRlcl9fMmlMV1ggPiBkaXYge1xcbiAgd2lkdGg6IGF1dG87XFxuICAtd2Via2l0LWZsZXg6IDEgMSA1MCU7XFxuICAgICAtbW96LWJveC1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxIDEgNTAlO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLkxheW91dF9oZWFkZXJfX2xvZ29fXzJadS1tIGEge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICMxMTJhNDY7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDUwbXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiA1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4uTGF5b3V0X2hlYWRlcl9fbG9nb19fMlp1LW0gYTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5MYXlvdXRfaGVhZGVyX19saW5rc19fMnRrbW4ge1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgLW1vei1ib3gtcGFjazogZW5kO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uTGF5b3V0X2hlYWRlcl9fbGlua3NfXzJ0a21uIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG4uTGF5b3V0X2hlYWRlcl9fbGlua3NfXzJ0a21uIHVsIGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMHB4IDE1cHg7XFxufVxcbi5MYXlvdXRfaGVhZGVyX19saW5rc19fMnRrbW4gdWwgbGkgYSB7XFxuICBjb2xvcjogIzk1MjllZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLkxheW91dF9oZWFkZXJfX2xpbmtzX18ydGttbiB1bCBsaSBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uTGF5b3V0X2hlYWRlcl9fbGlua3NfXzJ0a21uIHVsIGxpOm50aC1sYXN0LW9mLXR5cGUoMSkge1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcblxcbi5MYXlvdXRfaGVhZGVyX19saW5rc19hY3RpdmVfXzJER0FCIHtcXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbn1cXG5cXG4uTGF5b3V0X2Zvb3Rlcl9fMkdZZEwge1xcbiAgcGFkZGluZzogMjBweCAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5MYXlvdXRfZm9vdGVyX18yR1lkTCBwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjNzIwODA4O1xcbn1cXG4uTGF5b3V0X2Zvb3Rlcl9fMkdZZEwgcCA+IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogIzgzODM4MztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0xheW91dC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUdBLHFCQUFBO0VBQUEsaUJBQUE7RUFBQSxhQUFBO0VBQ0Esc0NBQUE7S0FBQSxzQkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtLQUFBLHNCQUFBO1VBQUEsbUJBQUE7QUFGRjtBQUlFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0tBQUEsZ0JBQUE7VUFBQSxhQUFBO0VBQ0EscUJBQUE7RUFBQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtLQUFBLHNCQUFBO1VBQUEsbUJBQUE7QUFGSjs7QUFPRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtBQUpKO0FBTUk7RUFDRSxZQUFBO0FBSk47O0FBU0E7RUFDRSxpQ0FBQTtLQUFBLGtCQUFBO1VBQUEseUJBQUE7QUFORjtBQVFFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU5KO0FBUUk7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBTk47QUFRTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBTlI7QUFRUTtFQUNFLDBCQUFBO0FBTlY7QUFVTTtFQUNFLGlCQUFBO0FBUlI7O0FBY0E7RUFDRSx1QkFBQTtBQVhGOztBQWNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQVhGO0FBYUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQVhKO0FBYUk7RUFDRSwwQkFBQTtFQUNBLGNBQUE7QUFYTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBIZWFkZXJcXG4uaGVhZGVyIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDBweCBhdXRvO1xcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcblxcbiAgLy8gQWxpZ25tZW50XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICA+IGRpdiB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBmbGV4OiAxIDEgNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyX19sb2dvIHtcXG4gIGEge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiAjMTEyYTQ2O1xcbiAgICB0cmFuc2l0aW9uOiA1MG1zIGVhc2UtaW4tb3V0O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBvcGFjaXR5OiAwLjg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmhlYWRlcl9fbGlua3Mge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXG4gIHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcblxcbiAgICBsaSB7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIG1hcmdpbjogMHB4IDE1cHg7XFxuXFxuICAgICAgYSB7XFxuICAgICAgICBjb2xvcjogIzk1MjllZTsgLy/rqZTribQg7Y+J7IOB7IucIOyDiVxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAmOm50aC1sYXN0LW9mLXR5cGUoMSkge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5oZWFkZXJfX2xpbmtzX2FjdGl2ZSB7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7IC8v7YG066at7IucIOuplOuJtCDqsJXsobBcXG59XFxuXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAyMHB4IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIHAge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiAjNzIwODA4O1xcblxcbiAgICA+IGEge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgIGNvbG9yOiAjODM4MzgzO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhlYWRlclwiOiBcIkxheW91dF9oZWFkZXJfXzJpTFdYXCIsXG5cdFwiaGVhZGVyX19sb2dvXCI6IFwiTGF5b3V0X2hlYWRlcl9fbG9nb19fMlp1LW1cIixcblx0XCJoZWFkZXJfX2xpbmtzXCI6IFwiTGF5b3V0X2hlYWRlcl9fbGlua3NfXzJ0a21uXCIsXG5cdFwiaGVhZGVyX19saW5rc19hY3RpdmVcIjogXCJMYXlvdXRfaGVhZGVyX19saW5rc19hY3RpdmVfXzJER0FCXCIsXG5cdFwiZm9vdGVyXCI6IFwiTGF5b3V0X2Zvb3Rlcl9fMkdZZExcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=