import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Product } from "../types/theme";
import { apiService, ApiError } from "../services/api";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import {
  getContainerStyles,
  getContentStyles,
  getTitleStyles,
  getSubtitleStyles,
  getGridStyles,
  getLoadingStyles,
  getErrorStyles,
  getButtonStyles,
  getCardStyles,
  getHeadingStyles,
} from "../utils/themeStyles";

const Home: React.FC = () => {
  const { theme } = useTheme();
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [productsToShow, setProductsToShow] = useState(12);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.fetchProducts();
        setAllProducts(data);
        setVisibleProducts(data.slice(0, productsToShow));
      } catch (err) {
        if (err instanceof ApiError) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
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

  if (loading) {
    return (
      <div className={getContainerStyles(theme)}>
        {theme.layout.type === "sidebar" && <Sidebar />}
        <div className={getContentStyles(theme)}>
          <div className={getLoadingStyles(theme)}>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-current"></div>
            <span className="ml-3 text-lg">Loading products...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={getContainerStyles(theme)}>
        {theme.layout.type === "sidebar" && <Sidebar />}
        <div className={getContentStyles(theme)}>
          <div className={getErrorStyles(theme)}>
            <h2 className="text-2xl font-bold mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-lg">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className={getButtonStyles(theme)}
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
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

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
        </section>

        {/* Testimonials Section */}
        <section className="mb-16 sm:mb-20">
          <h2
            className={
              getHeadingStyles(theme, "xl") + " text-center mb-12 card-animate"
            }
          >
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className={
                getCardStyles(theme, "compact") + " card-animate card-hover"
              }
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Designer</p>
                </div>
              </div>
              <p className="text-sm">
                "The theme switching feature is amazing! I love how smooth the
                transitions are."
              </p>
            </div>

            <div
              className={
                getCardStyles(theme, "compact") + " card-animate card-hover"
              }
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-bold">Mike Chen</h4>
                  <p className="text-sm text-gray-500">Developer</p>
                </div>
              </div>
              <p className="text-sm">
                "Perfect responsive design. Works flawlessly on all my devices!"
              </p>
            </div>

            <div
              className={
                getCardStyles(theme, "compact") + " card-animate card-hover"
              }
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  E
                </div>
                <div>
                  <h4 className="font-bold">Emma Davis</h4>
                  <p className="text-sm text-gray-500">Product Manager</p>
                </div>
              </div>
              <p className="text-sm">
                "The user experience is outstanding. Clean, modern, and
                intuitive design."
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mb-16 sm:mb-20">
          <div
            className={
              getCardStyles(theme) + " text-center card-animate card-hover"
            }
          >
            <h2 className={getHeadingStyles(theme, "xl") + " mb-4"}>
              Stay Updated
            </h2>
            <p className="mb-6">
              Get the latest updates and exclusive offers delivered to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className={getButtonStyles(theme)}>Subscribe</button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16 sm:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
