import { async, inject, TestBed } from '@angular/core/testing';
import { RequestMethod } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { SharedServiceSpecModule, TestHelper } from '../shared/';
import { MoviesDefaultComponent, _API_DATA_LIST, _API_DATA_DETAIL } from './movies.mock.spec';
import { MoviesService } from '../../movies/movies.service';
import { IMoviesService } from '../../movies/movies.model';


describe('MOVIES :: SERVICE', () => {

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [SharedServiceSpecModule],
			providers: [MoviesService]
		});

	});

	beforeEach(() => async(inject(
		[MoviesService], (service: IMoviesService) => {

			expect(service).toBeDefined();

		})));

	it('... Movie LIST! Should be object', async(inject(
		[MoviesService, MockBackend], (service: IMoviesService, mockBackend) => {

			TestHelper.backendHandler(mockBackend, RequestMethod.Get, _API_DATA_LIST);

			service.getMoviesList().subscribe(res => {
				expect(res).toBeTruthy();
				expect(res).toEqual(jasmine.any(Object));
			});

		})));

	it('... Movie DETAIL! Should be object', () => async(inject(
		[MoviesService], (service: IMoviesService) => {

			const id = 'id1';
			const res = service.getDetail(id);
			expect(res).toBeTruthy();
			expect(res).toEqual(jasmine.any(Object));

		})));
});
