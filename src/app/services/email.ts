import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Email {

  private apiUrl = "http://localhost:8081/api/email/send";

  constructor(private http: HttpClient){}

  sendEmail(dataEmail : any): Observable<any>{
    return this.http.post(this.apiUrl, dataEmail);
  }

}
