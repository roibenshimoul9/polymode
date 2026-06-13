import React from 'react';

interface ProductPriceProps {
  price: number;
  originalPrice?: number | null;
  containerClassName?: string;
  priceClassName?: string;
  originalPriceClassName?: string;
  prefixClassName?: string;
}

const ProductPrice: React.FC<ProductPriceProps> = ({
  price,
  originalPrice,
  containerClassName = "flex items-baseline gap-1 md:gap-2 justify-end",
  priceClassName = "text-xs md:text-lg font-bold",
  originalPriceClassName = "text-[8px] md:text-xs line-through",
  prefixClassName = "text-[10px] md:text-xs"
}) => {
  return (
    <div className={containerClassName}>
      <span className={prefixClassName}>החל מ-</span>
      <span className={priceClassName}>₪{price.toFixed(0)}</span>
      {originalPrice && (
        <span className={originalPriceClassName}>₪{originalPrice.toFixed(0)}</span>
      )}
    </div>
  );
};

export default ProductPrice;
