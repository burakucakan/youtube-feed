import { Observable } from 'rxjs/Observable';

export interface IMovies {
	kind?: string;
	etag?: string;
	nextPageToken?: string;
	prevPageToken?: string;
	pageInfo?: IPageInfo;
	items: IMovieItem[];
}

export interface IMovieItem {
	kind?: string;
	etag?: string;
	id: string;
	snippet: ISnippet;
	contentDetails?: IContentDetails;
	status?: IStatus;
}

export interface ISnippet {
	publishedAt: Date;
	channelId?: string;
	title: string;
	description: string;
	thumbnails?: IThumbnails;
	channelTitle?: string;
	playlistId?: string;
	position?: number;
	resourceId?: IResourceId;
}

export interface IContentDetails {
	videoId: string;
	videoPublishedAt: Date;
}

export interface IStatus {
	privacyStatus: string;
}


export interface IPageInfo {
	totalResults: number;
	resultsPerPage: number;
}

export interface IDefault {
	url: string;
	width: number;
	height: number;
}

export interface IMedium {
	url: string;
	width: number;
	height: number;
}

export interface IHigh {
	url: string;
	width: number;
	height: number;
}

export interface IStandard {
	url: string;
	width: number;
	height: number;
}

export interface IMaxres {
	url: string;
	width: number;
	height: number;
}

export interface IThumbnails {
	default: IDefault;
	medium: IMedium;
	high: IHigh;
	standard?: IStandard;
	maxres?: IMaxres;
}

export interface IResourceId {
	kind: string;
	videoId: string;
}



export interface IMoviesService {
	getMoviesList(): Observable<IMovies>;
	getDetail(detailId: string): IMovieItem;
}
