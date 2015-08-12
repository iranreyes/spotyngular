import {NgFor, Component, View} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {Router} from 'angular2/router';

import {UrlService} from 'spotyngular/urlService';
import {BrowseBigCard} from 'spotyngular/browse/components/bigCard';

const SERVER = "http://localhost:3000/featuredPlaylist";

@Component({
	selector: 'spotyngular-browse-music-strip'	
})
@View({
	templateUrl: 'core/browse/components/musicStrip.html',
	directives: [NgFor, BrowseBigCard]
})
export class BrowseMusicStrip{
	featuredPlaylist: any = [];
	constructor(private router: Router, private http:Http, private urlService: UrlService){
		http.get(SERVER)
			.map(res => res.json())
			.subscribe(features => this.featuredPlaylist = features.slice(0,4));
	}

	public seePlaylist(event, feature){
		event.preventDefault();
		this.urlService.currentParams = feature;
		this.router.parent.navigate('/playlist');
	}
}