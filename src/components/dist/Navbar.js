"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports. = void 0;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.render = function () {
        return (react_1["default"].createElement(react_bootstrap_1.Container, null,
            react_1["default"].createElement(react_bootstrap_1.Navbar, { bg: "dark", variant: "dark" },
                react_1["default"].createElement(react_bootstrap_1.Navbar.Brand, { href: "#home" }, "Navbar"),
                react_1["default"].createElement(react_bootstrap_1.Nav, { className: "mr-auto" },
                    react_1["default"].createElement(react_bootstrap_1.Nav.Link, { href: "#home" }, "Home"),
                    react_1["default"].createElement(react_bootstrap_1.Nav.Link, { href: "#features" }, "Features"),
                    react_1["default"].createElement(react_bootstrap_1.Nav.Link, { href: "#pricing" }, "Pricing")),
                react_1["default"].createElement(react_bootstrap_1.Form, { inline: true },
                    react_1["default"].createElement(react_bootstrap_1.FormControl, { type: "text", placeholder: "Search", className: "mr-sm-2" }),
                    react_1["default"].createElement(react_bootstrap_1.Button, { variant: "outline-info" }, "Search")))));
    };
    return default_1;
}(react_1["default"].Component));
