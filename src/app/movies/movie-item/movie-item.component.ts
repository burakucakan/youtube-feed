import { Component, Input, OnInit, HostBinding } from '@angular/core';

import { IMovieItem, ViewType } from '../movies.model';
import { SecureUrlPipe } from '../../security.pipe';


@Component({
	selector: 'app-movie-item',
	templateUrl: './movie-item.component.html'
})

export class MovieItemComponent {

	@HostBinding('class.movie') private content = true;

	@Input('movie') movie: IMovieItem = null;
	@Input('viewType') viewType: ViewType;

	constructor() { }

	public getVideoUrl(videoId: string) {
		return 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&amp;rel=0&amp;showinfo=0';
	}

	public getSrcSet(img1: string, img2: string): string {
		return `${img1} 768w, ${img2} 481w`;
	}

}
