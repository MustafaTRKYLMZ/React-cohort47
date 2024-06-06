import { FC } from "react";
import { ProductItemProps } from "../types";

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <li className="productItem">
      <div className="product">
        <img className="productImage" src={product.image} alt={product.title} />
        <span className="productTitle">{product.title}</span>
      </div>
    </li>
  );
};
