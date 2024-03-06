import Link from "next/link";
import { products } from "../../data";
import { notFound } from "next/navigation";
import Image from "next/image";
const ProductListPage = ({ params }: { params: { product: string } }) => {
  const product = products.find((p) => p.slug === params.product);
  if (!product) {
    return notFound();
  }
  return (
    <>
      <h1>{product.name}</h1>
      <h2>{product.description}</h2>
      <h3>{product.price}</h3>

      <Image src={product.image} alt="" width={200} height={200} />
    </>
  );
};
export default ProductListPage;
