import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MoviesDefaultComponent } from './movies-default/movies-default.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesService } from './movies.service';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { SecureUrlPipe } from '../security.pipe';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		RouterModule
	],
	declarations: [
		MoviesDefaultComponent,
		MoviesDetailComponent,
		MovieItemComponent,
		SecureUrlPipe
	],
	exports: [
		MovieItemComponent
	],
	providers: [MoviesService]
})
export class MoviesModule { }
