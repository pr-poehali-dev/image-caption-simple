import { useState } from "react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  description: string;
  height: number;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/img/3eb48751-ddfb-4f88-8e2b-eb66ab7c95ac.jpg",
    title: "Архитектурная симметрия",
    description: "Минималистичная архитектура в чистых линиях",
    height: 400
  },
  {
    id: 2,
    src: "/img/c1859749-81b4-4f0f-9ace-841ecc38bfc2.jpg",
    title: "Абстрактное искусство",
    description: "Современная скульптурная инсталляция",
    height: 500
  },
  {
    id: 3,
    src: "/img/97920fc6-d742-426a-b373-0a7865c20cb9.jpg",
    title: "Натюрморт",
    description: "Органические формы в пространстве",
    height: 450
  },
  {
    id: 4,
    src: "/img/3eb48751-ddfb-4f88-8e2b-eb66ab7c95ac.jpg",
    title: "Геометрия света",
    description: "Игра света и тени в архитектуре",
    height: 520
  },
  {
    id: 5,
    src: "/img/c1859749-81b4-4f0f-9ace-841ecc38bfc2.jpg",
    title: "Современное пространство",
    description: "Галерейная экспозиция",
    height: 380
  },
  {
    id: 6,
    src: "/img/97920fc6-d742-426a-b373-0a7865c20cb9.jpg",
    title: "Текстуры и формы",
    description: "Композиция естественных элементов",
    height: 470
  }
];

const Gallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Галерея</h2>
          <p className="text-muted-foreground text-lg font-light">
            Визуальные истории в каждом кадре
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid animate-fade-in group"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'backwards'
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden bg-secondary">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ height: `${item.height}px` }}
                />
                <div
                  className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-end p-6 ${
                    hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="text-white space-y-2">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="text-sm font-light text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
