import { UserPlus } from 'lucide-react';
import TextLink from '@/components/text-link';

export default function Inscription() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-[#141212] border border-white/10 rounded-xl shadow-lg w-full max-w-md p-8">
        <div className="flex flex-col items-center text-center text-white mb-6">
          <UserPlus className="w-10 h-10 text-[#a14f17]" />
          <h2 className="text-2xl font-bold mt-2">Créer un compte</h2>
          <p className="text-sm text-white/70 mt-1">
            Entrez vos informations pour créer votre compte
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Nom complet"
              className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-md text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#a14f17]"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-md text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#a14f17]"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-md text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#a14f17]"
            />
          </div>
          <div>
            <input
              type="password"
              name="password_confirmation"
              placeholder="Confirmer le mot de passe"
              className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-md text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#a14f17]"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-[#a14f17] text-white py-2 rounded-md font-semibold hover:bg-[#8f4213] animate-pulse transition duration-300"
          >
            S'inscrire
          </button>
         <div className="text-sm text-center text-white">
    <span className="mr-1">Vous êtes déjà inscrit ?</span>
    <TextLink href={route('login')} className="text-white underline hover:text-[#a14f17] hover:decoration-[#a14f17]">
        Cliquez ici
    </TextLink>
</div>

        </form>
      </div>
    </div>
  );
}
