var readline = require('readline');


var menu = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

mainMenu();

function mainMenu() {
    menu.question("1 - Cadastrar funcionário \n2 - Calcular impostos \n3 - Imprimir contracheque \nEXIT - Sair\n", function (option) {
        var opcao = option
        switch (opcao) {
            case "1":
                menuOptions();
                break;
            case "2":
                printPayCheck();
                break;
            case "exit":
                menu.close();

        }
    })
}



var funcionarios = []

var payment
var finalPayment

function firstCase() {
    var inss = payment * (7.5 / 100)
    finalPayment = (payment - inss).toFixed(2)

}

var aliquota1 = 1045.00; 

function menuOptions() {

    menu.question("Digite o nome do funcionário \n", function (nome) {

        menu.question("Digite o salario do funcionário \n", function (salario) {
            payment = parseFloat(salario)

            switch (payment) {
                case aliquota1:
                    firstCase();
                    break;
                case payment > 1045.00:
                    mainMenu();
            }
            funcionarios.push({ NOME: nome, BRUTO: payment.toFixed(2), LIQUIDO: finalPayment })
            console.log(funcionarios)

            menu.question("Deseja adicionar outro funcionário? (S/N) \n", function (resp) {
                var confirmation = resp
                switch (confirmation) {
                    case "s":
                        menuOptions();
                        break;
                    case "n":
                        mainMenu();
                        break;
                }

            })

        })

    })

}




function printPayCheck() {
    menu.question("Digite o código do funcionário: \n", function (index) {
        var codigo = parseFloat(index)

        console.log(funcionarios[codigo])

    })
} 
