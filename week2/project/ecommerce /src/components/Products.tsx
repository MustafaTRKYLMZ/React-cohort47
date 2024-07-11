import React from "react";
import { CategoryList, ProductList } from "./";
import { Product } from "../types";
import { Outlet } from "react-router-dom";

interface ProductsProps {
  loading: boolean;
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
  loading,
}) => {
  return (
    <div className="main">
      {errormessage && <h1>{errormessage}</h1>}
      <h1 className="productHeader">Products</h1>
      {loading && <div>Loading...</div>}
      <CategoryList
        errormessage={errormessage}
        allCategories={categories}
        changeCategory={handleCategoryChange}
        activeButtonId={activeButtonId}
      />
      <ProductList productList={products} errormessage={errormessage} />
      <Outlet />
    </div>
  );
};

export default Products;
