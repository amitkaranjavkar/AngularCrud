"use strict";
function ValidateUrl(control) {
    if (control.value.length) {
        if (!control.value.startsWith('https') || !control.value.includes('.com')) {
            return { validUrl: true };
        }
    }
    return null;
}
exports.ValidateUrl = ValidateUrl;
//# sourceMappingURL=url.validator.js.map