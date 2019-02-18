(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-details-book-details-module"],{

/***/ "./src/app/book-details/book-details.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/book-details/book-details.module.ts ***!
  \*****************************************************/
/*! exports provided: BookDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsPageModule", function() { return BookDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _book_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-details.page */ "./src/app/book-details/book-details.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _book_details_page__WEBPACK_IMPORTED_MODULE_5__["BookDetailsPage"]
    }
];
var BookDetailsPageModule = /** @class */ (function () {
    function BookDetailsPageModule() {
    }
    BookDetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_book_details_page__WEBPACK_IMPORTED_MODULE_5__["BookDetailsPage"]]
        })
    ], BookDetailsPageModule);
    return BookDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/book-details/book-details.page.html":
/*!*****************************************************!*\
  !*** ./src/app/book-details/book-details.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-button href=\"/home\" routerDirection=\"backward\" style=\"float: left\">\n      <ion-icon name=\"arrow-back\" ></ion-icon>\n    </ion-button>\n    <ion-title>{{(bookDetails || {}).title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-img [src]=\"getImageUrl()\">\n\n  </ion-img>\n  <ion-label>By {{getAuthorsList()}}</ion-label>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/book-details/book-details.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/book-details/book-details.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stZGV0YWlscy9ib29rLWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/book-details/book-details.page.ts":
/*!***************************************************!*\
  !*** ./src/app/book-details/book-details.page.ts ***!
  \***************************************************/
/*! exports provided: BookDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsPage", function() { return BookDetailsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book-api.service */ "./src/app/book-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDetailsPage = /** @class */ (function () {
    function BookDetailsPage(route, bookApiService) {
        this.route = route;
        this.bookApiService = bookApiService;
        this.bookDetails = {};
    }
    BookDetailsPage.prototype.ionViewWillEnter = function () {
        this.bookDetails = this.bookApiService.getBook(this.route.snapshot.paramMap.get('id'));
    };
    BookDetailsPage.prototype.getImageUrl = function () {
        return "http://covers.openlibrary.org/b/ID/" + (this.bookDetails && this.bookDetails.cover_id) + "-L.jpg";
    };
    BookDetailsPage.prototype.getAuthorsList = function () {
        return this.bookDetails && this.bookDetails.authors && this.bookDetails.authors.map(function (_a) {
            var name = _a.name;
            return name;
        }).join() || '';
    };
    BookDetailsPage.prototype.ngOnInit = function () {
        console.log('init');
    };
    BookDetailsPage.prototype.ngOnDestroy = function () {
        console.log('destroy');
    };
    BookDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-details',
            template: __webpack_require__(/*! ./book-details.page.html */ "./src/app/book-details/book-details.page.html"),
            styles: [__webpack_require__(/*! ./book-details.page.scss */ "./src/app/book-details/book-details.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _book_api_service__WEBPACK_IMPORTED_MODULE_2__["BookApiService"]])
    ], BookDetailsPage);
    return BookDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=book-details-book-details-module.js.map