var bs = require("browser-sync").create();
var history = require('connect-history-api-fallback');

bs.init({
    server: ".",
    port: 8089,
    middleware: [ history() ],
    files: "**/*.html, **/*.ts",
    notify: false
});