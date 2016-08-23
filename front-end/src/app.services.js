import * as Tasks from './services/Tasks/tasks.module';
import * as Utils from './services/Utils/utils.module';

export const name = 'app.services';

angular.module(name, [ Tasks.name, Utils.name ]);