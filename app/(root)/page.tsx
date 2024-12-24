import { ProductList } from "@/components/shared/product/product-list";
import { getProducts } from "@/lib/actions/product.action";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="wrapper">
      <ProductList data={products} title="Latest Products" />
    </div>
  );
}
