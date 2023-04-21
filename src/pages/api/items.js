// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id:0,
      title: "Polo con estampado Regular Fit - Beige",
      price: 30,
      image: "http://localhost:3000/image/Polo-Beige.webp",
      description:
        "Polo en punto suave de algodón con motivo estampado. Modelo de corte estándar con cuello redondo y bajo recto."
    },
    {
      id:1,
      title: "Polo con estampado Regular Fit - Azul",
      price: 30,
      image: "http://localhost:3000/image/Polo-Azul.webp",
      description:
        "Polo en punto suave de algodón con motivo estampado. Modelo de corte estándar con cuello redondo y bajo recto."
    },
    {
      id:2,
      title: "Vestido con escote V - Negro",
      price: 55,
      image: "http://localhost:3000/image/dress-black.webp",
      description:
        "Vestido en popelina de mezcla de algodón y viscosa. Modelo con escote en V, mangas cortas amplias voluminosas y elástico ceñido revestido en los puños. Sin forro."
    },
    {
      id:3,
      title: "Vestido con escote V - Rojo Floral",
      price: 55,
      image: "http://localhost:3000/image/dress-RojoFloral.webp",
      description:
        "Vestido en popelina de mezcla de algodón y viscosa. Modelo con escote en V, mangas cortas amplias voluminosas y elástico ceñido revestido en los puños. Sin forro."
    },
    {
      id:4,
      title: "Sudadera con motivo estampado - Verde Palo",
      price: 62,
      image: "http://localhost:3000/image/Sudadera-verdePalo.webp",
      description:
        "Polera de corte holgado en mezcla de algodón con motivos estampados adelante. Modelo de hombros caídos con cuello, puños y bajo en punto elástico acanalado. Interior cepillado suave."
    },
    {
      id:5,
      title: "Joggers de deporte - Azul Oscuro",
      price: 87,
      image: "http://localhost:3000/image/Pantalon-azulOscuro.webp",
      description:
        "Joggers de punto para entrenar en interior o al aire libre. Modelo con elástico revestido y cordón de ajuste en la cintura, bolsillos laterales con cierre para guardar tus objetos de valor y puños en el bajo."
    }
  ])
}
