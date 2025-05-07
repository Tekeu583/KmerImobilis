import React from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import SearchBar from '../components/searchbar';
import PropertiesCard from '../components/PropertiesCard';
import WhyChooseUs from '../components/WhyChooseUs';
import Owner from '../components/Owner';
import Footer from '../components/footer';

/*import VerticalMenu from '../components/verticalMenu';*/


const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <SearchBar />
      {/* TITRE + SOUS-TITRE */}
      {/* SECTION TITRE + SOUS-TITRE */}
<div className="bg-[#1C140D] text-white text-center py-16">
  <span className="text-sm font-semibold bg-[#3B2C20] text-white px-4 py-1 rounded-full tracking-wide uppercase">
    Propriétés en vedette
  </span>
  
  <h2 className="text-4xl md:text-4xl font-extrabold mt-4">
    Nos meilleures sélections
  </h2>
  
  <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-base md:text-lg">
    Découvrez nos biens immobiliers les plus prisés à Douala, sélectionnés pour leur qualité exceptionnelle et leur emplacement.
  </p>
</div>
      <div className="bg-[#1C140D] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 px-6 pb-10">
      <PropertiesCard 
        image="/images/Loc1 - Copie - Copie (3)/isis1.jpg" 
        title="Appartement Moderne" 
        location="Douala, Kotto" 
        price={90000} 
        bedrooms={2} 
        bathrooms={2} 
        area={1200}
        type='appartement'
      />
      <PropertiesCard 
        image="/images/Loc1 - Copie - Copie (2)/ari1.jpg" 
        title="Studio moderne" 
        location="Douala, Logbessou" 
        price={40000} 
        bedrooms={1} 
        bathrooms={1} 
        area={1200} 
        type="studio"
      />
      <PropertiesCard 
        image="/images/Loc1 - Copie - Copie/bj1.jpg" 
        title="Studio moderne" 
        location="Douala, Japoma" 
        price={55000} 
        bedrooms={1} 
        bathrooms={1} 
        area={1200} 
        type="studio"
      />
      <PropertiesCard 
        image="/images/Loc1 - Copie/test2.jpg" 
        title="Studio moderne" 
        location="Douala, Cite des Palmiers" 
        price={80000} 
        bedrooms={1} 
        bathrooms={1} 
        area={1200}
        type="studio" 
      />
      <PropertiesCard 
        image="/images/Loc1/maison2.jpg" 
        title="Studio moderne" 
        location="Douala, Entree Laique PK8" 
        price={70000} 
        bedrooms={1} 
        bathrooms={1} 
        area={1200}
        type="studio"
        />
        <PropertiesCard 
        image="/images/Loc 72/immo1.jpg" 
        title="Appartement de luxe" 
        location="Douala, Ari Village" 
        price={100000} 
        bedrooms={2} 
        bathrooms={2} 
        area={1200} 
        type="appartement"
        />
      </div>
<div className="w-full flex justify-center mt-10">
  <button className="flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-brown-800 transition duration-300">
    Voir toutes les propriétés
    <i className="fas fa-arrow-right"></i>
  </button>
</div>
      </div>
      </div>
      <WhyChooseUs />
      <div className="px-6 md:px-16 bg-black/90 shadow-lg shadow-black/90 backdrop-blur-md p-12">
  <div className="-mb-10 pl-12">
    <span className="inline-block px-3 py-1 text-sm text-white bg-gray-800 rounded-full">Catalogue</span>
    <h2 className="text-4xl font-bold text-white mt-4">Propriétés disponibles</h2>
    <p className="text-gray-400 mt-2">6 biens trouvés</p>
  </div>
  <div className="flex justify-between items-center mb-12 pr-12">
  <div className="flex gap-4"> 
  </div>
{/* Bouton Favoris tout à droite */}
  <button className="flex items-center gap-2 -mt-4 px-4 py-2 border border-white/20 rounded-lg text-white font-semibold text-sm hover:bg-white/10 transition">
    <i className="far fa-heart"></i>
    Favoris
  </button>
  
</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 px-6 pb-10">
      <PropertiesCard 
        image="/images/Loc1 - Copie - Copie (4)/frangin1.jpg" 
        title="Appartement Moderne" 
        location="Douala, Logbessou" 
        price={90000} 
        bedrooms={2} 
        bathrooms={1} 
        area={1200}
        type='appartement'
      />
      <PropertiesCard 
        image="/images/Loc1 - Copie - Copie (2)/ari1.jpg" 
        title="Studio moderne" 
        location="Douala, Logbessou" 
        price={40000} 
        bedrooms={1} 
        bathrooms={1} 
        area={1200} 
        type="studio"
      />
      <PropertiesCard 
        image="/images/Loc1 - Copie - Copie/bj1.jpg" 
        title="Studio moderne" 
        location="Douala, Japoma" 
        price={55000} 
        bedrooms={1} 
        bathrooms={1} 
        area={1200} 
        type="studio"
      />
      <PropertiesCard 
        image="/images/Loc1 - Copie/test2.jpg" 
        title="Studio moderne" 
        location="Douala, Cite des Palmiers" 
        price={80000} 
        bedrooms={1} 
        bathrooms={1} 
        area={1200}
        type="studio" 
      />
      <PropertiesCard 
        image="/images/Loc1/maison2.jpg" 
        title="Studio moderne" 
        location="Douala, Entree Laique PK8" 
        price={70000} 
        bedrooms={1} 
        bathrooms={1} 
        area={1200}
        type="studio"
        />
        <PropertiesCard 
        image="/images/Loc 72/immo1.jpg" 
        title="Appartement de luxe" 
        location="Douala, Ari Village" 
        price={100000} 
        bedrooms={2} 
        bathrooms={2} 
        area={1200} 
        type="appartement"
        />
      </div>
    </div >
      </div >
      <Owner />
      <Footer />
    </div>
  );
};

export default Home;
