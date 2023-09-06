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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
  destinatario: cliente.nome,
  ...cliente.enderecos[0],
};

console.log(encomenda);
