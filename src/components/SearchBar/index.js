import PropTypes from 'prop-types';
import './searchbar.scss';
import { Input, Menu, Select } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function SearchBar({
  activeItem, setActiveItem, setSearchValue, searchContent,
  setSearchContent, setNbrCardsByPage,
  setSortCardsBy, setOrderedCardsBy, setActuelPage, actualPage,
}) {
  return (
    <div className="searchbar">
      <Menu color="blue">
        <Menu.Item
          as={NavLink}
          to="GitHub"
          className="searchbar-element"
          name="home"
          active={activeItem === 'home'}
          onClick={(e, { name }) => {
            setActiveItem(name);
          }}
        />
        <Menu.Item
          as={NavLink}
          to="FAQ"
          className="searchbar-element"
          name="FAQ"
          active={activeItem === 'FAQ'}
          onClick={(e, { name }) => {
            setActiveItem(name);
          }}
        />
        {
          (activeItem === 'home')
          && (
            <>
              {/* <Menu.Menu> */}
              {/* <Menu.Item> */}
              <form
                className="divInput"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log(searchContent);
                  setActuelPage(1);
                  setSearchValue(searchContent);
                  setSearchContent('');
                }}
              >
                <Input
                  type="text"
                  value={searchContent}
                  onChange={(e) => setSearchContent(e.currentTarget.value)}
                  // icon="search"
                  action={{
                    icon: 'search',
                  }}
                  placeholder="Search..."
                />
              </form>
              {/* </Menu.Item> */}
              {/* </Menu.Menu> */}
              {/* <Form>
                <Form.Group
                  className="formulairetri"
                  // widths="equal"
                > */}
              <div className="selects">
                <Select
                  fluid
                  // label="Tri"
                  options={[
                    { text: 'Note', value: 'stars' },
                    { text: 'Maj', value: 'updated' },
                    { text: 'Abonnés', value: 'followers' },
                  ]}
                  onChange={(e, { value }) => {setSortCardsBy(value); console.log(e);}}
                  placeholder="Note"
                />
                <Select
                  fluid
                  // label="Nbre résultat"
                  options={[
                    { text: 'desc', value: 'desc' },
                    { text: 'asc', value: 'asc' },
                  ]}
                  onChange={(e, { value }) => setOrderedCardsBy(value)}
                  placeholder="desc"
                />
                <Select
                  fluid
                  // label="Nbre résultat"
                  options={[
                    { text: 3, value: 3 },
                    { text: 6, value: 6 },
                    { text: 9, value: 9 },
                    { text: 12, value: 12 },
                    { text: 20, value: 20 },
                  ]}
                  onChange={(e, { value }) => setNbrCardsByPage(value)}
                  placeholder="6"
                />
              </div>
                {/* </Form.Group>
              </Form> */}
            </>

          )
        }
      </Menu>
    </div>
  );
}

SearchBar.propTypes = {
  actualPage: PropTypes.number.isRequired,
  setNbrCardsByPage: PropTypes.func.isRequired,
  setSortCardsBy: PropTypes.func.isRequired,
  setOrderedCardsBy: PropTypes.func.isRequired,
  setActuelPage: PropTypes.func.isRequired,

  searchContent: PropTypes.string.isRequired,
  setSearchContent: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
  setActiveItem: PropTypes.func.isRequired,
};

export default SearchBar;
