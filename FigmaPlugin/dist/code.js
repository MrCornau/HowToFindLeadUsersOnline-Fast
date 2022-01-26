/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_createFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/createFrame */ "./src/helper/createFrame.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

figma.showUI(__html__, { width: 520, height: 230 });
figma.ui.onmessage = function (message) { return __awaiter(void 0, void 0, void 0, function () {
    var data, style, CommentGrid, counts, _i, data_1, num, SortedComments, _a, _b, tag, tagObj, _c, data_2, comment, _d, SortedComments_1, row, Row_F, TagName, _e, _f, comment, content, Frame, viewport;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                // Roboto Regular is the font that objects will be created with by default in
                // Figma. We need to wait for fonts to load before creating text using them.
                // console.log(message)
                if (message.action == "resize") {
                    figma.ui.resize(520, 366);
                }
                if (!(message.action == "createNode")) return [3 /*break*/, 10];
                data = message.data;
                style = {
                    "width": 320,
                    "cardPadding": 16,
                    "fontcolor_primary": { r: 0.82745, g: 0.84314, b: 0.84706 },
                    "color_accent": { r: 0.86667, g: 0.89804, b: 0.55686 },
                    "color_background": { r: 0.13725, g: 0.14510, b: 0.14902 },
                    "transparent": { visible: false, type: "SOLID", color: { r: 0.82745, g: 0.84314, b: 0.84706 } },
                    "color_divider": { r: 0.20000, g: 0.21569, b: 0.22745 },
                    "italicFont": { family: "IBM Plex Sans", style: "Italic" },
                    "boldFont": { family: "IBM Plex Serif", style: "Bold" }
                };
                return [4 /*yield*/, figma.loadFontAsync(style.boldFont)];
            case 1:
                _g.sent();
                return [4 /*yield*/, figma.loadFontAsync(style.italicFont)];
            case 2:
                _g.sent();
                CommentGrid = figma.createFrame();
                CommentGrid.layoutMode = "HORIZONTAL";
                // @ts-ignore
                CommentGrid.itemSpacing = 64;
                // @ts-ignore
                CommentGrid.primaryAxisSizingMode = "AUTO";
                CommentGrid.counterAxisSizingMode = "AUTO";
                // @ts-ignore
                CommentGrid.fills = [style.transparent];
                counts = {};
                for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                    num = data_1[_i];
                    counts[num.tag] = counts[num.tag] ? counts[num.tag] + 1 : 1;
                }
                console.log(Object.keys(counts));
                SortedComments = [];
                for (_a = 0, _b = Object.keys(counts); _a < _b.length; _a++) {
                    tag = _b[_a];
                    tagObj = { "tag": tag,
                        "comments": [] };
                    for (_c = 0, data_2 = data; _c < data_2.length; _c++) {
                        comment = data_2[_c];
                        if (comment.tag == tag) {
                            tagObj.comments.push(comment);
                        }
                    }
                    SortedComments.push(tagObj);
                }
                console.log(SortedComments);
                _d = 0, SortedComments_1 = SortedComments;
                _g.label = 3;
            case 3:
                if (!(_d < SortedComments_1.length)) return [3 /*break*/, 9];
                row = SortedComments_1[_d];
                Row_F = figma.createFrame();
                Row_F.layoutMode = "VERTICAL";
                // @ts-ignore
                Row_F.itemSpacing = 36;
                // @ts-ignore
                Row_F.primaryAxisSizingMode = "AUTO";
                Row_F.counterAxisSizingMode = "AUTO";
                // @ts-ignore
                Row_F.fills = [style.transparent];
                TagName = figma.createText();
                Row_F.appendChild(TagName);
                TagName.fontName = style.boldFont;
                TagName.fontSize = 36;
                TagName.fills = [{ type: "SOLID", color: style.color_background }];
                if (row.tag.length === 0) {
                    TagName.characters = 'No Tag';
                }
                else
                    (TagName.characters = row.tag);
                TagName.textAutoResize = "HEIGHT";
                TagName.layoutAlign = "STRETCH";
                _e = 0, _f = row.comments;
                _g.label = 4;
            case 4:
                if (!(_e < _f.length)) return [3 /*break*/, 7];
                comment = _f[_e];
                content = {
                    "metaTag": comment.imagehash, "autor": comment.autor, "date": comment.date, "sent": comment.MarkedSent, "link": comment.link, "heading": comment.heading, "description": comment.description, "rating": comment.rating, "tag": comment.tag
                };
                return [4 /*yield*/, _helper_createFrame__WEBPACK_IMPORTED_MODULE_0__["createFrame"](content, style)];
            case 5:
                Frame = _g.sent();
                Row_F.appendChild(Frame);
                _g.label = 6;
            case 6:
                _e++;
                return [3 /*break*/, 4];
            case 7:
                CommentGrid.appendChild(Row_F);
                _g.label = 8;
            case 8:
                _d++;
                return [3 /*break*/, 3];
            case 9:
                viewport = [];
                viewport.push(CommentGrid);
                figma.viewport.scrollAndZoomIntoView(viewport);
                figma.closePlugin();
                _g.label = 10;
            case 10: return [2 /*return*/];
        }
    });
}); };


/***/ }),

/***/ "./src/helper/createFrame.ts":
/*!***********************************!*\
  !*** ./src/helper/createFrame.ts ***!
  \***********************************/
/*! exports provided: createFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFrame", function() { return createFrame; });
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help */ "./src/helper/help.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

