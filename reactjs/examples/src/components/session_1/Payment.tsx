import PaymentInfo from "../session_1/PaymentInfo";
import PaymentDetailsForm from "../session_1/PaymentDetailsForm";
import { PaymentPriceProps } from "../session_1/types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Payment() {
  const dummyPaymentData: PaymentPriceProps = {
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    price: { subtotal: 100 },
    rows: { subtotal: 100 },
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, marginRight: "80px" }}>
        <PaymentDetailsForm
          rows={dummyPaymentData}
          email={""}
          cardNumber={""}
          expiryMonth={""}
          expiryYear={""}
          expiryDate={""}
          cvv={""}
        />
      </div>
      <div style={{ flex: 1 }}>
        <PaymentInfo
          rows={dummyPaymentData?.price}
          email={""}
          cardNumber={""}
          expiryDate={""}
          cvv={""}
          price={{
            subtotal: 0,
          }}
        />
      </div>
      <ToastContainer />
    </div>
  );
}
