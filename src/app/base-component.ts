import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({})

export abstract class BaseComponent implements OnInit {

	constructor(@Inject(forwardRef(() => Router)) protected router: Router) { }

	protected goMainPage(): void {
		this.router.navigate(['/']);
	}

	public ngOnInit(): void { }

}
