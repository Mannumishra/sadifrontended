// PrivacyPolicy.js

import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        At Sitaram Marriage Bureau, we are committed to protecting your privacy.
        This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        Please read this privacy policy carefully to understand our views and practices regarding your personal data and how we will treat it.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect and process the following data about you:
        <ul>
          <li>Your name, email address, and contact information</li>
          <li>Demographic information such as age, gender, preferences, and interests</li>
          <li>Information relevant to customer surveys and/or offers</li>
          <li>Any other information that you voluntarily provide to us</li>
        </ul>
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        We use the information we collect in the following ways:
        <ul>
          <li>To personalize user experience and respond to your individual needs</li>
          <li>To improve our website and services based on your feedback</li>
          <li>To send periodic emails regarding your inquiries or other requests</li>
          <li>To administer a contest, promotion, survey, or other site feature</li>
        </ul>
      </p>

      <h2>Disclosure of Your Information</h2>
      <p>
        We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.
        This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about our Privacy Policy, please contact us at:
        <br />
        Email:info@sitarammarriagebureau.com
        <br />
        Phone: + 91 8743901253 , 8168109705
      </p>
    </div>
  );
};

export default PrivacyPolicy;
