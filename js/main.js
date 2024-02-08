var textArea = document.getElementById("text");
var resultCript = document.querySelector("#textoFinal");
var btnCriptografa = document.querySelector("#btn_cript")
var btnDescriptografa = document.querySelector("#btn_descript")
var btnGeral = btnCriptografa, btnDescriptografa
    
function verificarAcentos(textArea) {
    return textArea === textArea.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
function criptografa(){
    var texto = textArea.value;

    var resultCript = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat').normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    document.getElementById('textoFinal').innerHTML = '<textarea class="text-area-result" readonly id="textResult">' + resultCript + '</textarea>' + 
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
    console.log(document.getElementById('text'))
    }  
function descriptografa(){
    var texto = textArea.value;
    
    var resultDescript = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u').normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    document.getElementById('textoFinal').innerHTML = '<textarea class="text-area-result" readonly id="textResult">' + resultDescript + '</textarea>' + 
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
    console.log(document.getElementById('text'))

}
function copiar(){
    var textoCopy= document.getElementById('textResult');
    textoCopy.select();
    navigator.clipboard.writeText(textoCopy.value);
    alert("Copiado!")
}