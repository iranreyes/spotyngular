import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'spotyngular-browse-big-card',
	properties: ["name", "image", "desc"]
})
@View({
	templateUrl: 'core/browse/components/bigCard.html'
})
export class BrowseBigCard{}