import { FC } from "react";
import { Product } from "./types/product";
import { ProductItem } from "./ProductItem";

export type ProductListProps = {
  productList: Product[];
};

export const ProductList: FC<ProductListProps> = ({ productList }) => {
  return (
    <ul className="products">
      {productList?.map((product) => {
        return <ProductItem product={product} />;
      })}
    </ul>
  );
};
