(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/abaut/abaut.component.css":
/*!*******************************************!*\
  !*** ./src/app/abaut/abaut.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FiYXV0L2FiYXV0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/abaut/abaut.component.html":
/*!********************************************!*\
  !*** ./src/app/abaut/abaut.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n\n    <h1 class=\"display-4\">Who we are?</h1>\n    \n    <p class=\"lead\">This blog is made by Glen. Glen is a full-stack developer.\n      This blog is made with the idea in mind to serve like a media where \n      people can entertain and can find useful information.  </p>\n    \n    <hr class=\"my-4\">\n   \n    <p>it is made with the idea to help people in evry day life.</p>\n    <!--  \n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n  -->\n  </div>\n"

/***/ }),

/***/ "./src/app/abaut/abaut.component.ts":
/*!******************************************!*\
  !*** ./src/app/abaut/abaut.component.ts ***!
  \******************************************/
/*! exports provided: AbautComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbautComponent", function() { return AbautComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AbautComponent = /** @class */ (function () {
    function AbautComponent() {
    }
    AbautComponent.prototype.ngOnInit = function () {
    };
    AbautComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-abaut',
            template: __webpack_require__(/*! ./abaut.component.html */ "./src/app/abaut/abaut.component.html"),
            styles: [__webpack_require__(/*! ./abaut.component.css */ "./src/app/abaut/abaut.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AbautComponent);
    return AbautComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _abaut_abaut_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abaut/abaut.component */ "./src/app/abaut/abaut.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-post/edit-post.component */ "./src/app/edit-post/edit-post.component.ts");
/* harmony import */ var _read_post_read_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./read-post/read-post.component */ "./src/app/read-post/read-post.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login-component/login-component.component */ "./src/app/login-component/login-component.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _route_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./route-guard.service */ "./src/app/route-guard.service.ts");
















var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"] },
    { path: "login", component: _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponentComponent"] },
    { path: "logout", component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_13__["LogoutComponent"] },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"] },
    { path: "abaut", component: _abaut_abaut_component__WEBPACK_IMPORTED_MODULE_4__["AbautComponent"] },
    { path: 'readpost/:id', component: _read_post_read_post_component__WEBPACK_IMPORTED_MODULE_10__["ReadPostComponent"] },
    { path: "posts", component: _list_list_component__WEBPACK_IMPORTED_MODULE_11__["ListComponent"]
    },
    { path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: "profile", component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"], canActivate: [_route_guard_service__WEBPACK_IMPORTED_MODULE_15__["RouteGuardService"]]
        /**
      children:[
        {path:'edit/:id', component: EditPostComponent },
        {path:"post/:id", component: ReadPostComponent }
      ]  */
    },
    { path: 'profile/edit/:id', component: _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_9__["EditPostComponent"], canActivate: [_route_guard_service__WEBPACK_IMPORTED_MODULE_15__["RouteGuardService"]] },
    { path: "services", component: _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"] },
    { path: "**", component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_8__["ErrorPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#shell-container{\r\n\r\n    position: absolute;\r\n    bottom: 0;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n\r\n    width: auto;\r\n    height: auto;\r\n\r\n    padding: 0px;\r\n    margin: 0px;\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7O0lBRVIsZUFBZTtJQUNmLGdCQUFnQjs7SUFFaEIsV0FBVztJQUNYLFlBQVk7O0lBRVosWUFBWTtJQUNaLFdBQVc7O0FBRWYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaGVsbC1jb250YWluZXJ7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG5cclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<!--  -->\n<div id=\"shell-container\">  \n<app-shell >\n\n    <app-menu header>  </app-menu>\n<!--  \n    <app-list main >   </app-list>\n -->\n         <!--  \n<app-user-profile main  >      </app-user-profile>\n-->\n\n\n        <router-outlet main >  </router-outlet>\n\n<!--   \n    <app-my-sidebar side >  </app-my-sidebar>\n    -->\n\n\n</app-shell>\n\n</div>\n\n\n<!-- \n\n<app-menu>  </app-menu>\n\n<app-list>   </app-list>\n\n\n\n\n\n<router-outlet></router-outlet>\n\n -->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myBlog';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _my_sidebar_my_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-sidebar/my-sidebar.component */ "./src/app/my-sidebar/my-sidebar.component.ts");
/* harmony import */ var _les_text_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./les-text.pipe */ "./src/app/les-text.pipe.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shell/shell.component */ "./src/app/shell/shell.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _show_hide_posts_user_id_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./show-hide-posts-user-id.pipe */ "./src/app/show-hide-posts-user-id.pipe.ts");
/* harmony import */ var _load_user_data_service_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./load-user-data-service.service */ "./src/app/load-user-data-service.service.ts");
/* harmony import */ var _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-post/edit-post.component */ "./src/app/edit-post/edit-post.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _abaut_abaut_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./abaut/abaut.component */ "./src/app/abaut/abaut.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _read_post_read_post_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./read-post/read-post.component */ "./src/app/read-post/read-post.component.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login-component/login-component.component */ "./src/app/login-component/login-component.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _http_interceptor_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./http-interceptor.service */ "./src/app/http-interceptor.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");























// import { CKEditorModule } from 'ngx-ckeditor';






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _my_sidebar_my_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["MySidebarComponent"],
                _les_text_pipe__WEBPACK_IMPORTED_MODULE_10__["LesTextPipe"],
                _shell_shell_component__WEBPACK_IMPORTED_MODULE_12__["ShellComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["UserProfileComponent"],
                _show_hide_posts_user_id_pipe__WEBPACK_IMPORTED_MODULE_14__["ShowHidePostsUserIdPipe"],
                _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_16__["EditPostComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
                _abaut_abaut_component__WEBPACK_IMPORTED_MODULE_18__["AbautComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_19__["ErrorPageComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_20__["ServicesComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_21__["LandingPageComponent"],
                _read_post_read_post_component__WEBPACK_IMPORTED_MODULE_22__["ReadPostComponent"],
                _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponentComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_26__["LogoutComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_28__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_23__["CKEditorModule"]
            ],
            providers: [
                _les_text_pipe__WEBPACK_IMPORTED_MODULE_10__["LesTextPipe"],
                _show_hide_posts_user_id_pipe__WEBPACK_IMPORTED_MODULE_14__["ShowHidePostsUserIdPipe"],
                _load_user_data_service_service__WEBPACK_IMPORTED_MODULE_15__["LoadUserDataServiceService"],
                _http_interceptor_service__WEBPACK_IMPORTED_MODULE_27__["httpInterceptorProviders"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/authentication-service.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenticationServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationServiceService", function() { return AuthenticationServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthenticationServiceService = /** @class */ (function () {
    function AuthenticationServiceService(http) {
        this.http = http;
    }
    // Observable<HttpResponse<string>>       http://localhost:8080/login
    AuthenticationServiceService.prototype.login = function (ld) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }
            /**
            <HttpResponse<string>>
            
            {responseType: 'text'}
            */
            )
        };
        return this.http.post('https://blog-angular-spring-boot.herokuapp.com/login', ld, httpOptions);
    };
    //       http://localhost:8080/singin 
    AuthenticationServiceService.prototype.singIn = function (rmd) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('https://blog-angular-spring-boot.herokuapp.com/singin', rmd, httpOptions);
    };
    //       http://localhost:8080/deleteacount
    AuthenticationServiceService.prototype.deleteAcount = function (email) {
        return this.http.post('https://blog-angular-spring-boot.herokuapp.com/deleteacount', email);
    };
    AuthenticationServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationServiceService);
    return AuthenticationServiceService;
}());



/***/ }),

/***/ "./src/app/blog-post.ts":
/*!******************************!*\
  !*** ./src/app/blog-post.ts ***!
  \******************************/
