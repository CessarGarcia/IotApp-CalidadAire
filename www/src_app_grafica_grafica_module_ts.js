"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_grafica_grafica_module_ts"],{

/***/ 6705:
/*!***************************************************!*\
  !*** ./src/app/grafica/grafica-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraficaPageRoutingModule": () => (/* binding */ GraficaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _grafica_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grafica.page */ 6100);




const routes = [
    {
        path: '',
        component: _grafica_page__WEBPACK_IMPORTED_MODULE_0__.GraficaPage
    }
];
let GraficaPageRoutingModule = class GraficaPageRoutingModule {
};
GraficaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GraficaPageRoutingModule);



/***/ }),

/***/ 3949:
/*!*******************************************!*\
  !*** ./src/app/grafica/grafica.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraficaPageModule": () => (/* binding */ GraficaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _grafica_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grafica-routing.module */ 6705);
/* harmony import */ var _grafica_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grafica.page */ 6100);







let GraficaPageModule = class GraficaPageModule {
};
GraficaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _grafica_routing_module__WEBPACK_IMPORTED_MODULE_0__.GraficaPageRoutingModule
        ],
        declarations: [_grafica_page__WEBPACK_IMPORTED_MODULE_1__.GraficaPage]
    })
], GraficaPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_grafica_grafica_module_ts.js.map