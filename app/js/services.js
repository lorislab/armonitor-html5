'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('armonitor.services', ['ngResource'])
		.factory('DashboardRSService', function($resource, config) {
			return $resource(config.server + '/db',{},{});
		})
		.factory('DashboardService', function(DashboardRSService) {
			var projects = [];
			
			function _load(callback) {
				DashboardRSService.query(function(response) {					
					projects = response;
					if (callback) {
						callback(response.length);
					}					
				});
			}
		
			_load();

			return {
				load: function(callback) {
					_load(callback);
				},
				get: function() {
					return projects;
				},
				size: function() {
					return projects.length;
				},
				clear: function() {
					projects = [];
				}				
			};
		})		
		.value('version', '0.1');