// Large top-of-page photo (the page's LCP image): loaded first, decoded off the main thread, and on phones
// a smaller Wikimedia thumbnail (960px) instead of the 1280px one when the URL is a standard thumbnail.
export default function HeroImg({ src, alt, className }) {
  const small = /\/1280px-/.test(src) ? src.replace("/1280px-", "/960px-") : null;
  return (
    <img
      className={className}
      src={src}
      srcSet={small ? `${small} 960w, ${src} 1280w` : undefined}
      sizes={small ? "(max-width: 960px) 100vw, 1280px" : undefined}
      alt={alt}
      fetchPriority="high"
      decoding="async"
    />
  );
}
