import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Card, Image, Button, Header, Modal,
} from 'semantic-ui-react';
import './carditem.scss';

function CardItem({
  id, language, owner, description, name, watchers, score, html_url,
}) {
  const [open, setOpen] = useState(false);
  const { login, avatar_url } = owner;
  // console.log(`id: ${id} name: ${name}, language: ${language},
  // description: ${description}, login: ${login}, url: ${avatar_url}`);
  return (
    <div className="cards-item">
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          (
            <Card>
              <Image src={avatar_url} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{login}</Card.Header>
                <Card.Meta>
                  <span>{name}</span>
                </Card.Meta>
                <Card.Description>
                  {description}
                </Card.Description>
              </Card.Content>
            </Card>
          )
        }
      >
        <Modal.Header>{login}</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={avatar_url} wrapped />
          <Modal.Description>
            <Header>{name}</Header>
            <p>
              <em>description:</em> {description}
            </p>
            <p><em>language:</em> {language}</p>
            <p><em>Nbr de vues: </em>{watchers}</p>
            <p><em>score: </em>{score}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Retour
          </Button>
          <Button
            content="Profil GitHub"
            labelPosition="right"
            icon="checkmark"
            href={html_url}
            target="_blank"
            onClick={() => {
              setOpen(false);
            }}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}

CardItem.propTypes = {
  watchers: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired, // id
  language: PropTypes.string, // language(javascript)
  score: PropTypes.number,
  html_url: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired, // Proprietaire
    avatar_url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired, // logo
    // score: PropTypes.number,
  }).isRequired,
  description: PropTypes.string, // descriptions
};

export default CardItem;
