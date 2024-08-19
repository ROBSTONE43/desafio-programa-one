const textArea = document.querySelector('.text-area_criptografar');
const mensagem = document.querySelector('.textarea_descriptografar');
const copy = document.getElementById('text-area');
const textoAreaTranferencia = document.getElementById('text-area_criptografar');


document.querySelector('btn-copiar')

function mostrarBotaoCopiar(){
    document.getElementById('btn-copiar').style.visibility = 'visible';
}

function ocultarDivEImage(){
    document.getElementById('sectionDescriptografar_div').style.visibility = 'hidden';
    document.getElementById('text-area').style.backgroundImage = 'none';
}

function escreverTexto(){
    navigator.clipboard.writeText(copy.value);
    copy.value = 'Nenhuma mensagem';
}

function btnEncriptar(){
    const textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = ''; 
}

function criptografar(stringEcriptada){
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai',], ['o', 'ober'], ['u', 'ufat']];
    stringEcriptada = stringEcriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEcriptada.includes(matrizCodigo[i][0])){
            stringEcriptada = stringEcriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEcriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = '';
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai',], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}
