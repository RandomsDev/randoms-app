"use strict";
/* Add global config here */
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@randoms/core");
// application-level middlewares
(0, core_1.useMiddlewares)([
    core_1.MiddleWares.json()
]);
