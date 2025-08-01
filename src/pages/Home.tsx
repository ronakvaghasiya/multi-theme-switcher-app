import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Product } from "../types/theme";
import { apiService } from "../services/api";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import {
  getContainerStyles,
  getContentStyles,
  getTitleStyles,
  getSubtitleStyles,
  getGridStyles,
  getButtonStyles,
  getCardStyles,
  getHeadingStyles,
} from "../utils/themeStyles";

const Home: React.FC = () => {
  const { theme } = useTheme();
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [productsToShow, setProductsToShow] = useState(12);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setFetchError(null);
        const data = await apiService.fetchProducts();
        setAllProducts(data);
        setVisibleProducts(data.slice(0, productsToShow));
      } catch (err) {
        setFetchError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setVisibleProducts(allProducts.slice(0, productsToShow));
  }, [allProducts, productsToShow]);


  // Always render Hero and Features sections, only grid is affected by loading
  const skeletons = Array.from({ length: 12 });

  if (fetchError) {
    return (
      <div className={getContainerStyles(theme)}>
        {theme.layout.type === "sidebar" && <Sidebar />}
        <div className={getContentStyles(theme)}>
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <h2 className="text-2xl font-bold mb-4 text-red-600">{fetchError}</h2>
            <button
              className={getButtonStyles(theme)}
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={getContainerStyles(theme)}>
      {theme.layout.type === "sidebar" && <Sidebar />}
      <div className={getContentStyles(theme)}>
        {/* Hero Section */}
        <section className="mb-16 sm:mb-20 card-animate">
          <h1 className={getTitleStyles(theme)}>
            Welcome to Multi Theme Switcher Store
          </h1>

          <p className={getSubtitleStyles(theme)}>
            Discover amazing products with our beautiful theme-switching
            experience. Each theme offers a unique visual journey while
            maintaining excellent functionality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className={`${getButtonStyles(theme)} w-full sm:w-auto`}>
              Explore Products
            </button>
            <button
              className={`${getButtonStyles(
                theme,
                "secondary"
              )} w-full sm:w-auto`}
            >
              Learn More
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16 sm:mb-20">
          <h2
            className={
              getHeadingStyles(theme, "xl") + " text-center mb-12 card-animate"
            }
          >
            Why Choose MultiTheme?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={
                getCardStyles(theme, "compact") +
                " text-center card-animate card-hover"
              }
            >
              <h3 className="text-xl font-bold mb-3">Beautiful Themes</h3>
              <p className="text-sm">
                Choose from multiple stunning themes that adapt to your
                preferences
              </p>
            </div>

            <div
              className={
                getCardStyles(theme, "compact") +
                " text-center card-animate card-hover"
              }
            >
              <h3 className="text-xl font-bold mb-3">Fully Responsive</h3>
              <p className="text-sm">
                Perfect experience on all devices - mobile, tablet, and desktop
              </p>
            </div>

            <div
              className={
                getCardStyles(theme, "compact") +
                " text-center card-animate card-hover"
              }
            >
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-sm">
                Optimized performance with smooth animations and transitions
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="mb-16 sm:mb-20">
          <h2
            className={
              getHeadingStyles(theme, "xl") + " text-center mb-12 card-animate"
            }
          >
            Featured Products
          </h2>

          <div className={getGridStyles(theme)}>
            {loading
              ? skeletons.map((_, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 rounded-lg shadow p-4 flex flex-col animate-pulse"
                    style={{ minHeight: 340 }}
                  >
                    <div className="h-48 sm:h-56 bg-gray-200 rounded-t-lg mb-4" />
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
                    <div className="flex-1" />
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-6 w-16 bg-gray-200 rounded" />
                      <div className="h-4 w-12 bg-gray-200 rounded" />
                    </div>
                    <div className="h-10 bg-gray-200 rounded w-full" />
                  </div>
                ))
              : visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>

          {!loading && (
            <div className="mt-8 sm:mt-12 text-center">
              <p className="text-xs sm:text-sm text-gray-500 mb-4">
                Showing {visibleProducts.length} of {allProducts.length} products
              </p>
              {visibleProducts.length < allProducts.length && (
                <button
                  className={`${getButtonStyles(theme)} w-full sm:w-auto`}
                  onClick={() => setProductsToShow((prev) => prev + 12)}
                >
                  Load More Products
                </button>
              )}
            </div>
          )}
        </section>

        {/* Testimonials Section */}
        {/* ...existing code... */}

        {/* Stats Section */}
        <section className="mb-16 sm:mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div
              className={
                getCardStyles(theme, "compact") +
                " text-center card-animate card-hover"
              }
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
              <p className="text-sm">Happy Customers</p>
            </div>
            <div
              className={
                getCardStyles(theme, "compact") +
                " text-center card-animate card-hover"
              }
            >
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-sm">Products</p>
            </div>
            <div
              className={
                getCardStyles(theme, "compact") +
                " text-center card-animate card-hover"
              }
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <p className="text-sm">Beautiful Themes</p>
            </div>
            <div
              className={
                getCardStyles(theme, "compact") +
                " text-center card-animate card-hover"
              }
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">
                24/7
              </div>
              <p className="text-sm">Support</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 sm:mb-20">
          <div
            className={
              getCardStyles(theme) + " text-center card-animate card-hover"
            }
          >
            <h2 className={getHeadingStyles(theme, "xl") + " mb-4"}>
              Ready to Get Started?
            </h2>
            <p className="mb-6">
              Join thousands of satisfied customers and experience the best
              multi-theme shopping platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={getButtonStyles(theme)}>Start Shopping</button>
              <button className={getButtonStyles(theme, "secondary")}>
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
