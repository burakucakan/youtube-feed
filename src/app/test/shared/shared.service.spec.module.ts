import { NgModule } from '@angular/core';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { SharedSpecModule } from './shared.spec.module';

@NgModule({
	imports: [
		SharedSpecModule
	],
	providers: [
				MockBackend,
				BaseRequestOptions,
				{
					provide: Http,
					useFactory: (backend, options) => new Http(backend, options),
					deps: [MockBackend, BaseRequestOptions]
				}
	],
	declarations: []

})
export class SharedServiceSpecModule { }
