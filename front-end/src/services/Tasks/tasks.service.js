const url = 'http://localhost:4000/tasks';

let http = null,
    q    = null;

export default class Tasks {

	constructor ($http, $q) {
		this.tasks = null;
		http = $http;
		q = $q;
	}

	get () {
		const deferred = q.defer();

		if(this.tasks !== null) {
	      deferred.resolve(this.tasks);
	      console.log('Cached.');
	    }

	    else {
	      	http.get(url)
		        .success(tasks => {
		          this.tasks = tasks;
		          deferred.resolve(tasks);
		          console.log('From server.');
		        })
		        .error(response => {
		          deferred.reject('Could not load tasks from the server. Try refreshing the page.');
	        	});
	    }

	    return deferred.promise;
	}

	post (task) {
		const deferred = q.defer();

		http.post(url, task)
	        .success(task => { deferred.resolve(task); })
	        .error(response => { deferred.reject('Unable to save task.'); });

	    return deferred.promise;
	}

	update (task) {
		const deferred = q.defer();

		http.put(url, task)
	        .success(task => { deferred.resolve(task); })
	        .error(response => { deferred.reject('Changes to task not saved.'); });

	    return deferred.promise;
	}

	static factory ($http, $q) {
		return new Tasks($http, $q);
	}

}

Tasks.$inject = [ '$http', '$q' ];