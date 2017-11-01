import { Component, OnInit } from '@angular/core';

import { BaseMovieComponent } from '../base-movie.component';
import { IMovieItem } from '../movies.model';

@Component({
	selector: 'app-movies-detail',
	templateUrl: './movies-detail.component.html'
})
export class MoviesDetailComponent extends BaseMovieComponent implements OnInit {

	movie: IMovieItem;

	ngOnInit(): void {
		if (this.moviesService.moviesData !== undefined) {
			this.activatedRoute.params.subscribe(

				(params) => {
					if (params['id']) {
						const detailId: string = params['id'];
						this.movie = this.moviesService.getDetail(detailId);
					}
				},
				(err) => { console.error(err); return null; },
			);
		} else {
			this.goMainPage();
		}
	}

}
