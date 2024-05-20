import AddToCartButton from "@/components/products/AddToCartButton";

export default function ProductItemTile({onAddToCart, ...item}) {
  const {image, description, name, basePrice,
    sizes, brandPrices,
  } = item;
  const hasSizesOrBrands = sizes?.length > 0 || brandPrices?.length > 0;
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center
      group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img src={image} className="max-h-auto max-h-24 block mx-auto" alt="product"/>
      </div>
      <h4 className="font-semibold text-xl my-3">{name}</h4>
      <p className="text-gray-500 text-sm line-clamp-3">
        {description}
      </p>
      <AddToCartButton
        image={image}
        hasSizesOrExtras={hasSizesOrBrands}
        onClick={onAddToCart}
        basePrice={basePrice}
      />
    </div>
  );
}