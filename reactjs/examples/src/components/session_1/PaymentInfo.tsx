import React from "react";
import TOPImg from "../../../src/assets/img/poster.jpg";
import MidImg from "../../../src/assets/img/org.jpg";
import { PaymentPriceProps } from "./types";

export default function PaymentInfo(props: PaymentPriceProps) {
  const { rows } = props;
  return (
    <div className="payment-info-container">
      <div className="payment-info-top-container">
        {/* Hộp trên */}
        <div
          className="payment-info-top-box"
          style={{
            backgroundImage: `url(${TOPImg})`,
          }}
        />
        {/* Hộp dưới */}
        <div className="payment-info-bottom-box" />
      </div>
      {/* Hộp ở giữa 2 hình vuông lớn */}
      <div className="payment-info-middle-box">
        <div className="payment-info-middle-text">
          <h5>Professional Plan</h5>
          <h4>${rows?.subtotal} / month</h4>
        </div>
        {/* Hộp nhỏ nằm trong hộp ở giữa */}
        <div
          className="payment-info-middle-image"
          style={{
            backgroundImage: `url(${MidImg})`,
          }}
        />
      </div>
      {/* Đoạn text của hộp dưới */}
      <div className="payment-info-details-box">
        <div className="payment-info-details-item">
          {/* Đây là dấu chấm xanh */}
          <div className="payment-info-details-circle" />
          {/* Đây là text */}
          <span className="payment-info-details-text">
            All features in <strong>basic included</strong>
          </span>
        </div>
        <div className="payment-info-details-item">
          <div className="payment-info-details-circle" />
          <span className="payment-info-details-text">
            Easy and flexible business with <strong>invoice management</strong>
          </span>
        </div>
        <div className="payment-info-details-item">
          <div className="payment-info-details-circle" />
          <span className="payment-info-details-text">
            Full time <strong>support</strong>
          </span>
        </div>
        <div className="payment-info-details-item">
          <div className="payment-info-details-circle" />
          <span className="payment-info-details-text">
            <strong>20TB</strong> cloud storage
          </span>
        </div>
        <div className="payment-info-modify-plan">
          <span>Modify plan</span>
        </div>
      </div>
    </div>
  );
}
