import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { MoviesDefaultComponent } from './movies/movies-default/movies-default.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
	{
		path: 'movies', component: MoviesComponent,
		children: [
			{ path: '', component: MoviesDefaultComponent },
			{ path: 'detail/:id', component: MoviesDetailComponent },
		]
	},
	{
		path: '', redirectTo: '/movies', pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
