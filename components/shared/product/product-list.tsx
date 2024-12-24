import { Product } from "@/types";
import { ProductCard } from "./product-card";

export function ProductList({
  data,
  title,
}: {
  data: Product[];
  title?: string;
}) {
  if (data.length === 0) {
    return <div className="text-center">No products found</div>;
  }
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.length > 0 &&
          data.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
      </div>
    </div>
  );
}
