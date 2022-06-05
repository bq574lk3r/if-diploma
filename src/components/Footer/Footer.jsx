import React from 'react';
import '../Footer/Footer.scss';
import SvgSelector from '../modules/ico';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="left-box">
          <ul>
            <h4>About Fox Library</h4>
            <li>About us</li>
            <li>Privacy&#38;Security</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <h4>Help</h4>
            <li>Help center</li>
            <li>FAQs</li>
          </ul>
          <ul>
            <h4>My account</h4>
            <li>Edit profile</li>
            <li>My orders</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="right-box">
          <h4>Stay connected</h4>
          <SvgSelector name="instagram"/>
          <SvgSelector name="facebook"/>
        </div>
      </div>
    </footer>
  );
}
