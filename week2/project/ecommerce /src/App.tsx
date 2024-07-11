import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types";
import { getAllCategories, getAllProducts } from "./controllers";
import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./components/Products";
import { ProductDetailPage } from "./components/ProductDetailPage";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loadingProduct, setLoadingProduct] = useState<boolean>(true);
  const [loadingCategory, setLoadingCategory] = useState<boolean>(true);
  const [categories, setCategories] = useState<string[]>([]); // ["all", "electronics",
  const [products, setProducts] = useState<Product[]>([]);
  const [errormessage, setErrorMessage] = useState<string>("");

  const getProducts = async () => {
    try {
      setLoadingProduct(true);
      const allProducts = await getAllProducts();
      if (selectedCategory === "all") {
        setProducts(allProducts);
        setLoadingProduct(false);
        return;
      }
      const filteredProducts = allProducts.filter(
        (product: Product) =>
          product.category && product.category === selectedCategory
      );
      setProducts(filteredProducts);
      setLoadingProduct(false);
    } catch (error) {
      setErrorMessage("Error while fetching products");
    } finally {
      setLoadingProduct(false);
    }
  };

  const getCategories = async () => {
    try {
      setLoadingCategory(true);
      const categories = await getAllCategories();
      setCategories(categories);
      setLoadingCategory(false);
    } catch (error) {
      setErrorMessage("Error while fetching categories");
    } finally {
      setLoadingCategory(false);
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
    setLoadingCategory(true);
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
            loadingProduct={loadingProduct}
            loadingCategory={loadingCategory}
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
