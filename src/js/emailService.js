const service = "service_portfolio";
const template = "template_portfolio";

emailjs.init("99umhq8lrWPBSiJLM");

export function SendEmail(nom, prenom, email, message, motif, onSuccess, onError) {
  if (!validerEmail(email)) {
    alert('Veuillez saisir une adresse e-mail valide.');
    return;
  }

  emailjs.send(service, template, {
    nom: nom,
    prénom: prenom,
    email: email,
    message: message,
    motif: motif,
    reply_to: email
  })
  .then(response => {
    onSuccess();
  })
  .catch(error => {
    onError();
  });
}

function validerEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
