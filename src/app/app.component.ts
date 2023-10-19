import { Component } from '@angular/core';
import { FiltroService } from './core/service/filtro/filtro.service';
import Swal from 'sweetalert2'
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

interface OnInit {
  ngOnInit(): void
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   columnas = ['numero_folio','rut_paciente','nombre_paciente','fecha_de_egreso','dias_estada',
   'tipo_grd','ajuste_tecnologia','monto_facturacion','estado','tipo_paciente','categoria',
   'tipo_de_compra','fecha_ingreso','total_dias_estada','estados','montos_calculados_prestadorcodigo_grd'];
  
   columnasHistorialSegundo = ['numero_folio','rut_paciente','nombre_paciente','fecha_atencion','fecha_estab',
   'fecha_egreso','mod','monto_estabilizacion','monto_postestabilizacion','monto_total','estado','grupo_pago',
   'estado_grupo','confirmar_acv'];

   columnasHistorialLeyUrgencia = ['numero_folio','rut_paciente','nombre_paciente','problema_salud','intervencion_sanitaria',
   'estado','dz','monto_total','fecha'];

   columnasHistorialCamasGrd = ['numero_folio','rut_paciente','nombre_paciente','fecha_egreso','dias_estada',
   'inliers_outliers','ajuste_tecnologia','estado','dz','monto_facturacion'];

   dataSeguroPrestador :any;
   dataLeyUrgencia : any;
   camaGrd : any;
   reclamoLeyUrg : any;
   listaEsperas : any;
   extrainfo: any;
   _userinfo: any;
   rol: any;
   extraInfoStatus: any;
   email: any;
   dataHistorialSegundoPrest:any;
   dataHistorialLeyUrgencia : any;
   dataHistorialCamasGrd: any;


   loading = false;
   constructor(private serviceFiltro:FiltroService,
               private _oauthService: OAuthService, 
    ) { }

  async ngOnInit() {
    await this.logIn();
    this.extrainfo = this._userinfo.extrainfo;
    this.rol = this._userinfo.extrainfo?.ROL_CODIGO;

    if (this.extrainfo === undefined) {
      this.extraInfoStatus = 'VOID';
    } else if (this.extrainfo === null) {
      this.extraInfoStatus = 'NOT_FOUND';
    } else {
      this.extraInfoStatus = 'FOUND';
    }

  }

  // Auth
  async logIn() {
    console.log('login')
    this._oauthService.configure(environment.auth);
    const _: boolean = await this._oauthService.loadDiscoveryDocumentAndLogin();

    if (!this._oauthService.hasValidAccessToken()) {
      this._oauthService.initCodeFlow();
    } else {
      const claims: any = this._oauthService.getIdentityClaims() as any;
      const userInfo: any = await this._oauthService.loadUserProfile() as any;

      this.email = userInfo.info.email;

      //await this._userinfo.set(userInfo);
    }

    this._oauthService.setupAutomaticSilentRefresh({}, 'access_token');
  }

  async logOut() {
    // await this.oauthService.logOut()
    await this._oauthService.revokeTokenAndLogout();
  }






