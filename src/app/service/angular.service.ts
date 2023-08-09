import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Angular } from '../model/angular';


const baseUrl = 'https://jsonplaceholder.typicode.com/posts';


@Injectable({
  providedIn: 'root'
})
export class AngularService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Angular[]> {
    return this.http.get<Angular[]>(baseUrl);
  }
}
