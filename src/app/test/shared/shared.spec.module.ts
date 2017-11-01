import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Http, HttpModule } from '@angular/http';

import { RouterSpy } from './shared.spy.spec';

@NgModule({
	imports: [
		HttpModule
	],
	providers: [
		{ provide: Router, useClass: RouterSpy }
	],
	declarations: []

})
export class SharedSpecModule { }
