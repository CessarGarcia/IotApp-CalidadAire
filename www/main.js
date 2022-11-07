(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_control_iot_control_iot_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/control-iot/control-iot.component */ 2681);




const routes = [
    {
        path: '', component: _pages_control_iot_control_iot_component__WEBPACK_IMPORTED_MODULE_0__.ControlIotComponent
    },
    {
        path: 'grafica',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_grafica_grafica_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./grafica/grafica.module */ 3949)).then(m => m.GraficaPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() {
        this.appPages = [
            { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
            { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
            { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
            { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
            { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
            { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _pages_control_iot_control_iot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/control-iot/control-iot.component */ 2681);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ 7151);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/database */ 7334);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);












let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _pages_control_iot_control_iot_component__WEBPACK_IMPORTED_MODULE_2__.ControlIotComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__.AngularFireDatabaseModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 6100:
/*!*****************************************!*\
  !*** ./src/app/grafica/grafica.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraficaPage": () => (/* binding */ GraficaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _grafica_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grafica.page.html?ngResource */ 594);
/* harmony import */ var _grafica_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grafica.page.scss?ngResource */ 1219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ 5972);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ 7334);







let GraficaPage = class GraficaPage {
    constructor(modalCtrl, database) {
        this.modalCtrl = modalCtrl;
        this.database = database;
        this.sensores = [];
        this.lastSensores = {
            sensor: null
        };
        this.leerSensores();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
    }
    leerSensores() {
        const path = 'sensores/';
        this.database.list(path, ref => ref.orderByChild('time').limitToLast(60)).valueChanges().subscribe(res => {
            console.log('sensores -> ', res);
            this.sensores = res;
            this.sensores.reverse();
            this.convertirArray(this.sensores);
            this.lastSensores = this.sensores[0];
        });
    }
    lineChart(data) {
        this.valoresSensor = highcharts__WEBPACK_IMPORTED_MODULE_2__.chart(this.container.nativeElement, {
            chart: {
                type: 'column',
                marginRight: 10
            },
            time: {
                useUTC: false
            },
            title: {
                text: '60 segundos'
            },
            accessibility: {
                announceNewData: {
                    enabled: true,
                    minAnnounceInterval: 15000,
                    announcementFormatter: function (allSeries, newSeries, newPoint) {
                        if (newPoint) {
                            return 'New point added. Value: ' + newPoint.y;
                        }
                        return false;
                    }
                }
            }, xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'ppm'
                },
                plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br/>',
                pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                    name: 'Calidad de aire',
                    type: undefined,
                    data: (function () {
                        // generate an array
                        var data2 = [], time = (new Date()).getTime(), i, j = 0;
                        for (i = -59; i <= 0; i += 1) {
                            data2.push({
                                x: time + i * 1000,
                                y: data[j]
                            });
                            console.log(data[j]);
                            j++;
                        }
                        return data2;
                    }())
                }]
        });
    }
    closeModal() {
        this.modalCtrl.dismiss();
    }
    convertirArray(data) {
        let array = [];
        let i;
        for (i = 0; i < 60; i++) {
            array.push(data[i].sensor);
        }
        console.log(array);
        this.lineChart(array);
    }
};
GraficaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__.AngularFireDatabase }
];
GraficaPage.propDecorators = {
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ["container", { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef },] }]
};
GraficaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-grafica',
        template: _grafica_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_grafica_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GraficaPage);



/***/ }),

/***/ 2681:
/*!************************************************************!*\
  !*** ./src/app/pages/control-iot/control-iot.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlIotComponent": () => (/* binding */ ControlIotComponent)
/* harmony export */ });
/* harmony import */ var C_Users_C_ssar_Garc_a_OneDrive_Universidad_Autonoma_de_Nuevo_Le_n_Documents_FCFM_6to_Semestre_Micro_ProyectoFinalMateria_Iot_IotApp_CalidadAire_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _control_iot_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-iot.component.html?ngResource */ 2771);
/* harmony import */ var _control_iot_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-iot.component.scss?ngResource */ 4663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ 7334);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_grafica_grafica_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/grafica/grafica.page */ 6100);









