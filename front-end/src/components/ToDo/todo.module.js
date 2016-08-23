import ToDoController from "./todo.controller";

export const name = 'ToDo.component';

angular.module(name, [])
	.controller('ToDoCtrl', ToDoController);