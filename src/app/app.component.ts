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

   constructor(private serviceFiltro:FiltroService) { }

    ngOnInit() {

    }
    seguroPrestador(){
      let data : any;
      let data_aux:any;
      let dataRespose:any;
      this.dataSeguroPrestador = [];
      // this.serviceFiltro.getSegundoPrestador(data).toPromise().then(
      //   response => {
      //    console.log(response);
      //   }
      // ).catch(
      //   error =>{
      //     Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: result.error.message,
      // })
      //   }
      // );
      dataRespose = this.serviceFiltro.getSegundoPrestador(data);

      let segundo = Object.values(dataRespose.SegundoPrestador);
      console.log(segundo);
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
      
    }
    leyUrgencia(){
      this.dataSeguroPrestador = undefined;
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: 'error consumo api',
      // })
    }
}
