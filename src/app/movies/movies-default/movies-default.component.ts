import { Component, OnInit } from '@angular/core';

import { BaseMovieComponent } from '../base-movie.component';

@Component({
	selector: 'app-movies-default',
	templateUrl: './movies-default.component.html'
})
export class MoviesDefaultComponent extends BaseMovieComponent implements OnInit {

	ngOnInit() {
		this.getMovieList();
	}

}
