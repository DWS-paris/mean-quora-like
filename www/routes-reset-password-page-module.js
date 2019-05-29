(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-reset-password-page-module"],{

/***/ "./src/app/routes/reset-password-page/module.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/reset-password-page/module.ts ***!
  \******************************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/app/routes/reset-password-page/router.ts");
/* harmony import */ var _reset_password_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password-page.component */ "./src/app/routes/reset-password-page/reset-password-page.component.ts");
/* harmony import */ var _components_form_response_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/form-response/module */ "./src/app/components/form-response/module.ts");

/*
Imports
*/
// Angular



// Inner



//
/*
Definition
*/
var Module = /** @class */ (function () {
    //
    /*
    Export
    */
    function Module() {
    }
    Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_reset_password_page_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _router__WEBPACK_IMPORTED_MODULE_4__["Routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _components_form_response_module__WEBPACK_IMPORTED_MODULE_6__["FormResponseModule"]
            ]
        })
        //
        /*
        Export
        */
    ], Module);
    return Module;
}());

;
//


/***/ }),

/***/ "./src/app/routes/reset-password-page/reset-password-page.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/reset-password-page/reset-password-page.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Changer de mot de passe</h2>\n<form autocomplete=\"off\" novalidate [formGroup]=\"form\" (submit)=\"submitForm()\">\n  <label for=\"actualPassword\">Mot de passe actuel</label>\n  <input type=\"password\" name=\"actualPassword\" id=\"actualPassword\" required minlength=\"5\" formControlName = \"password\">\n\n  <label for=\"newPassword\">Nouveau mot de passe</label>\n  <input type=\"password\" name=\"newPassword\" id=\"newPassword\" required minlength=\"5\" formControlName = \"newPassword\">\n\n  <label for=\"newPasswordSecure\">Nouveau mot de passe <span *ngIf=\"passwordError\">Incorrect</span></label>\n  <input type=\"password\" name=\"newPasswordSecure\" id=\"newPasswordSecure\" required minlength=\"5\" formControlName = \"secureNewPassword\" (focus)=\"passwordError = false\">\n\n  <button type=\"submit\" [disabled]='!form.valid'>Valider</button>\n</form>\n\n<app-form-response\n    *ngIf=\"displayReturn\"\n    [content]=\"apiMessage\"\n    [class]=\"messageClass\"\n    (close)=\"displayReturn = false\"\n></app-form-response>"

/***/ }),

/***/ "./src/app/routes/reset-password-page/reset-password-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/routes/reset-password-page/reset-password-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ResetPasswordPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageComponent", function() { return ResetPasswordPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");

/*
Imports & definition
*/
// Imports


// Inner

// Definition
var ResetPasswordPageComponent = /** @class */ (function () {
    // Instanciation
    function ResetPasswordPageComponent(AuthService, FormBuilder) {
        var _this = this;
        this.AuthService = AuthService;
        this.FormBuilder = FormBuilder;
        this.passwordError = false;
        this.resetFormData = false;
        this.displayReturn = false;
        //
        /*
        Methods
        */
        // Reset form
        this.resetForm = function () {
            // Set validator
            _this.form = _this.FormBuilder.group({
                password: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                newPassword: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                secureNewPassword: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        };
        // Submit form
        this.submitForm = function () {
            // Check passwords
            if (_this.form.value.newPassword !== _this.form.value.secureNewPassword) {
                _this.passwordError = true;
            }
            else {
                _this.AuthService.restPassword(_this.form.value.password, _this.form.value.newPassword)
                    .then(function (apiResponse) {
                    // API success response
                    _this.messageClass = 'success';
                    _this.apiMessage = apiResponse.message;
                    _this.displayReturn = true;
                    // Reset form data
                    _this.resetFormData = true;
                })
                    .catch(function (apiResponse) {
                    console.log(apiResponse);
                    // API error response
                    _this.messageClass = 'error';
                    _this.apiMessage = apiResponse.message;
                    _this.displayReturn = true;
                });
            }
            ;
        };
    }
    ;
    //
    /*
    Hooks
    */
    ResetPasswordPageComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    ;
    ResetPasswordPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password-page',
            template: __webpack_require__(/*! ./reset-password-page.component.html */ "./src/app/routes/reset-password-page/reset-password-page.component.html"),
            providers: [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]]
        })
        //
        /*
        Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ResetPasswordPageComponent);
    return ResetPasswordPageComponent;
}());

;
//


/***/ }),

/***/ "./src/app/routes/reset-password-page/router.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/reset-password-page/router.ts ***!
  \******************************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reset_password_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password-page.component */ "./src/app/routes/reset-password-page/reset-password-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _reset_password_page_component__WEBPACK_IMPORTED_MODULE_1__["ResetPasswordPageComponent"]
    }
];
//
/*
Export
*/
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);
//


/***/ })

}]);
//# sourceMappingURL=routes-reset-password-page-module.js.map