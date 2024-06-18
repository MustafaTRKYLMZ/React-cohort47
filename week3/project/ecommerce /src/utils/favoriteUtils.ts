import { getFavorites, setFavorites } from "../services/favoritesService";

export const toggleFavorite = (productId: number) => {
  const favorites = getFavorites() as number[];
  let newFavorites;
  if (favorites.includes(productId)) {
    newFavorites = favorites.filter((fav) => fav !== productId);
  } else {
    newFavorites = [...favorites, productId];
  }
  setFavorites(newFavorites);
  return newFavorites;
};
