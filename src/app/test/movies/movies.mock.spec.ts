import { Component, Input, OnInit } from '@angular/core';

import { BaseMovieComponent } from '../../movies/base-movie.component';
import { IMovies, IMovieItem } from '../../movies/movies.model';

@Component({ template: `` })
export class MoviesDefaultComponent extends BaseMovieComponent implements OnInit {
	@Input('movie') movie: IMovieItem = null;
	public ngOnInit(): void { }
}


export const _API_DATA_LIST: IMovies = {
	items: [
		{
			id: 'id1',
			snippet: {
				publishedAt: new Date(),
				title: 'MOCK Tricky - Black Coffee',
				description: 'blackcoffee1.wmv',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/L4UBr7PJf0I/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/L4UBr7PJf0I/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/L4UBr7PJf0I/hqdefault.jpg',
						width: 480,
						height: 360
					}
				},
			}
		},
		{
			id: 'id2',
			snippet: {
				publishedAt: new Date(),
				title: 'MOCK Morcheeba - Trigger Hippie (Official Video)',
				description: 'Trigger Hippie Lyrics\r\nArtist(Band):Morcheeba \r\n\r\nTune in...',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/6S71bzLtf98/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/6S71bzLtf98/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/6S71bzLtf98/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/6S71bzLtf98/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/6S71bzLtf98/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
			}
		}
	]
};

export const _API_DATA_DETAIL: IMovieItem = {
	id: 'id1',
	snippet: {
		publishedAt: new Date(),
		title: 'MOCK - Tricky - Black Coffee',
		description: 'blackcoffee1.wmv',
		thumbnails: {
			default: {
				url: 'https://i.ytimg.com/vi/L4UBr7PJf0I/default.jpg',
				width: 120,
				height: 90
			},
			medium: {
				url: 'https://i.ytimg.com/vi/L4UBr7PJf0I/mqdefault.jpg',
				width: 320,
				height: 180
			},
			high: {
				url: 'https://i.ytimg.com/vi/L4UBr7PJf0I/hqdefault.jpg',
				width: 480,
				height: 360
			}
		},
	}
};
