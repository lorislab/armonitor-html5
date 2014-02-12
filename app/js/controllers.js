'use strict';

/* Controllers */

angular.module('armonitor.controllers', [])
		.controller('DashboardCtrl', function($scope, DashboardService) {

			$scope.getProjects = function() {
				return DashboardService.get();
			};
			$scope.reload = function() {
				DashboardService.load(function(size) {

				});
			};			
		})
		.controller('AboutCtrl', function($scope) {

		})
		.controller('MenuCtrl', function($scope, $location) {
			
			$scope.active = function(data) {
				var tmp = $location.path();
				var r = false;
				for (var i=0; i<data.length && !r; i++) {
					r = (tmp.indexOf(data[i]) === 0);
				}
				return r;
			};
		});