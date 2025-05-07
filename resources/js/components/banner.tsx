import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faArrowRight } from '@fortawesome/free-solid-svg-icons';//
import { faArrowRight, faBuilding, faHouse, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
const slides = [
  {
    image: '/images/im.jpg',
    title: 'Trouvez votre maison idéale à Douala',
    subtitle: 'Des propriétés de qualité dans les meilleurs quartiers',
    textPosition: 'items-start'
  },
  {
    image: '/images/im3.jpg',
    title: 'Des appartements modernes pour tous les budgets',
    subtitle: 'Confort, sécurité et emplacement de choix',
    textPosition: 'items-center'
  },
  {
    image: '/images/im1.jpg',
    title: 'Résidences de luxe avec vues imprenables',
    subtitle: 'Lexcellence immobilière au cœur de la ville',
    textPosition: 'items-end'
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('maisons');
  // 🔄 On retire fade, plus nécessaire
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { title, subtitle, textPosition } = slides[currentSlide];
  const textAlignClass = {
    'items-start': 'text-left',
    'items-center': 'text-center',
    'items-end': 'text-right',
  }[textPosition]; // 🔧 On déduit l’alignement horizontal à partir de l’alignement vertical
  

    return (
      <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
            {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out 
        ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      style={{
        backgroundImage: `url(${slide.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        willChange: 'opacity',
        transition: 'opacity 1s ease-in-out',
      }}
    >
     <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
))}

      <div className="absolute inset-0 bg-black opacity-50"></div>
<div className={`relative z-10 flex flex-col ${textPosition} justify-center h-full px-10 text-white space-y-4`}>
<div className={`${textAlignClass}`}>
<h1 className="text-4xl md:text-6xl font-bold max-w-3xl">{title}</h1>
<p className="text-lg md:text-2xl max-w-2xl mt-4">{subtitle}</p>
  </div>
  <div className="space-x-4 mt-4">
    <div className="flex space-x-4">
      <button className="flex items-center px-12 py-4 text-sm bg-brown-700 text-white rounded-full hover:bg-brown-600 hover:opacity-75">
        Explorer
        <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
      </button>
      <button className="px-12 py-4 text-sm bg-gray-800 border border-gray-400 rounded-full hover:bg-gray-400 hover:opacity-75">
        En savoir plus
      </button>
    </div>
  </div>
  
  {/* 🔽 Filtres de catégories (Appartements, Maisons, Studios) */}
  <div className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 flex justify-center gap-4 bg-black/50 backdrop-blur-md px-6 py-2 rounded-full w-fit z-30">
  {[
            { label: 'Appartements', icon: faBuilding, value: 'appartements' },
            { label: 'Maisons', icon: faHouse, value: 'maisons' },
            { label: 'Studios', icon: faDoorOpen, value: 'studios' },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium transition ${
                selectedCategory === cat.value ? 'bg-brown-700' : 'hover:bg-brown-600'
              }`}
            >
              <FontAwesomeIcon icon={cat.icon} className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

  {/* Dots */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`transition-all duration-300 rounded-full ${
          index === currentSlide
            ? 'w-9 h-2 bg-white' // dot actif : capsule
            : 'w-2 h-2 bg-white/50' // dot inactif : petit cercle
        }`}
      />
    ))}
  </div>
</div>
  </div>
  );
} 
