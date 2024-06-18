import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types";
import { getProductById } from "../controllers/products";
import { getFavorites } from "../services/favoritesService";
import { toggleFavorite } from "../utils/favoriteUtils";

import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";

export const ProductDetailPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();

  const [productDetail, setProductDetail] = useState<Product | null>(null);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (productDetail) {
        setLoading(false);
      }
    }, 3000);

    const fetchProductDetail = async () => {
      if (!id) return;
      const product = await getProductById(id);

      const favoriteIds = getFavorites() || [];
      const isProductLiked = favoriteIds.includes(product.id);

      setProductDetail({ ...product, isLiked: isProductLiked });
      setProductDetail(product);
      setIsLiked(isProductLiked);
      setLoading(false);
    };
    fetchProductDetail();
  }, [id, productDetail]);

  const handleFavorite = () => {
    if (!id) return;
    const productId = parseInt(id);
    toggleFavorite(productId);
    setIsLiked((prevIsLiked) => !prevIsLiked);
    const event = new Event("favoritesChanged");
    window.dispatchEvent(event);
  };

  const favoriteImage = isLiked ? heartSolid : heartRegular;
  return (
    <div className="productDetails">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="productDetailsTitle">
            <h1>
              <span>{productDetail?.title}</span>
            </h1>
          </div>

          <div className="productDetailsInformation">
            <div className="productDetailsImage ">
              <div className="productImageContainer">
                <img
                  className="productImage"
                  src={productDetail?.image}
                  alt={productDetail?.title}
                />
              </div>
            </div>
            <div className="productDetailsDescription">
              <span>{productDetail?.description}</span>
            </div>
            <div className="productImageFavoriteContainer">
              <img
                className="productImageFavorite"
                src={favoriteImage}
                alt={isLiked ? "Liked" : "Like"}
                onClick={handleFavorite}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
