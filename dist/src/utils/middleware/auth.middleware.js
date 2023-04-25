"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddlewares = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddlewares(request, response, next) {
    var authorization = request.headers.authorization;
    if (!authorization)
        return response.sendStatus(401);
    var token = authorization.replace("Bearer", "").trim();
    try {
        var data = jsonwebtoken_1.default.verify(token, process.env.PASSWORD_JWT);
        var _a = data, id = _a.id, rule = _a.rule;
        request.id_user = id;
        request.rule_user = rule;
        next();
    }
    catch (error) {
        return response.sendStatus(401);
    }
}
exports.authMiddlewares = authMiddlewares;
