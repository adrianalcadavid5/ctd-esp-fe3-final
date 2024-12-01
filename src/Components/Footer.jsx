import React from 'react'
import FooterStyles from "../Styles/Footer.module.css";


const Footer = () => {
  return (
    <footer className={FooterStyles.footerContainer}>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
        <div className={FooterStyles.footerIconos}>
          <img src="/images/ico-facebook.png" alt="facebook" style={{ width: '30px' }} />
          <img src="/images/ico-instagram.png" alt="instagram" style={{ width: '30px' }} />
          <img src="/images/ico-whatsapp.png" alt="whatsapp" style={{ width: '30px' }} />
          <img src="/images/ico-tiktok.png" alt="tiktok" style={{ width: '30px' }} />
        </div>
        
    </footer>
  )
}

export default Footer;

/*
<footer style={{ backgroundColor: '#333', padding: '20px', textAlign: 'center' }}>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
        
        <img src="/images/ico-facebook.png" alt="facebook" />
        <img src="/images/ico-instagram.png" alt="instagram" />
        <img src="/images/ico-whatsapp.png" alt="whatsapp" />
        <img src="/images/ico-tiktok.png" alt="tiktok" />
    </footer>
    */



