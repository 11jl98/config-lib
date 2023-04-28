"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
class ValidationException extends Error {
    constructor(message, erros, statusCode = 422) {
        super(message);
        this.erros = erros;
        this.statusCode = statusCode;
    }
}
exports.ValidationException = ValidationException;