/*! exports provided: BlogPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPost", function() { return BlogPost; });
var BlogPost = /** @class */ (function () {
    function BlogPost(username, title, body, userId, id) {
        // this.showHidePost = new Array(2) ;
        this.userId = userId;
        this.username = username;
        this.title = title;
        this.body = body;
        this.id = id;
    }
    return BlogPost;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n\n    <h1 class=\"display-4\">Hello from the owner of blog!</h1>\n    \n    <p class=\"lead\">For advertysing contact me at my email address : myblog@gmail.com.</p>\n    \n    <hr class=\"my-4\">\n   \n    <p> For web development services contact me at my email address : myblog@gmail.com.</p>\n    <!--  \n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n  -->\n  </div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/edit-post/edit-post.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-post/edit-post.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#deleteArt{\r\n    float: right;\r\n}\r\n\r\n\r\n.edit-container{\r\n\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n}\r\n\r\n\r\n.titull{\r\n    font-weight: bold;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    \r\n}\r\n\r\n\r\n#titext{\r\n    min-width: 90%;\r\n}\r\n\r\n\r\n/*\r\n\r\n#textBodyPost{\r\n\r\n    min-width: 70%;\r\n\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n*/\r\n\r\n\r\n:host ::ng-deep .ck-editor__editable {\r\n\r\n    margin-left: 0px;\r\n    margin-right: 10%;\r\n    background-color: white;\r\n   \r\n}\r\n\r\n\r\n:host ::ng-deep .ck-toolbar{\r\n\r\n    margin-left: 0px;\r\n    margin-right: 10%;\r\n    \r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wb3N0L2VkaXQtcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBR0E7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUNBQXlDOztBQUU3Qzs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFHQTs7Ozs7Ozs7Ozs7Q0FXQzs7O0FBQ0Q7O0lBRUksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix1QkFBdUI7O0FBRTNCOzs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCOztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcG9zdC9lZGl0LXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkZWxldGVBcnR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG4uZWRpdC1jb250YWluZXJ7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLnRpdHVsbHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBcclxufVxyXG5cclxuI3RpdGV4dHtcclxuICAgIG1pbi13aWR0aDogOTAlO1xyXG59XHJcblxyXG5cclxuLypcclxuXHJcbiN0ZXh0Qm9keVBvc3R7XHJcblxyXG4gICAgbWluLXdpZHRoOiA3MCU7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG4qL1xyXG46aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcl9fZWRpdGFibGUge1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICBcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jay10b29sYmFye1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/edit-post/edit-post.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-post/edit-post.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-container\">  \n \n  <div *ngIf=\"delPos\" class=\"alert alert-info\" role=\"alert\" style=\"min-width: 100%;  float: left;\">\n    Post deleted!!\n  </div>\n  \n\n    <div>\n    <h1> {{editTitle}} </h1>  \n\n    <p [innerHTML]=\"editTextBody\" >\n        <!-- {{editTextBody}} -->\n       \n    </p>\n\n    </div>\n\n\n    <div  > \n      \n\n        <h6> Edit your post to expres your idea beter!  </h6>\n     \n      <div> \n          <br/>\n          <label class=\"titull\"> Edit the title of the post.  </label>\n          <br/>\n\n          <input type=\"text\" id=\"titext\"  [(ngModel)]=\"InputTitle\"/>\n \n            <div *ngIf=\"emptyTitle\" class=\"alert alert-danger\" role=\"alert\">\n              Title can not be empty!\n            </div>\n            \n        </div>\n                \n      <br/>\n     <div>  \n          <label class=\"titull\"> Edit the boody of the post.  </label>\n          <br/>\n          \n\n            <!--\n          <ckeditor #cked [(ngModel)]=\"InputTextBody\" [editor]=\"Editor\" tagName=\"textarea\"  ></ckeditor>\n            -->\n          <ckeditor [editor]=\"Editor\" [(ngModel)]=\"InputTextBody\"   (ready)=\"onReady($event)\" ></ckeditor>\n            <div *ngIf=\"emptyBody\" class=\"alert alert-danger\" role=\"alert\">\n              Body can not be empty!\n            </div>\n\n      </div>\n      <br/>  <br/>\n      \n      <button (click)=\"CancelPostAuth()\" id=\"cancel-btn\" class=\"btn btn-danger\"> Cancel post!! </button>\n      <button (click)=\"updateSuces()\" id=\"cancel-btn\" class=\"btn btn-success\"> Aplay changes!! </button>\n\n  \n    </div>\n\n    \n    <button class=\"btn btn-danger\" id=\"deleteArt\" (click)=\"DeletePostAuth()\" >  Delete the  article    </button>\n<!--  -->\n    <a *ngIf=\"delPos\" routerLink=\"\" (click)=\"goProfile()\" > Go to profile </a>\n    <a *ngIf=\"delPos\" routerLink=\"\" (click)=\"goPosts()\"> Go to all posts </a>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-post/edit-post.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-post/edit-post.component.ts ***!
  \**************************************************/
/*! exports provided: EditPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPostComponent", function() { return EditPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _load_user_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../load-user-data-service.service */ "./src/app/load-user-data-service.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-decoupled-document */ "./node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_4__);





var EditPostComponent = /** @class */ (function () {
    function EditPostComponent(route, loadUserDataServiceService, router) {
        this.route = route;
        this.loadUserDataServiceService = loadUserDataServiceService;
        this.router = router;
        //
        this.temp = [];
        this.InputTitle = "";
        this.InputTextBody = "";
        this.emptyTitle = false;
        this.emptyBody = false;
        // public Editor = ClassicEditor;
        this.Editor = _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_4__;
        this.editTitle = "";
        this.editTextBody = "";
        this.delPos = false;
    }
    EditPostComponent.prototype.onReady = function (editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    };
    EditPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get("id"));
        // shife se mos duhet fshire idPost
        this.idPost = id;
        // get data by id . 
        var subscriptionVariable = this.loadUserDataServiceService.getPostId(this.idPost);
        subscriptionVariable.subscribe(function (data) {
            _this.newPostInterface = data;
            _this.editTitle = _this.newPostInterface.title;
            _this.editTextBody = _this.newPostInterface.body;
            _this.temp[0] = _this.newPostInterface.title;
            _this.temp[1] = _this.newPostInterface.body;
            _this.username = _this.newPostInterface.username;
            _this.userId = _this.newPostInterface.userId;
            console.log(_this.editTextBody);
        }, function (error) {
            _this.errorMsg = error;
        });
    };
    EditPostComponent.prototype.CancelPostAuth = function () {
        this.InputTitle = this.temp[0];
        // this.post.title;
        this.InputTextBody = this.temp[1];
        // this.post.body;
    };
    EditPostComponent.prototype.updateSuces = function () {
        var _this = this;
        if (this.InputTitle != "" && this.InputTextBody != "") {
            this.post = {
                id: this.idPost,
                userId: this.userId,
                username: this.username,
                title: this.InputTitle,
                body: this.InputTextBody
            };
            // Update post
            var subscriptionVariable = this.loadUserDataServiceService.updatePost(this.post);
            subscriptionVariable.subscribe(function () {
                window.location.reload();
            }, function (error) {
                _this.errorMsg = error;
            });
        }
        else if (this.InputTextBody != "" && this.InputTitle == "") {
            this.post = {
                id: this.idPost,
                userId: this.userId,
                username: this.username,
                title: this.editTitle,
                body: this.InputTextBody
            };
            // Update post
            var subscriptionVariable = this.loadUserDataServiceService.updatePost(this.post);
            subscriptionVariable.subscribe(function () {
                window.location.reload();
            }, function (error) {
                _this.errorMsg = error;
            });
        }
        else if (this.InputTextBody == "" && this.InputTitle != "") {
            this.post = {
                id: this.idPost,
                userId: this.userId,
                username: this.username,
                title: this.InputTitle,
                body: this.editTextBody
            };
            // Update post
            var subscriptionVariable = this.loadUserDataServiceService.updatePost(this.post);
            subscriptionVariable.subscribe(function () {
                window.location.reload();
            }, function (error) {
                _this.errorMsg = error;
            });
        }
        else {
            this.emptyTitle = true;
            console.log(" Empty body ");
            this.emptyBody = true;
            console.log(" Empty  title ");
        }
        // window.location.reload();
    };
    EditPostComponent.prototype.DeletePostAuth = function () {
        // delete
        var subscriptionVariable = this.loadUserDataServiceService.deletePosts(this.idPost);
        subscriptionVariable.subscribe();
        // window.location.reload();
        // this.router.navigate(['posts']);
        this.delPos = true;
    };
    EditPostComponent.prototype.goProfile = function () {
        this.router.navigate(['profile']);
    };
    EditPostComponent.prototype.goPosts = function () {
        this.router.navigate(['posts']);
    };
    EditPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-post',
            template: __webpack_require__(/*! ./edit-post.component.html */ "./src/app/edit-post/edit-post.component.html"),
            styles: [__webpack_require__(/*! ./edit-post.component.css */ "./src/app/edit-post/edit-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _load_user_data_service_service__WEBPACK_IMPORTED_MODULE_3__["LoadUserDataServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditPostComponent);
    return EditPostComponent;
}());



/***/ }),

/***/ "./src/app/error-page/error-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error-page/error-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/error-page/error-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n\n    <h1 class=\"display-4\">ups the requested content canot be found!</h1>\n   \n    <p class=\"lead\">Check your spelling or URL.</p>\n    \n    <hr class=\"my-4\">\n    \n    <p> Error 404.</p>\n    <!-- routerLink=\"home\"  -->\n    <a class=\"btn btn-primary btn-lg\" href=\"/home\"  role=\"button\"> Go to home page</a>\n \n  </div>\n"

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.css */ "./src/app/error-page/error-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/http-interceptor.service.ts":
/*!*********************************************!*\
  !*** ./src/app/http-interceptor.service.ts ***!
  \*********************************************/
/*! exports provided: HttpInterceptorService, httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage-service.service */ "./src/app/token-storage-service.service.ts");




var HttpInterceptorService = /** @class */ (function () {
    function HttpInterceptorService(tokenStorage) {
        this.tokenStorage = tokenStorage;
    }
    HttpInterceptorService.prototype.intercept = function (req, next) {
        var authRequest = req;
        var token = this.tokenStorage.getToken();
        if (token != null) {
            authRequest = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        }
        return next.handle(authRequest);
    };
    HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageServiceService"]])
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());

var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: HttpInterceptorService, multi: true }
];


/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing-page-container{\r\n\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    display: grid;\r\n    grid-template-columns: 70% auto;\r\n    grid-template-rows: auto auto ;\r\n\r\n    padding: 0px;\r\n    margin: 0px;\r\n\r\n}\r\n.lef-side{\r\n    float: left;\r\n    min-width: 70%;\r\n    min-height: 80%;\r\n\r\n    grid-column-start: 1;\r\n         grid-column-end: 2;\r\n\r\n         grid-row-start: 1;\r\n         grid-row-end: 2;\r\n         padding: 0px;\r\n         margin: 0px;\r\n}\r\n.side-bar{\r\n    float: right;\r\n    min-width: 30%;\r\n    min-height: 100%;\r\n\r\n    grid-column-start: 2;\r\n    grid-column-end: 3;\r\n\r\n    grid-row-start: 1;\r\n    grid-row-end: 3;\r\n\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n.landing-page-foo{\r\n    min-width: 70%;\r\n    min-height: 20%;\r\n\r\n    grid-column-start: 1;\r\n    grid-column-end: 2;\r\n\r\n    grid-row-start: 2;\r\n    grid-row-end: 3;\r\n\r\n    padding: 0px;\r\n    margin: 0px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLCtCQUErQjtJQUMvQiw4QkFBOEI7O0lBRTlCLFlBQVk7SUFDWixXQUFXOztBQUVmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7O0lBRWYsb0JBQW9CO1NBQ2Ysa0JBQWtCOztTQUVsQixpQkFBaUI7U0FDakIsZUFBZTtTQUNmLFlBQVk7U0FDWixXQUFXO0FBQ3BCO0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjs7SUFFaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjs7SUFFbEIsaUJBQWlCO0lBQ2pCLGVBQWU7O0lBRWYsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7O0lBRWYsb0JBQW9CO0lBQ3BCLGtCQUFrQjs7SUFFbEIsaUJBQWlCO0lBQ2pCLGVBQWU7O0lBRWYsWUFBWTtJQUNaLFdBQVc7O0FBRWYiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZGluZy1wYWdlLWNvbnRhaW5lcntcclxuXHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byA7XHJcblxyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG59XHJcbi5sZWYtc2lkZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWluLXdpZHRoOiA3MCU7XHJcbiAgICBtaW4taGVpZ2h0OiA4MCU7XHJcblxyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcclxuXHJcbiAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XHJcbiAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5zaWRlLWJhcntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuXHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuXHJcbiAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgIGdyaWQtcm93LWVuZDogMztcclxuXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmxhbmRpbmctcGFnZS1mb297XHJcbiAgICBtaW4td2lkdGg6IDcwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDIwJTtcclxuXHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcclxuXHJcbiAgICBncmlkLXJvdy1zdGFydDogMjtcclxuICAgIGdyaWQtcm93LWVuZDogMztcclxuXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"landing-page-container\">   \n  <div class=\"jumbotron lef-side\">\n    <!--  -->\n      <h1 class=\"display-4\">welcome to my blog!</h1>\n      \n      <p class=\"lead\"> A blog for evry age .</p>\n      \n      <hr class=\"my-4\">\n\n      <p>A blog for evry gender.</p>\n      \n      <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n    \n    </div>\n\n    <div class=\"side-bar\" >\n  <!--   \n      <ng-content select =\"[side]\"  > </ng-content>\n      -->\n      <app-my-sidebar  >  </app-my-sidebar>\n\n    </div>\n    \n    <div class=\"landing-page-foo\">\n    <p>\n      landing page footer\n    </p>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/les-text.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/les-text.pipe.ts ***!
  \**********************************/
/*! exports provided: LesTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LesTextPipe", function() { return LesTextPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LesTextPipe = /** @class */ (function () {
    function LesTextPipe() {
    }
    LesTextPipe.prototype.transform = function (value, args) {
        //console.log(value);
        //console.log(value.length);
        var temporal = "";
        if (value.length > 2) {
            temporal = value.substring(0, 40); //parseInt(args[0],5);
            temporal = temporal + "...";
        }
        else {
            temporal = value;
        }
        return temporal;
        //return " good job " ;
    };
    LesTextPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'lesText'
        })
    ], LesTextPipe);
    return LesTextPipe;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#list-of-posts{\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n\r\n    width: auto;\r\n    height: auto;\r\n\r\n    padding: 0px;\r\n    margin: 0px;\r\n\r\n    padding-bottom: 0px;\r\n    margin-bottom: 0px;\r\n\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCOztJQUVoQixXQUFXO0lBQ1gsWUFBWTs7SUFFWixZQUFZO0lBQ1osV0FBVzs7SUFFWCxtQkFBbUI7SUFDbkIsa0JBQWtCOzs7QUFHdEIiLCJmaWxlIjoic3JjL2FwcC9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsaXN0LW9mLXBvc3Rze1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuXHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cclxuICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> All posts!!   </h1>\n\n<div id=\"list-of-posts\">  \n    \n    <app-post *ngFor=\"let posta of blogPost | paginate: {itemsPerPage:4 ,currentPage: p} \"\n [post]=\"posta\" [id]=\"idperdoruesi\"  >    \n\n</app-post>\n\n<pagination-controls (pageChange)=\"p=$event\" maxSize=\"4\" responsive =\"true\" >  </pagination-controls>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _load_user_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../load-user-data-service.service */ "./src/app/load-user-data-service.service.ts");



