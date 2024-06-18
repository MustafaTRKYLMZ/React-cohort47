import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types";
import { getAllCategories } from "./controllers";
import { Route, Routes } from "react-router-dom";
import { Navbar, Favorites, ProductDetailPage, Products } from "./components";
import { useAllProductsWithFavorites } from "./hooks/useAllProductsWithFavorites"; // Hook'u import edin

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState<string[]>([]);

  const { products, isLoading, errorMessage, setErrorMessage } =
    useAllProductsWithFavorites();

  const getCategories = async () => {
    try {
      const categories = await getAllCategories();
      setCategories(categories);
    } catch (error) {
      setErrorMessage("Error while fetching categories");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const [activeButtonId, setActiveButtonId] = useState<number | undefined>(
    undefined
  );

  const handleCategoryChange = (category: string, id?: number) => {
    if (category === selectedCategory) {
      setActiveButtonId(undefined);
      setSelectedCategory("all");
      return;
    }
    setActiveButtonId(id);
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product: Product) =>
            product.category && product.category === selectedCategory
        );

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Products
              errormessage={errorMessage}
              categories={categories}
              products={filteredProducts}
              activeButtonId={activeButtonId}
              handleCategoryChange={handleCategoryChange}
              isLoading={isLoading}
            />
          }
        />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default App;
