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

cliente.enderecos.push({
  rua: "R. 22222",
  numero: "222222",
  apartamento: false,
  complemento: "ap 222222",
});

const listaApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

console.log(listaApartamentos);
