(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* \nReset\n*/\n    :root{\n        --max-width: 90rem;\n        --max-marge: 6rem;\n        --med-marge: 3rem;\n        --min-marge: 1.5rem;\n        --dark-color: black;\n        --med-color: grey;\n        --light-color: white;\n        --error-color: red;\n        --success-color: green;\n    }\n    *{\n        margin: 0;\n        padding: 0;\n        -ms-box-sizing: border-box;\n        -o-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n    app-home-page, app-form-response{\n        display: block;\n    }\n    html{\n        font-size: 62.5%;\n        font-family: sans-serif;\n        font-weight: 100;\n        line-height: 1.5;\n    }\n    body{\n        font-size: 1.6rem;\n    }\n    a{\n        text-decoration: none;\n        color: inherit;\n    }\n    form{\n        margin-bottom: var(--med-marge);\n    }\n    input:not([type=\"checkbox\"]), input:not([type=\"radio\"]), label, [type=\"submit\"]{\n        display: block;\n        width: 100%;\n        background: transparent;\n    }\n    label{\n        font-size: 1.1rem;\n        font-weight: 900;\n        text-transform: uppercase;\n    }\n    input{\n        font-size: 2rem;\n        padding: var(--min-marge);\n        border: none;\n        border-bottom: .1rem solid var(--med-color);\n        margin-bottom: var(--med-marge);\n    }\n    button{\n        border: none;\n        background: transparent;\n    }\n    [type=\"submit\"]{\n        text-transform: uppercase;\n        font-weight: 900;\n        padding: var(--min-marge);\n        border: .1rem solid var(--med-color);\n        \n        transition: all .3s;\n        -webkit-transition: all .3s;\n        -moz-transition: all .3s;\n        -ms-transition: all .3s;\n        -o-transition: all .3s;\n    }\n    [type=\"submit\"][disabled]{\n        opacity: .5;\n    }\n    [type=\"submit\"]:not([disabled]):hover{\n        color: var(--light-color);\n        background-color: var(--dark-color);\n    }\n    /**/\n    /* \nCommon\n*/\n    .maxWidth{\n        max-width: var(--max-width);\n        margin-left: auto;\n        margin-right: auto;\n        padding-left: var(--med-marge);\n        padding-right: var(--med-marge);\n    }\n    .flexBox{\n        display: -moz-flex;\n        display: -ms-flex;\n        display: -o-flex;\n        display: flex;\n    }\n    .spaceBetween{\n        -moz-justify-content: space-between;\n        -ms-justify-content: space-between;\n        -o-justify-content: space-between;\n        justify-content: space-between;\n    }\n    /**/\n    /* \nHeader\n*/\n    header{\n        padding: var(--med-marge) 0;\n    }\n    nav{\n        margin: var(--min-marge) 0;\n        padding-bottom: var(--min-marge);\n        border-bottom: .1rem dotted var(--med-color)\n    }\n    nav li{\n        color: var(--light-color);\n        display: inline-block;\n        background-color: var(--med-color);\n        line-height: 1.7;\n        \n        transition: all .3s;\n        -webkit-transition: all .3s;\n        -moz-transition: all .3s;\n        -ms-transition: all .3s;\n        -o-transition: all .3s;\n    }\n    nav li:not(:last-child){\n        margin-right: var(--min-marge);\n    }\n    nav li:hover{\n        background-color: var(--dark-color);\n    }\n    nav a{\n        font-size: 1rem;\n        font-weight: 900;\n        text-transform: uppercase;\n        padding: 0 var(--min-marge);\n    }\n    /**/\n    /* \nComponents\n*/\n    /* app-home-page */\n    app-home-page article{\n        width: calc(50% - var(--med-marge));\n    }\n    /* app-form-response */\n    app-form-response{\n        border: .1rem solid var(--med-color);\n        padding: var(--min-marge);\n        position: relative;\n    }\n    app-form-response.error{\n        border-color: var(--error-color);\n    }\n    app-form-response.success{\n        border-color: var(--success-color);\n    }\n    app-form-response button{\n        font-size: 2rem;\n        padding: .5rem;\n        position: absolute;\n        top: 0;\n        right: 0;\n    }\n    /**/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0lBQ0U7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLHVCQUF1QjtLQUMxQjtJQUVEO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFJWCwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLHVCQUF1QjtLQUMxQjtJQUVEO1FBQ0ksZUFBZTtLQUNsQjtJQUVEO1FBQ0ksaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixpQkFBaUI7UUFDakIsaUJBQWlCO0tBQ3BCO0lBRUQ7UUFDSSxrQkFBa0I7S0FDckI7SUFFRDtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO0tBQ2xCO0lBRUQ7UUFDSSxnQ0FBZ0M7S0FDbkM7SUFFRDtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osd0JBQXdCO0tBQzNCO0lBRUQ7UUFDSSxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLDBCQUEwQjtLQUM3QjtJQUVEO1FBQ0ksZ0JBQWdCO1FBQ2hCLDBCQUEwQjtRQUMxQixhQUFhO1FBQ2IsNENBQTRDO1FBQzVDLGdDQUFnQztLQUNuQztJQUVEO1FBQ0ksYUFBYTtRQUNiLHdCQUF3QjtLQUMzQjtJQUVEO1FBQ0ksMEJBQTBCO1FBQzFCLGlCQUFpQjtRQUNqQiwwQkFBMEI7UUFDMUIscUNBQXFDOztRQUVyQyxvQkFBb0I7UUFDcEIsNEJBQTRCO1FBQzVCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsdUJBQXVCO0tBQzFCO0lBRUQ7UUFDSSxZQUFZO0tBQ2Y7SUFFRDtRQUNJLDBCQUEwQjtRQUMxQixvQ0FBb0M7S0FDdkM7SUFDTCxJQUFJO0lBRUo7O0VBRUU7SUFDRTtRQUNJLDRCQUE0QjtRQUM1QixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLCtCQUErQjtRQUMvQixnQ0FBZ0M7S0FDbkM7SUFFRDtRQUVJLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGNBQWM7S0FDakI7SUFFRDtRQUVJLG9DQUFvQztRQUNwQyxtQ0FBbUM7UUFDbkMsa0NBQWtDO1FBQ2xDLCtCQUErQjtLQUNsQztJQUNMLElBQUk7SUFFSjs7RUFFRTtJQUNFO1FBQ0ksNEJBQTRCO0tBQy9CO0lBRUQ7UUFDSSwyQkFBMkI7UUFDM0IsaUNBQWlDO1FBQ2pDLDRDQUE0QztLQUMvQztJQUVEO1FBQ0ksMEJBQTBCO1FBQzFCLHNCQUFzQjtRQUN0QixtQ0FBbUM7UUFDbkMsaUJBQWlCOztRQUVqQixvQkFBb0I7UUFDcEIsNEJBQTRCO1FBQzVCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsdUJBQXVCO0tBQzFCO0lBRUQ7UUFDSSwrQkFBK0I7S0FDbEM7SUFFRDtRQUNJLG9DQUFvQztLQUN2QztJQUVEO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQiwwQkFBMEI7UUFDMUIsNEJBQTRCO0tBQy9CO0lBQ0wsSUFBSTtJQUdKOztFQUVFO0lBQ0UsbUJBQW1CO0lBQ25CO1FBQ0ksb0NBQW9DO0tBQ3ZDO0lBRUQsdUJBQXVCO0lBQ3ZCO1FBQ0kscUNBQXFDO1FBQ3JDLDBCQUEwQjtRQUMxQixtQkFBbUI7S0FDdEI7SUFFRDtRQUNJLGlDQUFpQztLQUNwQztJQUVEO1FBQ0ksbUNBQW1DO0tBQ3RDO0lBRUQ7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixPQUFPO1FBQ1AsU0FBUztLQUNaO0lBQ0wsSUFBSSIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuUmVzZXRcbiovXG4gICAgOnJvb3R7XG4gICAgICAgIC0tbWF4LXdpZHRoOiA5MHJlbTtcbiAgICAgICAgLS1tYXgtbWFyZ2U6IDZyZW07XG4gICAgICAgIC0tbWVkLW1hcmdlOiAzcmVtO1xuICAgICAgICAtLW1pbi1tYXJnZTogMS41cmVtO1xuICAgICAgICAtLWRhcmstY29sb3I6IGJsYWNrO1xuICAgICAgICAtLW1lZC1jb2xvcjogZ3JleTtcbiAgICAgICAgLS1saWdodC1jb2xvcjogd2hpdGU7XG4gICAgICAgIC0tZXJyb3ItY29sb3I6IHJlZDtcbiAgICAgICAgLS1zdWNjZXNzLWNvbG9yOiBncmVlbjtcbiAgICB9XG5cbiAgICAqe1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIGFwcC1ob21lLXBhZ2UsIGFwcC1mb3JtLXJlc3BvbnNle1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBodG1se1xuICAgICAgICBmb250LXNpemU6IDYyLjUlO1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG5cbiAgICBib2R5e1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB9XG5cbiAgICBhe1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cblxuICAgIGZvcm17XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLW1lZC1tYXJnZSk7XG4gICAgfVxuXG4gICAgaW5wdXQ6bm90KFt0eXBlPVwiY2hlY2tib3hcIl0pLCBpbnB1dDpub3QoW3R5cGU9XCJyYWRpb1wiXSksIGxhYmVsLCBbdHlwZT1cInN1Ym1pdFwiXXtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBsYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgaW5wdXR7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWluLW1hcmdlKTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItYm90dG9tOiAuMXJlbSBzb2xpZCB2YXIoLS1tZWQtY29sb3IpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tZWQtbWFyZ2UpO1xuICAgIH1cblxuICAgIGJ1dHRvbntcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBbdHlwZT1cInN1Ym1pdFwiXXtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWluLW1hcmdlKTtcbiAgICAgICAgYm9yZGVyOiAuMXJlbSBzb2xpZCB2YXIoLS1tZWQtY29sb3IpO1xuICAgICAgICBcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgIH1cblxuICAgIFt0eXBlPVwic3VibWl0XCJdW2Rpc2FibGVkXXtcbiAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgfVxuXG4gICAgW3R5cGU9XCJzdWJtaXRcIl06bm90KFtkaXNhYmxlZF0pOmhvdmVye1xuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgICB9XG4vKiovXG5cbi8qIFxuQ29tbW9uXG4qL1xuICAgIC5tYXhXaWR0aHtcbiAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLW1lZC1tYXJnZSk7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLW1lZC1tYXJnZSk7XG4gICAgfVxuXG4gICAgLmZsZXhCb3h7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW8tZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuc3BhY2VCZXR3ZWVue1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC1vLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbi8qKi9cblxuLyogXG5IZWFkZXJcbiovXG4gICAgaGVhZGVye1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1tZWQtbWFyZ2UpIDA7XG4gICAgfVxuXG4gICAgbmF2e1xuICAgICAgICBtYXJnaW46IHZhcigtLW1pbi1tYXJnZSkgMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLW1pbi1tYXJnZSk7XG4gICAgICAgIGJvcmRlci1ib3R0b206IC4xcmVtIGRvdHRlZCB2YXIoLS1tZWQtY29sb3IpXG4gICAgfVxuXG4gICAgbmF2IGxpe1xuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1jb2xvcik7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgICAgIFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgfVxuXG4gICAgbmF2IGxpOm5vdCg6bGFzdC1jaGlsZCl7XG4gICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0tbWluLW1hcmdlKTtcbiAgICB9XG5cbiAgICBuYXYgbGk6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xuICAgIH1cblxuICAgIG5hdiBhe1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBhZGRpbmc6IDAgdmFyKC0tbWluLW1hcmdlKTtcbiAgICB9XG4vKiovXG5cblxuLyogXG5Db21wb25lbnRzXG4qL1xuICAgIC8qIGFwcC1ob21lLXBhZ2UgKi9cbiAgICBhcHAtaG9tZS1wYWdlIGFydGljbGV7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIHZhcigtLW1lZC1tYXJnZSkpO1xuICAgIH1cblxuICAgIC8qIGFwcC1mb3JtLXJlc3BvbnNlICovXG4gICAgYXBwLWZvcm0tcmVzcG9uc2V7XG4gICAgICAgIGJvcmRlcjogLjFyZW0gc29saWQgdmFyKC0tbWVkLWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWluLW1hcmdlKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIGFwcC1mb3JtLXJlc3BvbnNlLmVycm9ye1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcbiAgICB9XG5cbiAgICBhcHAtZm9ybS1yZXNwb25zZS5zdWNjZXNze1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xuICAgIH1cblxuICAgIGFwcC1mb3JtLXJlc3BvbnNlIGJ1dHRvbntcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbi8qKi8iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dwsparis/Documents/htdocs/PROJETS/MEAN_boilerplate/ANGclient/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map