import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class BaseService {
  public url: string;

  constructor() {
    this.url = environment.url;
  }

  get(http: HttpClient, servicio: string, request: any): Observable<any> {
    const headers = new HttpHeaders();
    const o = { headers: headers };
    return http.get(this.url + servicio, o);
  }

  post(http: HttpClient, servicio: string, request: any): Observable<any> {
    const headers = new HttpHeaders();
    const o = { headers: headers };
    return http.post(this.url + servicio, request, o);
  }

  delete(http: HttpClient, servicio: string, request: any): Observable<any> {
    const headers = new HttpHeaders();
    const o = { headers: headers };
    return http.delete(this.url + servicio, o);
  }

  view(http: HttpClient, servicio: string, reuqest: any): Observable<any> {
    const headers = new HttpHeaders();
    const o = { headers: headers };
    return http.head(this.url + servicio);
  }

  private getParameters(request:any) {
    const respuesta = Object.keys(request).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(request[k])).join('&');
    return respuesta;
  }

  patch(http: HttpClient, servicio: string, request: any): Observable<any> {
    const headers = new HttpHeaders();
    const o = { headers: headers };
    return http.patch(this.url + servicio, request, o);
  }

  put(http: HttpClient, servicio: string, request: any): Observable<any> {
    const headers = new HttpHeaders();
    const o = { headers: headers };
    return http.put(this.url + servicio, request, o);
  }
}
