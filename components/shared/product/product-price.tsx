import { cn } from "@/lib/utils";

export const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const formattedValue = value.toFixed(2);
  const [int, float] = formattedValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {int}
      <sup className="text-xs align-super">.{float}</sup>
    </p>
  );
};