var ListComponent = /** @class */ (function () {
    /**
     post : Post[] = [];
     postTemp : Post ;
    
     userIdPost: number;
     usernamePost:String;
     IDPost:number;
     titlePost:String;
     bodyPost:String;
     blogPostTemp:BlogPost;
     */
    function ListComponent(loadUserDataServiceService) {
        this.loadUserDataServiceService = loadUserDataServiceService;
        this.shfaqfsheButon = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idperdoruesi = 0;
        // get all data . 
        // Nqs Classa nuk funksionon duhet te besh nje interface.
        var subscriptionVariable = this.loadUserDataServiceService.getPosts();
        subscriptionVariable.subscribe(function (data) {
            _this.blogPost = data;
        }, function (error) {
            _this.errorMsg = error;
            console.log(_this.errorMsg);
        });
        // subscriptionVariable.unsuscribe();
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_load_user_data_service_service__WEBPACK_IMPORTED_MODULE_2__["LoadUserDataServiceService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/load-user-data-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/load-user-data-service.service.ts ***!
  \***************************************************/
/*! exports provided: LoadUserDataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUserDataServiceService", function() { return LoadUserDataServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _token_storage_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token-storage-service.service */ "./src/app/token-storage-service.service.ts");






var LoadUserDataServiceService = /** @class */ (function () {
    function LoadUserDataServiceService(http, sesionStore) {
        this.http = http;
        this.sesionStore = sesionStore;
        // private _url : string = "http://localhost:8080";
        this._url = "https://blog-angular-spring-boot.herokuapp.com";
    }
    // get user id number   http://localhost:8080/validateLogin
    LoadUserDataServiceService.prototype.getUserId = function () {
        console.log(this.sesionStore.getUsername());
        return this.http.post("https://blog-angular-spring-boot.herokuapp.com/validateLogin", this.sesionStore.getUsername(), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    };
    // post a coment    http://localhost:8080/coments
    LoadUserDataServiceService.prototype.postComent = function (pc) {
        return this.http.post("https://blog-angular-spring-boot.herokuapp.com/coments", pc, { observe: 'response' });
    };
    // get all coments by post id  
    LoadUserDataServiceService.prototype.getComentsByPostId = function (id) {
        console.log(" hyri tek getComentsByPostId(  )");
        console.log(id);
        //let url = "http://localhost:8080/read/coments/" + id;
        var url = "https://blog-angular-spring-boot.herokuapp.com/read/coments/" + id;
        return this.http.get(url);
    };
    // delete coments by id
    LoadUserDataServiceService.prototype.deleteComentById = function (id) {
        // let url = "http://localhost:8080/coments/" + id;
        var url = "https://blog-angular-spring-boot.herokuapp.com/coments/" + id;
        return this.http.delete(url);
    };
    // get all objectes by user id.
    LoadUserDataServiceService.prototype.getPostsByUserId = function (id) {
        //console.log( id );
        var url = this._url + "/alluserposts/";
        url = url + id;
        console.log("ok");
        // Shembull se si te perdoresh get me authentication. 
        // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
        // const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.sesionStore.getToken() });
        return this.http.get(url)
            //  return this.http.get<Post[]>(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    };
    /**
      
      po zevendesojme BlogPost qe eshte nje Clase me IEmployee
      qe eshte nje interface per ta provuar.
      
     */
    // get all objectes     
    LoadUserDataServiceService.prototype.getPosts = function () {
        var url = this._url + "/allposts";
        // Shembull se si te perdoresh get me authentication. 
        // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Bearer ' + this.sesionStore.getToken() });
        // , { headers } 
        return this.http.get(url)
            // return this.http.get<Post[]>(url)
            // e shtuar 
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    };
    // get object by id  Observable<HttpResponse<Post>>   Observable<Post>
    LoadUserDataServiceService.prototype.getPostId = function (id) {
        // console.log(  sessionStorage.getItem('username') );
        var url = this._url + "/allposts/";
        url = url + id;
        // const headers = new HttpHeaders( { Authorization: 'Bearer ' + this.sesionStore.getToken() } );
        // , { headers }
        return this.http.get(url);
    };
    //  update 
    LoadUserDataServiceService.prototype.updatePost = function (mployee) {
        var newUrl = this._url + "/updatepost/";
        newUrl = newUrl + mployee.id;
        // heders per put request 
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        // url , objektii modifikuar , headers
        return this.http.put(newUrl, mployee, { headers: headers });
    };
    // post a object   Observable<BlogPost>
    LoadUserDataServiceService.prototype.postPosts = function (employee) {
        var newUrl = this._url + "/makepost";
        // heders per put request 
        /**
        const httpOptions = {
        
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
            })
        
        };
        */
        /**
        const headers = new HttpHeaders( { Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
                                          'Content-Type': 'application/json'
        } );
          ,{ observe: 'response' }
        */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        // return this.http.post<BlogPost>(newUrl, employee, httpOptions);
        return this.http.post(newUrl, employee, { observe: 'response', headers: headers });
    };
    //  delete 
    //deleteEmploee( employee? : IEmployee  ): Observable<IEmployee>
    LoadUserDataServiceService.prototype.deletePosts = function (employee) {
        var id = typeof employee === 'number' ? employee : employee.id;
        var url = this._url + "/deletepost/";
        url = url + id;
        // heders per delete request 
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        //   return this.http.delete<IEmployee>(url , httpOptions );
        // return this.http.delete( url , httpOptions )
        return this.http.delete(url, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    };
    //  error
    LoadUserDataServiceService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            /** */
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    LoadUserDataServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _token_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageServiceService"]])
    ], LoadUserDataServiceService);
    return LoadUserDataServiceService;
}());



/***/ }),

/***/ "./src/app/login-component/login-component.component.css":
/*!***************************************************************!*\
  !*** ./src/app/login-component/login-component.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWNvbXBvbmVudC9sb2dpbi1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/login-component/login-component.component.html":
/*!****************************************************************!*\
  !*** ./src/app/login-component/login-component.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div *ngIf=\"validLogin\" class=\"alert alert-success\" role=\"alert\">\n        Login success!\n      </div>\n\n      <div *ngIf=\"invalidLogin\" class=\"alert alert-danger\" role=\"alert\">\n          Error credincials!\n        </div>\n\n  <form> \n  <div class=\"form-group\"> \n      <label for=\"username\"> Username </label>\n    <input type=\"text\" name=\"username\" [(ngModel)]=\"ld.username\" class=\"form-control\" id=\"username\" >\n    \n   \n  \n  </div>\n  <div class=\"form-group\"> \n      <label for=\"password\">Password </label>\n     <input type=\"password\" name=\"password\" [(ngModel)]=\"ld.password\" class=\"form-control\" id=\"password\" >\n  </div>\n\n\n<button (click)=checkLoginnew() class=\"btn btn-success\">\n    Login\n  </button>\n\n</form>\n</div>"

/***/ }),

/***/ "./src/app/login-component/login-component.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/login-component/login-component.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponentComponent", function() { return LoginComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication-service.service */ "./src/app/authentication-service.service.ts");
/* harmony import */ var _token_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../token-storage-service.service */ "./src/app/token-storage-service.service.ts");





var LoginComponentComponent = /** @class */ (function () {
    function LoginComponentComponent(router, authenticationServiceService, sesionStore) {
        this.router = router;
        this.authenticationServiceService = authenticationServiceService;
        this.sesionStore = sesionStore;
        this.ld = {
            "username": "",
            "password": ""
        };
    }
    LoginComponentComponent.prototype.ngOnInit = function () {
    };
    LoginComponentComponent.prototype.checkLoginnew = function () {
        var _this = this;
        if (this.sesionStore.getUsername() == null) {
            // console.log( this.sesionStore.getUsername() );
            this.authenticationServiceService.login(this.ld)
                .subscribe(function (data) {
                _this.str = JSON.stringify(data);
                // console.log( this.str );
                _this.str1 = _this.str.substring(12, _this.str.length - 2);
                // console.log( this.str1 );
                _this.sesionStore.saveToken(_this.str1);
                // console.log( this.sesionStore.getToken() );
                _this.sesionStore.saveUsername(_this.ld.username);
                _this.validLogin = true;
                _this.invalidLogin = false;
            }, function (error) {
                console.log(error);
                _this.invalidLogin = true;
                _this.validLogin = false;
            });
        }
    };
    LoginComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-component',
            template: __webpack_require__(/*! ./login-component.component.html */ "./src/app/login-component/login-component.component.html"),
            styles: [__webpack_require__(/*! ./login-component.component.css */ "./src/app/login-component/login-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"],
            _token_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageServiceService"]])
    ], LoginComponentComponent);
    return LoginComponentComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _token_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../token-storage-service.service */ "./src/app/token-storage-service.service.ts");




