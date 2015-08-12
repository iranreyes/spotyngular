import {Component, View} from 'angular2/angular2';

import {BrowseTopNav} from 'spotyngular/browse/components/topNav';
import {BrowseMusicStrip} from 'spotyngular/browse/components/musicStrip';
import {BrowseGenresMoods} from 'spotyngular/browse/components/genresMoods';

@Component({
	selector: 'spotyngular-browse-page'	
})
@View({
	templateUrl: 'core/browse/page.html',
	styleUrls:['core/browse/page.css'],
	directives: [BrowseTopNav, BrowseMusicStrip, BrowseGenresMoods]
})
export class BrowsePage{
	name:string;

	constructor() {
	    this.name = "Browse";

	    setTimeout(()=>this.name="Introduction to Angular 2", 2000);
	}
}