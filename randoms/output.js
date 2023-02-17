const _ = require ("./routes/index.js");
const __ = require ("./routes/_index.js");

module.exports = {
  default: [_],
    /* preserved exports */
        getProps: __.getProps
};