import Tasks from "./tasks.service";

export const name = 'Tasks.service';

angular.module(name, [])
	.factory('tasks', Tasks.factory);