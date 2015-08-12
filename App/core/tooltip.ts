import {Directive} from 'angular2/angular2';

@Directive({
	selector: '[tooltip]',
	properties:[
		'text: tooltip'
	],
	host: {
		'(mouseover)': 'show()'
	}
})
export class Tooltip{
	text: string;

	public show(){
		console.log(this.text);
	}
}