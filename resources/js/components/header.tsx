import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import { Search } from 'lucide-react';
import logo from '/images/App1.png';
import { UserPlus, LogOut } from 'lucide-react';
import { usePage } from '@inertiajs/react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const { url } = usePage();
const isActive = (path: string) => url === path;  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/40 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
      <nav className="flex justify-between items-center px-2 py-1 bg-transparent text-white">
        <div className="flex items-center space-x-6">
          <img src='/images/App1.png' alt="Logo" className="w-40 h-13"/>
        </div>
        <div className="flex-1">
        <ul className="flex space-x-6 text-lg justify-center ml-[-2px]">
          <li>
  {window.location.pathname === "/" ? (
    <span className="text-brown-700 cursor-default">Acceuil</span>
  ) : (
    <Link
      href="/"
      className="hover:text-gray-300"
    >
      Acceuil
    </Link>
  )}
</li>
          <li>
  <Link
    href="/proprietes"
    className={`hover:text-white ${isActive("/proprietes") ? "text-brown-700" : "text-gray-300"}`}
  >
    Propriétés
  </Link>
</li>

          <li>
            {/*<a href="/maisons" className={`text-gray-200 hover:text-white ${
              window.location.pathname === "/maisons" ? "text-brown-700" : ""
            }`}
            >
              Maisons
            </a>*/}
          </li>
         <li>
  <Link
    href={route("a-propos")}
    className={`hover:text-white ${isActive("/a-propos") ? "text-brown-700" : "text-gray-300"}`}
  >
    A Propos
  </Link>
</li>

          <li>
  <Link
    href="/contact"
    className={`hover:text-white ${isActive("/contact") ? "text-brown-700" : "text-gray-300"}`}
  >
    Contact
  </Link>
</li>

        </ul>
        </div>
        <div className="flex items-center gap-5">
{/* Icône S'inscrire */}
<Link href={route('inscription')} title="S'inscrire">
    <UserPlus className="w-12 h-12 text-white inline hover:text-gray-300 transition rounded-full bg-brown-700 px-3 py-3"/>
    <span>S'inscrire</span>
  </Link>

  {/* Icône de déconnexion */}
   {/* Icône Déconnexion en marron */}
   {/*<a href="/deconnexion" title="Se déconnecter">
    <LogOut className="w-6 h-6 inline text-[#A0522D] hover:text-gray-400 transition" />
    <span>Déconnexion</span>
  </a>*/}
        <button className="bg-brown-700 text-white px-3 py-3 text-sm rounded-full hover:bg-transparent hover:scale-105 transition-transform duration-300">Publier un bien</button>
        </div>
      </nav>
    </header>
  );
} 

