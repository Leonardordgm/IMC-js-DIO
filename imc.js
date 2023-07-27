class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() { //aqui não precisa de parametro por que já está na classe Pessoas
        return this.peso / (this.altura * this.altura); 
    }
}

const jose = new Pessoas('jose', 70, 1.75);

console.log(jose.calcularIMC());
