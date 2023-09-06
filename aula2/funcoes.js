const cliente = {
  nome: "João",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["112556568", "22233335556"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log(`Saldo insuficiente`);
    } else {
      this.saldo -= valor;
      console.log(
        `Pagaento efetuado com sucesso. Seu saldo atual é ${this.saldo}`
      );
    }
  },
};

cliente.efetuaPagamento(25);
