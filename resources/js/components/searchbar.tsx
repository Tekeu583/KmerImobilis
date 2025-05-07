import React from 'react';

const SearchBar = () => {
    return (
        <div className="bg-black bg-opacity-86 p-6 shadow-md">
            <div className="relative -mt-10 z-20 bg-gray-950 bg-opacity-75 px-9 py-5 rounded-lg shadow-lg mx-auto max-w-4xl w-full">
            <h2 className="text-white text-3xl font-bold mb-4 text-center">Trouvez votre logement idéal</h2>
            <div className="flex justify-center space-x-4">
                <select className="bg-gray-800 text-white border border-gray-700 rounded-lg px-14 py-2  focus:ring-brown-700 focus:border-brown-700 focus:border-4">
                    <option>Tous les types</option>
                    <option>Appartements</option>
                    <option>Maisons</option>
                    <option>Studios</option>
                </select>
                <select className="bg-gray-800 text-white border border-gray-700 rounded-lg px-14 py-2 focus:ring-brown-700 focus:border-brown-700 focus:border-4">
                    <option>Tous les quartiers</option>
                    <option>Centre-ville</option>
                    <option>Banlieue</option>
                    <option>Rive gauche</option>
                </select>
                <button className="bg-brown-700 text-white rounded px-14 py-2 hover:bg-opacity-75 transition duration-300">
                <i className="fas fa-search mr-2"></i> 
                     Rechercher
                </button>
            </div>
        </div>
        </div>

    );
};

export default SearchBar;