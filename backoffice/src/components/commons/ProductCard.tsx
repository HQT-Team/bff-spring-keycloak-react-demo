import { Link } from "react-router-dom";

import { Product } from "@/models/Product";
import AppRoutes from "@/routes/AppRoutes";

type ProductProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductProps) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="product">
        <Link
          to={`${AppRoutes.shop}/${product.slug}`}
          className="img-prod"
        >
          <img
            className="img-fluid"
            src={product.image}
            alt={product.name}
          />
          {product.isDiscount && <span className="status">{product.discountPercent}%</span>}
          <div className="overlay"></div>
        </Link>
        <div className="text py-3 pb-4 px-3 text-center">
          <h3>
            <Link to={`${AppRoutes.shop}/${product.slug}`}>{product.name}</Link>
          </h3>
          <div className="d-flex">
            <div className="pricing">
              <p className="price">
                {product.isDiscount ? (
                  <>
                    <span className="mr-2 price-dc">${product.price}</span>
                    <span className="price-sale">${product.discountPrice}</span>
                  </>
                ) : (
                  <span>${product.price}</span>
                )}
              </p>
            </div>
          </div>
          <div className="bottom-area d-flex px-3">
            <div className="m-auto d-flex">
              <Link
                to={`${AppRoutes.shop}/${product.slug}`}
                className="add-to-cart d-flex justify-content-center align-items-center text-center"
              >
                <span>
                  <i className="bi bi-list"></i>
                </span>
              </Link>
              <a
                href="#"
                className="buy-now d-flex justify-content-center align-items-center mx-1"
              >
                <span>
                  <i className="bi bi-cart4"></i>
                </span>
              </a>
              <a
                href="#"
                className="heart d-flex justify-content-center align-items-center "
              >
                <span>
                  <i className="bi bi-heart-fill"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
