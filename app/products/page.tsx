import Link from "next/link";
import { products } from "../data";
import { Card } from "../components/Card";
import { Cards } from "../components/Cards";
export const ProductListPage = () => {
  return (
    <>
      {/* <ul>
        {products.map((product) => (
          <Card key={product.id} name={product.name} description={product.description} {}></Card>
    
        ))}
      </ul> */}
      <Cards products={products} />
    </>
  );
};
export default ProductListPage;
