import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Decosellos Alto Relieve",
      src: "https://res.cloudinary.com/dkobjvdgn/image/upload/v1727054006/card2_sracbx.png",
    },
    {
      title: "Decosellos Bajo Relieve",
      src: "https://res.cloudinary.com/dkobjvdgn/image/upload/v1727053215/card1_mw9bx7.png",
    },
    {
      title: "Accesorios",
      src: "https://res.cloudinary.com/dkobjvdgn/image/upload/v1727053215/card1_mw9bx7.png",
    },
    {
      title: "Camping is for pros",
      src: "https://res.cloudinary.com/dkobjvdgn/image/upload/v1727053215/card1_mw9bx7.png",
    },
    {
      title: "The road not taken",
      src: "https://res.cloudinary.com/dkobjvdgn/image/upload/v1727053215/card1_mw9bx7.png",
    },
    {
      title: "The First Rule",
      src: "https://res.cloudinary.com/dkobjvdgn/image/upload/v1727053215/card1_mw9bx7.png",
    },
  ];

  return <FocusCards cards={cards} />;
}
