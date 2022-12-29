import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Some RxJS imports
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://randomuser.me/api";

  constructor(private httpClient : HttpClient) { }

  getUserDetails = () => {
    return this.httpClient.get(this.url);
  }
}
