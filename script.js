function buscarClima() {
    const city = document.getElementById('city').value
  
    getWeather(city)
}
  
  async function getWeather(city) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=b3e138e3b0824de0886215850233004&q=${city}`);
    const data = await response.json()
  
    const resultado = document.getElementById('resultado')
    const div = document.createElement('div')
    const cidade = document.createElement('h1')
    const temperatura = document.createElement('p')
    const tempo = document.createElement('h1')
    const resert = document.createElement('input')

    resert.type = 'button'
    resert.value = 'Resertar'
  
    const imagem = document.createElement('img')
    imagem.classList.add('img-padrao')
    if(data.current.temp_c > 10){
    imagem.src = 'data:image/png;base64,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'
}else if(data.current.temp_c < 10){
    imagem.src = 'https://www.climatempo.com.br/dist/images/v2/svg/3n.svg'
}

    cidade.innerText = data.location.name
    tempo.innerText = data.location.localtime
    div.appendChild(cidade)
    temperatura.innerText = `A temperatura atual em ${data.location.country} é ${data.current.temp_c}ºC e ${data.current.temp_f}ºF`
    div.appendChild(imagem)
    div.appendChild(temperatura)
    div.appendChild(tempo)
    div.appendChild(resert)
    resultado.appendChild(div)

    resert.addEventListener('click', () => {
    location.reload()
});
  }
  

  //imagem.src = 'data:image/png;base64,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'
