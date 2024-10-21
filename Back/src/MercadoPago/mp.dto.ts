import { preference } from 'src/config/MPConfig';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class MPDto {
  @IsNotEmpty()
  @IsUUID()
  order: string;

  @IsNotEmpty()
  @IsUUID()
  user_id: string;
}
export class itemDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
  @IsNotEmpty()
  @IsNumber()
  unit_price: number;
}

class CardData {
  'token': string;
  'issuer_id': string;
  'payment_method_id': string;
  'transaction_amount': number;
  'payment_method_option_id': string | null;
  'processing_mode': string | null;
  'installments': number;
  'payer': {
    email: string;
    identification: {
      type: string;
      number: string;
    };
  };
  payment_method_type: string;
}

class TicketData {
  'payment_method_id': string;
  'transaction_amount': number;
  'transaction_details'?: {
    financial_institution: string;
  };
  'payer': {
    email: string;
    identification?: {
      type: string;
      number: string;
    };
    first_name?: string;
    last_name?: string;
    address?: {
      city: string;
      federal_unit: string;
      neighborhood: string;
      street_name: string;
      street_number: string;
      zip_code: string;
    };
  };
  'metadata'?: {
    payment_point?: string;
    payment_mode?: string;
  };
}

class BankTransferData {
  'payment_method_id': string;
  'transaction_amount': number;
  'payer': {
    email: string;
  };
}
class WalletPurchaseData {}

// mp.dto.ts
export interface paymentFormData {
  payment_method_id: string; // ID del método de pago seleccionado
  formData: CardData | TicketData | BankTransferData | WalletPurchaseData; // Dependiendo del método de pago
}

export interface AdditionalData {
  identification_type: string;
  email: string; // Email del pagador
  first_name: string; // Nombre del pagador
  last_name: string; // Apellidos del pagador
  // Otras propiedades que necesites
}

export interface paymentData {
  PaymentFormData: paymentFormData; // Datos del formulario de pago
  AdditionalData: AdditionalData; // Datos adicionales
}
