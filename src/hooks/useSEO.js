import { useEffect } from 'react';

/**
 * Custom hook to dynamically manage document head metadata and schema injection.
 * 
 * @param {Object} seoConfig Configuration options for SEO
 * @param {string} seoConfig.title Page-specific title
 * @param {string} seoConfig.description Page-specific meta description
 * @param {string} seoConfig.keywords Page-specific meta keywords
 * @param {string} seoConfig.canonicalPath Path of the current page (e.g., "/about")
 * @param {string} [seoConfig.ogType='website'] Open Graph type
 * @param {string} [seoConfig.ogImage] URL of the Open Graph image
 * @param {boolean} [seoConfig.noindex=false] Whether to instruct crawlers not to index the page
 * @param {Object} [seoConfig.schema] JSON-LD schema object to inject dynamically
 */
export default function useSEO({
  title,
  description,
  keywords,
  canonicalPath,
  ogType = 'website',
  ogImage,
  noindex = false,
  schema
}) {
  useEffect(() => {
    // 1. Update Document Title
    const baseTitle = 'Premio Homes | Luxury Apartments in Lahore';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    // Helper to get or create meta tags
    const getOrCreateMeta = (selector, nameAttr, nameValue, propertyAttr) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (nameAttr) el.setAttribute(nameAttr, nameValue);
        if (propertyAttr) el.setAttribute(propertyAttr, nameValue);
        document.head.appendChild(el);
      }
      return el;
    };

    // 2. Meta Description
    if (description) {
      const descEl = getOrCreateMeta('meta[name="description"]', 'name', 'description');
      descEl.setAttribute('content', description);

      const ogDescEl = getOrCreateMeta('meta[property="og:description"]', null, null, 'property');
      ogDescEl.setAttribute('property', 'og:description');
      ogDescEl.setAttribute('content', description);

      const twitterDescEl = getOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description');
      twitterDescEl.setAttribute('content', description);
    }

    // 3. Meta Keywords
    if (keywords) {
      const keywordsEl = getOrCreateMeta('meta[name="keywords"]', 'name', 'keywords');
      keywordsEl.setAttribute('content', keywords);
    }

    // 4. Canonical URL
    const canonicalUrl = `https://www.premiohomes.com${canonicalPath || ''}`;
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    // og:url
    const ogUrlEl = getOrCreateMeta('meta[property="og:url"]', null, null, 'property');
    ogUrlEl.setAttribute('property', 'og:url');
    ogUrlEl.setAttribute('content', canonicalUrl);

    // 5. Open Graph & Twitter Titles
    if (title) {
      const ogTitleEl = getOrCreateMeta('meta[property="og:title"]', null, null, 'property');
      ogTitleEl.setAttribute('property', 'og:title');
      ogTitleEl.setAttribute('content', title);

      const twitterTitleEl = getOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title');
      twitterTitleEl.setAttribute('content', title);
    }

    // 6. Open Graph & Twitter Image
    if (ogImage) {
      const ogImgEl = getOrCreateMeta('meta[property="og:image"]', null, null, 'property');
      ogImgEl.setAttribute('property', 'og:image');
      ogImgEl.setAttribute('content', ogImage);

      const twitterImgEl = getOrCreateMeta('meta[name="twitter:image"]', 'name', 'twitter:image');
      twitterImgEl.setAttribute('content', ogImage);
    } else {
      // Default fallback OG image
      const defaultOgImage = 'https://www.premiohomes.com/og-image.jpg';
      const ogImgEl = getOrCreateMeta('meta[property="og:image"]', null, null, 'property');
      ogImgEl.setAttribute('property', 'og:image');
      ogImgEl.setAttribute('content', defaultOgImage);

      const twitterImgEl = getOrCreateMeta('meta[name="twitter:image"]', 'name', 'twitter:image');
      twitterImgEl.setAttribute('content', defaultOgImage);
    }

    // 7. Robots (noindex/nofollow)
    const robotsEl = getOrCreateMeta('meta[name="robots"]', 'name', 'robots');
    if (noindex) {
      robotsEl.setAttribute('content', 'noindex, nofollow');
    } else {
      robotsEl.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    }

    // 8. Dynamic Schema (JSON-LD)
    let schemaScript = document.getElementById('dynamic-schema-ldjson');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'dynamic-schema-ldjson';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else {
      if (schemaScript) {
        schemaScript.remove();
      }
    }
  }, [title, description, keywords, canonicalPath, ogType, ogImage, noindex, schema]);
}
