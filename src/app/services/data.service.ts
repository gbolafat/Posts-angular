import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
//for catch:
import { catchError,map } from 'rxjs/operators';

//for throw:
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string,private http: HttpClient) {

  }

  getAll() {
    return this.http.get(this.url)
      .pipe(map((res: any[])=>res),catchError(this.handleError))
      // .pipe(catchError(this.handleError))
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(map((res: any) => res),catchError(this.handleError))
  }


  update(resource) {
    // this.http.put(this.url + "/" + post.id,JSON.stringify(post))
    return this.http.patch(this.url + "/" + resource.id, JSON.stringify({ isReady: true }))
    .pipe(map((res: any) => res),catchError(this.handleError))
  }

  delete(id) {
    return this.http.delete(this.url + "/" + id)
    .pipe(map((res: any[]) => res),catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400)
      return throwError(new BadInput(error))
    if (error.status === 404)
      return throwError(new NotFoundError())
    return throwError(new AppError(error))
  }

}
