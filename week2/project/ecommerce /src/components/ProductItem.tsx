import { FC } from "react";
import { ProductItemProps } from "../types";

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <li>
      <div className="product">
        <img className="productImage" src={product.image} alt={product.title} />
        <div className="productTitle">
          <span>{product.title}</span>
        </div>
      </div>
    </li>
  );
};