var LogoutComponent = /** @class */ (function () {
    // private authentocationService: AuthenticationServiceService  mund te hiqet.
    function LogoutComponent(// private authentocationService: AuthenticationServiceService , 
    router, sesionStore) {
        this.router = router;
        this.sesionStore = sesionStore;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        //  this.authentocationService.logOut();
        this.sesionStore.signOut();
        // this.router.navigate( ['login'] );
        console.log(this.sesionStore.getToken());
        this.router.navigate(['login']);
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _token_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageServiceService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showblock{\r\n    z-index: 1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93YmxvY2t7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light showblock\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar w/ text</a>\n    \n    <button (click)=\"toggleNavbar()\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <!--  show  -->\n    <div class=\"collapse navbar-collapse \" id=\"navbarText\" [ngClass]=\"{ 'show': hideShow }\">\n\n      <ul class=\"navbar-nav mr-auto\">\n\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"home\" >Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"contact\" > Contact </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" routerLink=\"abaut\" > Abaut </a>\n        </li>\n        <li *ngIf=\"!ShowifUserIsNotLogedin()\" class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" routerLink=\"profile\" >  Profile  </a>\n        </li>\n        <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\" routerLink=\"services\" >  Services  </a>\n              \n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" routerLink=\"posts\" >  Posts  </a>\n            \n      </li>\n      \n      </ul>\n\n      <span class=\"navbar-text\">\n       <!--   Navbar text with an inline element  \n      \n     -->\n        <ul class=\"navbar-nav mr-auto\">\n\n          <li *ngIf=\"ShowifUserIsNotLogedin()\" class=\"nav-item active\">   <a class=\"nav-link\" href=\"#\" routerLink=\"login\" > login </a> </li>\n          <li  *ngIf=\"ShowifUserIsLogedin()\" class=\"nav-item active\">   <a class=\"nav-link\" href=\"#\" routerLink=\"logout\" [ngClass]=\"{ 'show': hideShow }\"> logout </a> </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\" routerLink=\"register\" >  Register  </a>\n              \n        </li>\n        </ul>\n      </span>\n    </div>\n  </nav>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication-service.service */ "./src/app/authentication-service.service.ts");
/* harmony import */ var _token_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../token-storage-service.service */ "./src/app/token-storage-service.service.ts");




var MenuComponent = /** @class */ (function () {
    function MenuComponent(loginService, sesionStore) {
        this.loginService = loginService;
        this.sesionStore = sesionStore;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.hideShow = false;
        // console.log( this.loginService.isUserLoggedIn() );
    };
    MenuComponent.prototype.toggleNavbar = function () {
        this.hideShow = !this.hideShow;
    };
    MenuComponent.prototype.ShowifUserIsLogedin = function () {
        if (this.sesionStore.getUsername() != null) {
            return true;
        }
    };
    MenuComponent.prototype.ShowifUserIsNotLogedin = function () {
        if (this.sesionStore.getUsername() == null) {
            return true;
        }
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServiceService"], _token_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageServiceService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/my-sidebar/my-sidebar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/my-sidebar/my-sidebar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LXNpZGViYXIvbXktc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/my-sidebar/my-sidebar.component.html":
/*!******************************************************!*\
  !*** ./src/app/my-sidebar/my-sidebar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div >\n<!-- \n    <nav class=\"nav flex-column\" >\n        <a class=\"nav-link active\" href=\"#\"  >Active</a>\n        <a class=\"nav-link\" href=\"#\"  >Link</a>\n        <a class=\"nav-link\" href=\"#\"  >Link</a>\n        <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\"   >Disabled</a>\n      </nav>\n -->\n</div>"

/***/ }),

/***/ "./src/app/my-sidebar/my-sidebar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-sidebar/my-sidebar.component.ts ***!
  \****************************************************/
/*! exports provided: MySidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySidebarComponent", function() { return MySidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MySidebarComponent = /** @class */ (function () {
    function MySidebarComponent() {
    }
    MySidebarComponent.prototype.ngOnInit = function () {
    };
    MySidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-sidebar',
            template: __webpack_require__(/*! ./my-sidebar.component.html */ "./src/app/my-sidebar/my-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./my-sidebar.component.css */ "./src/app/my-sidebar/my-sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MySidebarComponent);
    return MySidebarComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\" *ngIf=\"post.showHidePost[2]\">\n\n    <div class=\"card-header\"  >\n\n        <div class=\"media\">\n          \n            <img src=\"assets/photos/{{photoname}}\" class=\"mr-3\" alt=\"User photo\" style=\"width: 91px;  height: 113px;\">\n              \n            <div class=\"media-body\">\n\n              <h5 class=\"mt-0\" >  {{post.username}} </h5>\n            \n            </div>\n\n          </div>\n      \n      </div>\n\n  <div class=\"card-body\">\n\n    <h5 class=\"card-title\"> {{post.title}}  </h5>\n\n    <p class=\"card-text\" [innerHTML]=\"post.body\">   </p>\n\n  \n   <a  (click)=\"onSelect(post.id)\" href=\"#\" routerLink=\"readpost/{{post.id}}\" class=\"btn btn-primary\" >Read the full article</a>\n   \n\n    <a   routerLink=\"edit/{{post.id}}\" class=\"btn btn-warning\"   *ngIf=\"post.showHidePost[3]\"> Modify the  article</a>\n  \n  </div>\n\n \n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog-post */ "./src/app/blog-post.ts");
/* harmony import */ var _les_text_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../les-text.pipe */ "./src/app/les-text.pipe.ts");
/* harmony import */ var _show_hide_posts_user_id_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../show-hide-posts-user-id.pipe */ "./src/app/show-hide-posts-user-id.pipe.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _upload_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../upload-file.service */ "./src/app/upload-file.service.ts");







var PostComponent = /** @class */ (function () {
    function PostComponent(router, lesTextPipe, showHidePostsUserIdPipe, uploadF) {
        this.router = router;
        this.lesTextPipe = lesTextPipe;
        this.showHidePostsUserIdPipe = showHidePostsUserIdPipe;
        this.uploadF = uploadF;
        this.photoname = "no_image.jfif";
    }
    PostComponent.prototype.ngOnInit = function () {
        // console.log( this.id ,  this.post );
        // do te ktheje nje vektor dhe do marri si input id e perdoruesit dhe id e perdorusesit qe eshte ne poste
        this.post.showHidePost = this.showHidePostsUserIdPipe.transform(this.post.userId, [this.id]);
        //console.log(this.post.showHidePost[2], this.post.showHidePost[3]);
        //console.log(this.post.showHidePost);
        this.temp = this.post.body;
        this.post.body = this.lesTextPipe.transform(this.post.body);
        this.getPhoto(this.post.userId);
    };
    PostComponent.prototype.onSelect = function (id) {
        this.router.navigate(['/readpost', id]);
    };
    PostComponent.prototype.getPhoto = function (id) {
        //console.log( id );
        var _this = this;
        this.uploadF.getPhotoName(id).subscribe(function (data) {
            // console.log( data );
            _this.photoname = data["answer"];
        }, function (error) {
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _blog_post__WEBPACK_IMPORTED_MODULE_2__["BlogPost"])
    ], PostComponent.prototype, "post", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PostComponent.prototype, "id", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _les_text_pipe__WEBPACK_IMPORTED_MODULE_3__["LesTextPipe"],
            _show_hide_posts_user_id_pipe__WEBPACK_IMPORTED_MODULE_4__["ShowHidePostsUserIdPipe"],
            _upload_file_service__WEBPACK_IMPORTED_MODULE_6__["UploadFileService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/read-post/read-post.component.css":
/*!***************************************************!*\
  !*** ./src/app/read-post/read-post.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.read-post-container{\r\n\r\n    \r\n\r\n    display: grid;\r\n    grid-template-columns: 70% auto;\r\n    grid-template-rows: auto auto ;\r\n\r\n    /**/\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    \r\n    width: auto;\r\n    height: auto;\r\n\r\n    padding: 0px;\r\n    margin: 0px;\r\n    \r\n\r\n}\r\n\r\n.side-bar{\r\n\r\n    /*\r\n        float: right;\r\n    */\r\n\r\n    min-width: 30%;\r\n    min-height: 100%;\r\n\r\n    width: auto;\r\n    height: auto;\r\n\r\n    grid-column-start: 2;\r\n    grid-column-end: 3;\r\n\r\n    grid-row-start: 1;\r\n    grid-row-end: 3;\r\n\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.landing-page-foo{\r\n\r\n    grid-column-start: 1;\r\n    grid-column-end: 2;\r\n\r\n    grid-row-start: 2;\r\n    grid-row-end: 3;\r\n\r\n    min-width: 70%;\r\n    min-height: 20%;\r\n\r\n    width: auto;\r\n    height: auto;\r\n\r\n    padding: 0px;\r\n    margin: 0px;\r\n\r\n}\r\n\r\n.headclass{\r\n    \r\n    display: grid;\r\n    grid-template-columns: auto auto;\r\n    \r\n}\r\n\r\n.contentclass{\r\n    padding-top: 10%;\r\n}\r\n\r\n#txarea{\r\n    min-width: 90%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhZC1wb3N0L3JlYWQtcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBOzs7O0lBSUksYUFBYTtJQUNiLCtCQUErQjtJQUMvQiw4QkFBOEI7O0lBRTlCLEdBQUc7SUFDSCxlQUFlO0lBQ2YsZ0JBQWdCOztJQUVoQixXQUFXO0lBQ1gsWUFBWTs7SUFFWixZQUFZO0lBQ1osV0FBVzs7O0FBR2Y7O0FBRUE7O0lBRUk7O0tBRUM7O0lBRUQsY0FBYztJQUNkLGdCQUFnQjs7SUFFaEIsV0FBVztJQUNYLFlBQVk7O0lBRVosb0JBQW9CO0lBQ3BCLGtCQUFrQjs7SUFFbEIsaUJBQWlCO0lBQ2pCLGVBQWU7O0lBRWYsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxvQkFBb0I7SUFDcEIsa0JBQWtCOztJQUVsQixpQkFBaUI7SUFDakIsZUFBZTs7SUFFZixjQUFjO0lBQ2QsZUFBZTs7SUFFZixXQUFXO0lBQ1gsWUFBWTs7SUFFWixZQUFZO0lBQ1osV0FBVzs7QUFFZjs7QUFHQTs7SUFFSSxhQUFhO0lBQ2IsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9yZWFkLXBvc3QvcmVhZC1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4ucmVhZC1wb3N0LWNvbnRhaW5lcntcclxuXHJcbiAgICBcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDtcclxuXHJcbiAgICAvKiovXHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIFxyXG5cclxufVxyXG5cclxuLnNpZGUtYmFye1xyXG5cclxuICAgIC8qXHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgKi9cclxuXHJcbiAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcblxyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDM7XHJcblxyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5sYW5kaW5nLXBhZ2UtZm9ve1xyXG5cclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG5cclxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG5cclxuICAgIG1pbi13aWR0aDogNzAlO1xyXG4gICAgbWluLWhlaWdodDogMjAlO1xyXG5cclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG5cclxufVxyXG5cclxuXHJcbi5oZWFkY2xhc3N7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgIFxyXG59XHJcblxyXG4uY29udGVudGNsYXNze1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxufVxyXG5cclxuI3R4YXJlYXtcclxuICAgIG1pbi13aWR0aDogOTAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/read-post/read-post.component.html":
/*!****************************************************!*\
  !*** ./src/app/read-post/read-post.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n\n<div class=\"read-post-container\">\n\n    <div class=\"lef-side\">\n\n\n      <div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\n        The comment postet.\n      </div>\n\n      <div *ngIf=\"unauthorized\" class=\"alert alert-danger\" role=\"alert\">\n        You must log in first in order to  make a comment.\n      </div>\n  \n            <div>\n                \n                  <div class=\"container headclass\"> \n                      \n                        <div style=\"min-width: 20%; \">   \n                          <img src=\"assets/photos/{{photoname}}\"  class=\"rounded-circle mr-3 thumbnail img-responsive img-circle\" alt=\"User photo\" style=\"width: 91px;  height: 113px; \" >\n                        </div>\n\n                        <div style=\"min-width: 20%; \">  \n                            <header>\n                              <h1>   {{blogPostHolder.title}}  </h1>\n                            </header>\n                        </div>\n                    \n                  </div>\n\n                  <div [innerHTML]=\"blogPostHolder.body\" class=\"contentclass\">\n \n                      <!-- \n                        {{blogPostHolder.body}} \n                        -->\n                    \n                    <br/> <br/>\n                  </div>\n\n                  <div>\n                      <footer>\n                            <p>\n                              \n                              This post is made by:\n                                  <strong> {{blogPostHolder.username}} </strong>   \n\n                            </p> \n                      </footer>\n                  </div>\n\n                  <!-- ketu fillon blloku i komenteve -->\n                  <div >\n                          <h5> Coments </h5>\n                    <div  *ngFor=\" let coment of allComents\">\n\n                      <p [innerHTML]=\"coment.comentBody\" >\n                        <!-- {{coment.comentBody}} -->\n                        \n                      </p>\n                      <footer>\n                          {{coment.comentUserName}} \n                      </footer>\n\n                      <button *ngIf=\"showHideDeleteComentButton( coment.username  )\" (click)=\"deletComent( coment.username , coment.id )\" class=\"btn btn-danger\" > Delete coment </button>\n                  \n                      <hr/>\n                    </div>\n                     \n                    \n                  </div>\n              \n                  <!-- ckeditor per te  shkruar comentet  -->\n                  <div>  \n                      <div>\n                        <!--  \n                          <ckeditor [(ngModel)]=\"InputComentBody\" [editor]=\"Editor\" tagName=\"textarea\"  ></ckeditor>\n                         \n                          <ckeditor [editor]=\"Editor\" [(ngModel)]=\"InputComentBody\"   (ready)=\"onReady($event)\" ></ckeditor>\n                          -->\n                          <textarea [(ngModel)]=\"InputComentBody\" id=\"txarea\" > </textarea>\n                      </div>\n                      <button (click)=\"postComent()\" class=\"btn btn-success\" > Post coment </button>\n                        \n                      <div *ngIf=\"emptybody\" class=\"alert alert-danger\" role=\"alert\">\n                        empty coment body\n                      </div>\n\n                </div>\n            </div>\n\n         \n\n    </div>\n    <div class=\"side-bar\" >\n        <!--  \n       \n        <app-my-sidebar  >  </app-my-sidebar>\n        \n\n        <p>\n            sidebar  here! Duhet te marri si input nje vektre me liket perkatese per head dhe footer.\n          </p>\n          -->\n\n      </div>\n      <div class=\"landing-page-foo\">\n          \n          <p>\n            recent articles\n          </p>\n    \n        </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/read-post/read-post.component.ts":
/*!**************************************************!*\
  !*** ./src/app/read-post/read-post.component.ts ***!
  \**************************************************/
/*! exports provided: ReadPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadPostComponent", function() { return ReadPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _load_user_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../load-user-data-service.service */ "./src/app/load-user-data-service.service.ts");
/* harmony import */ var _blog_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blog-post */ "./src/app/blog-post.ts");
/* harmony import */ var _token_storage_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../token-storage-service.service */ "./src/app/token-storage-service.service.ts");
/* harmony import */ var _upload_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../upload-file.service */ "./src/app/upload-file.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-decoupled-document */ "./node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_7__);






//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


var ReadPostComponent = /** @class */ (function () {
    function ReadPostComponent(route, loadUserDataServiceService, auth, uploadF) {
        this.route = route;
        this.loadUserDataServiceService = loadUserDataServiceService;
        this.auth = auth;
        this.uploadF = uploadF;
        this.userID = 0;
        //public Editor = ClassicEditor;
        this.Editor = _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_7__;
        this.InputComentBody = "";
        this.photoname = "no_image.jfif";
    }
    ReadPostComponent.prototype.onReady = function (editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    };
    ReadPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.success = false;
        this.unauthorized = false;
        this.emptybody = false;
        this.blogPostHolder = new _blog_post__WEBPACK_IMPORTED_MODULE_4__["BlogPost"]("", "", "", 0, 0);
        var id = parseInt(this.route.snapshot.paramMap.get("id"));
        this.idPost = id;
        var subscriptionVariable = this.loadUserDataServiceService.getPostId(this.idPost);
        subscriptionVariable.subscribe(function (data) {
            //this.post = data;
            //this.blogPostHolder = data;
            console.log(data);
            _this.blogPostHolder = new _blog_post__WEBPACK_IMPORTED_MODULE_4__["BlogPost"](data.username, data.title, data.body, data.userId, data.id);
            _this.userID = data.userId;
            // marrim foton me ane ti id se perdoruesit 
            _this.getPhoto(_this.blogPostHolder.userId);
            console.log(_this.blogPostHolder);
        }, function (error) {
            console.log(_this.errorMsg);
        });
        //console.log(this.idPost);
        this.readAllcomentsByPId(this.idPost);
    };
    ReadPostComponent.prototype.readAllcomentsByPId = function (id) {
        var _this = this;
        this.loadUserDataServiceService.getComentsByPostId(id)
            .subscribe(function (data) {
            _this.allComents = data;
            // console.log(this.allComents);
        });
    };
    ReadPostComponent.prototype.postComent = function () {
        var _this = this;
        if (this.InputComentBody != "" && this.auth.getUsername() != null) {
            console.log(this.blogPostHolder);
            this.pc = {
                id: 0,
                comentBody: this.InputComentBody,
                postId: this.blogPostHolder.id,
                username: this.auth.getUsername(),
                comentUserName: this.auth.getName(),
            };
            this.loadUserDataServiceService.postComent(this.pc).subscribe(function (resp) {
                if (resp.body == "success") {
                    console.log("success");
                    _this.success = true;
                    _this.unauthorized = false;
                    _this.emptybody = false;
                    window.location.reload();
                }
            });
        }
        else if (this.auth.getUsername() == null) {
            console.log("unauthorized");
            this.unauthorized = true;
            this.success = false;
            this.emptybody = false;
        }
        else {
            console.log("empty coment body");
            this.emptybody = true;
            this.success = false;
            this.success = false;
        }
        window.location.reload();
    };
    ReadPostComponent.prototype.deletComent = function (username, id) {
        // this.auth.getUsername()
        if (username == this.auth.getUsername() || this.auth.getName() == this.blogPostHolder.username) {
            this.loadUserDataServiceService.deleteComentById(id).subscribe(function () { }, function (error) {
                console.log(error);
            });
        }
        window.location.reload();
    };
    ReadPostComponent.prototype.showHideDeleteComentButton = function (username) {
        // console.log(this.auth.getUsername() , this.blogPostHolder.username , username);
        if (username == this.auth.getUsername()) {
            return true;
        } //this.auth.getUsername() 
        else if (this.auth.getName() == this.blogPostHolder.username) {
            return true;
        }
        else {
            return false;
        }
    };
    ReadPostComponent.prototype.getPhoto = function (id) {
        var _this = this;
        console.log(id);
        this.uploadF.getPhotoName(id).subscribe(function (data) {
            console.log(data);
            _this.photoname = data["answer"];
        }, function (error) {
            console.log(error);
        });
    };
    ReadPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-read-post',
            template: __webpack_require__(/*! ./read-post.component.html */ "./src/app/read-post/read-post.component.html"),
            styles: [__webpack_require__(/*! ./read-post.component.css */ "./src/app/read-post/read-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _load_user_data_service_service__WEBPACK_IMPORTED_MODULE_3__["LoadUserDataServiceService"],
            _token_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageServiceService"],
            _upload_file_service__WEBPACK_IMPORTED_MODULE_6__["UploadFileService"]])
    ], ReadPostComponent);
    return ReadPostComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"valid\" class=\"alert alert-danger\" role=\"alert\">\n  An error hapened check your credincials!\n</div>\n\n<div *ngIf=\"validtru\" class=\"alert alert-success\" role=\"alert\">\n  You registred successfuly!\n</div>\n\n\n<div class=\"container\">\n <form #registrationForm=\"ngForm\">\n      <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" name=\"name\" [(ngModel)]=\"rmd.emer\" required id=\"name\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"age\">Age</label>\n          <input type=\"text\" name=\"age\" [(ngModel)]=\"rmd.mosha\" id=\"age\" class=\"form-control\">\n        </div>\n      <div class=\"form-group\">\n          <label for=\"lastname\">Lastname</label>\n        <input type=\"text\" name=\"lastname\" [(ngModel)]=\"rmd.mbiemer\" id=\"lastname\" class=\"form-control\">\n      </div>\n    <div class=\"form-group\">\n        <label for=\"email\">e-mail</label>\n        <input type=\"text\" name=\"email\" [(ngModel)]=\"rmd.email\" required id=\"email\" class=\"form-control\" >\n    </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password </label>\n        <input type=\"password\" name=\"password\" [(ngModel)]=\"rmd.pasword\" required id=\"password\" class=\"form-control\">\n      </div>\n\n      <button (click)=register() class=\"btn btn-success\">\n        Sing In\n      </button>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication-service.service */ "./src/app/authentication-service.service.ts");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(Authenticate) {
        this.Authenticate = Authenticate;
        this.rmd = {
            email: "",
            mbiemer: "",
            emer: "",
            pasword: "",
            mosha: 0
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.valid = false;
        console.log(this.rmd);
        this.Authenticate.singIn(this.rmd).subscribe(function (data) {
            console.log(data);
            _this.validtru = true;
        }, function (error) {
            _this.valid = true;
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServiceService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/route-guard.service.ts":
/*!****************************************!*\
  !*** ./src/app/route-guard.service.ts ***!
  \****************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _token_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage-service.service */ "./src/app/token-storage-service.service.ts");




var RouteGuardService = /** @class */ (function () {
    function RouteGuardService(router, sesionStore) {
        this.router = router;
        this.sesionStore = sesionStore;
    }
    RouteGuardService.prototype.canActivate = function (route, state) {
        if (this.sesionStore.getUsername() != null) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    RouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _token_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageServiceService"]])
    ], RouteGuardService);
    return RouteGuardService;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n\n    <h1 class=\"display-4\"> What services we offer?</h1>\n    \n    <p class=\"lead\"> We offer ower services in web development in front-end also in back-end. \n      We work with java, javascript, typescript, HTML, css,databases ect.  </p>\n    \n    <hr class=\"my-4\">\n   \n    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n    <!--  \n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n  -->\n  </div>\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/shell/shell.component.css":
/*!*******************************************!*\
  !*** ./src/app/shell/shell.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n    .grid-container{\r\n        min-width: 100%;\r\n        min-height: 100%;\r\n\r\n        width: auto;\r\n        height: auto;\r\n\r\n        display: grid;\r\n        grid-template-columns: 70% auto;\r\n        grid-template-rows: 70px  auto 75px ;\r\n        \r\n/* 9%*/\r\n\r\n        grid-row-gap:0px;\r\n\r\n        padding: 0px;\r\n        margin: 0px;\r\n\r\n    }\r\n\r\n    .head{\r\n        grid-column-start: 1;\r\n         grid-column-end: 3;\r\n\r\n         grid-row-start: 1;\r\n         grid-row-end: 2;\r\n\r\n       \r\n        background-color: rebeccapurple;\r\n            /*\r\n          \r\n\r\n        width: auto;\r\n        height: auto;\r\n             min-height: 20px;\r\n            */\r\n\r\n            min-width: 100%;\r\n           \r\n        \r\n\r\n            width: auto;\r\n            height: 75px;\r\n\r\n        padding: 0px;\r\n        margin: 0px;\r\n\r\n        \r\n      \r\n    }\r\n\r\n    .main-content{\r\n\r\n     \r\n        background-color: rebeccapurple;\r\n        float: left;\r\n\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n\r\n        grid-row-start: 2;\r\n        grid-row-end: 3;\r\n\r\n        min-width: 100%;\r\n        min-height: 80%;\r\n\r\n        width: auto;\r\n        height: auto;\r\n\r\n        padding: 0px;\r\n        margin: 0px;\r\n\r\n        \r\n    }\r\n\r\n    .fo{\r\n        grid-column-start: 1;\r\n         grid-column-end: 3;\r\n\r\n         grid-row-start: 3;\r\n         grid-row-end: 4;\r\n\r\n       \r\n        background-color: rgb(141, 45, 45);\r\n\r\n\r\n        min-width: 100%;\r\n        min-height: 20%;\r\n\r\n        width: auto;\r\n        min-height: 75px;\r\n\r\n        padding: 0px;\r\n        margin: 0px;\r\n        \r\n        padding-bottom: 0px;\r\n        margin-bottom: 0px;\r\n\r\n        border: 2px solid black;\r\n\r\n    }\r\n\r\n    @media only screen and (max-width: 1000px) {\r\n        /* For tablets:  768px */\r\n\r\n        .grid-container{\r\n            min-width: 100%;\r\n            min-height: 100%;\r\n    \r\n            width: auto;\r\n            height: auto;\r\n    \r\n            display: grid;\r\n            grid-template-columns: 70% auto;\r\n            grid-template-rows: 55px  auto 75px ;\r\n            \r\n    \r\n    \r\n            grid-row-gap:0px;\r\n    \r\n            padding: 0px;\r\n            margin: 0px;\r\n    \r\n        }\r\n    \r\n        \r\n        \r\n      }\r\n\r\n    /*\r\n\r\n    .ngj{\r\n        background-color: yellow;\r\n\r\n        grid-column-start: 1;\r\n         grid-column-end: 3;\r\n\r\n         grid-row-start: 4;\r\n         grid-row-end: 5;\r\n    }\r\n    */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvc2hlbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjs7UUFFaEIsV0FBVztRQUNYLFlBQVk7O1FBRVosYUFBYTtRQUNiLCtCQUErQjtRQUMvQixvQ0FBb0M7O0FBRTVDLE1BQU07O1FBRUUsZ0JBQWdCOztRQUVoQixZQUFZO1FBQ1osV0FBVzs7SUFFZjs7SUFFQTtRQUNJLG9CQUFvQjtTQUNuQixrQkFBa0I7O1NBRWxCLGlCQUFpQjtTQUNqQixlQUFlOzs7UUFHaEIsK0JBQStCO1lBQzNCOzs7Ozs7YUFNQzs7WUFFRCxlQUFlOzs7O1lBSWYsV0FBVztZQUNYLFlBQVk7O1FBRWhCLFlBQVk7UUFDWixXQUFXOzs7O0lBSWY7O0lBSUE7OztRQUdJLCtCQUErQjtRQUMvQixXQUFXOztRQUVYLG9CQUFvQjtRQUNwQixrQkFBa0I7O1FBRWxCLGlCQUFpQjtRQUNqQixlQUFlOztRQUVmLGVBQWU7UUFDZixlQUFlOztRQUVmLFdBQVc7UUFDWCxZQUFZOztRQUVaLFlBQVk7UUFDWixXQUFXOzs7SUFHZjs7SUFFQTtRQUNJLG9CQUFvQjtTQUNuQixrQkFBa0I7O1NBRWxCLGlCQUFpQjtTQUNqQixlQUFlOzs7UUFHaEIsa0NBQWtDOzs7UUFHbEMsZUFBZTtRQUNmLGVBQWU7O1FBRWYsV0FBVztRQUNYLGdCQUFnQjs7UUFFaEIsWUFBWTtRQUNaLFdBQVc7O1FBRVgsbUJBQW1CO1FBQ25CLGtCQUFrQjs7UUFFbEIsdUJBQXVCOztJQUUzQjs7SUFFQTtRQUNJLHdCQUF3Qjs7UUFFeEI7WUFDSSxlQUFlO1lBQ2YsZ0JBQWdCOztZQUVoQixXQUFXO1lBQ1gsWUFBWTs7WUFFWixhQUFhO1lBQ2IsK0JBQStCO1lBQy9CLG9DQUFvQzs7OztZQUlwQyxnQkFBZ0I7O1lBRWhCLFlBQVk7WUFDWixXQUFXOztRQUVmOzs7O01BSUY7O0lBTU47Ozs7Ozs7Ozs7O0tBV0siLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9zaGVsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gICAgLmdyaWQtY29udGFpbmVye1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgYXV0bztcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggIGF1dG8gNzVweCA7XHJcbiAgICAgICAgXHJcbi8qIDklKi9cclxuXHJcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOjBweDtcclxuXHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuaGVhZHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG5cclxuICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgIGdyaWQtcm93LWVuZDogMjtcclxuXHJcbiAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlO1xyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgXHJcblxyXG4gICAgLm1haW4tY29udGVudHtcclxuXHJcbiAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG5cclxuICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcclxuICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XHJcblxyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA4MCU7XHJcblxyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuZm97XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuXHJcbiAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MSwgNDUsIDQ1KTtcclxuXHJcblxyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMCU7XHJcblxyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDc1cHg7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgLyogRm9yIHRhYmxldHM6ICA3NjhweCAqL1xyXG5cclxuICAgICAgICAuZ3JpZC1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIFxyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIGF1dG87XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTVweCAgYXV0byA3NXB4IDtcclxuICAgICAgICAgICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICBncmlkLXJvdy1nYXA6MHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICBcclxuXHJcblxyXG5cclxuLypcclxuXHJcbiAgICAubmdqe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuXHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuXHJcbiAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiA0O1xyXG4gICAgICAgICBncmlkLXJvdy1lbmQ6IDU7XHJcbiAgICB9XHJcbiAgICAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/shell/shell.component.html":
/*!********************************************!*\
  !*** ./src/app/shell/shell.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">  \n\n<div class = \"head\">\n\n    <ng-content select =\"[header]\"> </ng-content>\n   \n    \n</div>\n\n<!--  \n<div class = \"aright-side\" >\n   \n   \n    <ng-content select =\"[side]\"  > </ng-content>\n    \n    \n</div>\n-->\n\n<div class = \"main-content\" >\n  <!--  --> \n    <ng-content select =\"[main]\" style=\"min-height: 100%; height: auto;\"> </ng-content>\n   \n    \n        \n\n         <!--  \n<app-user-profile select =\"[main]\" style=\"min-height: 100%;\" >      </app-user-profile>\n-->\n\n</div>\n\n\n\n\n\n\n<div class = \"fo\" >\n        <div id=\"articles\">\n            <!--  \n                 <p >\n                    The footer of blog.\n                    \n                  </p>\n             -->\n\n             <div>\n                <ul style=\"list-style: none;\">\n                        <li > <strong> \n                            Follow us at: </strong>\n                        </li>\n                  \n                        <li style=\"display: inline;\"> <a href=\"https://www.facebook.com/\" target=\"blanck\" ><img src=\"assets/photos/fb-icon.png\" style=\"width: 35px; margin-right: 10px;\" /> </a> </li>\n                        \n                        <li style=\"display: inline;\"> <a href=\"https://www.instagram.com/\" target=\"blanck\" ><img src=\"assets/photos/Instagram-icon.jpg\" style=\"width: 35px; margin-right: 10px;\" /> </a> </li>\n                    </ul>\n             </div>\n             <!--  \n             <div>\n                <p>\n                    Contact us at: \n                </p>\n             </div>\n                 -->   \n            </div>\n\n   \n</div>\n\n \n</div>"

/***/ }),

/***/ "./src/app/shell/shell.component.ts":
/*!******************************************!*\
  !*** ./src/app/shell/shell.component.ts ***!
  \******************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShellComponent = /** @class */ (function () {
    function ShellComponent() {
    }
    ShellComponent.prototype.ngOnInit = function () {
    };
    ShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shell',
            template: __webpack_require__(/*! ./shell.component.html */ "./src/app/shell/shell.component.html"),
            styles: [__webpack_require__(/*! ./shell.component.css */ "./src/app/shell/shell.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShellComponent);
    return ShellComponent;
}());



/***/ }),

/***/ "./src/app/show-hide-posts-user-id.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/show-hide-posts-user-id.pipe.ts ***!
  \*************************************************/
/*! exports provided: ShowHidePostsUserIdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowHidePostsUserIdPipe", function() { return ShowHidePostsUserIdPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShowHidePostsUserIdPipe = /** @class */ (function () {
    function ShowHidePostsUserIdPipe() {
    }
    ShowHidePostsUserIdPipe.prototype.transform = function (value, args) {
        this.pergjigje = new Array(2);
        //console.log( args[0] , value);
        if (args[0] == 0) {
            this.pergjigje.push(true);
            this.pergjigje.push(false);
            // e  para per posten e dyta per butonat.
        }
        else if (args[0] == value) {
            this.pergjigje.push(true);
            this.pergjigje.push(true);
            // console.log( args[0] , value);
            // console.log( this.pergjigje);
            // e  para per posten e dyta per butonat.
        }
        /**
        else{
    
          this. pergjigje.push(true);
          this. pergjigje.push(false);
        }
      */
        // e shtuar 
        /**
            if( args[0] === undefined || value === undefined ){
               
              this. pergjigje.push(true);
              this. pergjigje.push(false);
            }
           */
        return this.pergjigje;
    };
    ShowHidePostsUserIdPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'showHidePostsUserId'
        })
    ], ShowHidePostsUserIdPipe);
    return ShowHidePostsUserIdPipe;
}());



