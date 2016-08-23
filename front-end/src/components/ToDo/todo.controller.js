let vm = null;

export default class ToDoController  {

	constructor (tasks, utils) {
		vm = this;

		vm._tasks = tasks;
		vm.utils = utils;
		vm.newTask = "";
		vm.tasks = [];

		tasks.get().then(resolve => { vm.tasks = resolve; }, 
			             resolve => { vm.utils.notif(resolve); });
	}

	addNewTask () {
		if (vm.newTask.length === 0) return;

		vm._tasks.post({ text: vm.newTask })
			 .then(resolve => { vm.tasks.push(resolve); }, 
			       resolve => { utils.notif(resolve); });

		vm.newTask = "";
	}

	remaining () {
		let count = 0;

		for (let i = 0; i < vm.tasks.length; i++)
			count = vm.tasks[i].done ? count + 1 : count;

		return count;
	}

	updateTask (task) {
		vm._tasks.update(task)
		.then(resolve => {}, resolve => { utils.notif(resolve); });
	}

}

ToDoController.$inject = [ 'tasks', 'utils' ];