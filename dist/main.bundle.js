webpackJsonp(["main"],{

/***/ "../../../../../client/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../client/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<app-header *ngIf=\"shouldShowHeader\"></app-header>\n\n<app-loader></app-loader>\n\n<app-dialogue></app-dialogue>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../client/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_header_header_service__ = __webpack_require__("../../../../../client/app/services/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(headerService) {
        var _this = this;
        this.headerService = headerService;
        this.headerService.showHeader.subscribe(function (state) {
            _this.shouldShowHeader = state;
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../client/app/app.component.html"),
        styles: [__webpack_require__("../../../../../client/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_header_header_service__["a" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_header_header_service__["a" /* HeaderService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dialogue_dialogue_service__ = __webpack_require__("../../../../../client/app/services/dialogue/dialogue.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dialogue_dialogue_component__ = __webpack_require__("../../../../../client/app/components/dialogue/dialogue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_loader_loader_component__ = __webpack_require__("../../../../../client/app/components/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_error_error_service__ = __webpack_require__("../../../../../client/app/services/error/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_authentication_service__ = __webpack_require__("../../../../../client/app/services/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../client/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_httpIntercept_http_intercept_service__ = __webpack_require__("../../../../../client/app/services/httpIntercept/http-intercept.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_loader_loader_service_service__ = __webpack_require__("../../../../../client/app/services/loader/loader-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_admin_component__ = __webpack_require__("../../../../../client/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__route_module__ = __webpack_require__("../../../../../client/app/route.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("../../../../../client/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_project_detail_project_detail_component__ = __webpack_require__("../../../../../client/app/components/project/detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_header_header_service__ = __webpack_require__("../../../../../client/app/services/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_footer_footer_component__ = __webpack_require__("../../../../../client/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_projects_project_service__ = __webpack_require__("../../../../../client/app/services/projects/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_project_project_component__ = __webpack_require__("../../../../../client/app/components/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_header_header_component__ = __webpack_require__("../../../../../client/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_component__ = __webpack_require__("../../../../../client/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























if (!Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* isDevMode */])()) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_project_project_component__["a" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_project_detail_project_detail_component__["a" /* ProjectDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_loader_loader_component__["a" /* LoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_dialogue_dialogue_component__["a" /* DialogueComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__route_module__["a" /* appRoutes */]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__services_projects_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_14__services_header_header_service__["a" /* HeaderService */],
            __WEBPACK_IMPORTED_MODULE_9__services_loader_loader_service_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_6__services_authentication_authentication_service__["a" /* CheckAuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_error_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_2__services_dialogue_dialogue_service__["a" /* DialogueService */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_8__services_httpIntercept_http_intercept_service__["a" /* NoopInterceptor */],
                multi: true,
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../client/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<section class='container'>\n  <form #adminForm=\"ngForm\">\n    <div class='flex-6'>\n      <label>Project title*</label>\n      <input type='text' [(ngModel)]=\"project.title\" name='title' required />\n    </div>\n\n    <div class='flex-6'>\n      <label>Project information*</label>\n      <textarea [(ngModel)]=\"project.information\" name='information' required></textarea>\n    </div>\n\n    <div class='flex-6'>\n      <label>More information*</label>\n      <textarea [(ngModel)]=\"project.moreInformation\" name='moreInformation' required></textarea>\n    </div>\n\n    <div class='flex-6'>\n      <label>Label*</label>\n      <input list='labels' [(ngModel)]=\"project.label\" name='label' required />\n\n      <datalist id=\"labels\">\n        <option value=\"Codepen\">\n        <option value=\"Commercial\">\n        <option value=\"Personal\">\n      </datalist>\n    </div>\n    \n    <div class='flex-6'>\n      <label>Technologies used*</label>\n      <select multiple (change)=\"setSelectedTechnologies($event)\" required>\n        <option *ngFor=\"let technology of technologies\">{{ technology }}</option>\n      </select>\n    </div>\n    \n    <div class='flex-6'>\n      <label>Image (1200 * 600)*</label>\n      <input type='file' name='image' accept=\"image/*\" (change)=\"handleImageConversion($event)\" required />\n    </div>\n\n    <div class='flex-6'>\n      <label>Project URL*</label>\n      <input type='text' name='url' [(ngModel)]=\"project.url\" required />\n    </div>\n\n    <div class='flex-6'></div>\n\n    <div class='flex-1 no-grow'>\n      <button (click)=\"addNewProject()\" [disabled]=\"!adminForm.form.valid\">Add project</button>\n    </div>\n  </form>\n</section>"

/***/ }),

/***/ "../../../../../client/app/components/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nunito:300,400,700);", ""]);

// module
exports.push([module.i, ".container {\n  width: 95%;\n  margin: 0 auto; }\n\n.grid, form, :host > section > form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  margin-top: 2em; }\n\n[class*=\"flex\"] {\n  margin: 1%; }\n\n.flex-1 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 6.33333333%;\n          flex: 1 0 6.33333333%;\n  min-width: 30em; }\n\n.flex-2 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 14.66666667%;\n          flex: 1 0 14.66666667%;\n  min-width: 30em; }\n\n.flex-3 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 23%;\n          flex: 1 0 23%;\n  min-width: 30em; }\n\n.flex-4 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 31.33333333%;\n          flex: 1 0 31.33333333%;\n  min-width: 30em; }\n\n.flex-5 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 39.66666667%;\n          flex: 1 0 39.66666667%;\n  min-width: 30em; }\n\n.flex-6 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 48%;\n          flex: 1 0 48%;\n  min-width: 30em; }\n\n.flex-7 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 56.33333333%;\n          flex: 1 0 56.33333333%;\n  min-width: 30em; }\n\n.flex-8 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 64.66666667%;\n          flex: 1 0 64.66666667%;\n  min-width: 30em; }\n\n.flex-9 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 73%;\n          flex: 1 0 73%;\n  min-width: 30em; }\n\n.flex-10 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 81.33333333%;\n          flex: 1 0 81.33333333%;\n  min-width: 30em; }\n\n.flex-11 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 89.66666667%;\n          flex: 1 0 89.66666667%;\n  min-width: 30em; }\n\n.flex-12 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 98%;\n          flex: 1 0 98%;\n  min-width: 30em; }\n\n[class*=\"no-grow\"] {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0; }\n\n.header-button {\n  border-radius: 50px;\n  background: white;\n  color: #E24269;\n  border: none;\n  padding: 1em 1.4em;\n  margin: 1em 1em;\n  text-align: center;\n  cursor: pointer;\n  outline: none; }\n\n.card-button, .detail-card-button, form > div button, :host > section > form > div button {\n  border: 1px solid #E24269;\n  color: #E24269;\n  padding: 8px 20px;\n  height: 3.2em;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 50px;\n  background: #FFF;\n  transition: all ease-in-out 100ms;\n  outline: none; }\n  .card-button:hover, .detail-card-button:hover, form > div button:hover, :host > section > form > div button:hover {\n    background: #E24269;\n    color: #FFF; }\n  .card-button.active, .active.detail-card-button, form > div button.active, :host > section > form > div button.active {\n    background: #E24269;\n    color: #FFF; }\n\n.detail-card-button {\n  text-align: left; }\n\nform, :host > section > form {\n  background: #FFF;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }\n  form > div, :host > section > form > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column wrap;\n            flex-flow: column wrap; }\n    form > div label, :host > section > form > div label {\n      color: #888;\n      font-size: 1.2em;\n      font-weight: 300;\n      padding-bottom: .7em; }\n    form > div input, :host > section > form > div input, form > div textarea, :host > section > form > div textarea, form > div select, :host > section > form > div select {\n      padding: 1em;\n      outline: none;\n      border: 1px solid #EEE;\n      width: 100%; }\n    form > div textarea, :host > section > form > div textarea {\n      resize: vertical; }\n    form > div select, :host > section > form > div select {\n      outline: none; }\n      form > div select > option, :host > section > form > div select > option {\n        padding: .5em;\n        background: #FFF; }\n        form > div select > option:hover, :host > section > form > div select > option:hover {\n          background: #EEE; }\n    form > div button:disabled, :host > section > form > div button:disabled, form > div button:disabled:hover, :host > section > form > div button:disabled:hover {\n      border: 1px dotted #E24269;\n      cursor: not-allowed;\n      background: #FFF;\n      color: #E24269; }\n\n.header-button {\n  border-radius: 50px;\n  background: white;\n  color: #E24269;\n  border: none;\n  padding: 1em 1.4em;\n  margin: 1em 1em;\n  text-align: center;\n  cursor: pointer;\n  outline: none; }\n\n.card-button, .detail-card-button, form > div button, :host > section > form > div button {\n  border: 1px solid #E24269;\n  color: #E24269;\n  padding: 8px 20px;\n  height: 3.2em;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 50px;\n  background: #FFF;\n  transition: all ease-in-out 100ms;\n  outline: none; }\n  .card-button:hover, .detail-card-button:hover, form > div button:hover, :host > section > form > div button:hover {\n    background: #E24269;\n    color: #FFF; }\n  .card-button.active, .active.detail-card-button, form > div button.active, :host > section > form > div button.active {\n    background: #E24269;\n    color: #FFF; }\n\n.detail-card-button {\n  text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loader_loader_service_service__ = __webpack_require__("../../../../../client/app/services/loader/loader-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_error_error_service__ = __webpack_require__("../../../../../client/app/services/error/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_projects_project_service__ = __webpack_require__("../../../../../client/app/services/projects/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = (function () {
    function AdminComponent(projectService, errorService, loaderService) {
        this.projectService = projectService;
        this.errorService = errorService;
        this.loaderService = loaderService;
        this.project = {
            title: '',
            information: '',
            moreInformation: '',
            label: '',
            technologies: [],
            image: '',
            url: ''
        };
        this.technologies = ['Angular', 'Node', 'Typescript', 'MongoDB', 'Socket.io', 'PHP', 'CSS3', 'HTML5', 'Javascript'];
    }
    AdminComponent.prototype.addNewProject = function () {
        var _this = this;
        this.loaderService.shouldShow.next(true);
        this.projectService.addProject(this.project)
            .subscribe(function () {
            _this.loaderService.shouldShow.next(false);
        }, function (error) {
            _this.errorService.showError(error);
            _this.loaderService.shouldShow.next(false);
        });
    };
    AdminComponent.prototype.handleImageConversion = function ($event) {
        this.readFile($event.target);
    };
    AdminComponent.prototype.setSelectedTechnologies = function (selectedTechnology) {
        var selectedTechnologies = selectedTechnology.target.selectedOptions;
        this.project.technologies = [];
        for (var i = 0; i < selectedTechnologies.length; i++) {
            this.project.technologies.push(selectedTechnologies[i].value);
        }
    };
    AdminComponent.prototype.readFile = function (inputValue) {
        var _this = this;
        this.loaderService.shouldShow.next(true);
        if (inputValue.files[0].type !== 'image/png') {
            this.errorService.showError({
                error: ' {"user_message":"Image must be in png format"} '
            });
            this.loaderService.shouldShow.next(false);
        }
        else {
            var file = inputValue.files[0];
            var stream_1 = new FileReader();
            stream_1.onloadend = function () {
                _this.project.image = stream_1.result;
                _this.loaderService.shouldShow.next(false);
            };
            stream_1.readAsDataURL(file);
            this.loaderService.shouldShow.next(false);
        }
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../client/app/components/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/admin/admin.component.scss")]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_projects_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_projects_project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_error_error_service__["a" /* ErrorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_loader_loader_service_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_loader_loader_service_service__["a" /* LoaderService */]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/dialogue/dialogue.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='dialogue' *ngIf=\"showDialogue\">\n  <h1>Oh no there was an error!</h1>\n  <p>{{ reason }}</p>\n  <div class='actions'>\n    <button (click)=\"closeDialogue()\">Dismiss</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/components/dialogue/dialogue.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nunito:300,400,700);", ""]);

// module
exports.push([module.i, ".container {\n  width: 95%;\n  margin: 0 auto; }\n\n.grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  margin-top: 2em; }\n\n[class*=\"flex\"] {\n  margin: 1%; }\n\n.flex-1 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 6.33333333%;\n          flex: 1 0 6.33333333%;\n  min-width: 30em; }\n\n.flex-2 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 14.66666667%;\n          flex: 1 0 14.66666667%;\n  min-width: 30em; }\n\n.flex-3 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 23%;\n          flex: 1 0 23%;\n  min-width: 30em; }\n\n.flex-4 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 31.33333333%;\n          flex: 1 0 31.33333333%;\n  min-width: 30em; }\n\n.flex-5 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 39.66666667%;\n          flex: 1 0 39.66666667%;\n  min-width: 30em; }\n\n.flex-6 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 48%;\n          flex: 1 0 48%;\n  min-width: 30em; }\n\n.flex-7 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 56.33333333%;\n          flex: 1 0 56.33333333%;\n  min-width: 30em; }\n\n.flex-8 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 64.66666667%;\n          flex: 1 0 64.66666667%;\n  min-width: 30em; }\n\n.flex-9 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 73%;\n          flex: 1 0 73%;\n  min-width: 30em; }\n\n.flex-10 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 81.33333333%;\n          flex: 1 0 81.33333333%;\n  min-width: 30em; }\n\n.flex-11 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 89.66666667%;\n          flex: 1 0 89.66666667%;\n  min-width: 30em; }\n\n.flex-12 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 98%;\n          flex: 1 0 98%;\n  min-width: 30em; }\n\n[class*=\"no-grow\"] {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0; }\n\n.header-button {\n  border-radius: 50px;\n  background: white;\n  color: #E24269;\n  border: none;\n  padding: 1em 1.4em;\n  margin: 1em 1em;\n  text-align: center;\n  cursor: pointer;\n  outline: none; }\n\n.card-button, .detail-card-button, :host > .dialogue > .actions > button {\n  border: 1px solid #E24269;\n  color: #E24269;\n  padding: 8px 20px;\n  height: 3.2em;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 50px;\n  background: #FFF;\n  transition: all ease-in-out 100ms;\n  outline: none; }\n  .card-button:hover, .detail-card-button:hover, :host > .dialogue > .actions > button:hover {\n    background: #E24269;\n    color: #FFF; }\n  .card-button.active, .active.detail-card-button, :host > .dialogue > .actions > button.active {\n    background: #E24269;\n    color: #FFF; }\n\n.detail-card-button {\n  text-align: left; }\n\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100vw;\n  position: absolute;\n  top: 0; }\n  :host > .dialogue {\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n    background: #FFF;\n    width: 40em;\n    height: 20em;\n    padding: 2em; }\n    :host > .dialogue > h1 {\n      color: #E24269; }\n    :host > .dialogue > p {\n      color: #888;\n      margin-top: 1em;\n      font-size: 1.2em; }\n    :host > .dialogue > .actions {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 10em;\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/dialogue/dialogue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_dialogue_dialogue_service__ = __webpack_require__("../../../../../client/app/services/dialogue/dialogue.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogueComponent = (function () {
    function DialogueComponent(dialogueService) {
        var _this = this;
        this.dialogueService = dialogueService;
        this.dialogueService.showDialogue.subscribe(function (shouldShow) {
            _this.showDialogue = shouldShow;
        });
        this.dialogueService.reason.subscribe(function (reason) {
            _this.reason = reason;
        });
    }
    DialogueComponent.prototype.closeDialogue = function () {
        this.showDialogue = !this.showDialogue;
    };
    return DialogueComponent;
}());
DialogueComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-dialogue',
        template: __webpack_require__("../../../../../client/app/components/dialogue/dialogue.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/dialogue/dialogue.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_dialogue_dialogue_service__["a" /* DialogueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_dialogue_dialogue_service__["a" /* DialogueService */]) === "function" && _a || Object])
], DialogueComponent);

var _a;
//# sourceMappingURL=dialogue.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<section class='container'>\n  <div class='grid'>\n    <div class='flex-12'>\n      <p>&copy; Copyright 2015 - 2017 - Jackthomson.co.uk</p>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../client/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nunito:300,400,700);", ""]);

// module
exports.push([module.i, ".container {\n  width: 95%;\n  margin: 0 auto; }\n\n.grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  margin-top: 2em; }\n\n[class*=\"flex\"] {\n  margin: 1%; }\n\n.flex-1 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 6.33333333%;\n          flex: 1 0 6.33333333%;\n  min-width: 30em; }\n\n.flex-2 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 14.66666667%;\n          flex: 1 0 14.66666667%;\n  min-width: 30em; }\n\n.flex-3 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 23%;\n          flex: 1 0 23%;\n  min-width: 30em; }\n\n.flex-4 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 31.33333333%;\n          flex: 1 0 31.33333333%;\n  min-width: 30em; }\n\n.flex-5 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 39.66666667%;\n          flex: 1 0 39.66666667%;\n  min-width: 30em; }\n\n.flex-6 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 48%;\n          flex: 1 0 48%;\n  min-width: 30em; }\n\n.flex-7 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 56.33333333%;\n          flex: 1 0 56.33333333%;\n  min-width: 30em; }\n\n.flex-8 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 64.66666667%;\n          flex: 1 0 64.66666667%;\n  min-width: 30em; }\n\n.flex-9 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 73%;\n          flex: 1 0 73%;\n  min-width: 30em; }\n\n.flex-10 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 81.33333333%;\n          flex: 1 0 81.33333333%;\n  min-width: 30em; }\n\n.flex-11 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 89.66666667%;\n          flex: 1 0 89.66666667%;\n  min-width: 30em; }\n\n.flex-12 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 98%;\n          flex: 1 0 98%;\n  min-width: 30em; }\n\n[class*=\"no-grow\"] {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0; }\n\n:host > section > div > div > p {\n  color: #888;\n  font-size: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../client/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='header_content'>\n  <h1>A stylishly creative Frontend Web Developer who strives to create a better front for the modern web</h1>\n\n  <div class='actions'>\n    <a target=\"_blank\" href=\"https://twitter.com/Jackthomsonn\">\n      <button>Follow me on Twitter</button>\n    </a>\n    <a target=\"_blank\" href=\"https://www.linkedin.com/in/jackthomsonn/\">\n      <button>Connect with me on LinkedIn</button>\n    </a>\n    <a target=\"_blank\" href=\"https://www.github.com/jackthomsonn\">\n      <button>See my code on GitHub</button>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nunito:300,400,700);", ""]);

// module
exports.push([module.i, ".header-button, .header > .header_content > .actions > button, :host > .header_content > .actions > button, .header > .header_content > .actions > a > button, :host > .header_content > .actions > a > button {\n  border-radius: 50px;\n  background: white;\n  color: #E24269;\n  border: none;\n  padding: 1em 1.4em;\n  margin: 1em 1em;\n  text-align: center;\n  cursor: pointer;\n  outline: none; }\n\n.card-button, .detail-card-button {\n  border: 1px solid #E24269;\n  color: #E24269;\n  padding: 8px 20px;\n  height: 3.2em;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 50px;\n  background: #FFF;\n  transition: all ease-in-out 100ms;\n  outline: none; }\n  .card-button:hover, .detail-card-button:hover {\n    background: #E24269;\n    color: #FFF; }\n  .card-button.active, .active.detail-card-button {\n    background: #E24269;\n    color: #FFF; }\n\n.detail-card-button {\n  text-align: left; }\n\n.header, :host {\n  background: #E24269 url(" + __webpack_require__("../../../../../client/assets/images/bg.png") + ") repeat;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  width: 100vw;\n  display: block;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column wrap;\n          flex-flow: column wrap;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  height: 75vh;\n  padding: 2em;\n  margin-top: -10vh; }\n  .header > .header_content, :host > .header_content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column wrap;\n            flex-flow: column wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%;\n    margin-top: 5vh; }\n    .header > .header_content > h1, :host > .header_content > h1 {\n      width: 75vw;\n      text-align: center;\n      color: #FFF;\n      font-weight: 300; }\n    .header > .header_content > .actions, :host > .header_content > .actions {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-top: 5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../client/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"shouldShowLoader\" class=\"loader\"></div>"

/***/ }),

/***/ "../../../../../client/app/components/loader/loader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nunito:300,400,700);", ""]);

// module
exports.push([module.i, ":host > .loader {\n  background: #a5193b;\n  width: 100vw;\n  height: 7px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  z-index: 100;\n  -webkit-transform: translateX(-100vw);\n          transform: translateX(-100vw);\n  -webkit-animation: loader 2s ease-in-out infinite forwards;\n          animation: loader 2s ease-in-out infinite forwards; }\n\n@-webkit-keyframes loader {\n  to {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n\n@keyframes loader {\n  to {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loader_loader_service_service__ = __webpack_require__("../../../../../client/app/services/loader/loader-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = (function () {
    function LoaderComponent(loaderService) {
        var _this = this;
        this.loaderService = loaderService;
        this.loaderService.shouldShow.subscribe(function (shouldShow) {
            _this.shouldShowLoader = shouldShow;
        });
    }
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-loader',
        template: __webpack_require__("../../../../../client/app/components/loader/loader.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/loader/loader.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_loader_loader_service_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_loader_loader_service_service__["a" /* LoaderService */]) === "function" && _a || Object])
], LoaderComponent);

var _a;
//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class='container'>\n  <form class='grid'>\n    <div class='flex-12'>\n      <label>Username</label>\n      <input type='text' [(ngModel)]=\"username\" name='username' />\n    </div>\n    <div class='flex-12'>\n      <label>Password</label>\n      <input type='password' [(ngModel)]=\"password\" name='password' />\n    </div>\n    <div class='flex-1'>\n      <button (click)=\"login()\">Login</button>\n    </div>\n  </form>\n</section>"

/***/ }),

/***/ "../../../../../client/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nunito:300,400,700);", ""]);

// module
exports.push([module.i, ".container {\n  width: 95%;\n  margin: 0 auto; }\n\n.grid, form, :host > section > form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  margin-top: 2em; }\n\n[class*=\"flex\"] {\n  margin: 1%; }\n\n.flex-1 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 6.33333333%;\n          flex: 1 0 6.33333333%;\n  min-width: 30em; }\n\n.flex-2 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 14.66666667%;\n          flex: 1 0 14.66666667%;\n  min-width: 30em; }\n\n.flex-3 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 23%;\n          flex: 1 0 23%;\n  min-width: 30em; }\n\n.flex-4 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 31.33333333%;\n          flex: 1 0 31.33333333%;\n  min-width: 30em; }\n\n.flex-5 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 39.66666667%;\n          flex: 1 0 39.66666667%;\n  min-width: 30em; }\n\n.flex-6 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 48%;\n          flex: 1 0 48%;\n  min-width: 30em; }\n\n.flex-7 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 56.33333333%;\n          flex: 1 0 56.33333333%;\n  min-width: 30em; }\n\n.flex-8 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 64.66666667%;\n          flex: 1 0 64.66666667%;\n  min-width: 30em; }\n\n.flex-9 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 73%;\n          flex: 1 0 73%;\n  min-width: 30em; }\n\n.flex-10 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 81.33333333%;\n          flex: 1 0 81.33333333%;\n  min-width: 30em; }\n\n.flex-11 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 89.66666667%;\n          flex: 1 0 89.66666667%;\n  min-width: 30em; }\n\n.flex-12 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 98%;\n          flex: 1 0 98%;\n  min-width: 30em; }\n\n[class*=\"no-grow\"] {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0; }\n\n.header-button {\n  border-radius: 50px;\n  background: white;\n  color: #E24269;\n  border: none;\n  padding: 1em 1.4em;\n  margin: 1em 1em;\n  text-align: center;\n  cursor: pointer;\n  outline: none; }\n\n.card-button, .detail-card-button, form > div button, :host > section > form > div button {\n  border: 1px solid #E24269;\n  color: #E24269;\n  padding: 8px 20px;\n  height: 3.2em;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 50px;\n  background: #FFF;\n  transition: all ease-in-out 100ms;\n  outline: none; }\n  .card-button:hover, .detail-card-button:hover, form > div button:hover, :host > section > form > div button:hover {\n    background: #E24269;\n    color: #FFF; }\n  .card-button.active, .active.detail-card-button, form > div button.active, :host > section > form > div button.active {\n    background: #E24269;\n    color: #FFF; }\n\n.detail-card-button {\n  text-align: left; }\n\nform, :host > section > form {\n  background: #FFF;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }\n  form > div, :host > section > form > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column wrap;\n            flex-flow: column wrap; }\n    form > div label, :host > section > form > div label {\n      color: #888;\n      font-size: 1.2em;\n      font-weight: 300;\n      padding-bottom: .7em; }\n    form > div input, :host > section > form > div input, form > div textarea, :host > section > form > div textarea, form > div select, :host > section > form > div select {\n      padding: 1em;\n      outline: none;\n      border: 1px solid #EEE;\n      width: 100%; }\n    form > div textarea, :host > section > form > div textarea {\n      resize: vertical; }\n    form > div select, :host > section > form > div select {\n      outline: none; }\n      form > div select > option, :host > section > form > div select > option {\n        padding: .5em;\n        background: #FFF; }\n        form > div select > option:hover, :host > section > form > div select > option:hover {\n          background: #EEE; }\n    form > div button:disabled, :host > section > form > div button:disabled, form > div button:disabled:hover, :host > section > form > div button:disabled:hover {\n      border: 1px dotted #E24269;\n      cursor: not-allowed;\n      background: #FFF;\n      color: #E24269; }\n\n.header-button {\n  border-radius: 50px;\n  background: white;\n  color: #E24269;\n  border: none;\n  padding: 1em 1.4em;\n  margin: 1em 1em;\n  text-align: center;\n  cursor: pointer;\n  outline: none; }\n\n.card-button, .detail-card-button, form > div button, :host > section > form > div button {\n  border: 1px solid #E24269;\n  color: #E24269;\n  padding: 8px 20px;\n  height: 3.2em;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 50px;\n  background: #FFF;\n  transition: all ease-in-out 100ms;\n  outline: none; }\n  .card-button:hover, .detail-card-button:hover, form > div button:hover, :host > section > form > div button:hover {\n    background: #E24269;\n    color: #FFF; }\n  .card-button.active, .active.detail-card-button, form > div button.active, :host > section > form > div button.active {\n    background: #E24269;\n    color: #FFF; }\n\n.detail-card-button {\n  text-align: left; }\n\n:host > section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100vh; }\n  :host > section > form {\n    padding: 2em;\n    width: 40em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loader_loader_service_service__ = __webpack_require__("../../../../../client/app/services/loader/loader-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_authentication_service__ = __webpack_require__("../../../../../client/app/services/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_error_error_service__ = __webpack_require__("../../../../../client/app/services/error/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authenticationService, router, errorService, loaderService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.errorService = errorService;
        this.loaderService = loaderService;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loaderService.shouldShow.next(true);
        this.authenticationService.login({
            username: this.username,
            password: this.password
        }).subscribe(function () {
            _this.router.navigate(['admin']);
            _this.loaderService.shouldShow.next(false);
        }, function (error) {
            _this.errorService.showError(error);
            _this.router.navigate(['login']);
            _this.loaderService.shouldShow.next(false);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../client/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/login/login.component.scss")]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_authentication_service__["a" /* CheckAuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_authentication_service__["a" /* CheckAuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_error_error_service__["a" /* ErrorService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_loader_loader_service_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_loader_loader_service_service__["a" /* LoaderService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <li class='logo' [routerLink]=\"navItems[0].state\">JT</li>\n  <li *ngFor=\"let navItem of navItems\"\n      [routerLink]=\"navItem.state\"\n      routerLinkActive=\"active\">{{ navItem.name }}\n  </li>\n</nav>"

/***/ }),

/***/ "../../../../../client/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nunito:300,400,700);", ""]);

// module
exports.push([module.i, ".navbar, :host {\n  background: #E24269;\n  width: 100vw;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 2em; }\n  .navbar > nav, :host > nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 11em;\n    height: 10vh; }\n    .navbar > nav > li, :host > nav > li {\n      list-style: none;\n      font-size: 1.4em;\n      color: #FFF;\n      cursor: pointer;\n      outline: none; }\n      .navbar > nav > li.logo, :host > nav > li.logo {\n        font-size: 2.4em; }\n      .navbar > nav > li.active, :host > nav > li.active {\n        border-bottom: 2px solid #FFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.navItems = [
            {
                state: '',
                name: 'Portfolio'
            }
        ];
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../client/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/project/detail/project-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<section class='container' *ngIf=\"project\">\n  <div class='grid'>\n    <div class='flex-12'>\n      <button class='go-back' (click)=\"goBack()\">\n          <i class=\"material-icons\">keyboard_arrow_left</i> Go back to all projects\n      </button>\n    </div>\n    <div class='flex-6 detail-card'>\n      <div class='detail-card_image'>\n        <img src=\"{{project.imageLocation}}\" />\n      </div>\n    </div>\n    <div class='flex-6 detail-card'>\n      <div class='detail-card_body'>\n        <h1>{{ project.title }}</h1>\n        <label class='{{getClassName(project.label)}}'>{{ project.label }}</label>\n        <p>{{ project.moreInformation }}</p>\n      </div>\n      <div class='detail-card_body__actions'>\n        <a target=\"_blank\" href='{{project.url}}'><button>View project</button></a>\n      </div>\n    </div>\n    <div class='flex-6 detail-card'>\n        <div class='detail-card_body'>\n          <h1>Built using</h1>\n          <div>\n            <img *ngFor=\"let technology of project.technologies\" [src]='getTechnologyBadge(technology)' height='50' />\n          </div>\n        </div>\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../client/app/components/project/detail/project-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nunito:300,400,700);", ""]);

// module
exports.push([module.i, ".container {\n  width: 95%;\n  margin: 0 auto; }\n\n.grid, :host > section > .grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  margin-top: 2em; }\n\n[class*=\"flex\"] {\n  margin: 1%; }\n\n.flex-1 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 6.33333333%;\n          flex: 1 0 6.33333333%;\n  min-width: 30em; }\n\n.flex-2 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 14.66666667%;\n          flex: 1 0 14.66666667%;\n  min-width: 30em; }\n\n.flex-3 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 23%;\n          flex: 1 0 23%;\n  min-width: 30em; }\n\n.flex-4 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 31.33333333%;\n          flex: 1 0 31.33333333%;\n  min-width: 30em; }\n\n.flex-5 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 39.66666667%;\n          flex: 1 0 39.66666667%;\n  min-width: 30em; }\n\n.flex-6 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 48%;\n          flex: 1 0 48%;\n  min-width: 30em; }\n\n.flex-7 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 56.33333333%;\n          flex: 1 0 56.33333333%;\n  min-width: 30em; }\n\n.flex-8 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 64.66666667%;\n          flex: 1 0 64.66666667%;\n  min-width: 30em; }\n\n.flex-9 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 73%;\n          flex: 1 0 73%;\n  min-width: 30em; }\n\n.flex-10 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 81.33333333%;\n          flex: 1 0 81.33333333%;\n  min-width: 30em; }\n\n.flex-11 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 89.66666667%;\n          flex: 1 0 89.66666667%;\n  min-width: 30em; }\n\n.flex-12 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 98%;\n          flex: 1 0 98%;\n  min-width: 30em; }\n\n[class*=\"no-grow\"] {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0; }\n\n.header-button {\n  border-radius: 50px;\n  background: white;\n  color: #E24269;\n  border: none;\n  padding: 1em 1.4em;\n  margin: 1em 1em;\n  text-align: center;\n  cursor: pointer;\n  outline: none; }\n\n.card-button, .detail-card-button, .detail-card_body__actions > button, .detail-card_body__actions a > button, .card_actions > button, .card_actions a > button {\n  border: 1px solid #E24269;\n  color: #E24269;\n  padding: 8px 20px;\n  height: 3.2em;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 50px;\n  background: #FFF;\n  transition: all ease-in-out 100ms;\n  outline: none; }\n  .card-button:hover, .detail-card-button:hover, .detail-card_body__actions > button:hover, .detail-card_body__actions a > button:hover, .card_actions > button:hover, .card_actions a > button:hover {\n    background: #E24269;\n    color: #FFF; }\n  .card-button.active, .active.detail-card-button, .detail-card_body__actions > button.active, .detail-card_body__actions a > button.active, .card_actions > button.active, .card_actions a > button.active {\n    background: #E24269;\n    color: #FFF; }\n\n.detail-card-button, .detail-card_body__actions > button, .detail-card_body__actions a > button {\n  text-align: left; }\n\n.label, .card_body > label, .detail-card_body > label {\n  padding: 12px 20px;\n  width: 12em;\n  border: none;\n  font-size: 1.3em;\n  font-weight: 300;\n  color: #FFF; }\n  .label.personal, .card_body > label.personal, .detail-card_body > label.personal {\n    background: #B1DDF1; }\n  .label.codepen, .card_body > label.codepen, .detail-card_body > label.codepen {\n    background: #68C3D4; }\n  .label.commercial, .card_body > label.commercial, .detail-card_body > label.commercial {\n    background: #4F5D75; }\n\n.card {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  background: #FEFEFE;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  padding: 0;\n  height: auto; }\n  .card_body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding-bottom: 2em; }\n    .card_body > h1 {\n      color: #E24269;\n      font-weight: 300;\n      font-size: 1.8em;\n      border-bottom: 1px solid #FFF;\n      padding: 1em;\n      text-align: center; }\n    .card_body > p {\n      color: #888;\n      font-weight: 300;\n      font-size: 1.3em;\n      padding: 2em 1.5em; }\n  .card_actions {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 0 0 2em 2em;\n    display: flex;\n    height: 100%;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n    .card_actions > a > button {\n      margin-left: 2em; }\n  .card_image > img {\n    width: 100%;\n    height: 100%; }\n\n.detail-card, :host > section > .grid > .detail-card {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  background: #FEFEFE;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  padding: 0;\n  height: auto; }\n  .detail-card_body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .detail-card_body > h1 {\n      color: #E24269;\n      font-weight: 300;\n      font-size: 1.8em;\n      border-bottom: 1px solid #FFF;\n      padding: 1em; }\n    .detail-card_body > p {\n      color: #888;\n      font-weight: 300;\n      font-size: 1.3em;\n      padding: 2em 1.5em; }\n    .detail-card_body > div {\n      padding-bottom: 2em;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 100%;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .detail-card_body__actions {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0 0 2em 2em;\n      display: flex;\n      height: 100%;\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; }\n  .detail-card_image {\n    height: 100%; }\n    .detail-card_image > img {\n      width: 100%;\n      height: 100%; }\n\n:host > section > .grid > div > button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: none;\n  background: none;\n  text-transform: uppercase;\n  color: #E24269;\n  padding: .3em .3em .3em 0;\n  border-radius: 3px;\n  cursor: pointer;\n  outline: none; }\n  :host > section > .grid > div > button:hover {\n    background: #fceef2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/project/detail/project-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loader_loader_service_service__ = __webpack_require__("../../../../../client/app/services/loader/loader-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_error_error_service__ = __webpack_require__("../../../../../client/app/services/error/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_header_header_service__ = __webpack_require__("../../../../../client/app/services/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_projects_project_service__ = __webpack_require__("../../../../../client/app/services/projects/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(route, projectService, headerService, errorService, loaderService, location) {
        this.route = route;
        this.projectService = projectService;
        this.headerService = headerService;
        this.errorService = errorService;
        this.loaderService = loaderService;
        this.location = location;
        this.getProject();
    }
    ProjectDetailComponent.prototype.getTechnologyBadge = function (name) {
        var imageSource;
        switch (name) {
            case 'Angular':
                imageSource = 'assets/images/angular.png';
                break;
            case 'Node':
                imageSource = 'assets/images/node-js.png';
                break;
            case 'Typescript':
                imageSource = 'assets/images/typescript.png';
                break;
            case 'MongoDB':
                imageSource = 'assets/images/mongo-db.png';
                break;
            case 'Socket.io':
                imageSource = 'assets/images/socket-io.png';
                break;
            case 'PHP':
                imageSource = 'assets/images/php.svg';
                break;
            case 'HTML5':
                imageSource = 'assets/images/html-5.png';
                break;
            case 'CSS3':
                imageSource = 'assets/images/css-3.png';
                break;
            case 'Javascript':
                imageSource = 'assets/images/javascript.png';
                break;
            default:
                break;
        }
        return imageSource;
    };
    ProjectDetailComponent.prototype.getClassName = function (label) {
        if (!label) {
            return;
        }
        return label.toLowerCase();
    };
    ProjectDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProjectDetailComponent.prototype.getProject = function () {
        var _this = this;
        this.loaderService.shouldShow.next(true);
        this.projectService.getProject(this.route.snapshot.paramMap.get('id'))
            .subscribe(function (project) {
            _this.headerService.showHeader.next(false);
            _this.loaderService.shouldShow.next(false);
            _this.project = project;
        }, function (error) {
            _this.errorService.showError(error);
            _this.loaderService.shouldShow.next(false);
        });
    };
    return ProjectDetailComponent;
}());
ProjectDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["o" /* Component */])({
        selector: 'app-project-detail',
        template: __webpack_require__("../../../../../client/app/components/project/detail/project-detail.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/project/detail/project-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_projects_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_projects_project_service__["a" /* ProjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_header_header_service__["a" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_header_header_service__["a" /* HeaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_error_error_service__["a" /* ErrorService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services_loader_loader_service_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_loader_loader_service_service__["a" /* LoaderService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */]) === "function" && _f || Object])
], ProjectDetailComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=project-detail.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<section class='container'>\n  <div class='grid'>\n    <div class='flex-3 card' *ngFor=\"let project of projects\">\n      <div class='card_image'>\n        <img src=\"{{project.imageLocation}}\" />\n      </div>\n      <div class='card_body'>\n        <h1>{{ project.title }}</h1>\n        <label class='{{getClassName(project.label)}}'>{{ project.label }}</label>\n        <p>{{ project.information }}</p>\n      </div>\n      <div class='card_actions'>\n        <button class=\"active\" routerLink=\"/project/{{project._id}}\">Find out more</button>\n        <a target=\"_blank\" href=\"{{project.url}}\"><button>View project</button></a>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../client/app/components/project/project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nunito:300,400,700);", ""]);

// module
exports.push([module.i, ".container {\n  width: 95%;\n  margin: 0 auto; }\n\n.grid, :host > section > .grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  margin-top: 2em; }\n\n[class*=\"flex\"] {\n  margin: 1%; }\n\n.flex-1 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 6.33333333%;\n          flex: 1 0 6.33333333%;\n  min-width: 30em; }\n\n.flex-2 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 14.66666667%;\n          flex: 1 0 14.66666667%;\n  min-width: 30em; }\n\n.flex-3 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 23%;\n          flex: 1 0 23%;\n  min-width: 30em; }\n\n.flex-4 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 31.33333333%;\n          flex: 1 0 31.33333333%;\n  min-width: 30em; }\n\n.flex-5 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 39.66666667%;\n          flex: 1 0 39.66666667%;\n  min-width: 30em; }\n\n.flex-6 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 48%;\n          flex: 1 0 48%;\n  min-width: 30em; }\n\n.flex-7 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 56.33333333%;\n          flex: 1 0 56.33333333%;\n  min-width: 30em; }\n\n.flex-8 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 64.66666667%;\n          flex: 1 0 64.66666667%;\n  min-width: 30em; }\n\n.flex-9 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 73%;\n          flex: 1 0 73%;\n  min-width: 30em; }\n\n.flex-10 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 81.33333333%;\n          flex: 1 0 81.33333333%;\n  min-width: 30em; }\n\n.flex-11 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 89.66666667%;\n          flex: 1 0 89.66666667%;\n  min-width: 30em; }\n\n.flex-12 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 98%;\n          flex: 1 0 98%;\n  min-width: 30em; }\n\n[class*=\"no-grow\"] {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0; }\n\n.header-button {\n  border-radius: 50px;\n  background: white;\n  color: #E24269;\n  border: none;\n  padding: 1em 1.4em;\n  margin: 1em 1em;\n  text-align: center;\n  cursor: pointer;\n  outline: none; }\n\n.card-button, .detail-card-button, .detail-card_body__actions > button, .detail-card_body__actions a > button, .card_actions > button, .card_actions a > button {\n  border: 1px solid #E24269;\n  color: #E24269;\n  padding: 8px 20px;\n  height: 3.2em;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 50px;\n  background: #FFF;\n  transition: all ease-in-out 100ms;\n  outline: none; }\n  .card-button:hover, .detail-card-button:hover, .detail-card_body__actions > button:hover, .detail-card_body__actions a > button:hover, .card_actions > button:hover, .card_actions a > button:hover {\n    background: #E24269;\n    color: #FFF; }\n  .card-button.active, .active.detail-card-button, .detail-card_body__actions > button.active, .detail-card_body__actions a > button.active, .card_actions > button.active, .card_actions a > button.active {\n    background: #E24269;\n    color: #FFF; }\n\n.detail-card-button, .detail-card_body__actions > button, .detail-card_body__actions a > button {\n  text-align: left; }\n\n.label, .card_body > label, .detail-card_body > label {\n  padding: 12px 20px;\n  width: 12em;\n  border: none;\n  font-size: 1.3em;\n  font-weight: 300;\n  color: #FFF; }\n  .label.personal, .card_body > label.personal, .detail-card_body > label.personal {\n    background: #B1DDF1; }\n  .label.codepen, .card_body > label.codepen, .detail-card_body > label.codepen {\n    background: #68C3D4; }\n  .label.commercial, .card_body > label.commercial, .detail-card_body > label.commercial {\n    background: #4F5D75; }\n\n.card, :host > section > .grid > .card {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  background: #FEFEFE;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  padding: 0;\n  height: auto; }\n  .card_body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding-bottom: 2em; }\n    .card_body > h1 {\n      color: #E24269;\n      font-weight: 300;\n      font-size: 1.8em;\n      border-bottom: 1px solid #FFF;\n      padding: 1em;\n      text-align: center; }\n    .card_body > p {\n      color: #888;\n      font-weight: 300;\n      font-size: 1.3em;\n      padding: 2em 1.5em; }\n  .card_actions {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 0 0 2em 2em;\n    display: flex;\n    height: 100%;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n    .card_actions > a > button {\n      margin-left: 2em; }\n  .card_image > img {\n    width: 100%;\n    height: 100%; }\n\n.detail-card {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  background: #FEFEFE;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  padding: 0;\n  height: auto; }\n  .detail-card_body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .detail-card_body > h1 {\n      color: #E24269;\n      font-weight: 300;\n      font-size: 1.8em;\n      border-bottom: 1px solid #FFF;\n      padding: 1em; }\n    .detail-card_body > p {\n      color: #888;\n      font-weight: 300;\n      font-size: 1.3em;\n      padding: 2em 1.5em; }\n    .detail-card_body > div {\n      padding-bottom: 2em;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 100%;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .detail-card_body__actions {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0 0 2em 2em;\n      display: flex;\n      height: 100%;\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; }\n  .detail-card_image {\n    height: 100%; }\n    .detail-card_image > img {\n      width: 100%;\n      height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loader_loader_service_service__ = __webpack_require__("../../../../../client/app/services/loader/loader-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_error_error_service__ = __webpack_require__("../../../../../client/app/services/error/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_header_header_service__ = __webpack_require__("../../../../../client/app/services/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_projects_project_service__ = __webpack_require__("../../../../../client/app/services/projects/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectComponent = (function () {
    function ProjectComponent(projectService, headerService, errorService, loaderService) {
        this.projectService = projectService;
        this.headerService = headerService;
        this.errorService = errorService;
        this.loaderService = loaderService;
    }
    ProjectComponent.prototype.getClassName = function (label) {
        if (!label) {
            return;
        }
        return label.toLowerCase();
    };
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProjects();
        setTimeout(function () { return _this.headerService.showHeader.next(true); });
    };
    ProjectComponent.prototype.getProjects = function () {
        var _this = this;
        this.loaderService.shouldShow.next(true);
        this.projectService.getProjects()
            .subscribe(function (projects) {
            _this.projects = projects;
            _this.loaderService.shouldShow.next(false);
        }, function (error) {
            _this.errorService.showError(error);
            _this.loaderService.shouldShow.next(false);
        });
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["o" /* Component */])({
        selector: 'app-project',
        template: __webpack_require__("../../../../../client/app/components/project/project.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/project/project.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_projects_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_projects_project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_header_header_service__["a" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_header_header_service__["a" /* HeaderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_error_error_service__["a" /* ErrorService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_loader_loader_service_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_loader_loader_service_service__["a" /* LoaderService */]) === "function" && _d || Object])
], ProjectComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../client/app/route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_authentication_service__ = __webpack_require__("../../../../../client/app/services/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("../../../../../client/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_admin_admin_component__ = __webpack_require__("../../../../../client/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_project_project_component__ = __webpack_require__("../../../../../client/app/components/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_project_detail_project_detail_component__ = __webpack_require__("../../../../../client/app/components/project/detail/project-detail.component.ts");





var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_project_project_component__["a" /* ProjectComponent */] },
    { path: 'project/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_project_detail_project_detail_component__["a" /* ProjectDetailComponent */] },
    { path: 'project/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_project_detail_project_detail_component__["a" /* ProjectDetailComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_2__components_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_authentication_authentication_service__["a" /* CheckAuthenticationService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_authentication_authentication_service__["a" /* CheckAuthenticationService */]] }
];
//# sourceMappingURL=route.module.js.map

/***/ }),

/***/ "../../../../../client/app/services/authentication/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckAuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_error_service__ = __webpack_require__("../../../../../client/app/services/error/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckAuthenticationService = (function () {
    function CheckAuthenticationService(router, http, errorService, cookieService) {
        this.router = router;
        this.http = http;
        this.errorService = errorService;
        this.cookieService = cookieService;
    }
    CheckAuthenticationService.prototype.canActivate = function () {
        var _this = this;
        this.checkToken()
            .subscribe(function (data) {
            _this.router.navigate(['admin']);
        }, function (error) {
            _this.router.navigate(['login']);
        });
        return true;
    };
    CheckAuthenticationService.prototype.login = function (details) {
        return this.http.post('/auth/login', details, { responseType: 'text' });
    };
    CheckAuthenticationService.prototype.checkToken = function () {
        return this.http.get('/auth/checktoken', {
            responseType: 'text',
            headers: this.getHeaders()
        });
    };
    CheckAuthenticationService.prototype.getHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]().set('Authorization', this.getToken());
    };
    CheckAuthenticationService.prototype.getToken = function () {
        return 'basic ' + this.cookieService.get('auth-jack-thomson');
    };
    return CheckAuthenticationService;
}());
CheckAuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__error_error_service__["a" /* ErrorService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ngx_cookie_service__["a" /* CookieService */]) === "function" && _d || Object])
], CheckAuthenticationService);

var _a, _b, _c, _d;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/dialogue/dialogue.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogueService = (function () {
    function DialogueService() {
        this.showDialogue = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.reason = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    return DialogueService;
}());
DialogueService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DialogueService);

//# sourceMappingURL=dialogue.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/error/error.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialogue_dialogue_service__ = __webpack_require__("../../../../../client/app/services/dialogue/dialogue.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorService = (function () {
    function ErrorService(dialogueService) {
        this.dialogueService = dialogueService;
    }
    ErrorService.prototype.showError = function (response) {
        var user_message = '';
        var parsedError = JSON.parse(response.error);
        user_message = parsedError.user_message;
        this.dialogueService.reason.next(user_message);
        this.dialogueService.showDialogue.next(true);
    };
    return ErrorService;
}());
ErrorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__dialogue_dialogue_service__["a" /* DialogueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__dialogue_dialogue_service__["a" /* DialogueService */]) === "function" && _a || Object])
], ErrorService);

var _a;
//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/header/header.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderService = (function () {
    function HeaderService() {
        this.showHeader = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    return HeaderService;
}());
HeaderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], HeaderService);

//# sourceMappingURL=header.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/httpIntercept/http-intercept.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoopInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoopInterceptor = (function () {
    function NoopInterceptor(router) {
        this.router = router;
    }
    NoopInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req);
    };
    return NoopInterceptor;
}());
NoopInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NoopInterceptor);

