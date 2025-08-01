import React from "react";
import { Product } from "../types/theme";
import { useTheme } from "../contexts/ThemeContext";
import { getProductCardStyles } from "../utils/themeStyles";

interface ProductCardProps {
  product: Product;
}


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { theme } = useTheme();
  const styles = getProductCardStyles(theme);
  const [imgLoaded, setImgLoaded] = React.useState(false);
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className={`${styles.card()} h-full flex flex-col card-animate card-hover`}>
      <div className="relative flex-shrink-0">
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-t-lg z-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400"></div>
          </div>
        )}
        <img
          src={imgError ? '/logo192.png' : product.thumbnail}
          alt={product.title}
          className={`w-full h-48 sm:h-56 object-contain bg-gray-100 p-4 rounded-t-lg transition-transform duration-300 hover:scale-105 ${!imgLoaded ? 'invisible' : ''}`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={() => { setImgError(true); setImgLoaded(true); }}
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs sm:text-sm">
          ⭐ {product.rating?.toFixed(1) ?? "N/A"}
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <h3
          className={`${styles.title()} text-base sm:text-lg mb-2 line-clamp-2 flex-grow`}
        >
          {product.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4 flex-shrink-0">
          <span className={`${styles.price()} text-lg sm:text-xl font-bold`}>
            ${product.price}
          </span>
          <span className="text-xs text-gray-500 hidden sm:block">
            {product.category}
          </span>
        </div>

        <button
          className={`${styles.button()} text-sm sm:text-base py-2 sm:py-3 flex-shrink-0 hover:scale-105 transition-transform duration-200`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
