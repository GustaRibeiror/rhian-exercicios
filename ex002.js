// 2° Exercício
// criar classe Carro, tendo as seguintes propriedades e métodos

// propriedades:
// . modelo
// . capacidade de km/h
// . kms rodados

// métodos:
// . buzinar
// . rodar por uma hora

// O método de "Buzinar" deve printar na tela o modelo do carro e indicar que o mesmo está buzinando.
// O método de "rodar por uma hora" deve printar na tela quantos km estão sendo rodados e quantos foram rodados no total

class Car {
    constructor(modelo, capacidadeKm, kmsRodados) {
        this.modelo = modelo;
        this.capacidadeKm = capacidadeKm;
        this.kmsRodados = kmsRodados;
    }

    buzinar() {
        console.log(`\nO carro ${this.modelo} está buzinando! BIBIIIIIII! \n`)
    }

    rodarPorUmaHora() {
        console.log(`O carro ${this.modelo} acabou de rodar ${this.capacidadeKm}`);

        this.kmsRodados = this.kmsRodados + this.capacidadeKm;

        console.log(`Já tinham sido rodados ${this.kmsRodados}km. Ao total, foram rodados ${this.kmsRodados}km \n`);
    }
}

const civic = new Car('Civic', 100, 1500);

console.log(civic);
civic.buzinar();
civic.rodarPorUmaHora();
civic.rodarPorUmaHora();
civic.rodarPorUmaHora();


