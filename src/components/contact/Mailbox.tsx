import { useState } from 'react';
import emailjs from "@emailjs/browser";
import Plane from '../../assets/contact/plane.svg';
import '../../style/components/Mailbox.css';
import '../../style/style_gen.css';

const serviceId = "service_portfolio";
const templateId = "template_portfolio";

const Mailbox = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: '',
    motif: ''
  });

  const handleDetailsChange = (event:any) => {
    const { name, value } = event.target;

    setFormData(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const validerEmail = (email:string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSendEmail = (event:any) => {
    event.preventDefault();

    if (!validerEmail(formData.email)) {
      alert('Veuillez saisir une adresse e-mail valide.');
      return;
    }
    emailjs.init("99umhq8lrWPBSiJLM");    
    emailjs.send(serviceId, templateId, {
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      message: formData.message,
      motif: formData.motif,
      reply_to: formData.email
    })
    .then((response) => {
      console.log('Email sent:', response.status, response.text);
      alert('Votre message a été envoyé avec succès !');
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        message: '',
        motif: ''
      });
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    });
  };

  return (
    <div className="contact">
      <div className="contact_box">
        <div className="icone">
          <img src={Plane} alt="Plane" />
        </div>
        <div className="send-data">
          <div className="title-contact">
            <p className="txt-contact">Contactez-moi !</p>
          </div>
          <div className="content-form">
            <form className="contactForm" id="contactForm" onSubmit={handleSendEmail}>
              <div className="sup-part">
                <div className="user-info">
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    placeholder="Votre nom"
                    required
                    value={formData.nom}
                    onChange={handleDetailsChange}
                  />
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    placeholder="Votre prénom"
                    required
                    value={formData.prenom}
                    onChange={handleDetailsChange}
                  />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre e-mail"
                  required
                  value={formData.email}
                  onChange={handleDetailsChange}
                />
                <input
                  type="text"
                  id="motif"
                  name="motif"
                  placeholder="Motif"
                  required
                  value={formData.motif}
                  onChange={handleDetailsChange}
                />
              </div>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message"
                required
                value={formData.message}
                onChange={handleDetailsChange}
              ></textarea>
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mailbox;