/***/ }),

/***/ "./src/app/token-storage-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/token-storage-service.service.ts ***!
  \**************************************************/
/*! exports provided: TokenStorageServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageServiceService", function() { return TokenStorageServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TOKEN_KEY = 'AuthToken';
var USERNAME_KEY = 'AuthUsername';
var AUTHORITIES_KEY = 'AuthAuthorities';
var Name_Key = 'dispName';
var TokenStorageServiceService = /** @class */ (function () {
    function TokenStorageServiceService() {
        this.roles = [];
    }
    TokenStorageServiceService.prototype.saveName = function (username) {
        window.sessionStorage.removeItem(Name_Key);
        window.sessionStorage.setItem(Name_Key, username);
    };
    TokenStorageServiceService.prototype.getName = function () {
        return sessionStorage.getItem(Name_Key);
    };
    TokenStorageServiceService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageServiceService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageServiceService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageServiceService.prototype.saveUsername = function (username) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    };
    TokenStorageServiceService.prototype.getUsername = function () {
        return sessionStorage.getItem(USERNAME_KEY);
    };
    TokenStorageServiceService.prototype.saveAuthorities = function (authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    };
    // mund te behet dhe pa array.
    TokenStorageServiceService.prototype.getAuthorities = function () {
        var _this = this;
        this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
                _this.roles.push(authority.authority);
            });
        }
        return this.roles;
    };
    TokenStorageServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenStorageServiceService);
    return TokenStorageServiceService;
}());



