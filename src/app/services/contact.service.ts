import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

export interface ContactPayload {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private API = environment.formApiUrl;

  constructor(private http: HttpClient) {}

  send(payload: ContactPayload) {
    return this.http.post<{ ok: boolean; id?: string; error?: string }>(
      `${this.API}/contact`,
      payload,
    );
  }
}
