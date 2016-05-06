'use strict'
// INITIALIZE SERVER
console.log('Initializing Server');
var app_path = require('./paths'),
//file service node library
fs = require('fs'),
// path node library
path = require('path');
console.log('Initializing Bootstrap');
/** reason for requiring js in bootstrap js even we will require it again later,
* node js cache file if its required already making a quicker time load
*/
var initTime = new Date().getTime();
var bootstrap = require('./bootstrap')(path.auto_load);
var endTime = new Date().getTime();
console.log('Time :', (endTime - initTime));
console.log('Bootstrap successfully initialized');
// console.log(bootstrap);
// console.log('Messages');
// console.log(bootstrap.model.Messages);

console.log('Initializing Bootstrap 2nd time');
var initTime = new Date().getTime();
var bootstrap = require('./bootstrap')(app_path.auto_load);
var endTime = new Date().getTime();
console.log('Time :', (endTime - initTime));
console.log('Bootstrap successfully initialized');
// var app = require('./app')(bootstrap);
// var logger = require(path.library + 'Logger'),
// log = new logger(fs, config.log_level, path.log);

// require('./bootstrap')(fs, config, path.bootstrap, log, q);
// init language
// var init_lang = require('./app/libraries/Lang')(fs, config.language, path.lang, log, q),
// lang;
// init_lang.then(function(result){
// 	lang = result;
// });

// bootstrap = require('app/bootstrap')(path, fs);
// model = require('app/libraries/Models')(),
// ctrl = require('app/libraries/Controllers')(path); 
// var route_data = {
// 	controller : ctrl,
// 	filter : require('app/libraries/Filters')(path)
// };

// require('app/routes')(route_data);

// //accessible in app
// var app_data = {
// 	model : model,
// 	controller: ctrl,
// 	constant : require('app/config/constants'),
// 	lang : require('app/libraries/Lang')()
// };

// // require the app here
// require('app/app.js')(app_data);