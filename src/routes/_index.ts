/* Add global config here */

import { useMiddlewares, MiddleWares } from "@randoms/core";

// application-level middlewares

useMiddlewares ([
    MiddleWares.json()
]);

