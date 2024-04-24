import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  protected url_api: string;

  constructor(private http: HttpClient) {
    this.url_api = "https://dragonball-api.com/api";
  }

  mostarDatosDeafult(): Observable<any> {
    return this.http.get(`${this.url_api}/planets`, {headers: {'Content-Type': 'application/json;'}})
  }
}
