import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  data: any;

  constructor(public http:Http) {
    console.log("Book Api Service Started")
  }

  getData(keyword) {
      let responseObservable = this.http.get(`http://openlibrary.org/subjects/${keyword}.json`);
      responseObservable.subscribe(data => this.data = data.json());
      return responseObservable;
  }

  getBook(id) {
    return this.data && this.data.works.find(({cover_id}) => id == cover_id) || null;
  }
}
