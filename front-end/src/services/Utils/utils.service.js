let mdToast = null;

export default class Utils {

	constructor ($mdToast) {
		mdToast = $mdToast;
	}

	notif (msg) {
		mdToast.show(
	      mdToast.simple()
	        .textContent(msg)
	        .hideDelay(3000)
	    );
	}

	static factory ($mdToast) {
		return new Utils($mdToast);
	}

}

Utils.$inject = [ '$mdToast' ];
