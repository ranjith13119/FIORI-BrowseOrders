sap.ui.define([], function () {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue: function (sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},
		deliveryStatus: function (sValue) {
			switch (sValue) {
			case "N":
				return 5;
			case "P":
				return 1;
			case "X":
				return 3;
			case "C":
				return 7;
			default:
				return 7;
			}
		},

		convertCurrencyCodeToSymbol: function (sValue) {
			switch (sValue) {
			case "USD":
				return "$";
			case "EUR":
				return "€";
			default:
				return sValue;
			}
		}
	};
});