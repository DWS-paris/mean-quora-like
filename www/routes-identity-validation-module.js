(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-identity-validation-module"],{

/***/ "./src/app/routes/identity-validation/identity-validation.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/identity-validation/identity-validation.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Validation de votre identité</h2>\n<form [formGroup]=\"form\" (submit)=\"submitForm()\">\n  <label for=\"password\">Quel est votre mot de passe ?</label>\n  <input type=\"password\" name=\"password\" id=\"password\" required minlength=\"5\" formControlName = \"password\">\n  <button type=\"submit\" [disabled]='!form.valid'>Valider</button>\n</form>\n\n<app-form-response\n  *ngIf=\"displayReturn\"\n  [content]=\"apiMessage\"\n  [class]=\"messageClass\"\n  (close)=\"displayReturn = false\"\n></app-form-response>"

/***/ }),

/***/ "./src/app/routes/identity-validation/identity-validation.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/routes/identity-validation/identity-validation.component.ts ***!
  \*****************************************************************************/
/*! exports provided: IdentityValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityValidationComponent", function() { return IdentityValidationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");

/*
Imports & definition
*/
// Imports




var IdentityValidationComponent = /** @class */ (function () {
    // Module injection
    function IdentityValidationComponent(ActivatedRoute, AuthService, FormBuilder) {
        var _this = this;
        this.ActivatedRoute = ActivatedRoute;
        this.AuthService = AuthService;
        this.FormBuilder = FormBuilder;
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
                password: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
        };
        // Get route param
        this.extractParam = function () {
            _this.ActivatedRoute.params.forEach(function (param) {
                _this.userId = param.id;
            });
        };
        // Check identity
        this.submitForm = function () {
            _this.AuthService.identityValidation(_this.userId, _this.form.value.password)
                .then(function (apiResponse) {
                // API success response
                _this.messageClass = 'success';
                _this.apiMessage = apiResponse.message;
                _this.displayReturn = true;
                // Reset form data
                _this.resetForm();
            })
                .catch(function (apiResponse) {
                // API error response
                _this.messageClass = 'error';
                _this.apiMessage = apiResponse.message;
                _this.displayReturn = true;
            });
        };
    }
    ;
    //
    /*
    Hooks
    */
    IdentityValidationComponent.prototype.ngOnInit = function () {
        // Reset form data
        this.resetForm();
        // Get identity ID
        this.extractParam();
    };
    ;
    IdentityValidationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-identity-validation',
            template: __webpack_require__(/*! ./identity-validation.component.html */ "./src/app/routes/identity-validation/identity-validation.component.html"),
            providers: [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
        })
        //
        /*
        Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], IdentityValidationComponent);
    return IdentityValidationComponent;
}());

//


/***/ }),

/***/ "./src/app/routes/identity-validation/module.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/identity-validation/module.ts ***!
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
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/app/routes/identity-validation/router.ts");
/* harmony import */ var _identity_validation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identity-validation.component */ "./src/app/routes/identity-validation/identity-validation.component.ts");
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
            declarations: [_identity_validation_component__WEBPACK_IMPORTED_MODULE_5__["IdentityValidationComponent"]],
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

/***/ "./src/app/routes/identity-validation/router.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/identity-validation/router.ts ***!
  \******************************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _identity_validation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity-validation.component */ "./src/app/routes/identity-validation/identity-validation.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: ':id',
        component: _identity_validation_component__WEBPACK_IMPORTED_MODULE_1__["IdentityValidationComponent"]
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
//# sourceMappingURL=routes-identity-validation-module.js.map