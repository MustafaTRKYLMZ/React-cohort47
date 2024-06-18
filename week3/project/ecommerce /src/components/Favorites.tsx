// src/components/Favorites.tsx

import { useEffect } from "react";
import { useFavorites } from "../hooks/useFavorites";
import { ProductList } from "./ProductList";

export const Favorites = () => {
  const { favorites, isLoading, errorMessage } = useFavorites();

  useEffect(() => {}, [favorites]);
  return (
    <div className="">
      <h1>Favorites</h1>
      {errorMessage && <p>{errorMessage}</p>}
      {isLoading && <p>Loading...</p>}
      <ProductList productList={favorites} />
    </div>
  );
};