     async seguroPrestador(){
      let data_aux:any;
      this.dataLeyUrgencia = undefined;
      this.camaGrd = undefined;
      this.reclamoLeyUrg = undefined;
      this.listaEsperas = undefined;
      this.dataHistorialSegundoPrest = undefined;
      this.dataHistorialLeyUrgencia = undefined;
      this.dataHistorialCamasGrd = undefined;






      this.loading = true;
      await this.serviceFiltro.getObtenerDetalle('1').toPromise().then(
        (        response: any) => {
          console.log(response);
          console.log(response.SegundoPrestador);
          
          let segundo = Object.values(response.SegundoPrestador);
            console.log(segundo);
            this.dataSeguroPrestador = [];
            segundo.forEach((element:any) => {
              console.log(element);
              data_aux= { 
                  numero_folio: element.InformacionCaso.folio, 
                  rut_paciente: element.DatosPortal.rut_paciente, 
                  nombre_paciente: element.DatosPortal.nombre_paciente, 
                  fecha_de_egreso: element.InformacionCaso.fecha_alta_paciente, 
                  dias_estada: 5,
                  tipo_grd:'AB',
                  ajuste_tecnologia:'SI',
                  monto_facturacion: element.DatosPortal.monto_total,
                  estado:'ACT',
                  tipo_paciente:'CE',
                  categoria:'3',
                  tipo_de_compra:'UNIC',
                  fecha_ingreso:'25-05-2023',
                  total_dias_estada:5,
                  estados:'AN',
                  montos_calculados_prestadorcodigo_grd:'125.000'
                };
                this.dataSeguroPrestador.push(data_aux);
            });
            console.log(this.dataSeguroPrestador);
            this.loading = false;
        }      
       ).catch(
         () =>{
           Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'error',
       })
         }
       );

    }
    async leyUrgencia(){
      this.dataSeguroPrestador = undefined;
      this.camaGrd = undefined;
      this.reclamoLeyUrg = undefined;
      this.listaEsperas = undefined;
      this.dataHistorialSegundoPrest = undefined;
      this.dataHistorialLeyUrgencia = undefined;
      this.dataHistorialCamasGrd = undefined;





      let data_aux:any;
     
  
      this.loading = true;
      await this.serviceFiltro.getObtenerDetalle('3').toPromise().then(
        (        response: any) => {
          console.log(response);
          console.log(response.LeyDeUrgencia);
          
          let segundo = Object.values(response.LeyDeUrgencia);
            console.log(segundo);
            this.dataLeyUrgencia = [];
            segundo.forEach((element:any) => {
              console.log(element);
              data_aux= { 
                  numero_folio: element.DatosPortal.folio, 
                  rut_paciente: element.DatosPortal.rut_paciente, 
                  nombre_paciente: element.DatosPortal.nombre_paciente, 
                  fecha_de_egreso: element.DatosPortal.fecha_egreso, 
                  dias_estada: 5,
                  tipo_grd:'AB',
                  ajuste_tecnologia:'SI',
                  monto_facturacion: element.DatosPortal.monto_total,
                  estado: element.DatosPortal.Estado,
                  tipo_paciente:'CE',
                  categoria:'3',
                  tipo_de_compra:'UNIC',
                  fecha_ingreso:'25-05-2023',
                  total_dias_estada:5,
                  estados:element.DatosPortal.Estado_Postest,
                  montos_calculados_prestadorcodigo_grd:'125.000'
                };
                this.dataLeyUrgencia.push(data_aux);
            });
            console.log(this.dataLeyUrgencia);
            this.loading = false;
        }      
       ).catch(
         () =>{
           Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'error',
       })
         }
       );
    }
    async grd(){
      this.dataSeguroPrestador = undefined;
      this.dataLeyUrgencia = undefined;
      this.reclamoLeyUrg = undefined;
      this.listaEsperas = undefined;
      this.dataHistorialSegundoPrest = undefined;
      this.dataHistorialLeyUrgencia = undefined;
      this.dataHistorialCamasGrd = undefined;




      let data_aux:any;
     
  
      this.loading = true;
      await this.serviceFiltro.getObtenerDetalle('9').toPromise().then(
        (        response: any) => {
          console.log(response);
          console.log(response.CamasGRD);
          
          let segundo = Object.values(response.CamasGRD);
            console.log(segundo);
            this.camaGrd = [];
            segundo.forEach((element:any) => {
              console.log(element);
              data_aux= { 
                  numero_folio: element.DatosPortal.numero_folio, 
                  rut_paciente: element.DatosPortal.rut_paciente, 
                  nombre_paciente: element.DatosPortal.nombre_paciente, 
                  fecha_de_egreso: element.DatosPortal.fecha_de_egreso, 
                  dias_estada: element.DatosPortal.dias_estada,
                  tipo_grd: element.DatosPortal.tipo_grd,
                  ajuste_tecnologia: element.DatosPortal.ajuste_tecnologia,
                  monto_facturacion: element.DatosPortal.monto_facturacion,
                  estado: element.DatosPortal.estado,
                  tipo_paciente: element.InformacionCaso.tipo_paciente,
                  categoria:'3',
                  tipo_de_compra: element.InformacionCaso.tipo_de_compra,
                  fecha_ingreso: element.InformacionCaso.fecha_ingreso,
                  total_dias_estada: element.InformacionCaso.total_dias_estada,
                  estados: element.InformacionCaso.estado,
                  montos_calculados_prestadorcodigo_grd:'125.000'
                };
                this.camaGrd.push(data_aux);
            });
            console.log(this.camaGrd);
            this.loading = false;
        }      
       ).catch(
         () =>{
           Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'error',
       })
         }
       );
    }

    async reclamosLeyUrgencia(){
      this.dataSeguroPrestador = undefined;
      this.dataLeyUrgencia = undefined;
      this.listaEsperas = undefined;
      this.dataHistorialSegundoPrest = undefined;
      this.dataHistorialLeyUrgencia = undefined;
      this.dataHistorialCamasGrd = undefined;



      let data_aux:any;
     
  
      this.loading = true;
      await this.serviceFiltro.getObtenerDetalle('33').toPromise().then(
        (        response: any) => {
          console.log(response);
          console.log(response.ReclamoLeyDeUrgencia);
          
          let segundo = Object.values(response.ReclamoLeyDeUrgencia);
            console.log(segundo);
            this.reclamoLeyUrg = [];
            segundo.forEach((element:any) => {
              console.log(element);
              data_aux= { 
                  numero_folio: element.DatosPortal.folio, 
                  rut_paciente: element.DatosPortal.rut_paciente, 
                  nombre_paciente: element.DatosPortal.nombre_paciente, 
                  fecha_de_egreso: element.DatosPortal.fecha_de_egreso, 
                  dias_estada: '5',
                  tipo_grd: '',
                  ajuste_tecnologia: '',
                  monto_facturacion: '',
                  estado: '',
                  tipo_paciente: '',
                  categoria:'3',
                  tipo_de_compra: '',
                  fecha_ingreso: '',
                  total_dias_estada: '',
                  estados: '',
                  montos_calculados_prestadorcodigo_grd:'125.000'
                };
                this.reclamoLeyUrg.push(data_aux);
            });
            console.log(this.reclamoLeyUrg);
            this.loading = false;
        }      
       ).catch(
         () =>{
           Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'error',
       })
         }
       );

    }

    async listaEspera(){
      this.dataSeguroPrestador = undefined;
      this.dataLeyUrgencia = undefined;
      this.dataHistorialSegundoPrest = undefined;
      this.dataHistorialLeyUrgencia = undefined;
      this.dataHistorialCamasGrd = undefined;


      let data_aux:any;
     
  
      this.loading = true;
      await this.serviceFiltro.getObtenerDetalle('66').toPromise().then(
        (        response: any) => {
          console.log(response);
          console.log(response.ListaDeEspera);
          
          let segundo = Object.values(response.ListaDeEspera);
            console.log(segundo);
            this.listaEsperas = [];
            segundo.forEach((element:any) => {
              console.log(element);
              data_aux= { 
                  numero_folio: element.DatosPortal.folio, 
                  rut_paciente: element.resumen_lista_espera.DatosCaso.rut_paciente, 
                  nombre_paciente: element.resumen_lista_espera.DatosCaso.nombre_paciente, 
                  fecha_de_egreso: element.resumen_lista_espera.DatosCaso.fecha_de_egreso, 
                  dias_estada: '5',
                  tipo_grd: '',
                  ajuste_tecnologia: '',
                  monto_facturacion: '',
                  estado: '',
                  tipo_paciente: '',
                  categoria:'3',
                  tipo_de_compra: '',
                  fecha_ingreso: '',
                  total_dias_estada: '',
                  estados: '',
                  montos_calculados_prestadorcodigo_grd:'125.000'
                };
                this.listaEsperas.push(data_aux);
            });
            console.log(this.listaEsperas);
            this.loading = false;
        }      
       ).catch(
         () =>{
           Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'error',
       })
         }
       );

    }

    //Historial

    async historialSegundoPrestador(){
      this.dataSeguroPrestador = undefined;
      this.camaGrd = undefined;
      this.reclamoLeyUrg = undefined;
      this.listaEsperas = undefined;
      this.dataLeyUrgencia = undefined;
      this.dataHistorialLeyUrgencia = undefined;
      this.dataHistorialCamasGrd = undefined;


      let data_aux:any;
     
  
      this.loading = true;
      await this.serviceFiltro.getObtenerHistorial('1').toPromise().then(
        (        response: any) => {
          console.log(response);
          console.log(response.HistorialCasos);
          
          let segundo = Object.values(response.HistorialCasos.SegundoPrestador);
            console.log(segundo);
            this.dataHistorialSegundoPrest = [];
            segundo.forEach((element:any) => {
              console.log(element);
              data_aux= { 
                  numero_folio: element.numero_folio, 
                  rut_paciente: element.rut_paciente, 
                  nombre_paciente: element.nombre_paciente, 
                  fecha_atencion: element.fecha, 
                  fecha_estab: element.fecha,
                  fecha_egreso:element.fecha,
                  mod:'--',
                  monto_estabilizacion: element.monto_total,
                  monto_postestabilizacion: element.monto_total,
                  monto_total: element.monto_total,
                  estado: element.estado,
                  grupo_pago:'--',
                  estado_grupo:'--',
                  confirmar_acv: '--'
                };
                this.dataHistorialSegundoPrest.push(data_aux);
            });
            console.log(this.dataHistorialSegundoPrest);
            this.loading = false;
        }      
       ).catch(
         () =>{
           Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'error',
       })
         }
       );
    }

    //Historial

    async historialLeyUrgencia(){
      this.dataSeguroPrestador = undefined;
      this.camaGrd = undefined;
      this.reclamoLeyUrg = undefined;
      this.listaEsperas = undefined;
      this.dataLeyUrgencia = undefined;
      this.dataHistorialSegundoPrest = undefined;
      this.dataHistorialCamasGrd = undefined;


      let data_aux:any;
     
  
      this.loading = true;
      await this.serviceFiltro.getObtenerHistorial('3').toPromise().then(
        (        response: any) => {
          console.log(response);
          console.log(response.HistorialCasos);
          
          let segundo = Object.values(response.HistorialCasos.LeyDeUrgencia);
            console.log(segundo);
            this.dataHistorialLeyUrgencia = [];
            segundo.forEach((element:any) => {
              console.log(element);
              data_aux= { 
                  numero_folio: element.folio, 
                  rut_paciente: element.rut_paciente, 
                  nombre_paciente: element.nombre_paciente, 
                  problema_salud: '--', 
                  intervencion_sanitaria: '--',
                  estado: element.estado,
                  dz:'--',
                  monto_total: element.monto_total,
                  fecha: element.fecha_atencion,
                };
                this.dataHistorialLeyUrgencia.push(data_aux);
            });
            console.log(this.dataHistorialLeyUrgencia);
            this.loading = false;
        }      
       ).catch(
         () =>{
           Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'error',
       })
         }
       );
    }

    //Historial

    async historialCamasGrd(){
      this.dataSeguroPrestador = undefined;
      this.camaGrd = undefined;
      this.reclamoLeyUrg = undefined;
      this.listaEsperas = undefined;
      this.dataLeyUrgencia = undefined;
      this.dataHistorialSegundoPrest = undefined;
      let data_aux:any;
     
  
      this.loading = true;
      await this.serviceFiltro.getObtenerHistorial('9').toPromise().then(
        (        response: any) => {
          console.log(response);
          console.log(response.HistorialCasos);
          
          let segundo = Object.values(response.HistorialCasos.CamasGRD);
            console.log(segundo);
            this.dataHistorialCamasGrd = [];
            segundo.forEach((element:any) => {
              console.log(element);
              data_aux= { 
                  numero_folio: element.numero_folio, 
                  rut_paciente: element.rut_paciente, 
                  nombre_paciente: element.nombre_paciente, 
                  fecha_egreso: element.fecha_egreso, 
                  dias_estada: element.dias_estada,
                  inliers_outliers: element.inliers_outliers,
                  ajuste_tecnologia: element.ajuste_tecnologia,
                  estado: element.estado,
                  dz: element.dz,
                  monto_facturacion: element.monto_facturacion,
                };
                this.dataHistorialCamasGrd.push(data_aux);
            });
            console.log(this.dataHistorialCamasGrd);
            this.loading = false;
        }      
       ).catch(
         () =>{
           Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'error',
       })
         }
       );
    }
}
