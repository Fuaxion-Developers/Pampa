import React from 'react'

const Contact = () => {
  return (
    <div>
      {/* Contáctanos */}
      <section className="bg-black/30 backdrop-blur-md rounded-3xl p-8">
        <h2 className="text-3xl font-serif text-yellow-100 mb-6">
          Contáctanos
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-2 bg-white/10 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-white/10 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Mensaje"
            rows={4}
            className="w-full p-2 bg-white/10 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black hover:bg-yellow-500 transition-colors py-2 rounded-md"
          >
            Enviar Mensaje
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact
