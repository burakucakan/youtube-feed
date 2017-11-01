import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseComponent } from '../base-component';
import { MoviesService } from '../movies/movies.service';
import { IMovieItem, IMovies } from '../movies/movies.model';

@Component({})

export abstract class BaseMovieComponent extends BaseComponent {

	movieList: IMovieItem[];

	private prevPageToken = '';
	private nextPageToken = '';

	constructor(
		protected router: Router,
		protected activatedRoute: ActivatedRoute,
		protected moviesService: MoviesService) {
		super(router);
	}

	protected getMovieList(pageToken: string = ''): void {
		this.moviesService.getMoviesList(pageToken)
			.subscribe(
			(res: IMovies) => {
				this.moviesService.moviesData = res;

				this.movieList = this.moviesService.moviesData.items.filter(x => x.snippet.thumbnails !== undefined);

				this.nextPageToken = (this.moviesService.moviesData['nextPageToken'] !== undefined) ? this.moviesService.moviesData.nextPageToken : '';
				this.prevPageToken = (this.moviesService.moviesData['prevPageToken'] !== undefined) ? this.moviesService.moviesData.prevPageToken : '';

			},
			err => console.error(err)
			)
			.add(this.scrollTop());
	}

	protected onPrevious(): void {
		this.getMovieList(this.prevPageToken);
	}

	protected onNext(): void {
		this.getMovieList(this.nextPageToken);
	}

	private scrollTop(): void {
		setTimeout(function () {
			window.scrollTo(0, 0);
		}, 0);
	}

}