function createFrame(content, style) {
    return __awaiter(this, void 0, void 0, function () {
        var metaTags, autor, date, sent, link, heading, description, rating, tag, color_divider, transparent, color_background, color_accent, fontcolor_primary, imageWidth, cardPadding, italicFont, boldFont, markedSent, cardFrame, description_F, tag_F, tag_T, heading_T, Rating_F, i, star_selected, star_unselected, description_T, divider, comment, imageHash, rect, title, autor_T, date_T, comment_T, link_F, Arrow, Link_T;
        return __generator(this, function (_a) {
            metaTags = content.metaTag;
            autor = content.autor;
            date = content.date;
            sent = content.sent;
            link = content.link;
            heading = content.heading;
            description = content.description;
            rating = content.rating;
            tag = content.tag;
            color_divider = style.color_divider;
            transparent = style.transparent;
            color_background = style.color_background;
            color_accent = style.color_accent;
            fontcolor_primary = style.fontcolor_primary;
            imageWidth = style.width;
            cardPadding = style.cardPadding;
            italicFont = style.italicFont;
            boldFont = style.boldFont;
            markedSent = _help__WEBPACK_IMPORTED_MODULE_0__["getMarkedPartsOfSent"]('-----> ', ' !!!', sent);
            cardFrame = figma.createFrame();
            // @ts-ignore
            cardFrame.cornerRadius = 0;
            cardFrame.resize(imageWidth + cardPadding * 2, imageWidth);
            cardFrame.layoutMode = "VERTICAL";
            // @ts-ignore
            cardFrame.paddingTop = cardFrame.paddingBottom = cardPadding;
            cardFrame.itemSpacing = cardPadding / 2;
            // @ts-ignore
            cardFrame.primaryAxisSizingMode = "AUTO";
            cardFrame.counterAxisSizingMode = "FIXED";
            cardFrame.fills = [{ type: "SOLID", color: color_background }];
            // cardFrame.strokes = [{type : "SOLID", color: { r: 0, g: 0, b: 0 }}];
            cardFrame.strokeWeight = 2;
            description_F = figma.createFrame();
            cardFrame.appendChild(description_F);
            description_F.paddingLeft = description_F.paddingRight = cardPadding;
            description_F.itemSpacing = cardPadding / 2;
            description_F.layoutMode = "VERTICAL";
            description_F.primaryAxisSizingMode = "AUTO";
            description_F.counterAxisSizingMode = "AUTO";
            description_F.layoutAlign = "STRETCH";
            // @ts-ignore
            description_F.fills = [transparent];
            tag_F = figma.createFrame();
            description_F.appendChild(tag_F);
            tag_F.layoutMode = "VERTICAL";
            tag_F.itemSpacing = 1;
            tag_F.counterAxisSizingMode = "AUTO";
            // @ts-ignore
            tag_F.primaryAxisSizingMode = "AUTO";
            tag_F.fills = [{ opacity: 0.25, type: "SOLID", color: color_accent }];
            tag_T = figma.createText();
            tag_F.appendChild(tag_T);
            tag_T.fontName = italicFont;
            tag_T.fills = [{ type: "SOLID", color: color_accent }];
            if (tag.length === 0) {
                tag_T.characters = '#placeholder';
                tag_F.visible = false;
            }
            else
                (tag_T.characters = '#' + tag);
            tag_T.textAutoResize = "WIDTH_AND_HEIGHT";
            tag_T.layoutAlign = "STRETCH";
            console.log(tag.length);
            heading_T = figma.createText();
            description_F.appendChild(heading_T);
            heading_T.fontName = boldFont;
            heading_T.fills = [{ type: "SOLID", color: fontcolor_primary }];
            if (heading.length === 0) {
                tag_T.characters = 'Heading';
                heading_T.visible = false;
            }
            else
                (heading_T.characters = heading);
            heading_T.textAutoResize = "HEIGHT";
            heading_T.layoutAlign = "STRETCH";
            Rating_F = figma.createFrame();
            description_F.appendChild(Rating_F);
            Rating_F.layoutMode = "HORIZONTAL";
            Rating_F.primaryAxisSizingMode = "AUTO";
            Rating_F.counterAxisSizingMode = "AUTO";
            // @ts-ignore
            Rating_F.fills = [transparent];
            for (i = 0; i < 5; i++) {
                if (rating > i) {
                    star_selected = figma.createNodeFromSvg(_help__WEBPACK_IMPORTED_MODULE_0__["star_selected"]);
                    Rating_F.appendChild(star_selected);
                }
                else {
                    star_unselected = figma.createNodeFromSvg(_help__WEBPACK_IMPORTED_MODULE_0__["star_unselected"]);
                    Rating_F.appendChild(star_unselected);
                }
            }
            description_T = figma.createText();
            description_F.appendChild(description_T);
            description_T.fontName = italicFont;
            description_T.fills = [{ type: "SOLID", color: fontcolor_primary }];
            if (description.length === 0) {
                description_T.characters = 'Description';
                description_T.visible = false;
            }
            else
                (description_T.characters = description);
            description_T.textAutoResize = "WIDTH_AND_HEIGHT";
            description_T.layoutAlign = "STRETCH";
            divider = figma.createFrame();
            divider.resize(500, 1);
            cardFrame.appendChild(divider);
            divider.fills = [{ opacity: 1, type: "SOLID", color: color_divider }];
            comment = figma.createFrame();
            cardFrame.appendChild(comment);
            comment.paddingLeft = comment.paddingRight = cardPadding;
            comment.itemSpacing = cardPadding / 2;
            comment.layoutMode = "VERTICAL";
            comment.primaryAxisSizingMode = "AUTO";
            comment.counterAxisSizingMode = "FIXED";
            comment.layoutAlign = "STRETCH";
            // @ts-ignore
            comment.fills = [transparent];
            // Images
            if (metaTags != 'None') {
                imageHash = figma.createImage(metaTags.data).hash;
                rect = figma.createRectangle();
                rect.resize(imageWidth, imageWidth / (metaTags.width / metaTags.height));
                rect.fills = [{ type: "IMAGE", scaleMode: "FIT", imageHash: imageHash }];
                comment.appendChild(rect);
            }
            title = figma.createFrame();
            comment.appendChild(title);
            title.layoutMode = "VERTICAL";
            // @ts-ignore
            title.primaryAxisSizingMode = "AUTO";
            title.counterAxisSizingMode = "AUTO";
            // // @ts-ignore
            // title.primaryAxisAlignItems = "SPACE_BETWEEN";
            // title.layoutAlign= "STRETCH";
            // @ts-ignore
            title.fills = [transparent];
            autor_T = figma.createText();
            title.appendChild(autor_T);
            autor_T.fontName = boldFont;
            autor_T.fills = [{ type: "SOLID", color: fontcolor_primary }];
            autor_T.characters = autor;
            autor_T.textAutoResize = "HEIGHT";
            autor_T.layoutAlign = "STRETCH";
            date_T = figma.createText();
            title.appendChild(date_T);
            date_T.fontName = italicFont;
            date_T.fills = [{ type: "SOLID", color: color_accent }];
            date_T.characters = date;
            date_T.textAutoResize = "WIDTH_AND_HEIGHT";
            date_T.layoutAlign = "STRETCH";
            comment_T = figma.createText();
            comment.appendChild(comment_T);
            comment_T.fontName = italicFont;
            comment_T.fills = [{ type: "SOLID", color: fontcolor_primary }];
            comment_T.characters = markedSent.sent;
            markedSent.Start.map(function (currElement, index) {
                comment_T.setRangeFills(markedSent.Start[index], markedSent.End[index], [{ type: "SOLID", color: color_accent }]);
                comment_T.setRangeFontName(markedSent.Start[index], markedSent.End[index], boldFont);
            });
            comment_T.textAutoResize = "WIDTH_AND_HEIGHT";
            comment_T.layoutAlign = "STRETCH";
            link_F = figma.createFrame();
            comment.appendChild(link_F);
            link_F.layoutMode = "HORIZONTAL";
            link_F.itemSpacing = 4;
            link_F.counterAxisSizingMode = "AUTO";
            // @ts-ignore
            link_F.primaryAxisSizingMode = "AUTO";
            // @ts-ignore
            link_F.fills = [transparent];
            Arrow = figma.createNodeFromSvg(_help__WEBPACK_IMPORTED_MODULE_0__["arrow"]);
            link_F.appendChild(Arrow);
            Link_T = figma.createText();
            link_F.appendChild(Link_T);
            Link_T.fontName = italicFont;
            Link_T.fills = [{ type: "SOLID", color: color_accent }];
            Link_T.characters = 'visit comment';
            Link_T.textAutoResize = "WIDTH_AND_HEIGHT";
            Link_T.layoutAlign = "STRETCH";
            // @ts-ignore
            Link_T.hyperlink = {
                type: "URL",
                value: link
            };
            return [2 /*return*/, cardFrame];
        });
    });
}


