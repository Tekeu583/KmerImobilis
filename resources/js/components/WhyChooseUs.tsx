import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faStar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const WhyChooseUs = () => {
  return (
    <div className="bg-[#12100E] text-white py-16 px-4">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold bg-[#3B2C20] text-white px-4 py-1 rounded-full inline-block">
          Pourquoi nous choisir
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Une expérience immobilière exceptionnelle
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-base md:text-lg">
          Chez ImmobilisApp, nous visons l'excellence dans chaque aspect de notre service pour vous offrir une expérience immobilière sans égal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Carte 1 */}
        <div className="bg-[#1C140D] rounded-2xl p-9 text-center shadow-md">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#2A1D14] flex items-center justify-center">
            <FontAwesomeIcon icon={faBuilding} className="text-[#A2541D] text-3xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Biens de qualité</h3>
          <p className="text-gray-400 text-xl">
            Toutes nos propriétés sont soigneusement sélectionnées et vérifiées pour assurer confort et sécurité.
          </p>
        </div>

        {/* Carte 2 */}
        <div className="bg-[#1C140D] rounded-2xl p-9 text-center shadow-md">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#2A1D14] flex items-center justify-center">
            <FontAwesomeIcon icon={faStar} className="text-[#A2541D] text-3xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Service premium</h3>
          <p className="text-gray-400 text-xl">
            Notre équipe dédiée vous accompagne à chaque étape, de la recherche à l'emménagement.
          </p>
        </div>

        {/* Carte 3 */}
        <div className="bg-[#1C140D] rounded-2xl p-9 text-center shadow-md">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#2A1D14] flex items-center justify-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-[#A2541D] text-3xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Visites flexibles</h3>
          <p className="text-gray-400 text-xl">
            Organisez des visites à votre convenance, nos agents s'adaptent à votre emploi du temps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
