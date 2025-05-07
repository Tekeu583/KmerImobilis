import React, { useState } from 'react';

interface PropertyCardProps {
  image: string;
  status?: string;
  type?: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
}
const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  status = 'Disponible',
  type = '',
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="relative bg-[#1C140D] border border-[#2B1F17] text-white rounded-xl overflow-hidden shadow-xl w-full hover:scale-[1.02] transition-transform duration-300">
      {/* Image + badges */}
      <div className="relative group">
        <img src={image} alt={title} className="w-full h-60 object-cover" />

        <span className="absolute top-3 left-3 bg-[#A05A2C] text-white text-xs font-semibold px-3 py-1 rounded-full">
          {status}
        </span>

        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-3 right-3 bg-black bg-opacity-30 rounded-full p-2"
        >
          <i className={`fas fa-heart text-sm transition duration-300 ${isFavorited ? 'text-white' : 'text-gray-400'}`}></i>        
        </button>
              {/* Tooltip */}
              <span className="absolute top-10 right-0 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
    {isFavorited ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      </span>
        <span className="absolute bottom-3 left-3 bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {type}
        </span>
      </div>

      {/* Infos principales */}
      <div className="p-5 space-y-2">
        <h3 className="font-semibold text-base">{title}</h3>
        <p className="text-sm text-gray-300 flex items-center gap-1">
          <i className="fas fa-map-marker-alt"></i> {location}
        </p>

        <div className="flex justify-between items-center">
          <p className="text-orange-400 font-bold text-lg">{price.toLocaleString()} FCFA</p>
          <span className="text-xs text-gray-400">par mois</span>
        </div>

        {/* Détails */}
        <div className="flex justify-between text-sm text-gray-300 pt-2 border-t border-gray-700 mt-3">
          <span><i className="fas fa-bed mr-1" />{bedrooms} chambres</span>
          <span><i className="fas fa-bath mr-1" />{bathrooms} SDB</span>
          <span><i className="fas fa-expand mr-1" />{area} m²</span>
        </div>
      </div>

      {/* Bouton */}
      <div className="px-5 pb-5">
        <button className="w-full bg-[#A05A2C] hover:bg-[#8c481d] text-white text-sm font-bold py-2 rounded-md transition duration-300">
          Voir le détail
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
