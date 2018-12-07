"use strict";
var Customer = (function () {
    function Customer(id, name, address, phone, isDeleted) {
        if (id === void 0) { id = null; }
        if (name === void 0) { name = ''; }
        if (address === void 0) { address = ''; }
        if (phone === void 0) { phone = null; }
        if (isDeleted === void 0) { isDeleted = false; }
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.isDeleted = isDeleted;
    }
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map