let ControlIotComponent = class ControlIotComponent {
  constructor(database, modalCtrl, alertController) {
    this.database = database;
    this.modalCtrl = modalCtrl;
    this.alertController = alertController;
    this.seccion = 'temp';
    this.mediciones = [];
    this.lastMedicion = {
      sensor: null,
      time: null
    };
    this.version = 0;
    this.manual = false;
    this.leerMediciones();
    this.clearVersion();
  }

  ngOnInit() {}

  leerMediciones() {
    const path = 'mediciones/';
    this.database.list(path, ref => ref.orderByChild('time').limitToLast(20)).valueChanges().subscribe(res => {
      console.log('mediciones -> ', res);
      this.mediciones = res;
      this.mediciones.reverse();
      this.lastMedicion = this.mediciones[0];

      if (this.mediciones[0].sensor >= 400) {
        this.presentAlert();
      }
    });
  }

  presentAlert() {
    var _this = this;

    return (0,C_Users_C_ssar_Garc_a_OneDrive_Universidad_Autonoma_de_Nuevo_Le_n_Documents_FCFM_6to_Semestre_Micro_ProyectoFinalMateria_Iot_IotApp_CalidadAire_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Alerta',
        subHeader: 'Mensaje Importante',
        message: 'Calidad de aire muy desfavorable!',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  segmentChanged(ev) {
    this.seccion = ev.detail.value; // console.log('ev.detail.value -> ', ev.detail.value);
  }

  clearVersion() {
    const path = 'version';
    this.database.object(path).set(0);
  }

  verGrafica() {
    var _this2 = this;

    return (0,C_Users_C_ssar_Garc_a_OneDrive_Universidad_Autonoma_de_Nuevo_Le_n_Documents_FCFM_6to_Semestre_Micro_ProyectoFinalMateria_Iot_IotApp_CalidadAire_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: src_app_grafica_grafica_page__WEBPACK_IMPORTED_MODULE_3__.GraficaPage,
        componentProps: {}
      });
      return yield modal.present();
    })();
  }

};

ControlIotComponent.ctorParameters = () => [{
  type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__.AngularFireDatabase
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}];

ControlIotComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-control-iot',
  template: _control_iot_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_control_iot_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ControlIotComponent);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyC8SpTSnvDWbXY-83QBCy6RoEQKs5ITZW4",
        authDomain: "project-calidad-aire.firebaseapp.com",
        databaseURL: "https://project-calidad-aire-default-rtdb.firebaseio.com",
        projectId: "project-calidad-aire",
        storageBucket: "project-calidad-aire.appspot.com",
        messagingSenderId: "975290948389",
        appId: "1:975290948389:web:b53795c40ff3a6ebe598cc"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-71f28cd7_js-node_modules_ionic_core_dist_esm_t-0c999b",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-71f28cd7_js-node_modules_ionic_core_dist_esm_t-0c999b",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\nion-menu::part(backdrop) {\n  background-color: rgb(58, 58, 58);\n}\n\nion-menu::part(container) {\n  border-radius: 0 20px 20px 0;\n  box-shadow: 4px 0px 16px rgb(58, 58, 58);\n}\n\nion-title {\n  text-align: center;\n  font-size: 35px;\n  font-family: \"Times New Roman\", Times, serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcQyVDMyVBOXNzYXIlMjBHYXJjJUMzJUFEYVxcT25lRHJpdmUlMjAtJTIwVW5pdmVyc2lkYWQlMjBBdXRvbm9tYSUyMGRlJTIwTnVldm8lMjBMZSVDMyVCM25cXERvY3VtZW50c1xcRkNGTVxcNnRvJTIwU2VtZXN0cmVcXE1pY3JvXFxQcm95ZWN0b0ZpbmFsTWF0ZXJpYVxcSW90XFxJb3RBcHAtQ2FsaWRhZEFpcmVcXHNyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyRUFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7O0VBRUUsa0JBQUE7QUNDRjs7QURFQTtFQUNFLDJEQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLHNEQUFBO0FDSEY7O0FETUE7RUFDRSwrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsY0FBQTtBQ0hGOztBRE1BO0VBQ0UsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0FDSEY7O0FETUE7RUFDRSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSwrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0FDSEY7O0FETUE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FDSkY7O0FET0E7RUFDRSxpQ0FBQTtBQ0pGOztBRFNBO0VBQ0UsaUNBQUE7QUNORjs7QURTQTtFQUNFLDRCQUFBO0VBQ0Esd0NBQUE7QUNORjs7QURTQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0FDTkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG5cclxuICBjb2xvcjogIzc1NzU3NTtcclxuXHJcbiAgbWluLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBjb2xvcjogIzYxNmU3ZTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gIC0tbWluLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzczODQ5YTtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuaW9uLW5vdGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxufVxyXG5cclxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuXHJcbi8vRXN0aWxvcyBwYXJhIGVsIG1lbnVcclxuaW9uLW1lbnU6OnBhcnQoYmFja2Ryb3ApIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDU4LCA1OCk7XHJcbn1cclxuXHJcbmlvbi1tZW51OjpwYXJ0KGNvbnRhaW5lcikge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMjBweCAyMHB4IDA7XHJcbiAgYm94LXNoYWRvdzogNHB4IDBweCAxNnB4IHJnYig1OCwgNTgsIDU4KTtcclxufVxyXG5cclxuaW9uLXRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuXHJcbiIsImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnU6OnBhcnQoYmFja2Ryb3ApIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA1OCwgNTgpO1xufVxuXG5pb24tbWVudTo6cGFydChjb250YWluZXIpIHtcbiAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMDtcbiAgYm94LXNoYWRvdzogNHB4IDBweCAxNnB4IHJnYig1OCwgNTgsIDU4KTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59Il19 */";

/***/ }),

