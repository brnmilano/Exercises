function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()

  msg.innerHTML = `Agora são ${hora} horas`

  if (hora >= 0 &&  hora < 12) {
    //bom dia
    img.src = 'manha.png'
    document.body.style.background = '#FFDEAD'
  } else if (hora >= 12 && hora < 18) {
    //bora tarde
    img.src = 'tarde.png'
    document.body.style.background = '#B8860B'
  } else {
    //boa noite
    img.src = 'noite.png'
    document.body.style.background = '#778899'
  }
}
