utils.$inject = [ '$mdToast' ];


function utils ($mdToast) {
	var service = {
		notif: notif
	};

	return service;

	function notif (msg) {
		$mdToast.show(
	      $mdToast.simple()
	        .textContent(msg)
	        .hideDelay(3000)
	    );
	}
}

angular.module('ToDo').factory('utils', utils);
