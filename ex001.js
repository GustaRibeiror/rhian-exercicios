// 1° Exercício
// Criar classe Pessoa, tendo as seguintes propriedades e métodos:

// propriedades:
// . nome
// . ano de nascimento

// métodos:
// . dizer olá
// . retornar idade

// O método de "dizer olá" deve printar na tela um cumprimento, tendo incluso o nome da pessoa.
// O método de "retornar idade" NÃO deve printar na tela, mas sim calcular e retornar o valor da idade com base no ano de nascimento

class Person {
    constructor(name, dayBirth) {
        this.name = name;
        this.dayBirth = dayBirth;
    }

    printHello() {
        console.log(`Olá, me chamo ${this.name}`)
    }

    age() {
        const age = 2025 - this.dayBirth;
        return age;
    }
}

const Gustavo = new Person('Gustavo', 2003);
const Rhin = new Person('Rhian', 2005);

Rhin.hello();
console.log(Rhin.age);



