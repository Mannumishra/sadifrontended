// ReturnRefundPolicy.js

import React, { useEffect } from 'react';
import './ReturnRefundPolicy.css';

const ReturnRefundPolicy = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <div className="return-refund-policy">
      <h1>Return & Refund Policy</h1>
      <p>
        At Sitaram Marriage Bureau, we are committed to ensuring your satisfaction with our services.
        If you are not satisfied with your purchase, we are here to help.
      </p>

      <h2>Returns</h2>
      <p>
        We accept no returns  of the original purchase of the service.
        To be eligible for a return, your service must be unused and in the same condition that you received it.
        Your service must be in the original packaging.
        Your service needs to have the receipt or proof of purchase.
      </p>

      <h2>Refunds</h2>
      <p>
        Once we receive your service, we will inspect it and notify you that we have received your returned service.
        We will immediately notify you on the status of your refund after inspecting the service.
        If your return is approved, we will initiate a refund to your credit card (or original method of payment).
        You will receive the credit within a certain amount of days, depending on your card issuer's policies.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions on how to return your item to us, contact us at:
        <br />
        Email:info@sitarammarriagebureau.com
        <br />
        Phone: + 91 8743901253 , 8168109705
      </p>
    </div>
  );
};

export default ReturnRefundPolicy;
