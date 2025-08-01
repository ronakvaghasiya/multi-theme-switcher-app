import React from "react";
import { FaCheckCircle, FaPalette, FaMoon, FaThLarge, FaReact, FaMobileAlt, FaLock, FaDatabase } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import Sidebar from "../components/Sidebar";
import {
  getContainerStyles,
  getContentStyles,
  getTitleStyles,
  getCardStyles,
  getHeadingStyles,
  getTextStyles,
  getFeatureListStyles,
  getFeatureItemStyles,
} from "../utils/themeStyles";

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={getContainerStyles(theme)}>
      {theme.layout.type === "sidebar" && <Sidebar />}
      <div className={getContentStyles(theme, "max-w-4xl mx-auto")}>
        <h1 className={getTitleStyles(theme)}>About Multi Theme Switcher App</h1>

        <div className={getCardStyles(theme)}>
          <h2 className={getHeadingStyles(theme)}>Our Mission</h2>
          <p className={getTextStyles(theme)}>
            We believe that user experience should be both beautiful and
            functional. Our multi-theme application demonstrates how a single
            codebase can adapt to different visual preferences while maintaining
            excellent usability.
          </p>
          <p className={getTextStyles(theme)}>
            Each theme is carefully crafted to provide a unique experience that
            showcases different design philosophies and user interface patterns.
          </p>
        </div>

        <div className={getCardStyles(theme)}>
          <h2 className={getHeadingStyles(theme)}>Theme Features</h2>
          <ul className={`${getFeatureListStyles(theme)} space-y-4 pl-2`}> 
            <li className={getFeatureItemStyles(theme)}>
              <span className="flex items-center gap-3">
                {React.createElement(FaPalette as React.ElementType, { className: "text-purple-400" })}
                <span className="text-sm sm:text-base"><strong>Theme 1 - Minimalist:</strong> Clean, simple design with focus on content and readability</span>
              </span>
            </li>
            <li className={getFeatureItemStyles(theme)}>
              <span className="flex items-center gap-3">
                {React.createElement(FaMoon as React.ElementType, { className: "text-blue-400" })}
                <span className="text-sm sm:text-base"><strong>Theme 2 - Dark Sidebar:</strong> Professional dark theme with sidebar navigation</span>
              </span>
            </li>
            <li className={getFeatureItemStyles(theme)}>
              <span className="flex items-center gap-3">
                {React.createElement(FaThLarge as React.ElementType, { className: "text-pink-400" })}
                <span className="text-sm sm:text-base"><strong>Theme 3 - Colorful Cards:</strong> Playful and vibrant design with card-based layout</span>
              </span>
            </li>
          </ul>
        </div>

        <div className={getCardStyles(theme)}>
          <h2 className={getHeadingStyles(theme)}>Technical Highlights</h2>
          <ul className={`${getFeatureListStyles(theme)} space-y-4 pl-2`}>
            <li className={getFeatureItemStyles(theme)}>
              <span className="flex items-center gap-3">
                {React.createElement(FaReact as React.ElementType, { className: "text-blue-400" })}
                <span className="text-sm sm:text-base">Built with React 19 and TypeScript for type safety</span>
              </span>
            </li>
            <li className={getFeatureItemStyles(theme)}>
              <span className="flex items-center gap-3">
                {React.createElement(FaPalette as React.ElementType, { className: "text-purple-400" })}
                <span className="text-sm sm:text-base">Styled with Tailwind CSS for responsive design</span>
              </span>
            </li>
            <li className={getFeatureItemStyles(theme)}>
              <span className="flex items-center gap-3">
                {React.createElement(FaDatabase as React.ElementType, { className: "text-green-400" })}
                <span className="text-sm sm:text-base">Theme persistence using localStorage</span>
              </span>
            </li>
            <li className={getFeatureItemStyles(theme)}>
              <span className="flex items-center gap-3">
                {React.createElement(FaMobileAlt as React.ElementType, { className: "text-pink-400" })}
                <span className="text-sm sm:text-base">Fully responsive design for all devices</span>
              </span>
            </li>
            <li className={getFeatureItemStyles(theme)}>
              <span className="flex items-center gap-3">
                {React.createElement(FaCheckCircle as React.ElementType, { className: "text-yellow-400" })}
                <span className="text-sm sm:text-base">Real data integration with FakeStore API</span>
              </span>
            </li>
            <li className={getFeatureItemStyles(theme)}>
              <span className="flex items-center gap-3">
                {React.createElement(FaLock as React.ElementType, { className: "text-gray-400" })}
                <span className="text-sm sm:text-base">Secure implementation with proper error handling</span>
              </span>
            </li>
          </ul>
        </div>

        <div className={getCardStyles(theme)}>
          <h2 className={getHeadingStyles(theme)}>Why Multi-Theming?</h2>
          <p className={getTextStyles(theme)}>
            Multi-theming is not just about aesthetics—it's about accessibility,
            user preference, and creating inclusive experiences. Different users
            have different needs and preferences, and our application respects
            that.
          </p>
          <p className={getTextStyles(theme)}>
            Whether you prefer a clean, minimal interface or a vibrant, colorful
            experience, our themes are designed to provide the best possible
            user experience for your preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
