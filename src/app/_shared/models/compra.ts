import { Sucursal, Proveedor, CompraDet } from './';

export interface Compra {
  id: string;
  sucursal: Sucursal;
  proveedor: Proveedor;
  folio: number;
  fecha: string;
  entrega?: string;
  comentario?: string;
  pendiente: boolean;
  centralizada: boolean;
  nacional: boolean;
  consolidada: boolean;
  especial: boolean;
  importeBruto: number;
  importeDescuento: number;
  importeNeto: number;
  impuestos: number;
  total: number;
  partidas: Array<CompraDet>;
  tipoDeCambio: number;
  modificado: string;
}
