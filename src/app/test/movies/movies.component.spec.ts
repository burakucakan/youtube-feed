import { async, TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing/src/testing';

import { SharedSpecModule } from '../shared';
import { MoviesService } from '../../movies/movies.service';
import { _API_DATA_LIST } from './movies.mock.spec';
import { MoviesServiceSpy } from './movies.service.spy.spec';
import { MoviesDefaultComponent } from '../../movies/movies-default/movies-default.component';


describe('Movies MANAGEMENT :: COMPONENT ', () => {

	let fixture: ComponentFixture<MoviesDefaultComponent>;
	let component: MoviesDefaultComponent;

	beforeEach(async(() => {

		TestBed.configureTestingModule({
			imports: [SharedSpecModule],
			providers: [ MoviesService ],
			declarations: [MoviesDefaultComponent],
		})
			.overrideComponent(MoviesDefaultComponent, {
				set: {
					providers: [{ provide: MoviesService, useClass: MoviesServiceSpy }]
				}
			})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MoviesDefaultComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();

	});

});
