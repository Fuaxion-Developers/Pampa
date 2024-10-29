import React from 'react'

const About = () => {
  return (
    <div>
      {/* Sobre Nosotros */}
      <section className="bg-black/30 backdrop-blur-md rounded-3xl p-8 mb-8">
        <h2 className="text-3xl font-serif text-yellow-100 mb-6">
          Sobre Nosotros
        </h2>
        <p className="text-white mb-4">
          Pampa Sellos es tu destino para sellos decorativos de alta calidad.
          Nos especializamos en ofrecer una amplia gama de sellos, plantillas y
          accesorios para todas tus necesidades creativas.
        </p>
        <p className="text-white">
          Con años de experiencia en el mercado, nos enorgullece brindar
          productos excepcionales y un servicio al cliente inigualable.
        </p>
      </section>
    </div>
  );
}

export default About
