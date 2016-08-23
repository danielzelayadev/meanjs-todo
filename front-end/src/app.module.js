import * as Components from "./app.components";
import * as Services from "./app.services";

export const name = 'ToDo';

angular.module(name, [ 'ngAnimate', 'ngAria',  'ngMaterial', Services.name, Components.name ]);