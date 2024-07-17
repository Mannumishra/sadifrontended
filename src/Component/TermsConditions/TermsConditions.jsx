// TermsAndConditions.js

import React, { useEffect } from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <div className="terms-and-conditions">
      <h1>Terms & Conditions</h1>
      <p>
        Welcome to Sitaram Marriage Bureau. These terms and conditions outline the rules and regulations for the use of our services.
        By accessing this website and using our services, you accept and agree to be bound by the terms and conditions set forth herein.
        If you do not agree to all of the terms and conditions, you may not access our website or use our services.
      </p>

      <h2>1. Service Availability</h2>
      <p>
        Our services are available only to individuals who are at least 18 years old or the legal age of majority in their jurisdiction, whichever is greater.
        By using our services, you warrant that you meet the eligibility requirements.
      </p>

      <h2>2. User Accounts</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account and password.
        You agree to accept responsibility for all activities that occur under your account or password.
      </p>

      <h2>3. Limitation of Liability</h2>
      <p>
        In no event shall Sitaram Marriage Bureau, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
        including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use our services; (ii) any conduct or content of any third party on our services; (iii) any content obtained from our services; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
      </p>

      <h2>4. Governing Law</h2>
      <p>
        These terms and conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about these Terms & Conditions, please contact us at:
        <br />
        Email:info@sitarammarriagebureau.com
        <br />
        Phone: + 91 8743901253 , 8168109705
      </p>
    </div>
  );
};

export default TermsAndConditions;
