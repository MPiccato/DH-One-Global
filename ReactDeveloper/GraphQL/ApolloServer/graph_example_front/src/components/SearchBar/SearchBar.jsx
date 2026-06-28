import { gql } from "apollo-server-express";
import React, { useState } from "react";
import { UseUserContext } from "../../context/UserContext";

export const GET_USER_BY_NAME = gql`
  query getUsersByName($name: String!) {
    getUsersByName(name: $name) {
      name
      age
    }
  }
`;

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const { updateUserList } = UseUserContext();

  const { loading, error, data, refetch } = useQuery(GET_USER_BY_NAME, {
    variables: { name: search },
    skip: true,
  });

  const handleSearch = async () => {
    const { data } = await refetch();
    if (data) {
      updateUserList(data.getUsersByName);
    }
  };

  return (
    <>
      <h1>Panel de búsqueda</h1>
      <input
        type="text"
        name="search"
        id="search"
        onChange={() => setSearch(e.currentTarget.value)}
      />

      <button onClick={handleSearch}>Buscar Usuario</button>
    </>
  );
};

export default SearchBar;
