var txt1 = document.querySelector(".textoarea");
var txt2 = document.querySelector(".mensagem");
var msg = document.querySelector(".alerta p");
txt1.focus();

var btnEncrypt = document.querySelector(".criptografar");
btnEncrypt.onclick = encrypt;

var btnDecrypt = document.querySelector(".descriptografar");
btnDecrypt.onclick = decrypt;

var btnCopy = document.querySelector(".copiar");
btnCopy.onclick = copiar;

function encrypt() {
  if (txt1.value.length == 0) {
    msg.innerText = "Nenhuma mensagem encontrada";
  } else {
    msg.innerText = "Copie o texto para área de transferencia.";
    var text = txt1.value;
    var txt = text.replace(/e/gim, "enter");
    txt = txt.replace(/i/gim, "imes");
    txt = txt.replace(/a/gim, "ai");
    txt = txt.replace(/o/gim, "ober");
    txt = txt.replace(/u/gim, "ufat");
    txt2.innerHTML = `${txt}`;
    txt1.value = "";
    txt1.focus();
  }
}

function decrypt() {
  if (txt2.value.length == 0) {
    msg.innerText = "Nenhuma mensagem encontrada";
  } else {
    var text = txt2.value;
    var txt = text.replace(/enter/gim, "e");
    txt = txt.replace(/imes/gim, "i");
    txt = txt.replace(/ai/gim, "a");
    txt = txt.replace(/ober/gim, "o");
    txt = txt.replace(/ufat/gim, "u");
    txt2.innerHTML = `${txt}`;
    txt1.focus();
  }
}

function copiar() {
  if (txt2.value.length == 0) {
    msg.innerHTML = "Não é possível copiar, pois não há resultados!";
  } else {
    txt2.select();
    document.execCommand("copy");
    msg.innerHTML = "O texto copiado já está na área de transferência!";
  }
}