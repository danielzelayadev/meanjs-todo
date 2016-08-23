import Utils from "./utils.service";

export const name = 'Utils.service';

angular.module(name, [])
	.factory('utils', Utils.factory);