import { Component, Input, OnInit, HostBinding } from '@angular/core';

import { IMovieItem } from '../movies.model';

@Component({
	selector: 'app-movie-item',
	templateUrl: './movie-item.component.html'
})
export class MovieItemComponent {

	@HostBinding('class.movie') private content = true;

	@Input('movie') movie: IMovieItem = null;

	constructor() { }

	public getSrcSet(img1: string, img2: string): string {
		return `${img1} 768w, ${img2} 481w`;
	}

}
