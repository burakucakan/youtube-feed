import { Pipe, PipeTransform } from '@angular/core';
import { DOCUMENT, DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'secureUrl' })
export class SecureUrlPipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) { }
	transform(url) {
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}
}
