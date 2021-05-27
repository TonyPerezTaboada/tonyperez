import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";

import Search from "../components/Search";
import useCharacters from "../hooks/useCharacters";

const initialState = {
  favorites: [],
};

const API = 'https://rickandmortyapi.com/api/character';

const favoriteReducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      console.log("Favorites " + state.favorites);
      if (!state.favorites.includes(action.payload)) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
      return state;
    case "ADD_TO_FAVORITE_2":
      console.log("Favorites " + state.favorites);
      break;
    default:
      return state;
  }
};

const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);
  const characters = useCharacters(API)


  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="Characters">
      {favorites.favorites.map((favorite) => (
        <li>{favorite.name}</li>
      ))}

      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

      {filteredUsers.map((character) => (
        <div className="item" key={character.id}>
          <h2>{character.name}</h2>
          <button type="button" onClick={() => handleClick(character)}>
            Agregar a Favoritos
          </button>
        </div>
      ))}
    </div>
  );
};

export default Characters;
