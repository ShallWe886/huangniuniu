(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["aUserPages/patientList/addPatient"],{

/***/ 183:
/*!*************************************************************************************************************!*\
  !*** D:/phpstudy_pro/WWW/AccompanyingConsultation/main.js?{"page":"aUserPages%2FpatientList%2FaddPatient"} ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);

__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-push/dist/uni-push.es.js */ 6);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _addPatient = _interopRequireDefault(__webpack_require__(/*! ./aUserPages/patientList/addPatient.vue */ 184));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;;createPage(_addPatient.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 184:
/*!******************************************************************************************!*\
  !*** D:/phpstudy_pro/WWW/AccompanyingConsultation/aUserPages/patientList/addPatient.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addPatient_vue_vue_type_template_id_16c60ce9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPatient.vue?vue&type=template&id=16c60ce9&scoped=true& */ 185);
/* harmony import */ var _addPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addPatient.vue?vue&type=script&lang=js& */ 187);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _addPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _addPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _addPatient_vue_vue_type_style_index_0_id_16c60ce9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addPatient.vue?vue&type=style&index=0&id=16c60ce9&lang=scss&scoped=true& */ 190);
/* harmony import */ var _C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);

var renderjs





/* normalize component */

var component = Object(_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _addPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addPatient_vue_vue_type_template_id_16c60ce9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addPatient_vue_vue_type_template_id_16c60ce9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "16c60ce9",
  null,
  false,
  _addPatient_vue_vue_type_template_id_16c60ce9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "aUserPages/patientList/addPatient.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 185:
/*!*************************************************************************************************************************************!*\
  !*** D:/phpstudy_pro/WWW/AccompanyingConsultation/aUserPages/patientList/addPatient.vue?vue&type=template&id=16c60ce9&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_template_id_16c60ce9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./addPatient.vue?vue&type=template&id=16c60ce9&scoped=true& */ 186);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_template_id_16c60ce9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_template_id_16c60ce9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_template_id_16c60ce9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_template_id_16c60ce9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 186:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/phpstudy_pro/WWW/AccompanyingConsultation/aUserPages/patientList/addPatient.vue?vue&type=template&id=16c60ce9&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uPopup: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-popup/u-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-popup/u-popup.vue */ 609))
    },
    uIcon: function() {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-icon/u-icon.vue */ 584))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. ????????????????????????????????????")
    console.error(
      "2. ???????????????????????? easycom ??????????????????https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. ?????????????????? easycom ????????????????????????????????? components ??????????????????"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 187:
/*!*******************************************************************************************************************!*\
  !*** D:/phpstudy_pro/WWW/AccompanyingConsultation/aUserPages/patientList/addPatient.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./addPatient.vue?vue&type=script&lang=js& */ 188);
/* harmony import */ var _C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 188:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/phpstudy_pro/WWW/AccompanyingConsultation/aUserPages/patientList/addPatient.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

























































































































































