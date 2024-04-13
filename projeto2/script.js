let minhaImagem = document.getElementById("imagem")
function trocarImagem() {
    minhaImagem.src = "image/shoes1.png";
  }
  
  document.getElementById("meu-botao").addEventListener("click", trocarImagem);