class Pipoca {
    constructor(nome, sabor, peso, preco) {
        this.nome = nome;
        this.sabor = sabor;
        this.peso = peso;
        this.preco = preco;
    }
}

const pipocaCaramelizadaP = new Pipoca ("Pipoca Caramelizada Pequena", "Doce caramelizada", 300, 20.50);

const pipocaCaramelizadaM = new Pipoca ("Pipoca Caramelizada Média", "Doce caramelizada", 600, 35.00);

const pipocaCaramelizadaG = new Pipoca ("Pipoca Caramelizada Grande", "Doce caramelizada", 900, 43.40);

const pipocaBaconP = new Pipoca ("Pipoca com Bacon Pequena", "Salgada com bacon", 300, 25.50);

const pipocaBaconM = new Pipoca ("Pipoca com Bacon Pequena", "Salgada com bacon", 600, 40.50);

const pipocaBaconG = new Pipoca ("Pipoca com Bacon Grande", "Salgada com bacon", 900, 48.50);


class Kit {
    constructor(nome, quantidade, preco) {
        this.nome = nome; 
        this.quantidade = quantidade; 
        this.preco = preco;
    }
}

const kitSalgadas = new Kit ("Kit de pipocas salgadas", 6, 70.80)
const kitNinho = new Kit ("Kit de pipocas Doces com Ninho", 6, 90.80)
const kitSaboresFinos = new Kit ("Kit de pipocas Salgadas com temperos finos", 6, 77.80)
const kitMisto = new Kit ("Kit de pipocas salgadas e doces tradicionais", 6, 40.80)

class Cliente {
    constructor(nome, idade, naturalidade, nascimento, email, telefone, endereco) {
        this.nome = nome;
        this.idade = idade; 
        this.naturalidade = naturalidade; 
        this.nascimento = nascimento;
        this.email = email; 
        this.telefone = telefone;
        this.endereco = endereco;
    }
}

const clienteUm = new Cliente ("Deborah", 34, "Rio de Janeiro", "30/10/1989", "deborah@gmail.com", "(21)99999-9999", "Rua dos Bobos Nº0")

const clienteDois = new Cliente ("Rodolfo", 45, "Caxias do Sul", "30/07/1979", "rodolfo@gmail.com", "(54)99999-8888", "Travessa dos Gatos Nº1")

const clienteTres = new Cliente ("Barao", 45, "Caxias do Sul", "07/04/1979", "barao@gmail.com", "(54)99999-7777", "Travessa dos Gatos Nº2")

const clienteQuatro = new Cliente ("Penelope", 38, "Caxias do Sul", "14/02/1986", "penelope@gmail.com", "(54)99999-6666", "Travessa dos Cães Nº1")

const clienteCinco = new Cliente ("Carlos Eduardo", 38, "Caxias do Sul", "17/05/1986", "dudu@gmail.com", "(54)99999-6666", "Travessa dos Cães Nº2")