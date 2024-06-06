import { useEffect, useState } from "react";
import "./App.css";
import { CategoryList, ProductList } from "./components";
import allCategories from "./fake-data/all-categories";
import allProducts from "./fake-data/all-products";
import { Product } from "./types";

const App = () => {
  const categories = allCategories;
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const getProducts = async () => {
      if (selectedCategory === "all") {
        setProducts(allProducts);
        return;
      }
      const filteredProducts = allProducts.filter(
        (product) => product.category === selectedCategory
      );
      setProducts(filteredProducts);
    };
    getProducts();
  }, [selectedCategory]);

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

  return (
    <div className="main">
      {/*header*/}
      <h1 className="productHeader">Products</h1>
      {/*category list*/}
      <CategoryList
        allCategories={categories}
        changeCategory={handleCategoryChange}
        activeButtonId={activeButtonId}
      />
      {/*product list*/}
      <ProductList productList={products} />
    </div>
  );
};

export default App;
