import Header from '../components/header';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faTag, faCommentDots, faPen} from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <div className="bg-black min-h-screen text-white">
      <>
      {/* HEADER fixé en haut */}
      <Header />
      

      {/* ESPACE vide pour compenser la hauteur du header */}
      <div className="h-[100px]" /> {/* ajuste selon la hauteur réelle du header */}

      {/* SECTION MARRON */}
      <section className="w-full bg-[#835122] py-20">
        <div className="max-w-2xl mx-auto px-9 text-center">
          <h1 className="text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-lgx  leading-relaxed text-gray-300">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
            et vous accompagner dans votre recherche immobilière.
          </p>
        </div>
      </section>

       {/* Section formulaire + cartes */}
       <section className="w-full bg-black py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        

          {/* Formulaire */}
           <div className="bg-[#0e0803] rounded-lg border bg-card text-card-foreground w-full border-none shadow-lg overflow-hidden p-8">
            <div className="bg-brown-700 flex flex-col space-y-1.5 p-6 bg-primary text-primary-foreground mb-4
            ">
              <h2 className="font-bold tracking-tight text-center text-2xl">Envoyez-nous un message</h2>
              <p className="text-sm font-serif text-center text-primary-foreground/80">Remplissez le formulaire ci-dessous pour nous contacter.</p>
            </div>
            <form className="space-y-6">
              <div className="relative">
                <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8d704f]" />
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="pl-10 w-full py-3 bg-[#2c2c2c] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8d704f]"
                />
              </div>
              <div className="relative">
                <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8d704f]" />
                <input
                  type="email"
                  placeholder="Adresse email"
                  className="pl-10 w-full py-3 bg-[#2c2c2c] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8d704f]"
                />
              </div>
               {/* Téléphone */}
             <div className="relative">
             <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8d704f]" />
             <input
             type="tel"
             placeholder="Numéro de téléphone"
             className="pl-10 w-full py-3 bg-[#2c2c2c] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8d704f]"
    />      </div>
     {/* Sujet */}
  <div className="relative">
    <FontAwesomeIcon icon={faPen} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8d704f]" />
    <input
      type="text"
      placeholder="Sujet"
      className="pl-10 w-full py-3 bg-[#2c2c2c] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8d704f]"
    />
  </div>
              <div className="relative">
                <FontAwesomeIcon icon={faCommentDots} className="absolute left-3 top-4 text-[#8d704f]" />
                <textarea
                  placeholder="Votre message"
                  className="pl-10 pt-3 w-full h-32 bg-[#2c2c2c] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8d704f]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-brown-700 hover:bg-[#7c4f22] text-white py-3 px-20 rounded-md font-semibold transition transform hover:-translate-y-3 duration-300 ease-in-out"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* Cartes infos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Téléphone', content: '+237 6 51 98 01 78', icon: faPhone },
              { title: 'Email', content: 'contact@immobilis.com', icon: faEnvelope },
              { title: 'Adresse', content: 'Douala, Cameroun', icon: faUser },
              { title: 'Disponibilité', content: 'Lun - Ven, 8h - 18h', icon: faCommentDots },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-[#0e0803] rounded-lg p-6 shadow text-white text-center transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <FontAwesomeIcon icon={card.icon} className="text-[#9e643a] text-xl rounded-full p-4 w-6 h-6 bg-[#160d06] mb-2" />
                <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                <p className="text-sm text-[#e6d7cc]">{card.content}</p>
              </div>
            ))}
         </div>
        </div>
        <div className=" w-full mt-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127357.5462317032!2d9.659401478068062!3d4.0360708372409935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128be2e1fe6d%3A0x92daa1444781c48b!2sDouala!5e0!3m2!1sen!2scm!4v1747963581203!5m2!1sen!2scm"
        className="w-full h-[500px] border-0"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
      </section>
      </>
          <Footer />
    </div>
  );
}
