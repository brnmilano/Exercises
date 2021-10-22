let num = document.querySelector('input#fnum')
let lista = document.querySelector('selec#flista')
let res = document.querySelector('div#res')

let valores = []


function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true 
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if(isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML = ''
  } else {
    alert('Valor inválido ou já encontrado na lista.')
  }

  num.value = ''
  num.focus()
}

function finalizar() {
  if (valores.length == 0) {
    alert('Adicione valores anets de finalizar!')
  } else {
    let total = valores.length

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
  }
}