import { Cliente } from "app/_shared/models";

export interface NotaDeCargo {
  id?: string;
    cliente: Cliente;
    tipo: string;
    fecha: string;
    moneda: string;
    tipoDeCambio: number;
    importe: number;
    impuesto: number;
    total: number;
    saldo: number;
    dateCreated?: string;
    lastUpdated?: string;
    createUser?: string;
    updateUser?: string;
    partidas?: Array<any>;
    cuentaPorCobrar: any;
}