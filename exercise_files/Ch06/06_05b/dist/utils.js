"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = formatDate;
function formatDate(date) {
    return date.toLocaleDateString("en-US", {
        dateStyle: "medium"
    });
}
