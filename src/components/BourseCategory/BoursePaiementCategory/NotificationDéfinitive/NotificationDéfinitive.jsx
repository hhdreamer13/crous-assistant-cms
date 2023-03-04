/* eslint-disable react/no-unescaped-entities */
const NotificationDéfinitive = () => {
  return (
    <div className="prose mx-auto mt-20 h-fit w-3/4 text-slate-50">
      <h3>Notification Définitive</h3>
      <p>
        L’établissement de l’étudiant nous confirme son inscription
        administrative via la remontée sur le logiciel AGLAE, une fois la
        remontée visible, vous devez vérifier si le niveau d’étude est conforme
        à la notification conditionnelle et que le régime d’inscription est
        habilité (seuls les régimes 10 et 11 le sont). Si la remontée est
        conforme et que la mise en paiement de la bourse n’est pas activée, vous
        devez faire remonter aux services de bourses via activation contrôle
        paiement sur AGLAE.
      </p>
      <p>
        A' partir de Novembre N de la demande, l’étudiant doit fournir une
        attestation d’assiduité du 1er semestre pour activer le paiement de sa
        bourse. Vous devrez donc vérifier que le document est bien numérisé
        avant de faire un ticket et indiquer dans la zone texte « attestation
        d’assiduité » pour accepter la rétroactivité.
      </p>
      <p>
        Attention, seul la mise en paiement du dossier déclenche l’envoi de la
        notification définitive.
      </p>
    </div>
  );
};

export default NotificationDéfinitive;
