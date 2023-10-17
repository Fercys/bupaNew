import { Component } from '@angular/core';
import { FiltroService } from './core/service/filtro/filtro.service';
import Swal from 'sweetalert2'

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
   
   dataSeguroPrestador :any;
   dataLeyUrgencia : any;
   camaGrd : any;
   reclamoLeyUrg : any;
   listaEsperas : any;

   loading = false;
   constructor(private serviceFiltro:FiltroService) { }

    ngOnInit() {

    }
    
     async seguroPrestador(){
      let data_aux:any;
      this.dataLeyUrgencia = undefined;
      this.camaGrd = undefined;
      this.reclamoLeyUrg = undefined;
      this.listaEsperas = undefined;



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

}
