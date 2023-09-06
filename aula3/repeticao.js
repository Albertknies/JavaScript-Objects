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

for (let chave in cliente) {
    let tipo = typeof cliente [chave];
    if(tipo !== 'object' && tipo !== 'function'){
          console.log(`A CHAVE ${chave} tem o valor ${cliente[chave]}`);
    }

}
