import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { _API_DATA_LIST, _API_DATA_DETAIL } from './movies.mock.spec';
import { IMoviesService } from '../../movies/movies.model';

export class MoviesServiceSpy implements IMoviesService {

	public getMoviesList = jasmine.createSpy('getMoviesList').and.callFake(
		() => Observable.of(_API_DATA_LIST)
	);

	public getDetail = jasmine.createSpy('getDetail').and.callFake(
		(id: string) => Observable.of(_API_DATA_DETAIL)
	);

}
