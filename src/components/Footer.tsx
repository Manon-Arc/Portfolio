import '../style/components/Footer.css';
import '../style/style_gen.css';
import linkedinLogo from '/assets/footer/linkedin.png';
import gitLogo from '/assets/footer/git.png';
import callLogo from '/assets/footer/call.png';
import emailLogo from '/assets/footer/arroba.png';
import circuitFooter from '/assets/footer/circuit.png';

const Footer = () => {
  return (
    <div className="footer" id="4">
      <div className="logo-footer">
        <a href="https://www.linkedin.com/in/manon-arcas/" className="logo-link">
          <div className="contact-unit">
            <img src={linkedinLogo} alt="LinkedIn" />
            <p className="contact-txt txt-contact-style">Manon Arcas</p>
          </div>
        </a>
        <a href="https://github.com/Manon-Arc" className="logo-link">
          <div className="contact-unit-footer">
            <img src={gitLogo} alt="GitHub" />
            <p className="contact-txt txt-contact-style">Manon-Arc</p>
          </div>
        </a>
        <a href="tel:0616285890" className="logo-link">
          <div className="contact-unit">
            <img src={callLogo} alt="Phone" />
            <p className="contact-txt txt-contact-style">06.16.28.58.90</p>
          </div>
        </a>
        <a href="mailto:arcasmanon47@gmail.com" className="logo-link">
          <div className="contact-unit">
            <img src={emailLogo} alt="Email" />
            <p className="contact-txt txt-contact-style">arcasmanon47@gmail.com</p>
          </div>
        </a>
      </div>
      <div className="droits">
        <p className="txt-droits">Copyright © 2024 - Tous droits réservés</p>
        <p className="txt-droits">
          <span>développé par</span>
          <a href="https://www.linkedin.com/in/manon-arcas/">         
            <span className="name-footer"> Manon Arcas </span>
          </a>
          <span>avec ❤</span>
        </p>
      </div>
      <img className="circuit-footer" src={circuitFooter} alt="Circuit" />
    </div>
  );
};

export default Footer;
