import {NgFor, Component, View} from 'angular2/angular2';

import {UrlService} from 'spotyngular/urlService';

@Component({
	selector: 'spotyngular-playlist-list'	
})
@View({
	templateUrl: 'core/playlist/components/list.html',
	directives: [NgFor]
})
export class PlaylistList{
	list: any;
	constructor(urlService: UrlService){
		this.list = urlService.currentParams.playlist;
	}
}