"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddlewares = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddlewares(request, response, next) {
    const { authorization } = request.headers;
    if (!authorization)
        return response.sendStatus(401);
    const token = authorization.replace("Bearer", "").trim();
    try {
        const data = jsonwebtoken_1.default.verify(token, process.env.PASSWORD_JWT);
        const { id, rule } = data;
        request.id_user = id;
        request.rule_user = rule;
        next();
    }
    catch (error) {
        return response.sendStatus(401);
    }
}
exports.authMiddlewares = authMiddlewares;
