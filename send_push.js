var deviceToken = '<device-token>';
var apn = require('apn');
console.log("erhan")


var join = require('path').join, 
    pfx = join(__dirname, '/simplertapp-certificates.p12');

var options = {
  pfx: pfx,
  passphrase: '<p12-password>',
  production: false
};

var apnProvider = new apn.Provider(options);

let notification = new apn.Notification();
notification.alert = "¡Hola, soy una push notification";

apnProvider.send(notification, [deviceToken]).then( (response) => { 
  process.exit();
});
