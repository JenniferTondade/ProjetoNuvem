const express = require("express");
const cors = require("cors");
const path = require("path"); // útil para caminhos absolutos

const app = express();
const PORT = 25000;

app.use(cors());
app.use(express.json());

app.use("/imgs", express.static(path.join(__dirname, "imgs")));

const checklist = [
  {
    categoria: "Alimentação",
    icone: "🥛",
    cor: "alimentacao",
    foto: "/imgs/Alimentação.png", 
    itens: ["Mamadeiras", "Escova de limpeza", "Leite em pó", "Babadores"]
  },
  {
    categoria: "Roupinhas",
    icone: "👕",
    cor: "roupinhas",
    foto: "/imgs/Roupinhas.png",
    itens: ["Body de manga curta", "Macacões", "Meias e luvinhas", "Manta de algodão"]
  },
  {
    categoria: "Higiene",
    icone: "🧴",
    cor: "higiene",
    foto: "/imgs/Higiene.png",
    itens: ["Fraldas descartáveis", "Lenços umedecidos", "Pomada antiassaduras", "Toalhas de banho"]
  },
  {
    categoria: "Mala da Maternidade",
    icone: "🎒",
    cor: "mala",
    foto: "/imgs/Mala da Maternidade.png",
    itens: ["Documentos da mãe", "Trocas de roupa do bebê", "Kit de higiene", "Roupas confortáveis"]
  },
  {
    categoria: "Extras",
    icone: "💤",
    cor: "extras",
    foto: "/imgs/Extras.png",
    itens: ["Travesseiro pequeno", "Cobertor leve", "Chupetas", "Garrafa térmica"]
  },
  {
    categoria: "Brinquedos",
    icone: "🧸",
    cor: "brinquedos",
    foto: "/imgs/Brinquedos.png",
    itens: ["Chocalhos", "Bonecos", "Mordedores", "Livros educativos"]
  }
];

app.get("/api/data", (req, res) => {
  res.json({ checklist });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Back-end rodando em http://localhost:${PORT}`);
});
