import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { MoviesModule } from './movies/movies.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
	declarations: [
		AppComponent,
		MoviesComponent
	],
	imports: [
		BrowserModule,
		MoviesModule,
		RouterModule.forRoot([]),
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
