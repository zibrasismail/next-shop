import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { ProductPrice } from "./product-price";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full max-w-sm border">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover"
            priority
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`} className="text-sm">
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{Number(product.rating)} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-red-500">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
