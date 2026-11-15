/* =====================================================
   CONFIGURATION DU FORMULAIRE DE CONTACT (EmailJS)
   Les 3 valeurs ci-dessous sont faites pour être publiques :
   ce ne sont PAS des mots de passe. Ton adresse de réception
   et ta connexion Gmail restent enregistrées chez EmailJS.

   ÉTAPES (compte gratuit sur https://www.emailjs.com) :
   1. Email Services > Add New Service > Gmail > connecte
      ton compte Google. Note l'identifiant du service
      (ex. service_ab12cd3)  → serviceId
   2. Email Templates > Create New Template. Réglages :
        To Email   : ddwbe15@gmail.com   (ton adresse, cachée du code)
        Reply To   : {{email}}           (pour répondre au visiteur)
        Subject    : Portfolio – message de {{name}}
        Contenu    : Nom : {{name}}
                     E-mail : {{email}}
                     Message : {{message}}
      Note l'identifiant du modèle (ex. template_xy98zw7) → templateId
   3. Account > General > Public Key → publicKey
   4. (Conseillé) dans les réglages de sécurité du compte, limite
      l'usage à ton domaine (tonpseudo.github.io) si l'option existe.
   ===================================================== */
const MAIL_CONFIG = {
  publicKey:  'rnMJUM9TSVinMFPK_',
  serviceId:  'service_r0unskj',
  templateId: 'template_2mlqb68'
};
