import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';
import {httpInjectables} from 'angular2/http';

import {UrlService} from 'spotyngular/urlService';
import {LeftNav} from 'spotyngular/leftNav';
import {BrowsePage} from 'spotyngular/browse/page';
import {PlaylistPage} from 'spotyngular/playlist/page';

@RouteConfig([
	{
		path:"/",
		as: "browse",
		component: BrowsePage
	},
	{
		path:"/playlist",
		as: "playlist",
		component: PlaylistPage
	}
])
@Component({
	selector: 'spotyngular-app'
})
@View({
	templateUrl: 'core/app.html',
	directives: [LeftNav, RouterOutlet]
})
class SpotyngularApp{}

bootstrap(SpotyngularApp, 
	[
		UrlService,
		routerInjectables,
		httpInjectables
	]
	).then(
	success => console.log(success),
	error => console.log(error)
);