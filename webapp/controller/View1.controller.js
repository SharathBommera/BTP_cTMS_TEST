sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("project1.controller.View1", {

        onInit: function () {
        },

        calculate: function (num1, num2, operation) {
            switch (operation) {
                case "add":
                    return num1 + num2;

                case "sub":
                    return num1 - num2;

                case "mul":
                    return num1 * num2;

                case "div":
                    if (num2 === 0) {
                        return "Cannot divide by zero";
                    }
                    return num1 / num2;

                default:
                    return "Invalid operation";
            }
        },
        onCalculate: function (operation) {
            var num1 = parseFloat(this.byId("num1").getValue());
            var num2 = parseFloat(this.byId("num2").getValue());

            if (isNaN(num1) || isNaN(num2)) {
                MessageToast.show("Please enter valid numbers.");
                return;
            }

            var result = this.calculate(num1, num2, operation);

            if (typeof result === "string") {
                MessageToast.show(result);
                return;
            }

            this.byId("resultText").setText("Result: " + result);
        },

        onClear: function () {
            this.byId("num1").setValue("");
            this.byId("num2").setValue("");
            this.byId("resultText").setText("Result: 0");
        }

    });
});
