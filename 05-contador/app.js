function calcularDados(){
    const quantidade = Number(document.getElementById('quantidade').value)
    const tbody = document.querySelector("tbody")

    const contagem = criarListaNumeros(quantidade)
    const pares = mostrarPares(quantidade)
    const impares = mostrarImpares(quantidade)
    const multiplos5 = mostrarMultiplosCinco(quantidade)
    const potencias2 = mostrarPoteciaDois(quantidade)

    tbody.replaceChildren()
    let cont = 0

    while(cont<quantidade){
        const linha = document.createElement('tr')

        const td1 = document.createElement('td')
        td1.textContent = contagem[cont]

        const td2 = document.createElement("td")
        td2.textContent = pares[cont]

        const td3 = document.createElement('td')
        td3.textContent = impares[cont]

        const td4 = document.createElement('td')
        td4.textContent = multiplos5[cont]

        const td5 = document.createElement('td')
        td5.textContent = potencias2[cont]

        linha.appendChild(td1)
        linha.appendChild(td2)
        linha.appendChild(td3)
        linha.appendChild(td4)
        linha.appendChild(td5)


        tbody.appendChild(linha)

        cont++
    }

}




function criarListaNumeros(quantidade){
    let listaNumeros = []
    for(let i = 1; i<=quantidade;i++){
        listaNumeros.push(i)

    }
    return listaNumeros
        
}

function mostrarPares(quantidade){
    let listaPares = []
    let par = 2
    let cont = 0

    while(cont < quantidade){
        listaPares.push(par)
        par = par + 2
        cont++
        
    }
    return listaPares
}

function mostrarImpares(quantidade){
    let listaImpares = []
    let cont = 0
    let impar = 1
    while(cont < quantidade){
        listaImpares.push(impar)
        impar = impar + 2
        cont++
    }
    return listaImpares
}

function mostrarMultiplosCinco(quantidade){
    let listaMultiplos = []
    let multiplo = 5
    let cont = 0
    while(cont < quantidade){
        listaMultiplos.push(multiplo)
        multiplo = multiplo + 5
        cont++
    }
    return listaMultiplos
}

function mostrarPoteciaDois(quantidade){
    let potenciasDois = []
    let potencia = 0
    let cont = 0
    while(cont < quantidade){
        potenciasDois.push(2**potencia)
        potencia++
        cont++
        
    }
    return potenciasDois
}

//console.log(criarListaNumeros(10))

//console.log(mostrarPares(5))

//console.log(mostrarImpares(5))

//console.log(multiplosCinco(6))

//console.log(mostrarPoteciaDois(6))
