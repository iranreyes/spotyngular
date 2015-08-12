import {Component, View} from 'angular2/angular2';

import {UrlService} from 'spotyngular/urlService';

@Component({
	selector: 'spotyngular-playlist-header'	
})
@View({
	templateUrl: 'core/playlist/components/header.html'
})
export class PlaylistHeader{
	playlist: any;
	constructor(urlService: UrlService){
		this.playlist = urlService.currentParams;
	}
}