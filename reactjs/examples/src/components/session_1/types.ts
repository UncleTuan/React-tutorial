export interface PaymentDetailProps {
  email: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  expiryDate: string;
  cvv: string;
  rows: {
    price: {
      subtotal: number;
    };
  };
}

export interface PaymentPriceProps {
  email: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  price: {
    subtotal: number;
  };
  rows: {
    subtotal: number;
  };
}
