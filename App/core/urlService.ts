export class UrlService {
	private _currentParams: any;

	public set currentParams(params):void {
		this._currentParams = params;
	}

	public get currentParams():any {
		return this._currentParams;
	}
}