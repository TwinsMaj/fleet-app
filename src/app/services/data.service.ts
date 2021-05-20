import { NotFoundError } from './../common/not-found-error';
import { StaticPayload } from './../types/index';
import { Injectable } from '@angular/core';
import { AppError } from './../common/app-error';
import { ForbiddenError } from '../common/forbidden-error';
import { HttpClient, HttpParams } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

export class DataService {
	constructor(private url: string, private http: HttpClient) {}

	getAll(queryString?: string) {
		const options = { params: new HttpParams({ fromString: queryString }) };

		return this.http.get(this.url, options).pipe(
			map((data) => data),
			catchError(this.handleError),
		);
	}

	private handleError(error: any) {
		if (error.status === 404) {
			return throwError(new NotFoundError());
		}

		if (error.status === 403) {
			return throwError(new ForbiddenError());
		}
		return throwError(new AppError(error));
	}
}
