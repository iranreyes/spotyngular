import {Component, View} from 'angular2/angular2';

import {Tooltip} from 'spotyngular/tooltip';

@Component({
	selector: 'spotyngular-browse-mini-card',
	properties: ["image", "name"]
})
@View({
	templateUrl: 'core/browse/components/miniCard.html',
	directives: [Tooltip]
})
export class BrowseMiniCard{}