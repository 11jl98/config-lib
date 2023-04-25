"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    microservices: {
        auth: "".concat(process.env.BASE_URL, "/").concat(process.env.PORT_AUTH),
        users: "".concat(process.env.BASE_URL, "/").concat(process.env.PORT_USER),
        subscribeProducts: "".concat(process.env.BASE_URL, "/").concat(process.env.PORT_SUBSCRIBED_PRODUCTS),
    },
};