/***/ }),

/***/ "./src/app/upload-file.service.ts":
/*!****************************************!*\
  !*** ./src/app/upload-file.service.ts ***!
  \****************************************/
/*! exports provided: UploadFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileService", function() { return UploadFileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UploadFileService = /** @class */ (function () {
    function UploadFileService(http) {
        this.http = http;
    }
    UploadFileService.prototype.getPhotoName = function (id) {
        // console.log( id );       http://localhost:8080/getphoto
        return this.http.post("https://blog-angular-spring-boot.herokuapp.com/getphoto", id);
    };
    // : Observable<HttpResponse<userIdName>>
    UploadFileService.prototype.uploadFile = function (fd) {
        // fd :   FileList         http://localhost:8080/upload
        console.log("ok");
        return this.http.post("https://blog-angular-spring-boot.herokuapp.com/upload", fd);
    };
    UploadFileService.prototype.deletePhotoByName = function (photo) {
        //         http://localhost:8080/deletefile
        return this.http.post("https://blog-angular-spring-boot.herokuapp.com/deletefile", photo);
    };
    UploadFileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UploadFileService);
    return UploadFileService;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#postID{\r\n\r\n    padding-left: 3%;\r\n}\r\n\r\n#cancel-btn{\r\n\r\n    float: right;\r\n}\r\n\r\n#textBodyPost{\r\n\r\n    min-width: 70%;\r\n    min-height: 70%;\r\n\r\n    width: 70%;\r\n    height: 70%;\r\n}\r\n\r\n.landing-page-container{\r\n\r\n    \r\n\r\n    display: grid;\r\n    grid-template-columns: 70% auto;\r\n    grid-template-rows: auto auto ;\r\n\r\n    /**/\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    \r\n    width: auto;\r\n    height: auto;\r\n\r\n    padding: 0px;\r\n    margin: 0px;\r\n    \r\n\r\n}\r\n\r\n.side-bar{\r\n\r\n    /*\r\n        float: right;\r\n    */\r\n\r\n    min-width: 30%;\r\n    min-height: 100%;\r\n\r\n    width: auto;\r\n    height: auto;\r\n\r\n    grid-column-start: 2;\r\n    grid-column-end: 3;\r\n\r\n    grid-row-start: 1;\r\n    grid-row-end: 3;\r\n\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.landing-page-foo{\r\n\r\n    grid-column-start: 1;\r\n    grid-column-end: 2;\r\n\r\n    grid-row-start: 2;\r\n    grid-row-end: 3;\r\n\r\n    min-width: 70%;\r\n    min-height: 20%;\r\n\r\n    width: auto;\r\n    height: auto;\r\n\r\n    padding: 0px;\r\n    margin: 0px;\r\n\r\n}\r\n\r\n#navigatinmenu{\r\n\r\n    list-style: none;\r\n}\r\n\r\n.listyl{\r\n    list-style: none;\r\n}\r\n\r\n.userprofildata{\r\n    min-width: 100%;\r\n    padding-bottom: 5%;\r\n    min-height: auto;\r\n    margin-bottom: 10%;\r\n\r\n    \r\n}\r\n\r\n#data{\r\n    float: right;\r\n}\r\n\r\n#foto{\r\n    float: left;\r\n    \r\n}\r\n\r\n.txin{\r\n    min-width: 100%;\r\n}\r\n\r\n:host ::ng-deep .ck-editor__editable {\r\n\r\n    background-color: white;\r\n}\r\n\r\n.btn-color{\r\n    background-color: transparent;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUNBOztJQUVJLGNBQWM7SUFDZCxlQUFlOztJQUVmLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBR0E7Ozs7SUFJSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDhCQUE4Qjs7SUFFOUIsR0FBRztJQUNILGVBQWU7SUFDZixnQkFBZ0I7O0lBRWhCLFdBQVc7SUFDWCxZQUFZOztJQUVaLFlBQVk7SUFDWixXQUFXOzs7QUFHZjs7QUFFQTs7SUFFSTs7S0FFQzs7SUFFRCxjQUFjO0lBQ2QsZ0JBQWdCOztJQUVoQixXQUFXO0lBQ1gsWUFBWTs7SUFFWixvQkFBb0I7SUFDcEIsa0JBQWtCOztJQUVsQixpQkFBaUI7SUFDakIsZUFBZTs7SUFFZixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLG9CQUFvQjtJQUNwQixrQkFBa0I7O0lBRWxCLGlCQUFpQjtJQUNqQixlQUFlOztJQUVmLGNBQWM7SUFDZCxlQUFlOztJQUVmLFdBQVc7SUFDWCxZQUFZOztJQUVaLFlBQVk7SUFDWixXQUFXOztBQUVmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7O0FBR3RCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7O0FBRWY7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDZCQUE2Qjs7QUFFakMiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcG9zdElEe1xyXG5cclxuICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbn1cclxuXHJcbiNjYW5jZWwtYnRue1xyXG5cclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4jdGV4dEJvZHlQb3N0e1xyXG5cclxuICAgIG1pbi13aWR0aDogNzAlO1xyXG4gICAgbWluLWhlaWdodDogNzAlO1xyXG5cclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxufVxyXG5cclxuXHJcbi5sYW5kaW5nLXBhZ2UtY29udGFpbmVye1xyXG5cclxuICAgIFxyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gO1xyXG5cclxuICAgIC8qKi9cclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4uc2lkZS1iYXJ7XHJcblxyXG4gICAgLypcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAqL1xyXG5cclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuXHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuXHJcbiAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgIGdyaWQtcm93LWVuZDogMztcclxuXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmxhbmRpbmctcGFnZS1mb297XHJcblxyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcblxyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDM7XHJcblxyXG4gICAgbWluLXdpZHRoOiA3MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAyMCU7XHJcblxyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG59XHJcblxyXG4jbmF2aWdhdGlubWVudXtcclxuXHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubGlzdHlse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnVzZXJwcm9maWxkYXRhe1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuXHJcbiAgICBcclxufVxyXG4jZGF0YXtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuI2ZvdG97XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIFxyXG59XHJcbi50eGlue1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcl9fZWRpdGFibGUge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLWNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- --> \n\n<div class=\"landing-page-container\"> \n      <div class=\"lef-side\"> \n\n        <div class=\"userprofildata\">\n            \n          <div id=\"foto\">\n              <img src=\"assets/photos/{{photoname}}\" class=\"mr-3\" alt=\"User photo\" style=\"width: 91px;  height: 113px;\">\n              \n          </div>\n          <div id=\"data\">\n              <h3 >Welcome</h3>\n            <ul class=\"listyl\">\n              <li> {{idperdoruesi}} </li>\n              <li> {{userN}} </li>\n              <li> {{userNam}}  </li>\n              <li> Photo size : 91x113 pixel </li> \n              <li *ngIf=\"!shownoimage\"  > {{photoname}} </li>\n              <li *ngIf=\"shownoimage\" > no_image </li>   \n            </ul>\n          </div>\n\n          <br/>\n          <div  class=\"alert alert-info\" role=\"alert\" style=\"min-width: 100%;  float: left;\">\n            User can upload only one photo!\n            In evry upload the previus photo will be deletet automatically!\n            We acept only .jpg and .png formats.\n          </div>\n\n          <br/>\n        </div>\n\n          <div *ngIf=\"deletemyAcount\" class=\"alert alert-success\" role=\"alert\">\n              Acount deleted!\n            </div>\n      \n            <div *ngIf=\"deleteacount\" class=\"alert alert-danger\" role=\"alert\">\n                Error, the requestet acount don`t egzist !\n              </div>\n\n        \n          <div >\n\n<!--  \n  [disabled]=\"false\"   [config]=\"config\"\n            <ckeditor [editor]=\"Editor\" data=\"<p>Hello, world!</p>\"></ckeditor>\n-->\n\n<br/> <br/>\n              <div *ngIf=\"makePost\" id =\"postID\"> \n                \n                <br/>\n                <label> Title of the post.  </label>\n                <br/>\n                <input type=\"text\"  [(ngModel)]=\"InputTitle\" class=\"txin\"/>\n                          \n                <br/>\n                <label> Boody of the post.  </label>\n                <br/>\n               <!--  \n                <ckeditor [(ngModel)]=\"InputTextBody\" [editor]=\"Editor\" tagName=\"textarea\"  ></ckeditor>\n               \n              -->\n   \n    <ckeditor [editor]=\"Editor\" [(ngModel)]=\"InputTextBody\"   (ready)=\"onReady($event)\" ></ckeditor>\n              <br/>  <br/>\n                <button (click)=\"MakePost()\" id=\"cancel-btn\" class=\"btn btn-success\">  Post!! </button>\n\n                <!--  \n                <input type=\"submit\" value=\"post\" class=\"btn btn-success\"/>\n                -->\n                <button (click)=\"CancelPostAuth()\" id=\"cancel-btn\" class=\"btn btn-danger\"> Cancel post!! </button>\n                <br/>  <br/>\n              </div>\n          </div> \n\n\n\n        <div *ngIf=\"showpost\"> \n        \n          <app-post *ngFor=\"let posta of blogPost | paginate: {itemsPerPage:4 ,currentPage: p}  \"\n          [post]=\"posta\" [id]=\"idperdoruesi\" >    \n        \n        </app-post>\n        \n        <pagination-controls (pageChange)=\"p=$event\" maxSize=\"4\" responsive =\"true\">  </pagination-controls>\n     \n      </div> \n      \n      <div >\n          <input type=\"file\" (change)=\"onFileSelected($event)\" />\n          <button (click)=\"uploadSelectedFile()\" class=\"btn btn-success\"> Upload </button>\n      </div>\n\n      <div>\n        <!--  \n        <form>   </form>  class=\"form-group\"\n        -->\n          <div > \n              <label for=\"deletePhotoName\"> Give the name of photo to delete.  </label>\n            <input type=\"text\" name=\"photodelete\" id=\"deletePhotoName\" class=\"form-control\" [(ngModel)]=\"photodelete\"  />\n            <button class=\"btn btn-danger\" (click)=\"deletePhoto()\"> Delete </button>\n          </div>\n    \n      </div>\n        \n      </div>\n        <div class=\"side-bar\" >\n\n            <div >\n\n                <nav class=\"nav flex-column\" >\n                  <ul id=\"navigatinmenu\">  \n\n                      <li>\n                          <br/>\n                      </li>\n                    <li> \n                        <button (click)=\"writePostAuth()\" class=\"btn btn-success btn-color\" > Make a post!! </button>\n                   \n                  </li>\n                  <li>\n                      <br/>\n                  </li>\n\n                <li>\n                    <button (click)=\"showposts()\" class=\"btn btn-success  btn-color\"> Show my posts!! </button>\n                    \n                  </li>\n\n                  <li>\n                    <br/>\n                  </li>\n\n                  <li>\n                    <button (click)=\"deleteAcount()\" class=\"btn btn-danger btn-color\"> Delete Acount !! </button>\n                  </li>\n\n                 \n                </ul>\n                  </nav>\n            \n            </div>\n          <!--  \n          <app-my-sidebar  >  </app-my-sidebar>\n    -->\n\n        </div>\n        \n        <div class=\"landing-page-foo\">\n          <!--  -->\n          <p>\n            recent articles\n          </p>\n    \n        </div>\n\n</div>\n\n<!--  \n<div>\n\n    <router-outlet  >  </router-outlet>\n\n</div> \n\n -->"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog-post */ "./src/app/blog-post.ts");
/* harmony import */ var _load_user_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../load-user-data-service.service */ "./src/app/load-user-data-service.service.ts");
/* harmony import */ var _token_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../token-storage-service.service */ "./src/app/token-storage-service.service.ts");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication-service.service */ "./src/app/authentication-service.service.ts");
/* harmony import */ var _upload_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../upload-file.service */ "./src/app/upload-file.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-decoupled-document */ "./node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_7__);




