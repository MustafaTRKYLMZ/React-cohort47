import { FC } from "react";
import { ProductItemProps } from "../types";
import { Link } from "react-router-dom";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";
import { toggleFavorite } from "../utils/favoriteUtils";
export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const favoriteImage = product.isLiked ? heartSolid : heartRegular;

  const handleFavorite = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //stop parent event
    e.stopPropagation();
    //stop the default event
    e.preventDefault();
    //toggle the favorite
    toggleFavorite(product.id);
    const event = new Event("favoritesChanged");
    window.dispatchEvent(event);
  };
  return (
    <li>
      <Link to={`/products/${product.id}`}>
        <div className="product">
          <div className="productImageContainer">
            <img
              className="productImage"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div
            className="productImageFavoriteContainer"
            onClick={(e) => handleFavorite(e)}
          >
            <img
              className="productImageFavorite"
              src={favoriteImage}
              alt={product.title}
            />
          </div>
          <div className="productTitle">
            <span>{product.title}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};
