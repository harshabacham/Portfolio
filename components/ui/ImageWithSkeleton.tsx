import React, { useState } from 'react';

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: string;
  skeletonClassName?: string;
  containerClassName?: string;
}

export const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = '',
  skeletonClassName = '',
  containerClassName = '',
  onLoad,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  return (
    <div className={`relative overflow-hidden w-full ${aspectRatio} ${containerClassName}`}>
      {/* High-fidelity Skeleton Loader */}
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-neutral-100 dark:bg-neutral-900/60 animate-pulse flex flex-col items-center justify-center transition-opacity duration-500 z-10 border border-black/[0.03] dark:border-white/[0.04] rounded-inherit ${aspectRatio ? '' : 'min-h-[300px]'} ${skeletonClassName}`}
        >
          {/* Elegant subtle grid pattern inside loader for premium vibe */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none opacity-50"></div>
          
          {/* Subtle spinner indicator */}
          <div className="relative flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border border-neutral-200/50 dark:border-neutral-800/50"></div>
            <div className="absolute w-8 h-8 rounded-full border border-transparent border-t-[#FF5A36] dark:border-t-[#FF5A36] animate-spin"></div>
          </div>
          
          {/* Ultra subtle text label */}
          <span className="mt-3 font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-bold select-none">
            loading archive
          </span>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        className={`transition-opacity duration-[1s] ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        {...props}
      />
    </div>
  );
};
