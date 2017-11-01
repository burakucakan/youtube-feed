import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

import * as _ from 'lodash';

import { IMovieItem, IMovies, IMoviesService } from './movies.model';

const SOURCE_URI = environment.apiUrl;

@Injectable()
export class MoviesService implements IMoviesService {

	public moviesData: IMovies;

	constructor(private http: Http) { }

	getMoviesList(pageToken: string = ''): Observable<IMovies> {
		return this.http.get(SOURCE_URI + '&pageToken=' + pageToken)
			.map(response => response.json());
	}

	getDetail(detailId: string): IMovieItem {
		return <IMovieItem>_.find(this.moviesData.items, { id: detailId });
	}

}
