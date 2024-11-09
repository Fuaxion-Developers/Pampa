import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "PAPA NOEL SELLOS DE ALTO RELIEVE ",
    imageUrl:
      "https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894172/whatsapp-image-2024-09-25-at-11-35-44-ccc2952de44c1c05b717272753504201-320-0_qbnk4g.webp",
    color: "bg-gradient-to-b from-[#927363] to-[#6B432E]",
    link: "/alto-relieve",
    description: "Producto de alta calidad con diseño en relieve ideal para decoraciones elegantes.",
    price: "$150.00",
  },
  {
    name: "Bajo Relieve",
    imageUrl:
      "https://res.cloudinary.com/dkobjvdgn/image/upload/v1730680333/gt-121-a2d4e0895d8b3de88e16509933986796-640-0_eana4q.webp",
    color: "bg-gradient-to-b from-[#568880] to-[#2E6B62]",
    link: "/bajo-relieve",
    description: "Diseño en bajo relieve perfecto para ambientes sofisticados y modernos.",
    price: "$120.00",
  },
  {
    name: "Accesorios",
    imageUrl:
      "https://res.cloudinary.com/dkobjvdgn/image/upload/v1730658821/cf1-1800b81d409042107f16468453619669-1024-1024-removebg-preview_wqkjrl.png",
    color: "bg-gradient-to-b from-[#928C63] to-[#6B682E]",
    link: "/accesorios",
    description: "Accesorios decorativos para complementar cualquier espacio con estilo.",
    price: "$50.00",
  },
  {
    name: "Navidad",
    imageUrl:
      "https://res.cloudinary.com/dkobjvdgn/image/upload/v1730676159/papanoel_vgss14.png",
    color: "bg-gradient-to-b from-[#926365] to-[#6B2E2F]",
    link: "/navidad",
    description: "Decoraciones navideñas para llenar tu hogar del espíritu festivo.",
    price: "$80.00",
  },
  {
    name: "Verduras",
    imageUrl:
      "https://res.cloudinary.com/dkobjvdgn/image/upload/v1730658822/vd-02-221-7c78ddc023faaca73b16812220498947-480-0-removebg-preview_suvfzh.png",
    color: "bg-gradient-to-b from-[#736392] to-[#3E2E6B]",
    link: "/verduras",
    description: "Decoraciones de verduras para un toque natural y fresco en tu hogar.",
    price: "$70.00",
  },
  {
    name: "Sets",
    imageUrl:
      "https://res.cloudinary.com/dkobjvdgn/image/upload/v1730658821/4-redes1-7b0274d4b7988ae87916475475706234-640-0-removebg-preview_jmb59m.png",
    color: "bg-gradient-to-b from-[#638992] to-[#2E616B]",
    link: "/sets",
    description: "Sets completos para decoración y ambientación de espacios.",
    price: "$200.00",
  },
];

function TendenciesPrincipal() {
  return (
    <div className="bg-white">

      <h2 className="text-2xl  text-black  text-center mb-3 p-5">
        PRODUCTOS NOVEDOSOS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-1 md:p-8 ">
        {products.map((product, index) => (
          <Link href={product.link} key={index}>
            <div className="rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              <div
                className={` w-full aspect-square relative mb-3 w-44 h-44 mx-auto rounded-[10px]  overflow-hidden`}
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-contain rounded-md p-1"
                  priority
                />
              </div>
              <h2 className="text-base font-bold text-[#434343] mb-2 text-center mt-8">
                {product.name}
              </h2>
              {/* <p className="text-white font-normal text-center min-h-[80px]">
                {product.description}
              </p> */}
              {/* <p className="text-yellow-100 text-center font-bold mt-2">{product.price}</p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TendenciesPrincipal;

