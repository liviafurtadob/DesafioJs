//Uso de console.log Criei um console.log para exibir mensagem de boas vindas
console.log ('Boas vindas');

//Uso de string. Criei uma variável chama 'nome' e atribui a ela o meu nome; Utilizei o console.log para exibir a mensagem Olá, Livia. no console do navegador
// Esse uso permite com que os nomes sejam sempre diferenciados.
let nome = 'Lívia'
    console.log (`Olá, ${Lívia!}`);

// Uso de alert. Criei uma variável chama 'nome' e atribui a ela o meu nome; Utilizei o alert para exibir a mensagem Olá, Livia. no console do navegador
let nome = 'Lívia'
    alert (`Olá, ${Lívia}`);

//Uso do prompt. Criei o prompt com a pergunta 'Qual a linguagem de programação que você mais gosta?', armazenei a resposta na variável e mostrei no console.
let linguagemPreferida = prompt ('Qual a linguagem de programação que você mais gosta?');
    console.log(linguagemPreferida);

// Soma e resultado. Criei duas variavéis e atribui valores númericos. Realizei a soma desses dois valores e armazenei o resultado em uma terceira variável chamada de 'resultado'. Utilizei o console.log para mostrar a mensagem '"A soma entre [valor1] e [valor2] é igual a [resultado]."
let valor1 = 1
let valor2 = 2
let resultado = let valor1 + let valor2;
    console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

// Diferença . Criei duas variavéis e atribui valores númericos. Realizei a subtração desses dois valores e armazenei o resultado em uma terceira variável chamada de 'resultado'. Utilizei o console.log para mostrar a mensagem '"A diferença entre [valor1] e [valor2] é igual a [resultado]."
let valor1 = 10
let valor2 = 20
let resultado = let valor1 - let valor2;
    console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultado}`);

// Uso de prompt, if e else. 
let idade = prompt('Digite a sua idade');
if (' A idade for >17 é maior de idade');{
    console.log ('Você é maior de idade');
}else {
    console.log ('Você é menor de idade');
} 

// Uso de prompt, parseFloat (), if, else-if, else e console. 
var numero = parseFloat(prompt('Digite um número:'));
if ('O número > 0'); {
    console.log ('O número é positivo');
} else if ('O número é < 0'){
    console.log ('O número é negativo');
} else {
    console.log ('O número é 0');
}

// Uso de Loop while
let numero = 1;
    while ( numero <=10) {
        console.log (numero);
        numero++;
    }
//Uso de if e else. 
let nota = 10;
    if (' A nota >= 7'); {
        console.log ("Aprovado");
    } else {
        console.log ("Reprovado");
    }

// Uso Math.random para números aleatórios
let numeroAleatorio = Math.random();
    console.log (numeroAleatorio);

// Uso Math.random paraa números inteiros de 1 a 10
let numeroAleatorioInteiro = parseInt(Math.random() * 10) + 1;
    console.log (numeroAleatorioInteiro);

// Uso Math.random paraa números inteiros de 1 a 1000
let numeroAleatorioInteiro = parseInt(Math.random() *1000) +1 ;
    console.log (numeroAleatorioInteiro);