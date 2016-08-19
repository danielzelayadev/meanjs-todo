tasks.$inject = [ '$http' ];


function tasks ($http) {
	var url = 'http://localhost:4000/tasks';

	var service = {
		get: get,
		post: post,
		update: update
	};

	return service;

	function get (success, failure) {
		$http.get(url)
			.then(success)
			.catch(failure);
	}

	function post (tasks, success, failure) {
		$http.post(url, tasks)
			.then(success)
			.catch(failure);
	}

	function update (task, success, failure) {
		$http.put(url, task)
			.then(success)
			.catch(failure);
	}

}

angular.module('ToDo').factory('tasks', tasks);
