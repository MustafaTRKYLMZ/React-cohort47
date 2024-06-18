// Saves the favorite products to local storage
export const setFavorites = (favorites: number[]) => {
  try {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (error) {
    throw new Error(`Error setting favorites in local storage: ${error}`);
  }
};

// getFavorites form local storage
export const getFavorites = () => {
  try {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    throw new Error(`Error getting favorites from local storage: ${error}`);
    return [];
  }
};

// Clears the favorite products from local storage
export const clearFavorites = () => {
  try {
    localStorage.removeItem("favorites");
  } catch (error) {
    throw new Error(`Error clearing favorites from local storage: ${error}`);
  }
};
