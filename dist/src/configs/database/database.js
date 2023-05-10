"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const knex_1 = __importDefault(require("knex"));
require("dotenv/config");
const database = (database, user, password, host) => {
    return (0, knex_1.default)({
        client: "mysql2",
        connection: {
            host: host,
            port: 3306,
            user: user,
            password: password,
            database: database,
            decimalNumbers: true,
            dateStrings: true,
        },
    });
};
exports.database = database;
