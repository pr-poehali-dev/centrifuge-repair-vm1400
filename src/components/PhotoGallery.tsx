import { useState } from "react";
import Icon from "@/components/ui/icon";

interface GalleryImage {
  src: string;
  alt: string;
  label?: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
}

const PhotoGallery = ({ images }: PhotoGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => openModal(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon name="ZoomIn" size={32} className="text-white drop-shadow-lg" />
              </div>
            </div>
            {image.label && (
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                {image.label}
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in"
          onClick={closeModal}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-50"
            onClick={closeModal}
          >
            <Icon name="X" size={32} />
          </button>

          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 bg-white/10 hover:bg-white/20 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <Icon name="ChevronLeft" size={32} />
          </button>

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 bg-white/10 hover:bg-white/20 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <Icon name="ChevronRight" size={32} />
          </button>

          <img
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
