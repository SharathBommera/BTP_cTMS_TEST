
/*global QUnit*/

sap.ui.define([
    "project1/controller/View1.controller"
], function (Controller) {
    "use strict";

    QUnit.module("View1 Controller Testing");

    QUnit.test("Test Controller Initialization", function (assert) {
        var oController = new Controller();

        assert.ok(oController, "Controller created successfully");
        assert.equal(typeof oController.onInit, "function",
            "onInit function exists");
    });

    QUnit.test("Test Addition", function (assert) {
        var oController = new Controller();

        var result = oController.calculate(10, 5, "add");

        assert.equal(result, 15, "10 + 5 = 15");
    });

    QUnit.test("Test Subtraction", function (assert) {
        var oController = new Controller();

        var result = oController.calculate(10, 5, "sub");

        assert.equal(result, 5, "10 - 5 = 5");
    });

    QUnit.test("Test Multiplication", function (assert) {
        var oController = new Controller();

        var result = oController.calculate(10, 5, "mul");

        assert.equal(result, 50, "10 * 5 = 50");
    });

    QUnit.test("Test Division", function (assert) {
        var oController = new Controller();

        var result = oController.calculate(10, 5, "div");

        assert.equal(result, 2, "10 / 5 = 2");
    });

    QUnit.test("Test Division by Zero", function (assert) {
        var oController = new Controller();

        var result = oController.calculate(10, 0, "div");

        assert.equal(result, "Cannot divide by zero",
            "Division by zero is handled");
    });

    QUnit.test("Test Invalid Operation", function (assert) {
        var oController = new Controller();

        var result = oController.calculate(10, 5, "xyz");

        assert.equal(result, "Invalid operation",
            "Invalid operation is handled");
    });

});
