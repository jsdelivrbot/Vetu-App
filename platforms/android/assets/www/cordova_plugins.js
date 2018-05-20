cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.mercadopago.cordova.sdk.MercadoPago",
    "file": "plugins/com.mercadopago.cordova.sdk/www/cdv-plugin-mercadopago.js",
    "pluginId": "com.mercadopago.cordova.sdk",
    "clobbers": [
      "MercadoPago"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-add-swift-support": "1.6.0",
  "com.mercadopago.cordova.sdk": "1.1.18",
  "cordova-plugin-device": "2.0.1",
  "cordova-plugin-ionic-keyboard": "2.0.5",
  "cordova-plugin-ionic-webview": "1.2.0",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});