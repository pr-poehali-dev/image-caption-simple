import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    gallerySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 animate-fade-in">
      <div className="max-w-4xl text-center space-y-8">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
          IMAGE GALLERY
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          Коллекция изображений, которые рассказывают истории через визуальный язык
        </p>
        <Button 
          onClick={scrollToGallery}
          variant="outline" 
          size="lg"
          className="mt-8 text-base px-8 py-6 rounded-none border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Смотреть галерею
        </Button>
      </div>
    </section>
  );
};

export default Hero;
