// https://viacep.com.br/ws/01001000/json/

let btnConsultar = document.querySelector(".btn-consultar")
btnConsultar.addEventListener('click', async function(){
    try {
        let inputCEP = document.querySelector("#cep-input").value
        let api = await fetch(`https://viacep.com.br/ws/${inputCEP}/json/`)
        let apiJson = await api.json()
    
            let cepHTML = document.querySelector(".cep")
            let logradouroHTML = document.querySelector(".logradouro")
            let complementoHTML = document.querySelector(".complemento")
            let bairroHTML = document.querySelector(".bairro")
            let localidadeHTML = document.querySelector(".localidade")
            let ufHTML = document.querySelector(".uf")
            let dddHTML = document.querySelector(".ddd")
    
            console.log(apiJson);
            cepHTML.innerText = apiJson.cep
            logradouroHTML.innerText = apiJson.logradouro
            complementoHTML.innerText = apiJson.complemento
            bairroHTML.innerText = apiJson.bairro
            localidadeHTML.innerText = apiJson.localidade
            ufHTML.innerText = apiJson.uf
            dddHTML.innerText = apiJson.ddd     
    } catch (error) {
        console.error(error)
    }

})

