function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', './imgs/menino.png')
      } else if (idade >= 10 && idade < 25) {
        // Jovem
        img.setAttribute('src', './imgs/jovem-adulto.png')
      } else if (idade < 65) {
        // Adulto
        img.setAttribute('src', './imgs/adulto.png')
      } else {
        // Idoso
        img.setAttribute('src', './imgs/idoso.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', './imgs/menina.png')
      } else if (idade >= 10 && idade < 25) {
        // Jovem
        img.setAttribute('src', './imgs/jovem-adulta.png')
      } else if (idade < 60) {
        // Adulto
        img.setAttribute('src', './imgs/adulta.png')
      } else {
        // Idoso
        img.setAttribute('src', './imgs/idosa.png')
      }
    }
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
  }
}