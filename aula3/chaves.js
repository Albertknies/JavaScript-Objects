const cliente = {
  nome: "João",
  idade: "24",
  email: "joao@firma.com",
  telefone: ["112556568", "22233335556"],
};

cliente.enderecos = [
  {
    rua: "R. teste",
    numero: "1457",
    apartamento: true,
    complemento: "ap 398",
  },
];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter um endereço cadastyrado");
}
