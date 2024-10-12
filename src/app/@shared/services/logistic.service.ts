import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogisticService {
  private httpClient: HttpClient;
  private baseUrl = environment.serverUrl;
  private scanWithoutLoginUrl = this.baseUrl + '/ScanCodeQR';
  private scanPackCodeUrl = this.baseUrl + '/SearCode';

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  scanQRWithoutLogin(code: string): Observable<any | null> {
    return this.httpClient.get(`${this.scanWithoutLoginUrl}?i_code=${code}`, {
      withCredentials: true,
    });
  }

  scanPackCode(code: string): Observable<any | null> {
    return this.httpClient.get(`${this.scanPackCodeUrl}?i_code=${code}`, {
      withCredentials: true,
    });
  }

  scanQRWithLogin(data: any): Observable<any | null> {
    return this.httpClient.post(`${this.scanPackCode}`, data);
  }
}
