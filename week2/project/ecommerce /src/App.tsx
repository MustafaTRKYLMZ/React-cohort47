import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types";
import { getAllCategories, getAllProducts } from "./controllers";
import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./components/Products";
import { ProductDetailPage } from "./components/ProductDetailPage";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<string[]>([]); // ["all", "electronics",
  const [products, setProducts] = useState<Product[]>([]);
  const [errormessage, setErrorMessage] = useState<string>("");

  const getProducts = async () => {
    try {
      setLoading(true);
      const allProducts = await getAllProducts();
      if (selectedCategory === "all") {
        setProducts(allProducts);
        setLoading(false);
        return;
      }
      const filteredProducts = allProducts.filter(
        (product: Product) =>
          product.category && product.category === selectedCategory
      );
      setProducts(filteredProducts);
      setLoading(false);
    } catch (error) {
      setErrorMessage("Error while fetching products");
    } finally {
      setLoading(false);
    }
  };

  const getCategories = async () => {
    try {
      setLoading(true);
      const categories = await getAllCategories();
      setCategories(categories);
      setLoading(false);
    } catch (error) {
      setErrorMessage("Error while fetching categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, [selectedCategory]);

  const [activeButtonId, setActiveButtonId] = useState<number | undefined>(
    undefined
  );

  const handleCategoryChange = (category: string, id?: number) => {
    setLoading(true);
    if (category === selectedCategory) {
      setActiveButtonId(undefined);
      setSelectedCategory("all");
      return;
    }
    setActiveButtonId(id);
    setSelectedCategory(category);
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      <Route
        path="products"
        element={
          <Products
            loading={loading}
            errormessage={errormessage}
            categories={categories}
            products={products}
            activeButtonId={activeButtonId}
            handleCategoryChange={handleCategoryChange}
          />
        }
      />
      <Route path="products/:id" element={<ProductDetailPage />} />
    </Routes>
  );
};

export default App;