/***/ 1219:
/*!******************************************************!*\
  !*** ./src/app/grafica/grafica.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-button > ion-icon {\n  background-color: rgb(50, 50, 50);\n  width: 40px;\n  height: 50px;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYWZpY2EucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcQyVDMyVBOXNzYXIlMjBHYXJjJUMzJUFEYVxcT25lRHJpdmUlMjAtJTIwVW5pdmVyc2lkYWQlMjBBdXRvbm9tYSUyMGRlJTIwTnVldm8lMjBMZSVDMyVCM25cXERvY3VtZW50c1xcRkNGTVxcNnRvJTIwU2VtZXN0cmVcXE1pY3JvXFxQcm95ZWN0b0ZpbmFsTWF0ZXJpYVxcSW90XFxJb3RBcHAtQ2FsaWRhZEFpcmVcXHNyY1xcYXBwXFxncmFmaWNhXFxncmFmaWNhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoiZ3JhZmljYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uID4gaW9uLWljb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDUwLCA1MCk7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7ICAgXHJcbn1cclxuIiwiaW9uLWJ1dHRvbiA+IGlvbi1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA1MCwgNTApO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 4663:
/*!*************************************************************************!*\
  !*** ./src/app/pages/control-iot/control-iot.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@300;400;500;600&display=swap\");\n@import url(//fonts.googleapis.com/css?family=Lato:300:400);\nion-title {\n  font-size: 30px;\n  font-weight: bold;\n  text-align: center;\n}\nion-icon {\n  font-size: 45px;\n  margin-top: 15px;\n  margin-right: 5px;\n  font-weight: bolder;\n}\nion-segment-button > ion-label {\n  font-size: 25px;\n  font-weight: bold;\n}\nion-card-header {\n  background-color: rgb(3, 239, 160);\n}\nion-card-header > ion-card-title {\n  cursor: pointer;\n  color: #fff;\n}\nstrong {\n  font-family: \"Crimson Text\", serif;\n}\nion-label > p {\n  font-family: \"Oswald\", Arial, sans-serif !important;\n  font-size: 15px;\n  color: rgb(45, 45, 45);\n}\ndiv > h1 {\n  font-size: 25px;\n  font-weight: bold;\n  color: #000 !important;\n  font-family: \"Crimson Text\", serif !important;\n}\n.waviy {\n  position: relative;\n}\n.waviy span {\n  position: relative;\n  display: inline-block;\n  font-size: 40px;\n  color: #fff;\n  animation: flip 2s infinite;\n  animation-delay: calc(0.2s * var(--i));\n}\n@keyframes flip {\n  0%, 80% {\n    transform: rotateY(360deg);\n  }\n}\nbody {\n  margin: 0;\n}\nh1 {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 300;\n  letter-spacing: 2px;\n  font-size: 48px;\n}\np {\n  font-family: \"Lato\", sans-serif;\n  letter-spacing: 1px;\n  font-size: 14px;\n  color: #333333;\n}\n.header {\n  position: relative;\n  text-align: center;\n  background-image: url(https://th.bing.com/th/id/R.fdbf2c1f26d78e06c114e6d228c91ab2?rik=v4r6rnkADL6MjQ&riu=http%3a%2f%2faerosollarevista.com%2fwp-content%2fuploads%2fPropelentes-al-cuidado-del-ambiente.png&ehk=ltVCKVvqcNl790EKjI2wxXTSxFj8w1Bs7xDNjJ3uQu0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1);\n  background-position: center center;\n  background-size: cover;\n  color: white;\n}\n.logo {\n  width: 50px;\n  fill: white;\n  padding-right: 15px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.inner-header {\n  height: 65vh;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.flex { /*Flexbox for containers*/\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.waves {\n  position: relative;\n  width: 100%;\n  height: 15vh;\n  margin-bottom: -7px; /*Fix for safari gap*/\n  min-height: 100px;\n  max-height: 150px;\n}\n.content {\n  position: relative;\n  height: 20vh;\n  text-align: center;\n  background-color: white;\n}\n/* Animation */\n.parallax > use {\n  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;\n}\n.parallax > use:nth-child(1) {\n  animation-delay: -2s;\n  animation-duration: 7s;\n}\n.parallax > use:nth-child(2) {\n  animation-delay: -3s;\n  animation-duration: 10s;\n}\n.parallax > use:nth-child(3) {\n  animation-delay: -4s;\n  animation-duration: 13s;\n}\n.parallax > use:nth-child(4) {\n  animation-delay: -5s;\n  animation-duration: 20s;\n}\n@keyframes move-forever {\n  0% {\n    transform: translate3d(-90px, 0, 0);\n  }\n  100% {\n    transform: translate3d(85px, 0, 0);\n  }\n}\n/*Shrinking for mobile*/\n@media (max-width: 768px) {\n  .waviy > span, ion-icon {\n    font-size: 20px;\n  }\n  .waves {\n    height: 40px;\n    min-height: 40px;\n  }\n  .content {\n    height: 30vh;\n  }\n  h1 {\n    font-size: 24px;\n  }\n  ion-segment-button > ion-label {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtaW90LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEMlQzMlQTlzc2FyJTIwR2FyYyVDMyVBRGFcXE9uZURyaXZlJTIwLSUyMFVuaXZlcnNpZGFkJTIwQXV0b25vbWElMjBkZSUyME51ZXZvJTIwTGUlQzMlQjNuXFxEb2N1bWVudHNcXEZDRk1cXDZ0byUyMFNlbWVzdHJlXFxNaWNyb1xcUHJveWVjdG9GaW5hbE1hdGVyaWFcXElvdFxcSW90QXBwLUNhbGlkYWRBaXJlXFxzcmNcXGFwcFxccGFnZXNcXGNvbnRyb2wtaW90XFxjb250cm9sLWlvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwyR0FBQTtBQWdFQSwyREFBQTtBQTlEUjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNFSjtBREFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDR0Y7QUREQTtFQUNFLGtDQUFBO0FDSUY7QUREQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDSUY7QUREQTtFQUNFLGtDQUFBO0FDSUY7QURGQTtFQUNFLG1EQUFBO0VBQ0EsZUFBQTtFQUVBLHNCQUFBO0FDSUY7QURGQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7QUNLRjtBREFJO0VBQ0ksa0JBQUE7QUNHUjtBRERJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBRUEsMkJBQUE7RUFDQSxzQ0FBQTtBQ0dSO0FEREk7RUFDSTtJQUNBLDBCQUFBO0VDSU47QUFDRjtBREdBO0VBQ0UsU0FBQTtBQ0RGO0FESUE7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDREY7QURHQTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEscVNBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0RGO0FER0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ0FGO0FER0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQUY7QURHQSxRQUFBLHlCQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUEsRUFBQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0FGO0FER0EsY0FBQTtBQUVBO0VBQ0UsdUVBQUE7QUNERjtBREdBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQ0FGO0FERUE7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDQTtFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7QUNFRjtBREFBO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtBQ0dGO0FEREE7RUFDRTtJQUNDLG1DQUFBO0VDSUQ7RURGQTtJQUNFLGtDQUFBO0VDSUY7QUFDRjtBREZBLHVCQUFBO0FBQ0E7RUFDRTtJQUNFLGVBQUE7RUNJRjtFREZBO0lBQ0UsWUFBQTtJQUNBLGdCQUFBO0VDSUY7RURGQTtJQUNFLFlBQUE7RUNJRjtFREZBO0lBQ0UsZUFBQTtFQ0lGO0VERkE7SUFDRSxlQUFBO0VDSUY7QUFDRiIsImZpbGUiOiJjb250cm9sLWlvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVlhbm9uZStLYWZmZWVzYXR6OndnaHRAMzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuaW9uLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbmlvbi1zZWdtZW50LWJ1dHRvbiA+IGlvbi1sYWJlbHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuaW9uLWNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMjM5LCAxNjApO1xyXG59XHJcblxyXG5pb24tY2FyZC1oZWFkZXIgPiBpb24tY2FyZC10aXRsZXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbnN0cm9uZ3tcclxuICBmb250LWZhbWlseTogJ0NyaW1zb24gVGV4dCcsIHNlcmlmO1xyXG59XHJcbmlvbi1sYWJlbCA+IHB7XHJcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBBcmlhbCwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiKDQ1LCA0NSwgNDUpXHJcbn1cclxuZGl2ID4gaDF7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uIFRleHQnLCBzZXJpZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLy9FZmVjdG9zIHBhcmEgaDFcclxuICAgIC53YXZpeSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLndhdml5IHNwYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmbGlwIDJzIGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogY2FsYyguMnMgKiB2YXIoLS1pKSlcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgZmxpcCB7XHJcbiAgICAgICAgMCUsODAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbi8vRmluIGRlIGgxXHJcblxyXG5cclxuQGltcG9ydCB1cmwoLy9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwOjQwMCk7XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46MDtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZm9udC1zaXplOjQ4cHg7XHJcbn1cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIC8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCByZ2JhKDg0LDU4LDE4MywxKSAwJSwgcmdiYSgwLDE3MiwxOTMsMSkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vdGguYmluZy5jb20vdGgvaWQvUi5mZGJmMmMxZjI2ZDc4ZTA2YzExNGU2ZDIyOGM5MWFiMj9yaWs9djRyNnJua0FETDZNalEmcml1PWh0dHAlM2ElMmYlMmZhZXJvc29sbGFyZXZpc3RhLmNvbSUyZndwLWNvbnRlbnQlMmZ1cGxvYWRzJTJmUHJvcGVsZW50ZXMtYWwtY3VpZGFkby1kZWwtYW1iaWVudGUucG5nJmVoaz1sdFZDS1Z2cWNObDc5MEVLakkyd3hYVFN4Rmo4dzFCczd4RE5qSjN1UXUwJTNkJnJpc2w9JnBpZD1JbWdSYXcmcj0wJnNyZXM9MSZzcmVzY3Q9MSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbi5sb2dvIHtcclxuICB3aWR0aDo1MHB4O1xyXG4gIGZpbGw6d2hpdGU7XHJcbiAgcGFkZGluZy1yaWdodDoxNXB4O1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5pbm5lci1oZWFkZXIge1xyXG4gIGhlaWdodDo2NXZoO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5mbGV4IHsgLypGbGV4Ym94IGZvciBjb250YWluZXJzKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ud2F2ZXMge1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDoxNXZoO1xyXG4gIG1hcmdpbi1ib3R0b206LTdweDsgLypGaXggZm9yIHNhZmFyaSBnYXAqL1xyXG4gIG1pbi1oZWlnaHQ6MTAwcHg7XHJcbiAgbWF4LWhlaWdodDoxNTBweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGhlaWdodDoyMHZoO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb24gKi9cclxuXHJcbi5wYXJhbGxheCA+IHVzZSB7XHJcbiAgYW5pbWF0aW9uOiBtb3ZlLWZvcmV2ZXIgMjVzIGN1YmljLWJlemllciguNTUsLjUsLjQ1LC41KSAgICAgaW5maW5pdGU7XHJcbn1cclxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgxKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMnM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA3cztcclxufVxyXG4ucGFyYWxsYXggPiB1c2U6bnRoLWNoaWxkKDIpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0zcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcclxufVxyXG4ucGFyYWxsYXggPiB1c2U6bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC00cztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEzcztcclxufVxyXG4ucGFyYWxsYXggPiB1c2U6bnRoLWNoaWxkKDQpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC01cztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDIwcztcclxufVxyXG5Aa2V5ZnJhbWVzIG1vdmUtZm9yZXZlciB7XHJcbiAgMCUge1xyXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC05MHB4LDAsMCk7XHJcbiAgfVxyXG4gIDEwMCUgeyBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoODVweCwwLDApO1xyXG4gIH1cclxufVxyXG4vKlNocmlua2luZyBmb3IgbW9iaWxlKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLndhdml5ID4gc3BhbiwgaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC53YXZlcyB7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIG1pbi1oZWlnaHQ6NDBweDtcclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OjMwdmg7XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gIH1cclxuICBpb24tc2VnbWVudC1idXR0b24gPiBpb24tbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ZYW5vbmUrS2FmZmVlc2F0ejp3Z2h0QDMwMDs0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybCgvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDA6NDAwKTtcbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24gPiBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMjM5LCAxNjApO1xufVxuXG5pb24tY2FyZC1oZWFkZXIgPiBpb24tY2FyZC10aXRsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbnN0cm9uZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkNyaW1zb24gVGV4dFwiLCBzZXJpZjtcbn1cblxuaW9uLWxhYmVsID4gcCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBBcmlhbCwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZ2IoNDUsIDQ1LCA0NSk7XG59XG5cbmRpdiA+IGgxIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiQ3JpbXNvbiBUZXh0XCIsIHNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi53YXZpeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLndhdml5IHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYW5pbWF0aW9uOiBmbGlwIDJzIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoMC4ycyAqIHZhcigtLWkpKTtcbn1cblxuQGtleWZyYW1lcyBmbGlwIHtcbiAgMCUsIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gIH1cbn1cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDQ4cHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vdGguYmluZy5jb20vdGgvaWQvUi5mZGJmMmMxZjI2ZDc4ZTA2YzExNGU2ZDIyOGM5MWFiMj9yaWs9djRyNnJua0FETDZNalEmcml1PWh0dHAlM2ElMmYlMmZhZXJvc29sbGFyZXZpc3RhLmNvbSUyZndwLWNvbnRlbnQlMmZ1cGxvYWRzJTJmUHJvcGVsZW50ZXMtYWwtY3VpZGFkby1kZWwtYW1iaWVudGUucG5nJmVoaz1sdFZDS1Z2cWNObDc5MEVLakkyd3hYVFN4Rmo4dzFCczd4RE5qSjN1UXUwJTNkJnJpc2w9JnBpZD1JbWdSYXcmcj0wJnNyZXM9MSZzcmVzY3Q9MSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogNTBweDtcbiAgZmlsbDogd2hpdGU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmlubmVyLWhlYWRlciB7XG4gIGhlaWdodDogNjV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmZsZXggeyAvKkZsZXhib3ggZm9yIGNvbnRhaW5lcnMqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2F2ZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1dmg7XG4gIG1hcmdpbi1ib3R0b206IC03cHg7IC8qRml4IGZvciBzYWZhcmkgZ2FwKi9cbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyMHZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4vKiBBbmltYXRpb24gKi9cbi5wYXJhbGxheCA+IHVzZSB7XG4gIGFuaW1hdGlvbjogbW92ZS1mb3JldmVyIDI1cyBjdWJpYy1iZXppZXIoMC41NSwgMC41LCAwLjQ1LCAwLjUpIGluZmluaXRlO1xufVxuXG4ucGFyYWxsYXggPiB1c2U6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMnM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XG59XG5cbi5wYXJhbGxheCA+IHVzZTpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0zcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XG59XG5cbi5wYXJhbGxheCA+IHVzZTpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC00cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxM3M7XG59XG5cbi5wYXJhbGxheCA+IHVzZTpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IC01cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMHM7XG59XG5cbkBrZXlmcmFtZXMgbW92ZS1mb3JldmVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTkwcHgsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoODVweCwgMCwgMCk7XG4gIH1cbn1cbi8qU2hyaW5raW5nIGZvciBtb2JpbGUqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53YXZpeSA+IHNwYW4sIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLndhdmVzIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgfVxuICAuY29udGVudCB7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICB9XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgaW9uLXNlZ21lbnQtYnV0dG9uID4gaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n</ion-app>";

/***/ }),

