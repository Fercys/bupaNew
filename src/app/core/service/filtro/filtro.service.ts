import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base-service';

@Injectable({
  providedIn: 'root'
})
export class FiltroService extends BaseService{
  private servicio = 'api/bff';
  public override url = environment.url;
  public dataPaciente: any;
  public pacienteLlamada : any;

  constructor(private http: HttpClient) { 
    super();
  }
  // Consumiendo el servicio para obtener el token y poder ingresar al sistema.
  // getSegundoPrestador(data:any): Observable<any> {
    getSegundoPrestador(data:any): object {
    // return [
    //   {numero_folio: 145345, rut_paciente: '26.912.483-0', nombre_paciente: 'Tomas Ramirez', fecha_de_egreso: '26-08-2020', dias_estada: 5,tipo_grd:'AB',ajuste_tecnologia:'SI',monto_facturacion:'32.000',estado:'ACT',tipo_paciente:'CE',categoria:'3',tipo_de_compra:'UNIC',fecha_ingreso:'25-05-2023',total_dias_estada:5,estados:'AN',
    //   montos_calculados_prestadorcodigo_grd:'125.000'},
    //   {numero_folio: 27456, rut_paciente: '26.912.483-0', nombre_paciente: 'Angela Ramirez', fecha_de_egreso: '26-08-2020', dias_estada: 5,tipo_grd:'AB',ajuste_tecnologia:'SI',monto_facturacion:'32.000',estado:'ACT',tipo_paciente:'CE',categoria:'3',tipo_de_compra:'UNIC',fecha_ingreso:'25-05-2023',total_dias_estada:5,estados:'AN',
    //   montos_calculados_prestadorcodigo_grd:'125.000'},
    //   {numero_folio: 3543546, rut_paciente: '26.912.483-0', nombre_paciente: 'Felix Ramirez', fecha_de_egreso: '26-08-2020', dias_estada: 5,tipo_grd:'AB',ajuste_tecnologia:'SI',monto_facturacion:'32.000',estado:'ACT',tipo_paciente:'CE',categoria:'3',tipo_de_compra:'UNIC',fecha_ingreso:'25-05-2023',total_dias_estada:5,estados:'AN',
    //   montos_calculados_prestadorcodigo_grd:'125.000'},
    //   {numero_folio: 467567, rut_paciente: '26.912.483-0', nombre_paciente: 'Orlis Ramirez', fecha_de_egreso: '26-08-2020', dias_estada: 5,tipo_grd:'AB',ajuste_tecnologia:'SI',monto_facturacion:'32.000',estado:'ACT',tipo_paciente:'CE',categoria:'3',tipo_de_compra:'UNIC',fecha_ingreso:'25-05-2023',total_dias_estada:5,estados:'AN',
    //   montos_calculados_prestadorcodigo_grd:'125.000'},
    //   {numero_folio: 554654, rut_paciente: '26.912.483-0', nombre_paciente: 'Marian Ramirez', fecha_de_egreso: '26-08-2020', dias_estada: 5,tipo_grd:'AB',ajuste_tecnologia:'SI',monto_facturacion:'32.000',estado:'ACT',tipo_paciente:'CE',categoria:'3',tipo_de_compra:'UNIC',fecha_ingreso:'25-05-2023',total_dias_estada:5,estados:'AN',
    //   montos_calculados_prestadorcodigo_grd:'125.000'},
    //   {numero_folio: 6546546, rut_paciente: '26.912.483-0', nombre_paciente: 'Francis Ramirez', fecha_de_egreso: '26-08-2020', dias_estada: 5,tipo_grd:'AB',ajuste_tecnologia:'SI',monto_facturacion:'32.000',estado:'ACT',tipo_paciente:'CE',categoria:'3',tipo_de_compra:'UNIC',fecha_ingreso:'25-05-2023',total_dias_estada:5,estados:'AN',
    //   montos_calculados_prestadorcodigo_grd:'125.000'},
    //   {numero_folio: 7546546, rut_paciente: '26.912.483-0', nombre_paciente: 'Misael Ramirez', fecha_de_egreso: '26-08-2020', dias_estada: 5,tipo_grd:'AB',ajuste_tecnologia:'SI',monto_facturacion:'32.000',estado:'ACT',tipo_paciente:'CE',categoria:'3',tipo_de_compra:'UNIC',fecha_ingreso:'25-05-2023',total_dias_estada:5,estados:'AN',
    //   montos_calculados_prestadorcodigo_grd:'125.000'},
    //   {numero_folio: 834543, rut_paciente: '26.912.483-0', nombre_paciente: 'Heilin Ramirez', fecha_de_egreso: '26-08-2020', dias_estada: 5,tipo_grd:'AB',ajuste_tecnologia:'SI',monto_facturacion:'32.000',estado:'ACT',tipo_paciente:'CE',categoria:'3',tipo_de_compra:'UNIC',fecha_ingreso:'25-05-2023',total_dias_estada:5,estados:'AN',
    //   montos_calculados_prestadorcodigo_grd:'125.000'},
    //   {numero_folio: 976876, rut_paciente: '26.912.483-0', nombre_paciente: 'Jesus Ramirez', fecha_de_egreso: '26-08-2020', dias_estada: 5,tipo_grd:'AB',ajuste_tecnologia:'SI',monto_facturacion:'32.000',estado:'ACT',tipo_paciente:'CE',categoria:'3',tipo_de_compra:'UNIC',fecha_ingreso:'25-05-2023',total_dias_estada:5,estados:'AN',
    //   montos_calculados_prestadorcodigo_grd:'125.000'},
    //   {numero_folio: 10657567, rut_paciente: '26.912.483-0', nombre_paciente: 'Alexander Ramirez', fecha_de_egreso: '26-08-2020', dias_estada: 5,tipo_grd:'AB',ajuste_tecnologia:'SI',monto_facturacion:'32.000',estado:'ACT',tipo_paciente:'CE',categoria:'3',tipo_de_compra:'UNIC',fecha_ingreso:'25-05-2023',total_dias_estada:5,estados:'AN',
    //   montos_calculados_prestadorcodigo_grd:'125.000'},  ];
    
    // return this.post(this.http, this.servicio +'/agendaUnica/prestador/GetListaEspecCentral', data);
  
      return {
        "prev": "",
        "next": "https://fonasa.custhelp.com/cc/WSMisCasos/obtenerDetalle/proceso/1?next=126606",
        "SegundoPrestador": {
            "1711653": {
                "DatosPortal": {
                    "rut_paciente": "16265409-8",
                    "nombre_paciente": "CARLA GRIMANESA RODRÍGUEZ ZAMORANO   ",
                    "problema_salud": "COLECISTECTOMÍA PREVENTIVA DEL CÁNCER DE VESÍCULA EN PERSONAS DE 35 A 49 AÑOS",
                    "intervencion_sanitaria": "Tratamiento-Intervención Quirúrgica",
                    "estado_sp": "Derivación Aceptada",
                    "monto_total": "2.140.000",
                    "mensaje": "",
                    "Accion": "Editar"
                },
                "InformacionCaso": {
                    "folio": "1711653",
                    "rut_paciente": "16265409-8",
                    "nombre_paciente": "CARLA GRIMANESA RODRÍGUEZ ZAMORANO   ",
                    "correo_electronico": "projoesquivel@gmail.com",
                    "telefono": "222828346",
                    "telefono_movil": "975912365",
                    "numero_referencia": "231012-000342",
                    "estado_sp": "Derivación Aceptada",
                    "intervencion_sanitaria": "Tratamiento-Intervención Quirúrgica",
                    "fecha_alta_paciente": "",
                    "problema_salud": "COLECISTECTOMÍA PREVENTIVA DEL CÁNCER DE VESÍCULA EN PERSONAS DE 35 A 49 AÑOS",
                    "establecimiento_origen": "Hospital Clínico Metropolitano La Florida Dra. Eloísa Díaz Insunza",
                    "servicio_salud": "Servicio de Salud Metropolitano Sur Oriente",
                    "dz": "DR Metropolitana",
                    "actualizado": "13/10/2023",
                    "proceso": "Segundo Prestador",
                    "fecha_atencion": "13/10/2023",
                    "hora_atencion": "09:45",
                    "medico": "13634397-1"
                },
                "detalle_prestaciones": [
                    {
                        "codigo": "",
                        "prestacion": "Atención Inicial",
                        "fecha_hora_atencion": "",
                        "precio": "0",
                        "estado": "Aceptado",
                        "id": "1332472"
                    },
                    {
                        "codigo": "1802081",
                        "prestacion": "26.2.1. Colecistectomía vía laparoscópica",
                        "fecha_hora_atencion": "",
                        "precio": "2140000",
                        "estado": "Aceptado",
                        "id": "1332470"
                    }
                ],
                "solicitud_ciclos_quimio": [],
                "Historial_comunicacion": [
                    {
                        "texto": "Acepta 2doPrestador",
                        "usuario": "Web Service",
                        "fecha_creacion": "12-10-2023 17:42"
                    },
                    {
                        "texto": "Estimado,<br /><br />Le informamos que el folio 1711653<br />fué aceptado por el prestador BUPA SERVICIOS CLINICOS SA<br /><br />Atte.<br />Fonasa",
                        "usuario": "Administrator -",
                        "fecha_creacion": "12-10-2023 16:33"
                    },
                    {
                        "texto": "<DIV><DIV><SPAN>Estimado</SPAN><SPAN>/a</SPAN><SPAN>&#160;</SPAN><SPAN STYLE=\"font-weight:bold;\">BUPA SERVICIOS CLINICOS SA</SPAN><SPAN>,</SPAN><BR />&#160;<BR />Solicitamos confirmar en el portal del prestador atención que debe brindar al beneficiario de Fonasa.<BR /><BR />&#160;<BR /><SPAN>Para confirmar o rechazar la atención correspondiente al folio</SPAN><SPAN>: </SPAN>1711653<SPAN>&#160;</SPAN><SPAN>solicitamos ingresar al siguiente link: </SPAN><SPAN STYLE=\"font-weight:bold;\">https://fonasa.custhelp.com/</SPAN><BR />&#160;<BR />Atte.<BR /><SPAN>Fonasa</SPAN></DIV></DIV>",
                        "usuario": "Administrator -",
                        "fecha_creacion": "12-10-2023 15:34"
                    },
                    {
                        "texto": "<div style=\"margin:0px 0px 0px 0px;text-align:Justify;font-weight:bold;\"><span style=\"color:#FF0000;font-family:Calibri Light;font-size:16px;\">GES&nbsp; 30 DÍAS</span></div>\n<div style=\"font-family:Calibri Light;font-size:16px;\">&nbsp;</div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">Estimado Prestador:</span></div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">GES 26</span></div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">Tratamiento-Intervención Quirúrgica</span></div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\"><span style=\"font-family:Calibri Light;font-size:16px;\">&nbsp;</span></span></div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">&nbsp;</span></div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">Se informa que este caso corresponde a un reclamo GES 30 DÍAS y por tanto FONASA tiene la obligación de asignar prestador dentro de 48 horas posterior al ingreso de la solicitud.</span></div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">Según lo establecido en convenio Trato directo el prestador deberá contactarse con el beneficiario en un plazo máximo de 1 día hábil; dentro del mismo plazo deberá aceptar o rechazar la derivación.</span></div>\n<div style=\"font-family:Calibri Light;font-size:16px;\">&nbsp;</div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">En caso de rechazo deberá informar al Gestor Comercial de FONASA </span><span style=\"font-weight:bold;text-decoration:underline;font-family:Calibri Light;font-size:16px;\">MEDIANTE PLATAFORMA RIGHTNOW</span><span style=\"font-family:Calibri Light;font-size:16px;\">&nbsp;para la reasignación de prestador.</span></div>\n<div style=\"font-family:Calibri Light;font-size:16px;\">&nbsp;</div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;font-weight:bold;\"><span style=\"font-weight:normal;font-family:Calibri Light;font-size:16px;\">Para consultas y/o solicitud de prestaciones adicionales es </span><span style=\"text-decoration:underline;font-family:Calibri Light;font-size:16px;\">OBLIGACIÓN DEL PRESTADOR GENERAR EL REQUERIMIENTO MEDIANTE PLATAFORMA RIGHT NOW CON SUS RESPALDOS ANEXADOS CORRECTAMENTE.</span></div>\n<div style=\"font-family:Calibri Light;font-size:16px;\">&nbsp;</div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">Saludos cordiales,</span></div>\n<div style=\"font-family:Calibri Light;font-size:16px;\">&nbsp;</div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">FONASA</span></div>\n<div>\n<div><span>&nbsp;</span></div>\n</div>\n\n",
                        "usuario": "Giselle Cecilia Barra Aguirre",
                        "fecha_creacion": "12-10-2023 15:34"
                    },
                    {
                        "texto": "Solicitud inicial segundo prestador",
                        "usuario": "Web Service",
                        "fecha_creacion": "12-10-2023 14:43"
                    }
                ]
            },
            "1711634": {
                "DatosPortal": {
                    "rut_paciente": "25117064-9",
                    "nombre_paciente": "TERESA CONSUELO ASCURRA GAMBOA   ",
                    "problema_salud": "COLECISTECTOMÍA PREVENTIVA DEL CÁNCER DE VESÍCULA EN PERSONAS DE 35 A 49 AÑOS",
                    "intervencion_sanitaria": "Tratamiento-Intervención Quirúrgica",
                    "estado_sp": "Solicita autorización",
                    "monto_total": "2.140.000",
                    "mensaje": "",
                    "Accion": "Editar"
                },
                "InformacionCaso": {
                    "folio": "1711634",
                    "rut_paciente": "25117064-9",
                    "nombre_paciente": "TERESA CONSUELO ASCURRA GAMBOA   ",
                    "correo_electronico": "ASCURRATERESA1@GMAIL.COM",
                    "telefono": " ",
                    "telefono_movil": "954436402",
                    "numero_referencia": "231012-000109",
                    "estado_sp": "Solicita autorización",
                    "intervencion_sanitaria": "Tratamiento-Intervención Quirúrgica",
                    "fecha_alta_paciente": "",
                    "problema_salud": "COLECISTECTOMÍA PREVENTIVA DEL CÁNCER DE VESÍCULA EN PERSONAS DE 35 A 49 AÑOS",
                    "establecimiento_origen": "Hospital Clínico Metropolitano La Florida Dra. Eloísa Díaz Insunza",
                    "servicio_salud": "Servicio de Salud Metropolitano Sur Oriente",
                    "dz": "DR Metropolitana",
                    "actualizado": "16/10/2023",
                    "proceso": "Segundo Prestador",
                    "fecha_atencion": "13/10/2023",
                    "hora_atencion": "10:45",
                    "medico": "15399112-k"
                },
                "detalle_prestaciones": [
                    {
                        "codigo": "",
                        "prestacion": "Atención Inicial",
                        "fecha_hora_atencion": "",
                        "precio": "0",
                        "estado": "Aceptado",
                        "id": "1332497"
                    },
                    {
                        "codigo": "1802081",
                        "prestacion": "26.2.1. Colecistectomía vía laparoscópica",
                        "fecha_hora_atencion": "",
                        "precio": "2140000",
                        "estado": "Aceptado",
                        "id": "1332493"
                    }
                ],
                "solicitud_ciclos_quimio": [],
                "Historial_comunicacion": [
                    {
                        "texto": "Señores Fonasa\n\nAdjunto orden quirúrgica, paciente con pabellón agendado para este 18/10/2023",
                        "usuario": "Fabiola Lopez Uribe",
                        "fecha_creacion": "16-10-2023 09:20"
                    },
                    {
                        "texto": "Acepta 2doPrestador",
                        "usuario": "Web Service",
                        "fecha_creacion": "13-10-2023 21:12"
                    },
                    {
                        "texto": "Estimado,<br /><br />Le informamos que el folio 1711634<br />fué aceptado por el prestador BUPA SERVICIOS CLINICOS SA<br /><br />Atte.<br />Fonasa",
                        "usuario": "Administrator -",
                        "fecha_creacion": "13-10-2023 11:35"
                    },
                    {
                        "texto": "Señores Fonasa\n\nAdjunto consulta y se agendará para el 18/10/2023",
                        "usuario": "Fabiola Lopez Uribe",
                        "fecha_creacion": "13-10-2023 11:35"
                    },
                    {
                        "texto": "Estimado,<br /><br />Le informamos que el folio 1711634<br />fué aceptado por el prestador BUPA SERVICIOS CLINICOS SA<br /><br />Atte.<br />Fonasa",
                        "usuario": "Administrator -",
                        "fecha_creacion": "12-10-2023 16:27"
                    },
                    {
                        "texto": "<DIV><DIV><SPAN>Estimado</SPAN><SPAN>/a</SPAN><SPAN>&#160;</SPAN><SPAN STYLE=\"font-weight:bold;\">BUPA SERVICIOS CLINICOS SA</SPAN><SPAN>,</SPAN><BR />&#160;<BR />Solicitamos confirmar en el portal del prestador atención que debe brindar al beneficiario de Fonasa.<BR /><BR />&#160;<BR /><SPAN>Para confirmar o rechazar la atención correspondiente al folio</SPAN><SPAN>: </SPAN>1711634<SPAN>&#160;</SPAN><SPAN>solicitamos ingresar al siguiente link: </SPAN><SPAN STYLE=\"font-weight:bold;\">https://fonasa.custhelp.com/</SPAN><BR />&#160;<BR />Atte.<BR /><SPAN>Fonasa</SPAN></DIV></DIV>",
                        "usuario": "Administrator -",
                        "fecha_creacion": "12-10-2023 15:44"
                    },
                    {
                        "texto": "<div style=\"margin:0px 0px 0px 0px;text-align:Justify;font-weight:bold;\"><span style=\"color:#FF0000;font-family:Calibri Light;font-size:16px;\">GES&nbsp; 30 DÍAS</span></div>\n<div style=\"font-family:Calibri Light;font-size:16px;\">&nbsp;</div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">Estimado Prestador:</span></div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">GES 26</span></div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">Tratamiento-Intervención Quirúrgica</span></div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">&nbsp;</span></div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">Se informa que este caso corresponde a un reclamo GES 30 DÍAS y por tanto FONASA tiene la obligación de asignar prestador dentro de 48 horas posterior al ingreso de la solicitud.</span></div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">Según lo establecido en convenio Trato directo el prestador deberá contactarse con el beneficiario en un plazo máximo de 1 día hábil; dentro del mismo plazo deberá aceptar o rechazar la derivación.</span></div>\n<div style=\"font-family:Calibri Light;font-size:16px;\">&nbsp;</div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">En caso de rechazo deberá informar al Gestor Comercial de FONASA </span><span style=\"font-weight:bold;text-decoration:underline;font-family:Calibri Light;font-size:16px;\">MEDIANTE PLATAFORMA RIGHTNOW</span><span style=\"font-family:Calibri Light;font-size:16px;\">&nbsp;para la reasignación de prestador.</span></div>\n<div style=\"font-family:Calibri Light;font-size:16px;\">&nbsp;</div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;font-weight:bold;\"><span style=\"font-weight:normal;font-family:Calibri Light;font-size:16px;\">Para consultas y/o solicitud de prestaciones adicionales es </span><span style=\"text-decoration:underline;font-family:Calibri Light;font-size:16px;\">OBLIGACIÓN DEL PRESTADOR GENERAR EL REQUERIMIENTO MEDIANTE PLATAFORMA RIGHT NOW CON SUS RESPALDOS ANEXADOS CORRECTAMENTE.</span></div>\n<div style=\"font-family:Calibri Light;font-size:16px;\">&nbsp;</div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">Saludos cordiales,</span></div>\n<div style=\"font-family:Calibri Light;font-size:16px;\">&nbsp;</div>\n<div style=\"margin:0px 0px 0px 0px;text-align:Justify;\"><span style=\"font-family:Calibri Light;font-size:16px;\">FONASA</span></div>\n<div>\n<div><span>&nbsp;</span></div>\n</div>\n\n",
                        "usuario": "Giselle Cecilia Barra Aguirre",
                        "fecha_creacion": "12-10-2023 15:43"
                    },
                    {
                        "texto": "Solicitud inicial segundo prestador",
                        "usuario": "Web Service",
                        "fecha_creacion": "12-10-2023 11:47"
                    }
                ]
            },
    },
    }
  
  }

}
