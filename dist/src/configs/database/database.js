"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const knex_1 = __importDefault(require("knex"));
require("dotenv/config");
exports.database = (0, knex_1.default)({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: process.env.PASSWORD_BD || "123456",
        database: 'app',
        decimalNumbers: true,
        dateStrings: true
    }
});
