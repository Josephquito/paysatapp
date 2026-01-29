import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root', // disponible en toda la app
})
export class ChatWidgetService {
  private readonly apiUrl = environment.chatApiUrl;

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<{ reply: string }> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<{ reply: string }>(this.apiUrl, { message }, { headers });
  }
}
