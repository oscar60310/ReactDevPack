var NODE_ENV = process.env.NODE_ENV || 'production';
var isDev = NODE_ENV === 'development';
var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var webpack = require('webpack');
var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
var compiler = webpack(webpackConfig);

if (isDev) {
    console.log("Running Development Server");
    app.use(require("webpack-dev-middleware")(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath, stats: {
            colors: true
        }
    }));
    app.use(require("webpack-hot-middleware")(compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));
}
else {
    console.log("Running Production Server");
    app.use(express.static(path.join(__dirname, 'server/public')));
}

/* test */
app.get('/api/test', (req, res) => res.json({ success: true }));


var server = http.createServer(app);
server.listen(process.env.PORT || 1337, function () {
    console.log("Listening on %j", server.address());
});