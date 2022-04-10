import { Message, Header } from 'semantic-ui-react';
import './faq.scss';

function Faq() {
  return (
    <div className="searchresult ">
      <Message className="faqresult">
        <Header className="titleFaq" as="h1">FAQ</Header>
        <Header className="titleFaq" as="h2">A quoi ça sert</Header>
        <p className="faqp">
          Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.
        </p>
        <Header className="titleFaq" as="h2">Comment faire une recherche ?</Header>
        <p className="faqp">
          Sur la page recherche, complétez le champ de recherche et valider la recherche.
        </p>
        <Header className="titleFaq" as="h2">Puis-je chercher n'importe quel terme ?</Header>
        <p className="faqp">
          Oui, c'est fou.
        </p>
      </Message>
    </div>
  );
}

export default Faq;
