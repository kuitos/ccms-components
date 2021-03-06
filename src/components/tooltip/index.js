import angular from 'angular';
import {FactoryCreator} from 'angular-es-utils';

import Tooltip from './Tooltip';
import {TooltipDirective, TooltipTriggerDirective, TooltipOpenedDirective} from './TooltipDirectives';

export default angular
	.module('ccms.components.tooltip', [])
	.directive('tooltip', FactoryCreator.create(TooltipDirective))
	.directive('tooltipTrigger', FactoryCreator.create(TooltipTriggerDirective))
	.directive('tooltipOpened', FactoryCreator.create(TooltipOpenedDirective))
	.constant('Tooltip', Tooltip)
	.name;
