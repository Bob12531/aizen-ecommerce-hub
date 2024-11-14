interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  rating: number;
}

export const ProductCard = ({ title, price, image, rating }: ProductCardProps) => {
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="px-4 py-2 bg-white text-aizen-900 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
            Quick View
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-medium text-aizen-900 line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-aizen-900">
            ${price.toFixed(2)}
          </span>
          <div className="flex items-center">
            {"★".repeat(rating)}{"☆".repeat(5-rating)}
          </div>
        </div>
      </div>
    </div>
  );
};