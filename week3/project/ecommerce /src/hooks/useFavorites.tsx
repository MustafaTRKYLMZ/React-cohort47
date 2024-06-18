import { useState, useEffect } from "react";
import { getFavorites } from "../services/favoritesService";
import { getProductById } from "../controllers";
import { Product } from "../types";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoriteIds = getFavorites() || [];
        const favoriteProducts: Product[] = [];

        for (const productId of favoriteIds) {
          try {
            const product = await getProductById(productId);
            if (product) {
              favoriteProducts.push({ ...product, isLiked: true });
            }
          } catch (error) {
            setErrorMessage(
              `Error while fetching product with ID ${productId}`
            );
          }
        }

        setFavorites(favoriteProducts);
      } catch (error) {
        setErrorMessage(`Error while fetching favorite products: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();

    // Event listener to update favorites on change
    const handleFavoritesChange = () => {
      fetchFavorites();
    };

    window.addEventListener("favoritesChanged", handleFavoritesChange);

    return () => {
      window.removeEventListener("favoritesChanged", handleFavoritesChange);
    };
  }, []);

  return { favorites, isLoading, errorMessage };
};