//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


//import { CKEditorComponent } from 'ngx-ckeditor';


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(loadUserDataServiceService, TokenStorage, authenticate, uploadF) {
        this.loadUserDataServiceService = loadUserDataServiceService;
        this.TokenStorage = TokenStorage;
        this.authenticate = authenticate;
        this.uploadF = uploadF;
        /** CKEditorComponent */
        // @ViewChild('ck-editor') ckeditor : any;
        /**
          public Editor = ClassicEditor;
          public model = {
            editorData: ' <p> CK editor using ! </p> '
        };
        */
        this.Editor = _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_7__;
        /** */
        this.InputTitle = "";
        this.InputTextBody = "";
        this.selectedFile = [];
        this.photodelete = "";
        this.photoname = "no_image.jfif";
        this.shownoimage = true;
    }
    /** */
    UserProfileComponent.prototype.onReady = function (editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    };
    /** */
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userN = this.TokenStorage.getName();
        this.userNam = this.TokenStorage.getUsername();
        this.deletemyAcount = false;
        this.deleteacount = false;
        // console.log( this.TokenStorage.getToken() , this.TokenStorage.getUsername() );
        this.showpost = false;
        this.makePost = true;
        this.idperdoruesi = 1;
        this.loadUserDataServiceService.getUserId()
            .subscribe(function (resp) {
            console.log(resp);
            console.log(resp.body.answer, resp.body.name);
            _this.userIdName = {
                answer: resp.body.answer,
                name: resp.body.name
            };
            _this.idperdoruesi = _this.userIdName.answer;
            _this.getuserposts();
            //console.log( this.userIdName  );
            _this.getPhoto(_this.idperdoruesi);
            _this.TokenStorage.saveName(_this.userIdName.name);
        }, function (error) {
            _this.errorMsg = error;
            console.log(_this.errorMsg);
        }, function () {
            console.log("complete get user id");
        });
        // console.log(this.Editor);
        //this.getPhoto( this.idperdoruesi );
    };
    UserProfileComponent.prototype.getuserposts = function () {
        var _this = this;
        // console.log(this.idperdoruesi   );
        var subscriptionVariable = this.loadUserDataServiceService.getPostsByUserId(this.idperdoruesi);
        subscriptionVariable.subscribe(function (data) {
            _this.blogPost = data;
            // console.log(data);
        }, function (error) {
            _this.errorMsg = error;
            console.log(_this.errorMsg);
        }, function () {
            console.log("complete");
        });
    };
    UserProfileComponent.prototype.writePostAuth = function () {
        this.InputTitle = "";
        this.InputTextBody = "";
        this.makePost = !this.makePost;
        // this.makePost = true ;
    };
    UserProfileComponent.prototype.CancelPostAuth = function () {
        this.InputTitle = "";
        this.InputTextBody = "";
        this.makePost = false;
    };
    UserProfileComponent.prototype.MakePost = function () {
        this.username = this.TokenStorage.getUsername();
        //  this.username = this.userIdName .name;
        if (this.InputTitle != null && this.InputTitle != ""
            && this.InputTextBody != null && this.InputTextBody != "") {
            //console.log( this.newPost );
            // this.username
            this.newPost = new _blog_post__WEBPACK_IMPORTED_MODULE_2__["BlogPost"](this.userN, this.InputTitle, this.InputTextBody, this.idperdoruesi, 0);
            var subscriptionVariable = this.loadUserDataServiceService.postPosts(this.newPost);
            subscriptionVariable.subscribe();
            console.log(this.newPost);
            this.makePost = !this.makePost;
        }
        else {
            console.log(" empty body or title.");
        }
        window.location.reload();
    };
    UserProfileComponent.prototype.showposts = function () {
        this.showpost = !this.showpost;
    };
    UserProfileComponent.prototype.deleteAcount = function () {
        var _this = this;
        console.log(this.TokenStorage.getUsername());
        this.authenticate.deleteAcount(this.TokenStorage.getUsername()).subscribe(function (data) {
            if (data == true) {
                _this.deletemyAcount = data;
                _this.showpost = false;
                _this.TokenStorage.signOut();
            }
            else {
                _this.deleteacount = true;
            }
        });
    };
    UserProfileComponent.prototype.onFileSelected = function (event) {
        // console.log( event );
        // console.log( event.target.files.length );
        var i;
        for (i = 0; i < event.target.files.length; i++) {
            // nje vektor me file
            this.selectedFile[i] = event.target.files[i];
        }
    };
    UserProfileComponent.prototype.uploadSelectedFile = function () {
        // console.log( this.selectedFile.length );
        var fd = new FormData();
        var j;
        for (j = 0; j < this.selectedFile.length; j++) {
            fd.append("file", this.selectedFile[j], this.selectedFile[j].name);
        }
        this.uploadF.uploadFile(fd).subscribe(function (res) {
            console.log(res);
        });
        // window.location.reload();
    };
    UserProfileComponent.prototype.deletePhoto = function () {
        this.uploadF.deletePhotoByName(this.photodelete).subscribe();
        this.photoname = "no_image.jfif";
    };
    // window.location.reload();
    UserProfileComponent.prototype.getPhoto = function (id) {
        var _this = this;
        this.uploadF.getPhotoName(id).subscribe(function (data) {
            console.log(data);
            _this.photoname = data["answer"];
            _this.shownoimage = false;
        }, function (error) {
            console.log(error);
        });
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_load_user_data_service_service__WEBPACK_IMPORTED_MODULE_3__["LoadUserDataServiceService"], _token_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageServiceService"],
            _authentication_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationServiceService"],
            _upload_file_service__WEBPACK_IMPORTED_MODULE_6__["UploadFileService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Documents\angular-documents\myBlog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map