import React, { useState } from 'react';
import '../../style/components/Mailbox.css';
import '../../style/style_gen.css';
import { SendEmail } from '../../js/emailService.js';
import Plane from '../../assets/contact/plane.svg';

const Mailbox = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: '',
    motif: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SendEmail(
      formData.nom,
      formData.prenom,
      formData.email,
      formData.message,
      formData.motif,
      () => {
        alert('Votre message a été envoyé avec succès !');
        setFormData({ nom: '', prenom: '', email: '', message: '', motif: '' });
      },
      () => {
        alert('Une erreur est survenue. Veuillez réessayer plus tard.');
      }
    );
  };

  return (
    <div className="contact">
      <div className="contact_box">
        <div className="icone">
          <img src={ Plane } alt="Plane" />
        </div>
        <div className="send-data">
          <div className="title-contact">
            <p className="txt-contact">Contactez - moi !</p>
          </div>
          <div className="content-form">
            <form className="contactForm" id="contactForm" onSubmit={handleSubmit}>
              <div className="sup-part">
                <div className="user-info">
                  <input
                    type="text"
                    id="nom"
                    placeholder="Votre nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                  <input
                    type="text"
                    id="prenom"
                    placeholder="Votre prenom"
                    required
                    value={formData.prenom}
                    onChange={handleChange}
                  />
                </div>
                <input
                    type="email"
                    id="email"
                    placeholder="Votre e-mail"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                <input
                  type="text"
                  id="motif"
                  placeholder="Motif"
                  required
                  value={formData.motif}
                  onChange={handleChange}
                />
              </div>
              <textarea
                id="message"
                placeholder="Votre message"
                required
                value={formData.message}
                onChange={handleChange}
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
