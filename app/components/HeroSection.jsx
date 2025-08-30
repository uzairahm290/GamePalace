import {Link} from 'react-router';
import {Image} from '@shopify/hydrogen';

/**
 * @param {{
 *   title?: string;
 *   subtitle?: string;
 *   ctaText?: string;
 *   ctaLink?: string;
 *   backgroundImage?: any;
 *   showGradient?: boolean;
 * }}
 */
export function HeroSection({
  title = "Welcome to GamePalace",
  subtitle = "Your ultimate destination for premium gaming gear and accessories",
  ctaText = "Shop Now",
  ctaLink = "/collections/all",
  backgroundImage,
  showGradient = true,
}) {
  return (
    <section className="hero-section">
      {/* Background with gradient overlay */}
      <div className="hero-background">
        {backgroundImage && (
          <Image
            data={backgroundImage}
            className="hero-bg-image"
            sizes="100vw"
          />
        )}
        {showGradient && <div className="hero-gradient" />}
        
        {/* Animated particles effect */}
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                '--delay': `${Math.random() * 3}s`,
                '--duration': `${2 + Math.random() * 3}s`,
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">
            <span className="hero-title-line">{title}</span>
          </h1>
          
          <p className="hero-subtitle">
            {subtitle}
          </p>
          
          <div className="hero-cta">
            <Link to={ctaLink} className="hero-button">
              <span className="hero-button-text">{ctaText}</span>
              <svg 
                className="hero-button-icon" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Floating gaming elements */}
        <div className="hero-floating-elements">
          <div className="floating-element floating-controller">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className="floating-element floating-headset">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1a3 3 0 0 1 3 3v4a3 3 0 0 1-6 0V4a3 3 0 0 1 3-3z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="23"/>
              <line x1="8" y1="23" x2="16" y2="23"/>
            </svg>
          </div>
          <div className="floating-element floating-keyboard">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
              <rect x="4" y="6" width="2" height="2"/>
              <rect x="7" y="6" width="2" height="2"/>
              <rect x="10" y="6" width="2" height="2"/>
              <rect x="13" y="6" width="2" height="2"/>
              <rect x="16" y="6" width="2" height="2"/>
              <rect x="4" y="9" width="2" height="2"/>
              <rect x="7" y="9" width="2" height="2"/>
              <rect x="10" y="9" width="2" height="2"/>
              <rect x="13" y="9" width="2" height="2"/>
              <rect x="16" y="9" width="2" height="2"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}
