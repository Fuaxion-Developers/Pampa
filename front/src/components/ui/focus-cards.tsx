// "use client";

// import React, { useState } from "react";
// import { cn } from "../lib/utils";

// // Define the Card type
// type Card = {
//   title: string;
//   src: string;
// };

// export const CardComponent = React.memo(
//   ({
//     card,
//     index,
//     hovered,
//     setHovered,
//   }: {
//     card: Card; // Reemplaza "any" con el tipo "Card"
//     index: number;
//     hovered: number | null;
//     setHovered: React.Dispatch<React.SetStateAction<number | null>>;
//   }) => (
//     <div
//       onMouseEnter={() => setHovered(index)}
//       onMouseLeave={() => setHovered(null)}
//       className={cn(
//         "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
//         hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
//       )}
//     >
//       <img
//         src={card.src}
//         alt={card.title}
//         className="object-cover absolute inset-0 fill h-auto"
//       />
//       <div
//         className={cn(
//           "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
//           hovered === index ? "opacity-100" : "opacity-0"
//         )}
//       >
//         <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
//           {card.title}
//         </div>
//       </div>
//     </div>
//   )
// );

// CardComponent.displayName = "CardComponent";

// export function FocusCards({ cards }: { cards: Card[] }) {
//   const [hovered, setHovered] = useState<number | null>(null);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full bg-[--blanco]">
//       {cards.map((card, index) => (
//         <CardComponent
//           key={card.title}
//           card={card}
//           index={index}
//           hovered={hovered}
//           setHovered={setHovered}
//         />
//       ))}
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { cn } from "../lib/utils";

// Define the Card type
type Card = {
  title: string;
  src: string;
};

export const CardComponent = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 sm:h-72 md:h-80 lg:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover w-full h-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

CardComponent.displayName = "CardComponent";

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[--blanco]">
      {cards.map((card, index) => (
        <CardComponent
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
