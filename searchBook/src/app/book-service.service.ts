import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { }

  searchBooks(searchParam:string):Observable<any>{
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${searchParam}`); 
  }

}
