import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types";
import { getProductById } from "../controllers/products";

export const ProductDetailPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams<{ id: string }>();

  const [productDetail, setProductDetail] = useState<Product | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (productDetail) {
        setLoading(false);
      }
    }, 3000);

    const fetchProductDetail = async () => {
      if (!id) return;
      const productDetail = await getProductById(id);
      setProductDetail(productDetail);
      setLoading(false);
    };
    fetchProductDetail();
  }, [id]);

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
          </div>
        </>
      )}
    </div>
  );
};
