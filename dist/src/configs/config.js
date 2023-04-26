"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    microservices: {
        auth: `${process.env.BASE_URL}/${process.env.PORT_AUTH}`,
        users: `${process.env.BASE_URL}/${process.env.PORT_USER}`,
        subscribeProducts: `${process.env.BASE_URL}/${process.env.PORT_SUBSCRIBED_PRODUCTS}`,
    },
};
