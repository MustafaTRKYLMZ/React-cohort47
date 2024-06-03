import { useEffect, useState } from "react";
import "./App.css";
import { CategoryList } from "./CategoryList";
import { ProductList } from "./ProductList";
import allCategories from "./fake-data/all-categories";
import allProducts from "./fake-data/all-products";
import { Product } from "./types/product";

function App() {
  const categories = allCategories;
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return categories[0];
  });

  useEffect(() => {
    const getProducts = async () => {
      const filteredProducts = allProducts.filter(
        (product) => product.category === selectedCategory
      );
      setProducts(filteredProducts);
    };
    getProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
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
      />
      {/*product list*/}
      <ProductList productList={products} />
    </div>
  );
}

export default App;