var _identityCard = _interopRequireDefault(__webpack_require__(/*! @/static/js/identityCard.js */ 189));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var UpLoadImg = function UpLoadImg() {__webpack_require__.e(/*! require.ensure | components/UpLoad */ "components/UpLoad").then((function () {return resolve(__webpack_require__(/*! @/components/UpLoad.vue */ 634));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =
{
  components: {
    UpLoadImg: UpLoadImg },

  data: function data() {
    return {
      popupShow: false,
      inputinfo: {
        name: {
          label: '??????',
          placeholderText: '???????????????',
          content: '',
          type: 'text',
          isSure: true // ????????????
        },
        idCard: {
          label: '???????????????',
          placeholderText: '????????????????????????',
          content: '',
          type: 'idcard',
          isSure: true // ????????????
        },
        phone: {
          label: '????????????',
          placeholderText: '?????????????????????',
          content: '',
          type: 'number',
          isSure: true // ????????????
        },
        age: {
          label: '??????',
          placeholderText: '???????????????',
          content: '',
          type: 'number',
          isSure: false // ????????????
        },
        emerge: {
          label: '???????????????',
          placeholderText: '????????????????????????',
          content: '',
          type: 'text',
          isSure: false // ????????????
        },

        emergePhone: {
          label: '????????????',
          placeholderText: '????????????????????????????????????',
          content: '',
          type: 'number',
          isSure: false // ????????????
        },
        relation: {
          label: '??????????????????',
          placeholderText: '??????????????????????????????',
          content: '',
          type: 'text',
          isSure: false // ????????????
        } },


      sex: 1, //??????
      personInfo: '', //????????????
      relationPopShow: false,
      cardList: [], //?????????
      addCardShow: false, //??????pop
      cardInfo: { //???????????????
        hospital_name: '', //????????????
        card_no: '', //??????
        is_default: 0 //?????? 0??? 1 ???
      },
      imgList: [],
      cardType: 0, //?????????0 ?????? 1 ??????
      type: 0, //??????0????????? 1 ??????
      cardId: '', //????????????id
      patientId: '' //??????id
    };
  },
  onLoad: function onLoad(options) {
    console.log(options);
    this.type = options.type;
    if (this.type == 1) {
      this.patientId = options.patientId;
      this.getData(); //????????????
    }
  },
  methods: {
    getAge: function getAge(value) {
      if (value.label !== '???????????????') {
        return;
      }
      var age = 0,
      yearBirth,monthBirth,dayBirth;
      //???????????????????????????
      var userCard = value.content;
      if (userCard.length < 18) {
        return;
      }
      console.log('userCard', value, userCard);
      //????????????????????????undefind????????????
      if (!userCard) {
        return age;
      }
      var reg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/; //??????????????????????????????
      console.log('reg', reg, reg.test(userCard));
      if (reg.test(userCard)) {
        //?????????????????????
        yearBirth = userCard.substring(6, 10);
        monthBirth = userCard.substring(10, 12);
        dayBirth = userCard.substring(12, 14);
        var myDate = new Date();
        var monthNow = myDate.getMonth() + 1;
        var dayNow = myDate.getDate();
        var _age = myDate.getFullYear() - yearBirth;
        if (monthNow < monthBirth || monthNow == monthBirth && dayNow < dayBirth) {
          _age--;
        }
        console.log('age', _age, this.inputinfo);
        this.inputinfo.age.content = _age;
      }
    },
    getData: function getData(e) {var _this = this; //??????????????????
      this.$api.getPatientDetail({
        id: this.patientId }).
      then(function (res) {
        _this.inputinfo.name.content = res.patient_name;
        _this.inputinfo.age.content = res.age;
        _this.sex = res.sex;
        _this.inputinfo.phone.content = res.phone;
        _this.inputinfo.emerge.content = res.contact;
        _this.inputinfo.emergePhone.content = res.contact_mobile;
        _this.inputinfo.idCard.content = res.id_card;
        _this.personInfo = res.description;
        _this.cardId = res.medical_card;
        _this.inputinfo.relation.content = res.user_relasion;
        _this.imgList = res.picture.split(',');
      });
    },
    toRelation: function toRelation() {//??????
      this.relationPopShow = true;
      this.popupShow = true;
      this.getCard();
    },
    selectRealte: function selectRealte(item) {
      this.cardId = item.id;
      this.relationPopShow = false;
      this.popupShow = false;
    },
    closeRelationPop: function closeRelationPop() {
      //??????????????????
      this.relationPopShow = false;
      this.popupShow = false;
    },
    updateCard: function updateCard(type, info, index) {var _this2 = this; //??????????????????
      if (type == 0) {//??????????????????
        this.relationPopShow = false;
        this.cardType = 1;
        this.addCardShow = true;
        this.popupShow = true;
        this.cardInfo = info;
      } else if (type == 1) {//????????????
        uni.showModal({
          title: "????????????",
          content: "???????????????????????????????",
          success: function success(obj) {
            if (obj.confirm) {
              _this2.$api.delCard({
                id: info.id }).
              then(function (res) {
                _this2.cardList.splice(index, 1);
              });
            }
          } });


      }

    },
    addCard: function addCard(e) {//????????????
      this.relationPopShow = false;
      this.addCardShow = true;
      this.popupShow = true;
      this.cardType = 0;
      this.cardInfo.card_no = '';
      this.cardInfo.hospital_name = '';
      this.cardInfo.is_default = 0;
    },
    sureAdd: function sureAdd(e) {var _this3 = this; //????????????
      if (this.cardInfo.hospital_name == '' || this.cardInfo.card_no == "") {
        uni.showToast({
          icon: "none",
          title: "?????????????????????????????????" });

        return;
      }
      if (this.cardType == 0) {//??????

        this.$api.addCard({
          hospital_name: this.cardInfo.hospital_name,
          card_no: this.cardInfo.card_no,
          is_default: this.cardInfo.is_default }).
        then(function (res) {
          _this3.cardList.push(_this3.cardInfo);
          _this3.cardInfo.card_no = '';
          _this3.cardInfo.hospital_name = '';
          _this3.cardInfo.is_default = 0;
          _this3.addCardShow = false;
          _this3.popupShow = false;
        });
      } else {// ??????
        this.$api.editCard({
          hospital_name: this.cardInfo.hospital_name,
          card_no: this.cardInfo.card_no,
          is_default: this.cardInfo.is_default,
          id: this.cardInfo.id }).
        then(function (res) {
          _this3.cardInfo.card_no = '';
          _this3.cardInfo.hospital_name = '';
          _this3.cardInfo.is_default = 0;
          _this3.addCardShow = false;
          _this3.popupShow = false;
        });
      }
    },
    closeAddPop: function closeAddPop(e) {//??????????????????
      this.addCardShow = false;
      this.popupShow = false;

    },
    getCard: function getCard(e) {var _this4 = this; //??????????????????
      this.$api.getCardList({}).then(function (res) {
        _this4.cardList = res;
      });
    },
    changeDefault: function changeDefault(e) {//??????????????????
      if (this.cardInfo.is_default == 0) {
        this.cardInfo.is_default = 1;
      } else {
        this.cardInfo.is_default = 0;
      }
    },
    selectSex: function selectSex(type) {//????????????
      this.sex = type;
    },
    uploadImg: function uploadImg(e) {
      this.imgList = e;
      console.log("????????????");
      console.log(this.imgList);
    },
    addPatient: function addPatient(e) {//??????
      if (this.inputinfo.name.content == '') {
        uni.showToast({
          icon: "none",
          title: "??????????????????" });

        return;
      }
      if (this.inputinfo.phone.content == '') {
        uni.showToast({
          icon: "none",
          title: "?????????????????????" });

        return;
      }
      var phoneReg = /^1[3|4|5|7|8][0-9]{9}$/;
      // console.log("???????????????",phoneReg.test(this.phone))
      if (!phoneReg.test(this.inputinfo.phone.content)) {
        uni.showToast({
          icon: "none",
          title: "?????????????????????" });

        return;
      }
      if (this.inputinfo.idCard.content == '') {
        uni.showToast({
          icon: "none",
          title: "????????????????????????" });

        return;
      }

      var data1 = this.inputinfo.idCard.content.toUpperCase();
      if (!(0, _identityCard.default)(data1)) {
        uni.showToast({
          icon: "none",
          title: "?????????????????????" });

        return;
      }
      var imageUrl = '';
      if (this.imgList.length > 0) {
        imageUrl = this.imgList.join(',');
      }
      if (this.type == 0) {//??????
        this.$api.addPatient({
          patient_name: this.inputinfo.name.content,
          sex: this.sex,
          age: this.inputinfo.age.content,
          phone: this.inputinfo.phone.content,
          description: this.personInfo,
          medical_card: this.cardId,
          user_relasion: this.inputinfo.relation.content,
          contact_mobile: this.inputinfo.emergePhone.content,
          contact: this.inputinfo.emerge.content,
          picture: imageUrl,
          id_card: this.inputinfo.idCard.content }).
        then(function (res) {
          getApp().globalData.upDate.isUpdatePtient = true;
          uni.navigateBack({});
        });
      } else {//1 ??????
        this.$api.editPatient({
          id: this.patientId,
          patient_name: this.inputinfo.name.content,
          sex: this.sex,
          age: this.inputinfo.age.content,
          phone: this.inputinfo.phone.content,
          description: this.personInfo,
          medical_card: this.cardId,
          user_relasion: this.inputinfo.relation.content,
          contact_mobile: this.inputinfo.emergePhone.content,
          contact: this.inputinfo.emerge.content,
          picture: imageUrl,
          id_card: this.inputinfo.idCard.content }).
        then(function (res) {
          getApp().globalData.upDate.isUpdatePtient = true;
          uni.navigateBack({});
        });
      }

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 190:
/*!****************************************************************************************************************************************************!*\
  !*** D:/phpstudy_pro/WWW/AccompanyingConsultation/aUserPages/patientList/addPatient.vue?vue&type=style&index=0&id=16c60ce9&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_style_index_0_id_16c60ce9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./addPatient.vue?vue&type=style&index=0&id=16c60ce9&lang=scss&scoped=true& */ 191);
/* harmony import */ var _C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_style_index_0_id_16c60ce9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_style_index_0_id_16c60ce9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_style_index_0_id_16c60ce9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_style_index_0_id_16c60ce9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_13540_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_addPatient_vue_vue_type_style_index_0_id_16c60ce9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 191:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/phpstudy_pro/WWW/AccompanyingConsultation/aUserPages/patientList/addPatient.vue?vue&type=style&index=0&id=16c60ce9&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[183,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/aUserPages/patientList/addPatient.js.map