import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MakeorganizationService {

  constructor(private http: HttpClient) { }

  addorgnaization(data:any): Observable<any>{
    return this.http.post('http://localhost:3000/CreateOrganization', data)
  }
}
