var textArea = document.querySelector("#text");
var resultCript = document.querySelector("#textoFinal");
function criptografa(){
    var texto = textArea.value;
    
    var resultCript = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    document.getElementById('textoFinal').innerHTML = '<textarea class="text-area-result" readonly id="textResult">' + resultCript + '</textarea>' + 
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
    console.log(document.getElementById('text'))
}     
function descriptografa(){
    var texto = textArea.value;
    
    var resultDescript = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
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