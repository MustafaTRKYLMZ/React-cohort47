import { FC } from "react";
import { ProductItemProps } from "../types";
import { Link } from "react-router-dom";

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <li>
        <div className="product">
          <img
            className="productImage"
            src={product.image}
            alt={product.title}
          />
          <div className="productTitle">
            <span>{product.title}</span>
          </div>
        </div>
      </li>
    </Link>
  );
};
