const cliente = {
  nome: "Albert",
  idade: 27,
  cpf: "028.149.690-05",
  email: "albertrolim@gmail.com",
};

console.log(
  `O e-mail do cliente é ${cliente["email"]} e essa pessoa tem ${cliente["idade"]} em anos.`
);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
