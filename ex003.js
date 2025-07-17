// 3° Exercício
// Criar classe Lampada, tendo as seguintes propriedades e métodos:

// propriedades:
// . potencia (receber valores inteiros)
// . ligada (receber true ou false)

// métodos:
// . ligar 
// . desligar
// . status
// . comsumo por hora (a formula é: potencia / 1000)
// . exibir relatório

// Os métodos "ligar" e "desligar" devem mudar a propriedade "ligada" do objeto e printar na tela a ação executada.
// O método "status" deve printar se a lâmpada está ligada ou desligada
// O método "consumo por hora" NÃO deve printar na tela, mas sim retornar o valor calculado
// O método "exibir relatório" deve usar os métodos "status" e "consumo por hora" para printar na tela um relatório completo (se a lâmpada está ligada ou desligada e quanto ela consome por hora)



class Lamp {
    constructor(power, on) {
        this.power = power;
        this.on = on;
    }

    turnOff() {
        this.on = false;
        console.log('A lâmpada foi desligada');
    }

    turnOn() {
        this.on = true;
        console.log('A lâmpada foi ligada');
    }

    status() {
        console.log(`A lâmpada está ${this.on}`)
    }

    consumptionPerHour() {
        let consumption = this.power / 1000;
        return consumption;
    }

    exibirRelatorio() {
        console.log('-'.repeat(30));
        console.log('Relatório Final da lâmpada: ');
        this.status();
        console.log(`\nConsumo/Hora --> ${this.consumptionPerHour()}\n `);
        console.log('-'.repeat(30));
    }
}

const elgin = new Lamp(5000, false);
console.log(elgin);
elgin.exibirRelatorio();

