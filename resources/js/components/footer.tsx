const Footer = () => (
  <footer className="bg-[#1e1a17] text-white py-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* DoualaAbode Info */}
      <div>
        <h2 className="text-2xl font-bold text-[#b45f28] mb-4">ImmobilisApp</h2>
        <p className="text-gray-400 mb-4 text-lg">
          Votre partenaire immobilier de confiance à Douala. Nous vous aidons à trouver le logement parfait dans les meilleurs quartiers de la ville.
        </p>
        <div className="flex space-x-4">
          <a href="#"><i className="fab fa-facebook-f rounded-full w-9 h-9 text-center p-2 bg-black/70 border border-white/20 text-white hover:bg-brown-600"></i></a>
          <a href="#"><i className="fab fa-instagram rounded-full w-9 h-9 text-center p-2 bg-black/70 border border-white/20 text-white hover:bg-brown-600"></i></a>
          <a href="#"><i className="fab fa-twitter rounded-full w-9 h-9 text-center p-2 bg-black/70 border border-white/20 text-white hover:bg-brown-600"></i></a>
          <a href="#"><i className="fab fa-linkedin-in rounded-full w-9 h-9 text-center p-2 bg-black/70 border border-white/20 text-white hover:bg-brown-600"></i></a>
        </div>
      </div>

      {/* Liens rapides */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white">Accueil</a></li>
          <li><a href="#" className="hover:text-white">Proprietes</a></li>
          <li><a href="#" className="hover:text-white">A Propos</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li>
          <li><a href="#" className="hover:text-white">Conditions d'utilisation</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact</h3>
        <ul className="text-gray-400 space-y-3">
          <li className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-[#b45f28]"></i>
            Ndogbond, Douala, Cameroun
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-phone-alt text-[#b45f28]"></i>
            +237 651 98 01 78
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-envelope text-[#b45f28]"></i>
            isismassoda@gmail.com
          </li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
        <p className="text-gray-400 mb-4">
          Abonnez-vous pour recevoir nos dernières offres immobilières
        </p>
        <form className="flex">
          <input
            type="email"
            placeholder="Votre email"
            className="p-2 rounded-l bg-[#141210] border border-gray-600 text-white focus:outline-none focus:border-[#b45f28]"
          />
          <button
            type="submit"
            className="bg-[#b45f28] text-white px-4 py-2 rounded-r hover:bg-[#d1793c]"
          >
            S'abonner
          </button>
        </form>
        <p className="text-gray-500 text-xs mt-2">
          En vous inscrivant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
        </p>
      </div>
    </div>

    {/* Bas de page */}
    <div className="mt-10 border-t border-white/5 pt-4 text-center text-gray-400 text-2lg">
      © 2025 ImmobilisApp. Tous droits réservés.
    </div>
  </footer>
);

export default Footer;