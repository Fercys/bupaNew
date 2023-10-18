import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base-service';

@Injectable({
  providedIn: 'root'
})
export class FiltroService extends BaseService{
  private urlBack = 'localhost:8000/';  
  public dataPaciente: any;
  public pacienteLlamada : any;

  constructor(private http: HttpClient) { 
    super();
  }
    
  getObtenerDetalle(idProceso:string): any {
    console.log(this.urlBack +'obtenerDetalle/'+ idProceso);
    
    return this.get(this.http, '/obtenerDetalle/'+ idProceso);    
  }

  getObtenerHistorial(idProceso:string): any {
    console.log(this.urlBack +'ObtenerHistorial/'+ idProceso);
    
    return this.get(this.http, '/ObtenerHistorial/'+ idProceso);    
  }

}
