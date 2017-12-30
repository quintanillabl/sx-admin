import { Sucursal, Cliente, VentaDet, Vendedor } from './';


export interface Venta {
  id: string;
  fecha: string;
  sucursal: Sucursal;
  cliente: Cliente;
  nombre?: string;
  vendedor?: Vendedor;
  tipo: string;
  documento: number;
  // Importes y totales
  importe: number;
  descuento: number;
  descuentoOriginal?: number;
  descuentoImporte: number;
  subtotal: number;
  impuesto: number;
  impuestoTasa: number;
  total: number;
  // END Importes y totales
  formaDePago: string;
  moneda: string;
  tipoDeCambio: number;
  kilos: number;
  partidas: Array<VentaDet>;
  vale?: boolean;
  clasificacionVale?: string;
  atencion?: string;
  cod?: boolean;
  cargosPorManiobra?: number;
  comisionTarjeta?: number;
  comisionTarjetaImporte?: number;
  corteImporte?: number;
  facturar?: string;
  cuentaPorCobrar?: any;
  cfdiMail?: string;
  usoDeCfdi?: string;
  puesto?: string;
  envio?: any;
}

export interface TipoDeVenta {
  clave: string
  descripcion: string
}
export const TIPOS: TipoDeVenta[] = [
  { clave: 'CON', descripcion: 'Contado'},
  { clave: 'CRE', descripcion: 'Crédito'},
  { clave: 'COD', descripcion: 'Cobro contra entrega'},
];
