import { useState, useEffect } from 'react';

import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

import './github.scss';

// VARIABLE POUR TEST EN DUR SANS API
// import repos from 'src/data/repos';
import Header from '../Header';
import SearchBar from '../SearchBar';
import CardsList from '../CardsList';
import SearchResult from '../SearchResult';
import Faq from '../Faq';
import Spinner from '../Spinner';
import E404 from '../E404';

function GitHubApi() {
  //* STATE -------------------------------------
  // l'onglet actif dans la barre de navigation.
  const [activeSearchBar, setActiveSearchBar] = useState('home');

  // searchResult est il chargé? Si oui on affiche sinon on attend
  const [isSearchResultIsLoading, setisSearchResultIsLoading] = useState([false]);

  // SEARCH CONTENT pour champ controlé
  const [searchContent, setSearchContent] = useState('');

  // SEARCH VALUE SI SUBMIT + SEARCHCONTENT to ''
  const [searchValue, setSearchValue] = useState('react');

  // resultat de la recherche sur GitHub
  const [searchResult, setSearchResult] = useState([]);

  // nombre affichage par page:
  const [nbrCardsByPage, setNbrCardsByPage] = useState(6);

  // sort default best match/stars/created/updated/forks/followers/repositories
  const [sortCardsBy, setSortCardsBy] = useState('stars');

  // order desc/asc par default desc
  const [orderedCardsBy, setOrderedCardsBy] = useState('desc');

  // numero de page actuelle
  const [actualPage, setActuelPage] = useState(1);

  //* FIN STATE ---------------------------------

  //* Recherche API
  // search représente ce que l'on veut chercher:
  function loadGitHubApi(search, sort, order, activePage, nbrResultByPage) {
    setisSearchResultIsLoading(false);
    axios
      .get(`https://api.github.com/search/repositories?q=${search}&sort=${sort}&order=${order}&page=${activePage}&per_page=${nbrResultByPage}`)
      .then((response) => {
        console.log(response.data);
        setSearchResult(response.data);
      })
      .catch(() => {
        console.log('Problème lors du contact avec l\'API');
      })
      .finally(() => {
        setisSearchResultIsLoading(true);
      });
  }

  //* chargement de l'API au démarrage puis lors des submit de searchBar (searchValue)
  // également lors des mises à jour de certains states.
  useEffect(() => {
    setisSearchResultIsLoading(false);
    const timeout = setTimeout(() => {
      loadGitHubApi(searchValue, sortCardsBy, orderedCardsBy, actualPage, nbrCardsByPage);
    }, 500); // optionnel: permet de voir le spinner
  }, [searchValue, sortCardsBy, orderedCardsBy, actualPage, nbrCardsByPage]);

  //* PROPS -------------------------------------
  // Ces variables vont chercher les infos dans le résultat retourné par l'API
  let cards; // toutes les objets pour construire nos cards
  let resultNbr; // Nombre de réponses trouvés de la recherche
  let nbPages; // Nombre de pages déduit du nombre de results / nbr cards
  // affichées arrondis à l'entier supérieur.
  //* Si chargement API fini alors on rempli nos variables.
  if (isSearchResultIsLoading === true) {
    cards = searchResult.items;
    resultNbr = searchResult.total_count;
    nbPages = Math.ceil(resultNbr / nbrCardsByPage);
  }
  //* PROPS FIN ---------------------------------

  return (
    <Container>
      <Header />
      <SearchBar
        activeItem={activeSearchBar}
        setActiveItem={setActiveSearchBar}
        setSearchValue={setSearchValue}
        searchContent={searchContent}
        setSearchContent={setSearchContent}
        setNbrCardsByPage={setNbrCardsByPage}
        setSortCardsBy={setSortCardsBy}
        setOrderedCardsBy={setOrderedCardsBy}
        setActuelPage={setActuelPage}
        actualPage={actualPage}
      />
      {
        // Spinner en attendant chargement API terminé
        (isSearchResultIsLoading === false)
        && <Spinner />
      }
      {
          // Affichage si page active est home + chargement API fini
          (activeSearchBar === 'home' && isSearchResultIsLoading === true)
          && (
            <Routes>
              {//* ******** Route accueil "/"  *************}
              }
              <Route
                path="/GitHub"
                element={(
                  <>
                    <SearchResult
                      resultNbr={resultNbr}
                      searchValue={searchValue}
                      nbPages={nbPages}
                    />
                    <CardsList
                      cards={cards}
                      actualPage={actualPage}
                      setActuelPage={setActuelPage}
                      nbPages={nbPages}
                    />
                  </>
                  )}
              />
              <Route
                path="react-api-GitHub-training/"
                element={<Navigate to="/GitHub" />}
              />
              <Route
                path="Apollo/S09-React/react-api-GitHub-training/dist/"
                element={<Navigate to="/GitHub" />}
              />
              <Route
                path="/"
                element={<Navigate to="/GitHub" />}
              />
              <Route
                path="react-api-GitHub-training/GitHub"
                element={<Navigate to="/GitHub" />}
              />
              <Route path="*" element={(<E404 />)} />
            </Routes>
          )
        }
      <Routes>
        {
          //  Affichage FAQ: pas besoin d'attendre chargement API
          (activeSearchBar === 'FAQ')
          && (
            <Route
              path="FAQ"
              element={(
                <Faq />
              )}
            />
          )
        }
      </Routes>
    </Container>
  );
}

export default GitHubApi;
