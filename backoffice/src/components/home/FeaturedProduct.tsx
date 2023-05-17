import { listProducts } from "@/datas/ListProducts";
import { ProductCard } from "../commons";

export default function FeaturedProduct() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section text-center">
            <span className="subheading">Featured Products</span>
            <h2 className="mb-4">Our Products</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {listProducts.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
