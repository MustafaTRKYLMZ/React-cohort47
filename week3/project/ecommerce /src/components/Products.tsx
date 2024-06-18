import React from "react";
import { CategoryList, ProductList } from "./";
import { Product } from "../types";
import { Outlet } from "react-router-dom";

interface ProductsProps {
  errormessage: string;
  categories: string[];
  products: Product[];
  activeButtonId: number | undefined;
  isLoading: boolean;
  handleCategoryChange: (category: string, id?: number) => void;
}

export const Products: React.FC<ProductsProps> = ({
  errormessage,
  categories,
  products,
  activeButtonId,
  isLoading,
  handleCategoryChange,
}) => {
  return (
    <div className="main">
      {isLoading && <h1>Loading...</h1>}
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
