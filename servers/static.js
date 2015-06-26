var express      = require('express'),
    app          = express();

function Static() {
  app.use('/', express.static('build'));
  var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Static files served to http://%s:%s', host, port);
  });
}

module.exports = Static;