import { FC } from "react";
import { ProductItem } from "./ProductItem";
import { ProductListProps } from "../types";

export const ProductList: FC<ProductListProps> = ({
  productList,
  errormessage,
}) => {
  return (
    <ul className="products">
      {errormessage && <h1>{errormessage}</h1>}
      {productList?.map((product) => {
        return <ProductItem key={product?.id} product={product} />;
      })}
    </ul>
  );
};