var _a;
//# sourceMappingURL=http-intercept.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/loader/loader-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = (function () {
    function LoaderService() {
        this.shouldShow = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    return LoaderService;
}());
LoaderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LoaderService);

//# sourceMappingURL=loader-service.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/projects/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_authentication_service__ = __webpack_require__("../../../../../client/app/services/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectService = (function () {
    function ProjectService(http, cookieService, authenticationService) {
        this.http = http;
        this.cookieService = cookieService;
        this.authenticationService = authenticationService;
        this.projectsResource = '/api/projects/';
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get(this.projectsResource);
    };
    ProjectService.prototype.getProject = function (projectId) {
        return this.http.get(this.projectsResource + projectId);
    };
    ProjectService.prototype.addProject = function (project) {
        return this.http.post(this.projectsResource, project, {
            headers: this.authenticationService.getHeaders()
        });
    };
    return ProjectService;
}());
ProjectService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__authentication_authentication_service__["a" /* CheckAuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__authentication_authentication_service__["a" /* CheckAuthenticationService */]) === "function" && _c || Object])
], ProjectService);

var _a, _b, _c;
//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ "../../../../../client/assets/images/bg.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAADmCAYAAADx5uiaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCIgeG1wOkNyZWF0ZURhdGU9IjIwMTEtMTAtMTJUMTg6MTM6MTgrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDExLTEwLTEyVDE2OjE3KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDExLTEwLTEyVDE2OjE3KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEN0ZDMjJERkVEMTAxMUUwODA4OEY5QUFEQTQzOTFCNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEN0ZDMjJFMEVEMTAxMUUwODA4OEY5QUFEQTQzOTFCNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3RkMyMkRERUQxMDExRTA4MDg4RjlBQURBNDM5MUI3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ3RkMyMkRFRUQxMDExRTA4MDg4RjlBQURBNDM5MUI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+59nK8wAABF5JREFUeNrs3FturDAURFHzmP+MwTdIaekOwKVQ6rWk/FqN8Sbwc7YxxvHzt4/1rsXrbT9/9+I1j8B1P3s57efS/bwL9jNx34/EZgJfQvAgeEDwgOABwQOCBwQPCB4QPCB4QPCA4EHwgOABwQOCBwQP/KntN/otsO4MrDlKfmfDmo+75B413Pc5CkaGnSMzLyz1EBkFN6llVlzCHXrYbYHzOULnaaVrlFw44BseEDwgeEDwgOABwQOCB8EDggcEDwgeEDwgeEDwgOABwQOCBwQPX+uZaZeYFdcyMywxL20L7ekI/M695B7Ngv2cDffo/G/hhg1dPRwydeBnwZqJa99DB79hwmzqoeyVHhA8IHhA8CB4QPCA4AHBA4IHBA8IHhA8IHhA8IDgQfCA4AHBA4IH3uz8jX717KxnzbtkDxLXnlgzcd33y/fys+YsuEePqyH4xI2aocPUML009RBpGQ45CtZMPpxe/RDxSg++4QHBA4IHBA8IHhA8IHhA8IDgAcEDggfBA4IHBA8IHhA8IHhA8MBin5l2iSGB5+I1E0MX99CaM3DtiTX3kt+52izZz+XXf/4e+IbJrVvo5jccpuceXYF71DB08h6Zgair1zy80gOCBwQPCB4QPCB4QPCA4EHwgOABwQOCBwQPCB4QPCB4QPCA4AHBwxc6R2a2WWJWWmKmXcuAxJTE9d8l9/0ouT/76uATA/3uwKE/QhuaeNg1DJxMxX6VBJ9wvf3Me6UH3/CA4AHBA4IHBA8IHhA8IHhA8IDgAcGD4AHBA4IHBA8IHhA8IHhgsc9Mu9WzsxKDHFODMUfBuqm5bomBk4nZgw1DQRPXfiSCT23m6nWvkoO0jQ53IPh9dEzCTfxDOkIP5bn6BgG+4QHBA4IHBA8IHhA8IHhA8IDgAcEDggfBA4IHBA8IHhA8IHhA8MBCyZl2LcMMG+batczJ20rWTHn9WXqCv0fHQL/EhiauPTFhtmXQ6CwJdAudpfvtZ8krPfiGBwQPCB4QPCB4QPCA4AHBA4IHBA8IHgQPCB4QPCB4QPCA4AHBA4s9M+2e+XNXwW/dQg+olsGYif1cPWh0L7n2xG/cR8Hw0nNkhi6OwEPkCN2kO7DuHTig3zpodAbOUurBtL39LHmlB9/wgOABwQOCBwQPCB4QPCB4QPCA4AHBg+ABwQOCBwQPCB4QPCB4YLEzGP7q+V6JGWR36LqPwLXPgv3cQuc0MRwyseb99v08R8eU0U+cs+DGp96aVl/7VfAbkw+RxPl8/fBSr/TgGx4QPCB4QPCA4AHBA4IHBA8IHhA8IHgQPCB4QPCA4AHBA4IHBA8sdgYfJIlZZIkhgQ0z/VKz4vaC3zpL7lHFfp6hDU0Ev5XENEdmGu744v1MDPD8yuGlXunBNzwgeEDwgOABwQOCBwQPCB4QPCB4QPAgeEDwgOABwQOCBwQPCB5Y7Jlpd4QeJImBk4k5eQ3z/B5XwXlqGYyZWjOxn0v7/CfAAMrKqB7xcqi5AAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../client/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map