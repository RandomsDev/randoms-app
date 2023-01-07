const _ = require ("./routes/index.js");
const __ = require ("./routes/product.js");
const ___ = require ("./routes/products/index.js");
const ____ = require ("./routes/_index.js");

module.exports = { 
    default: [_,__,___],
    /* preserved exports */
    getProps: ____.getProps
};
