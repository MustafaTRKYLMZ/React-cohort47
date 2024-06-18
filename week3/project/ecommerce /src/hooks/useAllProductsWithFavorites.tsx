import { useState, useEffect } from "react";
import { getAllProducts } from "../controllers";
import { getFavorites } from "../services/favoritesService";
import { Product } from "../types";

export const useAllProductsWithFavorites = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const updateProducts = async () => {
    try {
      const allProducts = await getAllProducts();
      const favoriteIds = getFavorites() || [];

      const productsWithLikes = allProducts.map((product: Product) => ({
        ...product,
        isLiked: favoriteIds.includes(product.id),
      }));

      setProducts(productsWithLikes);
    } catch (error) {
      setErrorMessage("Error while fetching products");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    updateProducts();

    const handleFavoritesChange = () => {
      updateProducts();
    };

    window.addEventListener("favoritesChanged", handleFavoritesChange);

    return () => {
      window.removeEventListener("favoritesChanged", handleFavoritesChange);
    };
  }, []);

  return { products, isLoading, errorMessage, setErrorMessage };
};