/***/ }),

/***/ "./src/helper/help.ts":
/*!****************************!*\
  !*** ./src/helper/help.ts ***!
  \****************************/
/*! exports provided: getMarkedPartsOfSent, arrow, star_unselected, star_selected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkedPartsOfSent", function() { return getMarkedPartsOfSent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return arrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "star_unselected", function() { return star_unselected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "star_selected", function() { return star_selected; });
// global.ts
function getMarkedPartsOfSent(start, end, sent) {
    var reStart = new RegExp(start, 'gi');
    var reEnd = new RegExp(end, 'gi');
    var startMark = new Array();
    var endMark = new Array();
    while (reStart.exec(sent)) {
        startMark.push(reStart.lastIndex);
    }
    while (reEnd.exec(sent)) {
        endMark.push(reEnd.lastIndex);
    }
    // console.log(startMark,endMark)
    var NewStartArray = new Array();
    startMark.map(function (currElement, index) {
        var subtract = ((index + 1) * start.length) + (index * end.length);
        NewStartArray.push(currElement - subtract);
    });
    // console.log(NewStartArray)
    var NewEndArray = new Array();
    endMark.map(function (currElement, index) {
        var subtract = ((index + 1) * start.length) + ((index + 1) * end.length);
        NewEndArray.push(currElement - subtract);
    });
    var cleanedSent = sent.replaceAll(start, "").replaceAll(end, "");
    var sentObject = { "sent": cleanedSent, "Start": NewStartArray, "End": NewEndArray };
    return sentObject;
}
var arrow = "<svg width=\"13\" height=\"14\" viewBox=\"0 0 13 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path d=\"M8.47534 7.28992L11.3305 10.145L8.67225 12.8033\" stroke=\"#DDE58E\"/>\n\t<path d=\"M1 0.810425V10.0465H10.6343\" stroke=\"#DDE58E\"/></svg>";
var star_selected = "<svg width=\"16\" height=\"15\" viewBox=\"0 0 16 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z\" fill=\"#EDF67D\"/>\n</svg>\n";
var star_unselected = "<svg width=\"16\" height=\"15\" viewBox=\"0 0 16 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z\" fill=\"#33373A\"/>\n</svg>\n";



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9jcmVhdGVGcmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2hlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsU0FBSSxJ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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdEQUF3RDtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwQ0FBMEM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFDQUFxQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMENBQTBDO0FBQzFFO0FBQ0E7QUFDQSwwRkFBMEYscUNBQXFDO0FBQy9IO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsMkNBQXFCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFDQUFxQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDdE9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNpRCIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgKiBhcyBjcmVhdGVGcmFtZSBmcm9tIFwiLi9oZWxwZXIvY3JlYXRlRnJhbWVcIjtcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNTIwLCBoZWlnaHQ6IDIzMCB9KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBkYXRhLCBzdHlsZSwgQ29tbWVudEdyaWQsIGNvdW50cywgX2ksIGRhdGFfMSwgbnVtLCBTb3J0ZWRDb21tZW50cywgX2EsIF9iLCB0YWcsIHRhZ09iaiwgX2MsIGRhdGFfMiwgY29tbWVudCwgX2QsIFNvcnRlZENvbW1lbnRzXzEsIHJvdywgUm93X0YsIFRhZ05hbWUsIF9lLCBfZiwgY29tbWVudCwgY29udGVudCwgRnJhbWUsIHZpZXdwb3J0O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2cpIHtcbiAgICAgICAgc3dpdGNoIChfZy5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIC8vIFJvYm90byBSZWd1bGFyIGlzIHRoZSBmb250IHRoYXQgb2JqZWN0cyB3aWxsIGJlIGNyZWF0ZWQgd2l0aCBieSBkZWZhdWx0IGluXG4gICAgICAgICAgICAgICAgLy8gRmlnbWEuIFdlIG5lZWQgdG8gd2FpdCBmb3IgZm9udHMgdG8gbG9hZCBiZWZvcmUgY3JlYXRpbmcgdGV4dCB1c2luZyB0aGVtLlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09IFwicmVzaXplXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKDUyMCwgMzY2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCEobWVzc2FnZS5hY3Rpb24gPT0gXCJjcmVhdGVOb2RlXCIpKSByZXR1cm4gWzMgLypicmVhayovLCAxMF07XG4gICAgICAgICAgICAgICAgZGF0YSA9IG1lc3NhZ2UuZGF0YTtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAzMjAsXG4gICAgICAgICAgICAgICAgICAgIFwiY2FyZFBhZGRpbmdcIjogMTYsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udGNvbG9yX3ByaW1hcnlcIjogeyByOiAwLjgyNzQ1LCBnOiAwLjg0MzE0LCBiOiAwLjg0NzA2IH0sXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JfYWNjZW50XCI6IHsgcjogMC44NjY2NywgZzogMC44OTgwNCwgYjogMC41NTY4NiB9LFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yX2JhY2tncm91bmRcIjogeyByOiAwLjEzNzI1LCBnOiAwLjE0NTEwLCBiOiAwLjE0OTAyIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidHJhbnNwYXJlbnRcIjogeyB2aXNpYmxlOiBmYWxzZSwgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAwLjgyNzQ1LCBnOiAwLjg0MzE0LCBiOiAwLjg0NzA2IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvcl9kaXZpZGVyXCI6IHsgcjogMC4yMDAwMCwgZzogMC4yMTU2OSwgYjogMC4yMjc0NSB9LFxuICAgICAgICAgICAgICAgICAgICBcIml0YWxpY0ZvbnRcIjogeyBmYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzdHlsZTogXCJJdGFsaWNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBcImJvbGRGb250XCI6IHsgZmFtaWx5OiBcIklCTSBQbGV4IFNlcmlmXCIsIHN0eWxlOiBcIkJvbGRcIiB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmaWdtYS5sb2FkRm9udEFzeW5jKHN0eWxlLmJvbGRGb250KV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2cuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZpZ21hLmxvYWRGb250QXN5bmMoc3R5bGUuaXRhbGljRm9udCldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIF9nLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBDb21tZW50R3JpZCA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgQ29tbWVudEdyaWQubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBDb21tZW50R3JpZC5pdGVtU3BhY2luZyA9IDY0O1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBDb21tZW50R3JpZC5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgICAgICBDb21tZW50R3JpZC5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgQ29tbWVudEdyaWQuZmlsbHMgPSBbc3R5bGUudHJhbnNwYXJlbnRdO1xuICAgICAgICAgICAgICAgIGNvdW50cyA9IHt9O1xuICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCBkYXRhXzEgPSBkYXRhOyBfaSA8IGRhdGFfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtID0gZGF0YV8xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgY291bnRzW251bS50YWddID0gY291bnRzW251bS50YWddID8gY291bnRzW251bS50YWddICsgMSA6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKGNvdW50cykpO1xuICAgICAgICAgICAgICAgIFNvcnRlZENvbW1lbnRzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChfYSA9IDAsIF9iID0gT2JqZWN0LmtleXMoY291bnRzKTsgX2EgPCBfYi5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnID0gX2JbX2FdO1xuICAgICAgICAgICAgICAgICAgICB0YWdPYmogPSB7IFwidGFnXCI6IHRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tbWVudHNcIjogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChfYyA9IDAsIGRhdGFfMiA9IGRhdGE7IF9jIDwgZGF0YV8yLmxlbmd0aDsgX2MrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudCA9IGRhdGFfMltfY107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWVudC50YWcgPT0gdGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnT2JqLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgU29ydGVkQ29tbWVudHMucHVzaCh0YWdPYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhTb3J0ZWRDb21tZW50cyk7XG4gICAgICAgICAgICAgICAgX2QgPSAwLCBTb3J0ZWRDb21tZW50c18xID0gU29ydGVkQ29tbWVudHM7XG4gICAgICAgICAgICAgICAgX2cubGFiZWwgPSAzO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmICghKF9kIDwgU29ydGVkQ29tbWVudHNfMS5sZW5ndGgpKSByZXR1cm4gWzMgLypicmVhayovLCA5XTtcbiAgICAgICAgICAgICAgICByb3cgPSBTb3J0ZWRDb21tZW50c18xW19kXTtcbiAgICAgICAgICAgICAgICBSb3dfRiA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgUm93X0YubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgUm93X0YuaXRlbVNwYWNpbmcgPSAzNjtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgUm93X0YucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgICAgICAgICAgUm93X0YuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIFJvd19GLmZpbGxzID0gW3N0eWxlLnRyYW5zcGFyZW50XTtcbiAgICAgICAgICAgICAgICBUYWdOYW1lID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICAgICAgICAgIFJvd19GLmFwcGVuZENoaWxkKFRhZ05hbWUpO1xuICAgICAgICAgICAgICAgIFRhZ05hbWUuZm9udE5hbWUgPSBzdHlsZS5ib2xkRm9udDtcbiAgICAgICAgICAgICAgICBUYWdOYW1lLmZvbnRTaXplID0gMzY7XG4gICAgICAgICAgICAgICAgVGFnTmFtZS5maWxscyA9IFt7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IHN0eWxlLmNvbG9yX2JhY2tncm91bmQgfV07XG4gICAgICAgICAgICAgICAgaWYgKHJvdy50YWcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFRhZ05hbWUuY2hhcmFjdGVycyA9ICdObyBUYWcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIChUYWdOYW1lLmNoYXJhY3RlcnMgPSByb3cudGFnKTtcbiAgICAgICAgICAgICAgICBUYWdOYW1lLnRleHRBdXRvUmVzaXplID0gXCJIRUlHSFRcIjtcbiAgICAgICAgICAgICAgICBUYWdOYW1lLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgICAgICAgICAgICAgX2UgPSAwLCBfZiA9IHJvdy5jb21tZW50cztcbiAgICAgICAgICAgICAgICBfZy5sYWJlbCA9IDQ7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaWYgKCEoX2UgPCBfZi5sZW5ndGgpKSByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICBjb21tZW50ID0gX2ZbX2VdO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwibWV0YVRhZ1wiOiBjb21tZW50LmltYWdlaGFzaCwgXCJhdXRvclwiOiBjb21tZW50LmF1dG9yLCBcImRhdGVcIjogY29tbWVudC5kYXRlLCBcInNlbnRcIjogY29tbWVudC5NYXJrZWRTZW50LCBcImxpbmtcIjogY29tbWVudC5saW5rLCBcImhlYWRpbmdcIjogY29tbWVudC5oZWFkaW5nLCBcImRlc2NyaXB0aW9uXCI6IGNvbW1lbnQuZGVzY3JpcHRpb24sIFwicmF0aW5nXCI6IGNvbW1lbnQucmF0aW5nLCBcInRhZ1wiOiBjb21tZW50LnRhZ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY3JlYXRlRnJhbWUuY3JlYXRlRnJhbWUoY29udGVudCwgc3R5bGUpXTtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBGcmFtZSA9IF9nLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBSb3dfRi5hcHBlbmRDaGlsZChGcmFtZSk7XG4gICAgICAgICAgICAgICAgX2cubGFiZWwgPSA2O1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIF9lKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgQ29tbWVudEdyaWQuYXBwZW5kQ2hpbGQoUm93X0YpO1xuICAgICAgICAgICAgICAgIF9nLmxhYmVsID0gODtcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBfZCsrO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIHZpZXdwb3J0ID0gW107XG4gICAgICAgICAgICAgICAgdmlld3BvcnQucHVzaChDb21tZW50R3JpZCk7XG4gICAgICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KHZpZXdwb3J0KTtcbiAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICAgICAgICAgIF9nLmxhYmVsID0gMTA7XG4gICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCAqIGFzIGhlbHBlcmZ1bmN0aW9ucyBmcm9tIFwiLi9oZWxwXCI7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnJhbWUoY29udGVudCwgc3R5bGUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZXRhVGFncywgYXV0b3IsIGRhdGUsIHNlbnQsIGxpbmssIGhlYWRpbmcsIGRlc2NyaXB0aW9uLCByYXRpbmcsIHRhZywgY29sb3JfZGl2aWRlciwgdHJhbnNwYXJlbnQsIGNvbG9yX2JhY2tncm91bmQsIGNvbG9yX2FjY2VudCwgZm9udGNvbG9yX3ByaW1hcnksIGltYWdlV2lkdGgsIGNhcmRQYWRkaW5nLCBpdGFsaWNGb250LCBib2xkRm9udCwgbWFya2VkU2VudCwgY2FyZEZyYW1lLCBkZXNjcmlwdGlvbl9GLCB0YWdfRiwgdGFnX1QsIGhlYWRpbmdfVCwgUmF0aW5nX0YsIGksIHN0YXJfc2VsZWN0ZWQsIHN0YXJfdW5zZWxlY3RlZCwgZGVzY3JpcHRpb25fVCwgZGl2aWRlciwgY29tbWVudCwgaW1hZ2VIYXNoLCByZWN0LCB0aXRsZSwgYXV0b3JfVCwgZGF0ZV9ULCBjb21tZW50X1QsIGxpbmtfRiwgQXJyb3csIExpbmtfVDtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgbWV0YVRhZ3MgPSBjb250ZW50Lm1ldGFUYWc7XG4gICAgICAgICAgICBhdXRvciA9IGNvbnRlbnQuYXV0b3I7XG4gICAgICAgICAgICBkYXRlID0gY29udGVudC5kYXRlO1xuICAgICAgICAgICAgc2VudCA9IGNvbnRlbnQuc2VudDtcbiAgICAgICAgICAgIGxpbmsgPSBjb250ZW50Lmxpbms7XG4gICAgICAgICAgICBoZWFkaW5nID0gY29udGVudC5oZWFkaW5nO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBjb250ZW50LmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgcmF0aW5nID0gY29udGVudC5yYXRpbmc7XG4gICAgICAgICAgICB0YWcgPSBjb250ZW50LnRhZztcbiAgICAgICAgICAgIGNvbG9yX2RpdmlkZXIgPSBzdHlsZS5jb2xvcl9kaXZpZGVyO1xuICAgICAgICAgICAgdHJhbnNwYXJlbnQgPSBzdHlsZS50cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGNvbG9yX2JhY2tncm91bmQgPSBzdHlsZS5jb2xvcl9iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgY29sb3JfYWNjZW50ID0gc3R5bGUuY29sb3JfYWNjZW50O1xuICAgICAgICAgICAgZm9udGNvbG9yX3ByaW1hcnkgPSBzdHlsZS5mb250Y29sb3JfcHJpbWFyeTtcbiAgICAgICAgICAgIGltYWdlV2lkdGggPSBzdHlsZS53aWR0aDtcbiAgICAgICAgICAgIGNhcmRQYWRkaW5nID0gc3R5bGUuY2FyZFBhZGRpbmc7XG4gICAgICAgICAgICBpdGFsaWNGb250ID0gc3R5bGUuaXRhbGljRm9udDtcbiAgICAgICAgICAgIGJvbGRGb250ID0gc3R5bGUuYm9sZEZvbnQ7XG4gICAgICAgICAgICBtYXJrZWRTZW50ID0gaGVscGVyZnVuY3Rpb25zLmdldE1hcmtlZFBhcnRzT2ZTZW50KCctLS0tLT4gJywgJyAhISEnLCBzZW50KTtcbiAgICAgICAgICAgIGNhcmRGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjYXJkRnJhbWUuY29ybmVyUmFkaXVzID0gMDtcbiAgICAgICAgICAgIGNhcmRGcmFtZS5yZXNpemUoaW1hZ2VXaWR0aCArIGNhcmRQYWRkaW5nICogMiwgaW1hZ2VXaWR0aCk7XG4gICAgICAgICAgICBjYXJkRnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNhcmRGcmFtZS5wYWRkaW5nVG9wID0gY2FyZEZyYW1lLnBhZGRpbmdCb3R0b20gPSBjYXJkUGFkZGluZztcbiAgICAgICAgICAgIGNhcmRGcmFtZS5pdGVtU3BhY2luZyA9IGNhcmRQYWRkaW5nIC8gMjtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNhcmRGcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgIGNhcmRGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICBjYXJkRnJhbWUuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiBjb2xvcl9iYWNrZ3JvdW5kIH1dO1xuICAgICAgICAgICAgLy8gY2FyZEZyYW1lLnN0cm9rZXMgPSBbe3R5cGUgOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfX1dO1xuICAgICAgICAgICAgY2FyZEZyYW1lLnN0cm9rZVdlaWdodCA9IDI7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbl9GID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgIGNhcmRGcmFtZS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbl9GKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uX0YucGFkZGluZ0xlZnQgPSBkZXNjcmlwdGlvbl9GLnBhZGRpbmdSaWdodCA9IGNhcmRQYWRkaW5nO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25fRi5pdGVtU3BhY2luZyA9IGNhcmRQYWRkaW5nIC8gMjtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uX0YubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uX0YucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbl9GLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25fRi5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgZGVzY3JpcHRpb25fRi5maWxscyA9IFt0cmFuc3BhcmVudF07XG4gICAgICAgICAgICB0YWdfRiA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbl9GLmFwcGVuZENoaWxkKHRhZ19GKTtcbiAgICAgICAgICAgIHRhZ19GLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgICAgICB0YWdfRi5pdGVtU3BhY2luZyA9IDE7XG4gICAgICAgICAgICB0YWdfRi5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRhZ19GLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgdGFnX0YuZmlsbHMgPSBbeyBvcGFjaXR5OiAwLjI1LCB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiBjb2xvcl9hY2NlbnQgfV07XG4gICAgICAgICAgICB0YWdfVCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgIHRhZ19GLmFwcGVuZENoaWxkKHRhZ19UKTtcbiAgICAgICAgICAgIHRhZ19ULmZvbnROYW1lID0gaXRhbGljRm9udDtcbiAgICAgICAgICAgIHRhZ19ULmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogY29sb3JfYWNjZW50IH1dO1xuICAgICAgICAgICAgaWYgKHRhZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0YWdfVC5jaGFyYWN0ZXJzID0gJyNwbGFjZWhvbGRlcic7XG4gICAgICAgICAgICAgICAgdGFnX0YudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICh0YWdfVC5jaGFyYWN0ZXJzID0gJyMnICsgdGFnKTtcbiAgICAgICAgICAgIHRhZ19ULnRleHRBdXRvUmVzaXplID0gXCJXSURUSF9BTkRfSEVJR0hUXCI7XG4gICAgICAgICAgICB0YWdfVC5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFnLmxlbmd0aCk7XG4gICAgICAgICAgICBoZWFkaW5nX1QgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbl9GLmFwcGVuZENoaWxkKGhlYWRpbmdfVCk7XG4gICAgICAgICAgICBoZWFkaW5nX1QuZm9udE5hbWUgPSBib2xkRm9udDtcbiAgICAgICAgICAgIGhlYWRpbmdfVC5maWxscyA9IFt7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IGZvbnRjb2xvcl9wcmltYXJ5IH1dO1xuICAgICAgICAgICAgaWYgKGhlYWRpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGFnX1QuY2hhcmFjdGVycyA9ICdIZWFkaW5nJztcbiAgICAgICAgICAgICAgICBoZWFkaW5nX1QudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIChoZWFkaW5nX1QuY2hhcmFjdGVycyA9IGhlYWRpbmcpO1xuICAgICAgICAgICAgaGVhZGluZ19ULnRleHRBdXRvUmVzaXplID0gXCJIRUlHSFRcIjtcbiAgICAgICAgICAgIGhlYWRpbmdfVC5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICAgICAgUmF0aW5nX0YgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25fRi5hcHBlbmRDaGlsZChSYXRpbmdfRik7XG4gICAgICAgICAgICBSYXRpbmdfRi5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgICAgICBSYXRpbmdfRi5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgIFJhdGluZ19GLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUmF0aW5nX0YuZmlsbHMgPSBbdHJhbnNwYXJlbnRdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChyYXRpbmcgPiBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJfc2VsZWN0ZWQgPSBmaWdtYS5jcmVhdGVOb2RlRnJvbVN2ZyhoZWxwZXJmdW5jdGlvbnMuc3Rhcl9zZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgICAgIFJhdGluZ19GLmFwcGVuZENoaWxkKHN0YXJfc2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3Rhcl91bnNlbGVjdGVkID0gZmlnbWEuY3JlYXRlTm9kZUZyb21TdmcoaGVscGVyZnVuY3Rpb25zLnN0YXJfdW5zZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgICAgIFJhdGluZ19GLmFwcGVuZENoaWxkKHN0YXJfdW5zZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVzY3JpcHRpb25fVCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uX0YuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25fVCk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbl9ULmZvbnROYW1lID0gaXRhbGljRm9udDtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uX1QuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiBmb250Y29sb3JfcHJpbWFyeSB9XTtcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbl9ULmNoYXJhY3RlcnMgPSAnRGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uX1QudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIChkZXNjcmlwdGlvbl9ULmNoYXJhY3RlcnMgPSBkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbl9ULnRleHRBdXRvUmVzaXplID0gXCJXSURUSF9BTkRfSEVJR0hUXCI7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbl9ULmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgICAgICAgICBkaXZpZGVyID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgIGRpdmlkZXIucmVzaXplKDUwMCwgMSk7XG4gICAgICAgICAgICBjYXJkRnJhbWUuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG4gICAgICAgICAgICBkaXZpZGVyLmZpbGxzID0gW3sgb3BhY2l0eTogMSwgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogY29sb3JfZGl2aWRlciB9XTtcbiAgICAgICAgICAgIGNvbW1lbnQgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgY2FyZEZyYW1lLmFwcGVuZENoaWxkKGNvbW1lbnQpO1xuICAgICAgICAgICAgY29tbWVudC5wYWRkaW5nTGVmdCA9IGNvbW1lbnQucGFkZGluZ1JpZ2h0ID0gY2FyZFBhZGRpbmc7XG4gICAgICAgICAgICBjb21tZW50Lml0ZW1TcGFjaW5nID0gY2FyZFBhZGRpbmcgLyAyO1xuICAgICAgICAgICAgY29tbWVudC5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgY29tbWVudC5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgIGNvbW1lbnQuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgY29tbWVudC5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29tbWVudC5maWxscyA9IFt0cmFuc3BhcmVudF07XG4gICAgICAgICAgICAvLyBJbWFnZXNcbiAgICAgICAgICAgIGlmIChtZXRhVGFncyAhPSAnTm9uZScpIHtcbiAgICAgICAgICAgICAgICBpbWFnZUhhc2ggPSBmaWdtYS5jcmVhdGVJbWFnZShtZXRhVGFncy5kYXRhKS5oYXNoO1xuICAgICAgICAgICAgICAgIHJlY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgICAgICAgICByZWN0LnJlc2l6ZShpbWFnZVdpZHRoLCBpbWFnZVdpZHRoIC8gKG1ldGFUYWdzLndpZHRoIC8gbWV0YVRhZ3MuaGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgcmVjdC5maWxscyA9IFt7IHR5cGU6IFwiSU1BR0VcIiwgc2NhbGVNb2RlOiBcIkZJVFwiLCBpbWFnZUhhc2g6IGltYWdlSGFzaCB9XTtcbiAgICAgICAgICAgICAgICBjb21tZW50LmFwcGVuZENoaWxkKHJlY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGl0bGUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgY29tbWVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICB0aXRsZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGl0bGUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgICAgICB0aXRsZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgIC8vIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC8vIHRpdGxlLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiU1BBQ0VfQkVUV0VFTlwiO1xuICAgICAgICAgICAgLy8gdGl0bGUubGF5b3V0QWxpZ249IFwiU1RSRVRDSFwiO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGl0bGUuZmlsbHMgPSBbdHJhbnNwYXJlbnRdO1xuICAgICAgICAgICAgYXV0b3JfVCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKGF1dG9yX1QpO1xuICAgICAgICAgICAgYXV0b3JfVC5mb250TmFtZSA9IGJvbGRGb250O1xuICAgICAgICAgICAgYXV0b3JfVC5maWxscyA9IFt7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IGZvbnRjb2xvcl9wcmltYXJ5IH1dO1xuICAgICAgICAgICAgYXV0b3JfVC5jaGFyYWN0ZXJzID0gYXV0b3I7XG4gICAgICAgICAgICBhdXRvcl9ULnRleHRBdXRvUmVzaXplID0gXCJIRUlHSFRcIjtcbiAgICAgICAgICAgIGF1dG9yX1QubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICAgICAgICAgIGRhdGVfVCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKGRhdGVfVCk7XG4gICAgICAgICAgICBkYXRlX1QuZm9udE5hbWUgPSBpdGFsaWNGb250O1xuICAgICAgICAgICAgZGF0ZV9ULmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogY29sb3JfYWNjZW50IH1dO1xuICAgICAgICAgICAgZGF0ZV9ULmNoYXJhY3RlcnMgPSBkYXRlO1xuICAgICAgICAgICAgZGF0ZV9ULnRleHRBdXRvUmVzaXplID0gXCJXSURUSF9BTkRfSEVJR0hUXCI7XG4gICAgICAgICAgICBkYXRlX1QubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICAgICAgICAgIGNvbW1lbnRfVCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgIGNvbW1lbnQuYXBwZW5kQ2hpbGQoY29tbWVudF9UKTtcbiAgICAgICAgICAgIGNvbW1lbnRfVC5mb250TmFtZSA9IGl0YWxpY0ZvbnQ7XG4gICAgICAgICAgICBjb21tZW50X1QuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiBmb250Y29sb3JfcHJpbWFyeSB9XTtcbiAgICAgICAgICAgIGNvbW1lbnRfVC5jaGFyYWN0ZXJzID0gbWFya2VkU2VudC5zZW50O1xuICAgICAgICAgICAgbWFya2VkU2VudC5TdGFydC5tYXAoZnVuY3Rpb24gKGN1cnJFbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGNvbW1lbnRfVC5zZXRSYW5nZUZpbGxzKG1hcmtlZFNlbnQuU3RhcnRbaW5kZXhdLCBtYXJrZWRTZW50LkVuZFtpbmRleF0sIFt7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IGNvbG9yX2FjY2VudCB9XSk7XG4gICAgICAgICAgICAgICAgY29tbWVudF9ULnNldFJhbmdlRm9udE5hbWUobWFya2VkU2VudC5TdGFydFtpbmRleF0sIG1hcmtlZFNlbnQuRW5kW2luZGV4XSwgYm9sZEZvbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb21tZW50X1QudGV4dEF1dG9SZXNpemUgPSBcIldJRFRIX0FORF9IRUlHSFRcIjtcbiAgICAgICAgICAgIGNvbW1lbnRfVC5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICAgICAgbGlua19GID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgIGNvbW1lbnQuYXBwZW5kQ2hpbGQobGlua19GKTtcbiAgICAgICAgICAgIGxpbmtfRi5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgICAgICBsaW5rX0YuaXRlbVNwYWNpbmcgPSA0O1xuICAgICAgICAgICAgbGlua19GLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgbGlua19GLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgbGlua19GLmZpbGxzID0gW3RyYW5zcGFyZW50XTtcbiAgICAgICAgICAgIEFycm93ID0gZmlnbWEuY3JlYXRlTm9kZUZyb21TdmcoaGVscGVyZnVuY3Rpb25zLmFycm93KTtcbiAgICAgICAgICAgIGxpbmtfRi5hcHBlbmRDaGlsZChBcnJvdyk7XG4gICAgICAgICAgICBMaW5rX1QgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICBsaW5rX0YuYXBwZW5kQ2hpbGQoTGlua19UKTtcbiAgICAgICAgICAgIExpbmtfVC5mb250TmFtZSA9IGl0YWxpY0ZvbnQ7XG4gICAgICAgICAgICBMaW5rX1QuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiBjb2xvcl9hY2NlbnQgfV07XG4gICAgICAgICAgICBMaW5rX1QuY2hhcmFjdGVycyA9ICd2aXNpdCBjb21tZW50JztcbiAgICAgICAgICAgIExpbmtfVC50ZXh0QXV0b1Jlc2l6ZSA9IFwiV0lEVEhfQU5EX0hFSUdIVFwiO1xuICAgICAgICAgICAgTGlua19ULmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBMaW5rX1QuaHlwZXJsaW5rID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiVVJMXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGxpbmtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgY2FyZEZyYW1lXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCIvLyBnbG9iYWwudHNcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXJrZWRQYXJ0c09mU2VudChzdGFydCwgZW5kLCBzZW50KSB7XG4gICAgdmFyIHJlU3RhcnQgPSBuZXcgUmVnRXhwKHN0YXJ0LCAnZ2knKTtcbiAgICB2YXIgcmVFbmQgPSBuZXcgUmVnRXhwKGVuZCwgJ2dpJyk7XG4gICAgdmFyIHN0YXJ0TWFyayA9IG5ldyBBcnJheSgpO1xuICAgIHZhciBlbmRNYXJrID0gbmV3IEFycmF5KCk7XG4gICAgd2hpbGUgKHJlU3RhcnQuZXhlYyhzZW50KSkge1xuICAgICAgICBzdGFydE1hcmsucHVzaChyZVN0YXJ0Lmxhc3RJbmRleCk7XG4gICAgfVxuICAgIHdoaWxlIChyZUVuZC5leGVjKHNlbnQpKSB7XG4gICAgICAgIGVuZE1hcmsucHVzaChyZUVuZC5sYXN0SW5kZXgpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhzdGFydE1hcmssZW5kTWFyaylcbiAgICB2YXIgTmV3U3RhcnRBcnJheSA9IG5ldyBBcnJheSgpO1xuICAgIHN0YXJ0TWFyay5tYXAoZnVuY3Rpb24gKGN1cnJFbGVtZW50LCBpbmRleCkge1xuICAgICAgICB2YXIgc3VidHJhY3QgPSAoKGluZGV4ICsgMSkgKiBzdGFydC5sZW5ndGgpICsgKGluZGV4ICogZW5kLmxlbmd0aCk7XG4gICAgICAgIE5ld1N0YXJ0QXJyYXkucHVzaChjdXJyRWxlbWVudCAtIHN1YnRyYWN0KTtcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhOZXdTdGFydEFycmF5KVxuICAgIHZhciBOZXdFbmRBcnJheSA9IG5ldyBBcnJheSgpO1xuICAgIGVuZE1hcmsubWFwKGZ1bmN0aW9uIChjdXJyRWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIHN1YnRyYWN0ID0gKChpbmRleCArIDEpICogc3RhcnQubGVuZ3RoKSArICgoaW5kZXggKyAxKSAqIGVuZC5sZW5ndGgpO1xuICAgICAgICBOZXdFbmRBcnJheS5wdXNoKGN1cnJFbGVtZW50IC0gc3VidHJhY3QpO1xuICAgIH0pO1xuICAgIHZhciBjbGVhbmVkU2VudCA9IHNlbnQucmVwbGFjZUFsbChzdGFydCwgXCJcIikucmVwbGFjZUFsbChlbmQsIFwiXCIpO1xuICAgIHZhciBzZW50T2JqZWN0ID0geyBcInNlbnRcIjogY2xlYW5lZFNlbnQsIFwiU3RhcnRcIjogTmV3U3RhcnRBcnJheSwgXCJFbmRcIjogTmV3RW5kQXJyYXkgfTtcbiAgICByZXR1cm4gc2VudE9iamVjdDtcbn1cbnZhciBhcnJvdyA9IFwiPHN2ZyB3aWR0aD1cXFwiMTNcXFwiIGhlaWdodD1cXFwiMTRcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMyAxNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj5cXG5cXHQ8cGF0aCBkPVxcXCJNOC40NzUzNCA3LjI4OTkyTDExLjMzMDUgMTAuMTQ1TDguNjcyMjUgMTIuODAzM1xcXCIgc3Ryb2tlPVxcXCIjRERFNThFXFxcIi8+XFxuXFx0PHBhdGggZD1cXFwiTTEgMC44MTA0MjVWMTAuMDQ2NUgxMC42MzQzXFxcIiBzdHJva2U9XFxcIiNEREU1OEVcXFwiLz48L3N2Zz5cIjtcbnZhciBzdGFyX3NlbGVjdGVkID0gXCI8c3ZnIHdpZHRoPVxcXCIxNlxcXCIgaGVpZ2h0PVxcXCIxNVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE1XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPlxcbjxwYXRoIGQ9XFxcIk04IDBMOS43OTYxMSA1LjUyNzg2SDE1LjYwODVMMTAuOTA2MiA4Ljk0NDI3TDEyLjcwMjMgMTQuNDcyMUw4IDExLjA1NTdMMy4yOTc3MiAxNC40NzIxTDUuMDkzODMgOC45NDQyN0wwLjM5MTU0OCA1LjUyNzg2SDYuMjAzODlMOCAwWlxcXCIgZmlsbD1cXFwiI0VERjY3RFxcXCIvPlxcbjwvc3ZnPlxcblwiO1xudmFyIHN0YXJfdW5zZWxlY3RlZCA9IFwiPHN2ZyB3aWR0aD1cXFwiMTZcXFwiIGhlaWdodD1cXFwiMTVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj5cXG48cGF0aCBkPVxcXCJNOCAwTDkuNzk2MTEgNS41Mjc4NkgxNS42MDg1TDEwLjkwNjIgOC45NDQyN0wxMi43MDIzIDE0LjQ3MjFMOCAxMS4wNTU3TDMuMjk3NzIgMTQuNDcyMUw1LjA5MzgzIDguOTQ0MjdMMC4zOTE1NDggNS41Mjc4Nkg2LjIwMzg5TDggMFpcXFwiIGZpbGw9XFxcIiMzMzM3M0FcXFwiLz5cXG48L3N2Zz5cXG5cIjtcbmV4cG9ydCB7IGFycm93LCBzdGFyX3Vuc2VsZWN0ZWQsIHN0YXJfc2VsZWN0ZWQgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=