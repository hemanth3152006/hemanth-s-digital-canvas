import { useEffect, useRef, ReactNode } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

const LazyImage = ({ src, alt, className = '', placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23222" width="400" height="300"/%3E%3C/svg%3E' }: LazyImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imgRef.current) {
            imgRef.current.src = src;
            imgRef.current.classList.add('lazy-loaded');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, [src]);

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={placeholder}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 ${className}`}
      />
    </div>
  );
};

export default LazyImage;
