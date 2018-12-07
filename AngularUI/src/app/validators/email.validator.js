"use strict";
function ValidateEmail(control) {
    if (control.value.length) {
        var email = control.value;
        var _a = email.split("@"), _ = _a[0], domain = _a[1];
        if (domain && domain.indexOf('amitkaranjavkar.com') == -1) {
            return { validEmail: true };
        }
    }
    return null;
}
exports.ValidateEmail = ValidateEmail;
//# sourceMappingURL=email.validator.js.map