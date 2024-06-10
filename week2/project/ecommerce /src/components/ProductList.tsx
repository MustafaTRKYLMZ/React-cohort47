import { FC } from "react";
import { ProductItem } from "./ProductItem";
import { ProductListProps } from "../types";

export const ProductList: FC<ProductListProps> = ({ productList }) => {
  return (
    <ul className="products">
      {productList?.map((product) => {
        return <ProductItem key={product?.id} product={product} />;
      })}
    </ul>
  );
};
