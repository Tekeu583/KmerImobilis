import React from 'react';

const OwnerSection = () => {
  return (
    <section className="bg-[#A05A2C] py-11 flex flex-col items-center text-center text-white space-y-4">
      <h2 className="text-4xl font-bold">Vous êtes propriétaire ?</h2>
      <p className="max-w-2xl text-xl text-gray-200">
        Inscrivez votre bien sur notre plateforme et bénéficiez de notre expertise
        pour une location rapide et sécurisée.
      </p>

      {/* Vidéo */}
      <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg">
  <video 
    src="/videos/im.mp4" 
    controls 
    className="w-full h-auto object-cover rounded-lg"
  />
</div>


      {/* Boutons */}
      <div className="flex gap-4 mt-6">
        <button className="bg-black/70 hover:bg-black/50 text-white font-bold py-3 px-6 rounded-full transition">
          Publier un bien
        </button>
        <button className="border border-white/20 hover:bg-white hover:bg-opacity-20 text-white font-bold py-3 px-6 rounded-full transition">
          En savoir plus
        </button>
      </div>
    </section>
  );
};

export default OwnerSection;
