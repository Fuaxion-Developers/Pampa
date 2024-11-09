// import Image from 'next/image';
// import React from 'react'

// const FeaturedProducts = () => {
//   return (
//     <div>
//       {/* Productos Destacados */}
//       <section className=" backdrop-blur-md  p-8 ">
//         <h2 className="text-3xl font-serif text-yellow-100 mb-6 text-center">
//           CATEGORIAS DE SELLOS
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {[1, 2, 3, 4, 5, 6].map(item => (
//             <div
//               key={item}
//               className="bg-white/5 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
//             >
//               <Image
//                 src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1730225305/alto_relieve_jrs3mf.svg"
//                 alt={`Producto ${item}`}
//                 width={200}
//                 height={200}
//                 className="mx-auto mb-4 rounded-lg"
//               />
//               <h3 className="text-xl text-yellow-100 mb-2 text-center">
//                 Alto relieve{item}
//               </h3>
//               {/* <p className="text-white">Descripción breve del producto {item}.</p> */}
//             </div>
//           ))}
//         </div>
//       </section>
//       ;
//     </div>
//   );
// }

// export default FeaturedProducts



import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Alto Relieve",
    imageUrl:
      "https://res.cloudinary.com/dkobjvdgn/image/upload/v1730658822/az-251-bd2807d839c3c7e7b316458171757244-640-0-removebg-preview_z7zwqa.png",
    color: "bg-gradient-to-b from-[#927363] to-[#6B432E]",
    link: "/alto-relieve",
  },
  {
    name: "Bajo Relieve",
    imageUrl:
      "https://res.cloudinary.com/dkobjvdgn/image/upload/v1730658821/bram-031-c35609f3fad0cebcfc16462581223030-1024-1024-removebg-preview_oloocd.png",
    color: "bg-gradient-to-b from-[#568880] to-[#2E6B62]",
    link: "/bajo-relieve",
  },
  {
    name: "Botánica",
    imageUrl:
      "https://res.cloudinary.com/dkobjvdgn/image/upload/v1730658821/cf1-1800b81d409042107f16468453619669-1024-1024-removebg-preview_wqkjrl.png",
    color: "bg-gradient-to-b from-[#928C63] to-[#6B682E]",
    link: "/accesorios",
  },
  {
    name: "Oro",
    imageUrl:
      "https://res.cloudinary.com/dkobjvdgn/image/upload/v1730676159/papanoel_vgss14.png",
    color: "bg-gradient-to-b from-[#926365] to-[#6B2E2F]",
    link: "/navidad",
  },
  {
    name: "Puntillas",
    imageUrl:
      "https://res.cloudinary.com/dkobjvdgn/image/upload/v1730658822/vd-02-221-7c78ddc023faaca73b16812220498947-480-0-removebg-preview_suvfzh.png",
    color: "bg-gradient-to-b from-[#736392] to-[#3E2E6B]",
    link: "/verduras",
  },
  {
    name: "Accesorios",
    imageUrl:
      "https://res.cloudinary.com/dkobjvdgn/image/upload/v1730658821/4-redes1-7b0274d4b7988ae87916475475706234-640-0-removebg-preview_jmb59m.png",
    color: "bg-gradient-to-b from-[#638992] to-[#2E616B]",
    link: "/sets",
  },
];

function CategoriesPrincipal() {
  return (
    <div className=" m-10">
      <h2 className="text-2xl  text-yellow-100 text-center">
        CATEGORÍAS DE SELLOS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-8 bg-black">
        {categories.map((category, index) => (
          <Link href={category.link} key={index}>
            <div className="bg-white/5 rounded-lg p-4 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              <div
                className={`aspect-square relative mb-3 w-44 h-44 mx-auto rounded-[10px] ${category.color} shadow-[9px_11px_4px_0px_#9593A2] overflow-hidden`}
              >
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  fill
                  className="object-contain rounded-md p-4"
                  priority
                />
              </div>
              <h2 className="text-xl text-yellow-100 mb-2 text-center mt-8">
                {category.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPrincipal;
