import React from "react";
import { CategoryList, ProductList } from "./";
import { Product } from "../types";
import { Outlet } from "react-router-dom";

interface ProductsProps {
  errormessage: string;
  categories: string[];
  products: Product[];
  activeButtonId: number | undefined;
  handleCategoryChange: (category: string, id?: number) => void;
}

const Products: React.FC<ProductsProps> = ({
  errormessage,
  categories,
  products,
  activeButtonId,
  handleCategoryChange,
}) => {
  return (
    <div className="main">
      {errormessage && <h1>{errormessage}</h1>}
      <h1 className="productHeader">Products</h1>
      <CategoryList
        allCategories={categories}
        changeCategory={handleCategoryChange}
        activeButtonId={activeButtonId}
      />
      <ProductList productList={products} />
      <Outlet />
    </div>
  );
};

export default Products;
