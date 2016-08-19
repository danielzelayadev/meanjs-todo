ToDo.$inject = [ 'tasks', 'utils' ];

function ToDo (tasks, utils) {
	var vm = this;

	vm.newTask = "";
	vm.tasks = [];
	vm.addNewTask = addNewTask;
	vm.remaining = remaining;
	vm.updateTask = updateTask;

	tasks.get(loadTasks, tasksLoadError);

	function addNewTask () {
		if (vm.newTask.length === 0) return;

		tasks.post({ text: vm.newTask }, taskSaved, taskNotSaved);
		vm.newTask = "";
	}

	function taskSaved (response) {
		vm.tasks.push(response.data);
	}

	function taskNotSaved (response) {
		utils.notif('Unable to save task.');
	}

	function remaining () {
		var count = 0;

		for (i in vm.tasks)
			if (!vm.tasks[i].done) count++;

		return count;
	}

	function loadTasks (response) {
		vm.tasks = response.data;
	}

	function tasksLoadError (response) {
		utils.notif('Could not load tasks from the server. Try refreshing the page.');
	}

	function updateTask (task) {
		tasks.update(task, function (response) {}, taskNotUpdated);
	}

	function taskNotUpdated (response) {
		utils.notif('Changes to task not saved.');
	}

}

angular.module('ToDo')
	.controller('ToDoCtrl', ToDo);