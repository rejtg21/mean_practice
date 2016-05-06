// 'use strict'
// INITIALIZE SERVER
console.log('Initializing Server');
// path node library
// path = require('path'),

var app_path = require('./paths'),
fs = require(app_path.lib_core.concat('File'))(),
config = fs.fetchAll(app_path.config),
app = {
	config: config,
	fs : fs,
	path : app_path
},
logger = require(app_path.lib_core.concat('Logger')),
log = new logger(app),
lang = require(app_path.lib_core.concat('Lang'))(app);

log.info('Server Initialized');

// app = require(app_path.app.concat('app'))(fs,path,log);