/***/ 594:
/*!******************************************************!*\
  !*** ./src/app/grafica/grafica.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"light\" (click)=\"closeModal()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Grafica</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Calidad De Aire</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <div #container style=\"width:90%; height:300px;\"></div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ }),

/***/ 2771:
/*!*************************************************************************!*\
  !*** ./src/app/pages/control-iot/control-iot.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-menu-toggle>\r\n      <ion-button><ion-icon name=\"menu-outline\"></ion-icon></ion-button>\r\n    </ion-menu-toggle>\r\n    <ion-title>\r\n      <ion-icon name=\"earth-outline\"></ion-icon>\r\n      Green Point.\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- Cover de la pagina -->\r\n  <ion-grid>\r\n      <!--Hey! This is the original version of Simple CSS Waves-->\r\n\r\n    <div class=\"header\">\r\n      <!--Content before waves-->\r\n      <div class=\"inner-header flex\">\r\n        <!--Just the logo.. Don't mind this-->\r\n        \r\n          <div class=\"waviy\">\r\n            <span style=\"--i:1\"><ion-icon name=\"earth-outline\"></ion-icon></span>\r\n            <span style=\"--i:2\">G</span>\r\n            <span style=\"--i:3\">r</span>\r\n            <span style=\"--i:4\">e</span>\r\n            <span style=\"--i:5\">e</span>\r\n            <span style=\"--i:6\">n</span>\r\n            <span style=\"--i:7\">P</span>\r\n            <span style=\"--i:8\">o</span>\r\n            <span style=\"--i:9\">i</span>\r\n            <span style=\"--i:10\">n</span>\r\n            <span style=\"--i:11\">t</span>\r\n            <span style=\"--i:12\">.</span>\r\n          </div>\r\n       </div>\r\n\r\n      \r\n      <!--Waves Container-->\r\n      <div>\r\n      <svg class=\"waves\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n      viewBox=\"0 24 150 28\" preserveAspectRatio=\"none\" shape-rendering=\"auto\">\r\n      <defs>\r\n      <path id=\"gentle-wave\" d=\"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z\" />\r\n      </defs>\r\n      <g class=\"parallax\">\r\n      <use xlink:href=\"#gentle-wave\" x=\"48\" y=\"0\" fill=\"rgba(255,255,255,0.6)\" />\r\n      <use xlink:href=\"#gentle-wave\" x=\"48\" y=\"3\" fill=\"rgba(185, 177, 177, 0.5)\" />\r\n      <use xlink:href=\"#gentle-wave\" x=\"48\" y=\"5\" fill=\"rgba(185, 177, 177, 0.3)\"/>\r\n      <use xlink:href=\"#gentle-wave\" x=\"48\" y=\"7\" fill=\"#dcdcdc\" />\r\n      </g>\r\n      </svg>\r\n      </div>\r\n      <!--Waves end-->\r\n      \r\n      </div>\r\n      <!--Header ends-->\r\n      <!--Content ends-->\r\n  </ion-grid>\r\n\r\n<!-- Contenido de la app -->  \r\n   <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col sizeXs=\"12\" sizeSm=\"11\" sizeMd=\"10\" sizeLg=\"8\" sizeXl=\"6\" >\r\n            <div style=\"margin: 10px;\"></div>\r\n          \r\n            <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"temp\">\r\n              <ion-segment-button value=\"temp\">\r\n                <ion-label>Medicion</ion-label>\r\n              </ion-segment-button>\r\n              <ion-segment-button value=\"contr\">\r\n                <ion-label>Grafica</ion-label>\r\n              </ion-segment-button>\r\n              <ion-segment-button value=\"hist\">\r\n                <ion-label>Historial</ion-label>\r\n              </ion-segment-button>\r\n            </ion-segment>\r\n          \r\n          \r\n            <ion-card *ngIf=\"seccion == 'temp'\">\r\n              <ion-item>\r\n                <ion-icon name=\"leaf-outline\" color=\"primary\"></ion-icon>\r\n                <ion-label>\r\n                  <strong>Lectura: </strong> {{lastMedicion.sensor}}\r\n                </ion-label>\r\n              </ion-item>\r\n              <ion-item lines=\"none\">\r\n                <ion-icon slot=\"start\" name=\"timer\" color=\"primary\"></ion-icon>\r\n                <ion-label>\r\n                  {{lastMedicion.time | date:'medium'}}\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-card>\r\n          \r\n    \r\n          \r\n            <ion-card *ngIf=\"seccion == 'hist'\">\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-icon name=\"sync-circle\" color=\"primary\"></ion-icon>\r\n                  <div class=\"ion-text-center\">\r\n                    <h1> Historial: </h1>\r\n                  </div>\r\n                </ion-list-header>\r\n                <ion-item *ngFor=\"let medicion of mediciones\">\r\n                  <ion-label>\r\n                    <strong>Particulas por millon: </strong> {{medicion.sensor}} PPM\r\n                    <p>{{medicion.time | date:'medium'}} </p>\r\n                  </ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n            \r\n            </ion-card>\r\n            <ion-card  *ngIf=\"seccion == 'contr'\">\r\n              <ion-card>\r\n                <ion-card-header>\r\n                  <ion-card-title (click)=\"verGrafica()\">Ver Grafica</ion-card-title>\r\n                </ion-card-header>\r\n              </ion-card>\r\n            \r\n              \r\n            </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map