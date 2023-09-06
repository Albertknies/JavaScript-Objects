const cliente = {
  nome: "Albert",
  idade: 27,
  cpf: "028.149.690-05",
  email: "albertrolim@gmail.com",
};

console.log(
  `O e-mail do cliente é ${cliente.email} e essa pessoa tem ${cliente.idade} em anos.`
);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
