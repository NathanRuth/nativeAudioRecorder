// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Allows detection of the Keyboard pluging from nanoflows.
 * @returns {Promise.<boolean>}
 */
export async function KeyboardPluginAvailable() {
	// BEGIN USER CODE
	return new Promise(function(resolve, reject) {
		resolve(typeof Keyboard !== "undefined");
	});
	// END USER CODE
}
