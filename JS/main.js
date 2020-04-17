//////////////Dicionário//////////////
/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
console.log(frutas[0].cor);
alert(frutas[1].cor);
*/

//////////////Lista//////////////
/*
var lista = ["maçã", "pêra","laranja"];
lista.push("uva");
lista.pop();
console.log(lista)
*/
/*
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/

//////////////Operações//////////////
/*
var nome = "José Wesley"
var idade = 23;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(idade*idade2);
console.log(frase.toLocaleLowerCase());
alert(frase.replace("Japão","Brasil"));
*/

//////////////Laços e Condicionais//////////////
/*
var idade  = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/
/*
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/
/*
var count;
for(count=0; count<=5; count++){
    alert(count);
};
*/
/*
var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

//////////////Funções//////////////
/*
function soma(n1,n2){
    return n1 + n2;
}

var validar; //Variável global

function validaIdade(idade){
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar);
*/

//////////////Manipulando a página//////////////
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://globoesporte.globo.com/futebol/times/palmeiras/");
    //window.location.href = "https://globoesporte.globo.com/futebol/times/palmeiras/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}