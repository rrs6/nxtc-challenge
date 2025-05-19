import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({providedIn: 'root'})
export class HttpService {
    private readonly baseUrl: string = "http://localhost:8085";
    private http: HttpClient = inject(HttpClient);
    constructor(http: HttpClient) {
        this.http = http;
    }
    
      private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  public get<T>(uri: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${uri}`, { headers: this.getHeaders() });
  }

  public post<T>(uri: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${uri}`, body, { headers: this.getHeaders() });
  }

  public put<T>(uri: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${uri}`, body, { headers: this.getHeaders() });
  }

  public delete<T>(uri: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${uri}`, { headers: this.getHeaders() });
  }
}