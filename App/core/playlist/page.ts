import {Component, View} from 'angular2/angular2';

import {PlaylistHeader} from 'spotyngular/playlist/components/header';
import {PlaylistInfoBar} from 'spotyngular/playlist/components/infoBar';
import {PlaylistList} from 'spotyngular/playlist/components/list';

@Component({
	selector: 'spotyngular-playlist-page'	
})
@View({
	templateUrl: 'core/playlist/page.html',
	directives: [PlaylistHeader, PlaylistInfoBar, PlaylistList]
})
export class PlaylistPage{}