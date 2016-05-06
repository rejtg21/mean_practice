/**
*	Logger Library
*	Log message into a file
*/
var path = require('path'),
fs = require('fs'),
main_path = path.dirname(require.main.filename),
app_path = require(main_path.concat('/paths')),
log = require(app_path.auto_load.config.concat('app')).log;
(function(){
	'use strict'
	module.exports = Logger;
	function Logger(){
		this.saveToDir = function(type, msg){
			type = type.toUpperCase();

			if(!checkLogAllowed(type))
				return;

			msg = formatLogMessage(type, msg);
			
			var fileName = 'mean_log';
			var filePath = app_path.log.concat(fileName);

			var date = new Date().toISOString().slice(0, 10);
            filePath = (log.type == "daily") ? filePath.concat('_',date) :filePath;
            
            fs.writeFileSync(filePath, msg, {flag : 'a'}, function(err){
                if(err){
                    return console.log(err);
                }
            });
		}

		// check if allowed to Log provided by log.level and type
		function checkLogAllowed(type){
			var allowed = false;
			switch(type){
				case 'INFO':
					if(log.level == 1)
						allowed = true;
				break;
				case 'WARNING':
					if (log.level == 1 || log.level == 2)
						allowed = true;
				break;
				case 'ERROR':
					if (log.level >= 1 && log.level <= 3)
						allowed = true;
				break;
			}
			return allowed;
		}

	    function formatLogMessage(type, message){
	        var cache = [];
	        function construct(){
	        	var date = new Date().toLocaleString(),
		        infoMsg = '[' + date + ']['+ type.toUpperCase() + ']:';
		        
		        for(var key in message){
		        	cache = [];
			        infoMsg += JSON.stringify(message[key], filterJson, "\t") + ' ';
					cache = null;
		        }
		        
		        infoMsg += '\n';
		        return infoMsg;
	        }

	        function filterJson(key, value){
			    if (typeof value === 'object' && value !== null) {
			        if (cache.indexOf(value) !== -1) {
			            // Circular reference found, discard key
			            return;
			        }
			        // Store value in our collection
			        cache.push(value);
			    }
			    return value;
		    }

		    return construct();
	    }

	}

	/**
	* arguments expected to be params
	*/
	Logger.prototype.info = function(){
		this.saveToDir('info', arguments);
	}

	Logger.prototype.warning = function(){
        this.saveToDir('warning', arguments);
	}

	Logger.prototype.error = function(){
        this.saveToDir('error', arguments);
	}
})();