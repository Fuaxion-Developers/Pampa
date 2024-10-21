import { Payer } from "mercadopago/dist/clients/payment/commonTypes";
// Interface for Card Data
export interface CardData {
  token: string;
  issuer_id: string;
  payment_method_id: string;
  transaction_amount: number;
  payment_method_option_id: string | null;
  processing_mode: string | null;
  installments: number;
  payer: {
    email: string;
    identification: {
      type: string;
      number: string;
    };
  };
}

// Interface for Ticket Data
export interface TicketData {
  payment_method_id: string;
  transaction_amount: number;
  transaction_details?: {
    financial_institution: string;
  };
  payer: {
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
  metadata?: {
    payment_point?: string;
    payment_mode?: string;
  };
}

// Interface for Bank Transfer Data
export interface BankTransferData {
  payment_method_id: string;
  transaction_amount: number;
  payer: {
    email: string;
  };
}

// Interface for Wallet Purchase Data
export interface WalletPurchaseData {}

// Main Interface for Payment Form Data
export interface PaymentFormData {
  selectedPaymentMethod:
    | "credit_card"
    | "debit_card"
    | "ticket"
    | "bank_transfer"
    | "wallet_purchase"
    | "atm";
  formData: CardData | TicketData | BankTransferData | WalletPurchaseData;
}

// Interface for Additional Data
export interface AdditionalData {
  bin: string;
  lastFourDigits: string;
  description: string;
  email: string;
  payer: Payer;
}

export interface proccessPaymentFormData {
  selectedPaymentMethod: PaymentFormData;
  formData: FormData;
}
