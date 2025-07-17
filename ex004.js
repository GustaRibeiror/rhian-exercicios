class Musico {
    constructor(nome, instrumento, nomeDaBanda) {
        this.nome = nome;
        this.instrumento = instrumento;
        this.nomeDaBanda = nomeDaBanda;
    }

    tocarMusica() {
        console.log(`\nPARA TUDOOOOOOOOOOO \nO renomado músico ${this.nome} está com o seu destemido instrumento ${this.instrumento} tocando uma música da banda ${this.nomeDaBanda}`);
    }
}

const rhian = new Musico('Rhian', 'Violão', 'Programação Orientada a Violão');
rhian.tocarMusica();
