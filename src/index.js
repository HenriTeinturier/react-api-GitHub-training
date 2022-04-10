// == Import : npm
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// == Import : local

// Composants
import GitHubApi from 'src/components/GitHubApi';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <GitHubApi />;
  </BrowserRouter>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
